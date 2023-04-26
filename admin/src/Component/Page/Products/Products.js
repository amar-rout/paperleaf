import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

// import { createPopperLite as createPopper, preventOverflow, flip, } from '@popperjs/core';

import './Products.css';
// import { set } from 'mongoose';

function Products() {

  const [products, setProducts] = useState([]);
  const [modalInfo, setModalInfo] = useState({
    id: '',
    name: ''
  });

  const navigate = useNavigate();

  let currINR = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  });

  useEffect(() => {
    getAllProducts();
  });
  // const createTooltips = () => {
  //   const button = document.querySelector('#deleteButton');
  //   const tooltip = document.querySelector('#tooltip');
  //   createPopper(button, tooltip, {
  //     modifiers: [preventOverflow, flip],
  //   });
  // }
  const getAllProducts = () => {
    axios.get('http://localhost:5010/api/products/all')
      .then(response => {
        setProducts(response.data);
      }).catch(error => {
        if (error.response) {
          console.error(error.response.data.message)
        } else if (error.request) {
          // Handle proper error messages
        } else {
          console.error(error.message)
        }
      })
  }

  const handleDelete = () => {
    const { name, id } = modalInfo;
    const deleteProductURL = `http://localhost:5010/api/products/${id}`;
    axios.delete(deleteProductURL)
      .then((response) => {
        toast.dismiss();
        toast.success(`Product ${name} deleted successfully`);
      }).catch((error) => {
        toast.dismiss();
        toast.error(error);
      });
  }

  const handleEdit = (id) => {
    const editProductURL = `/products/${id}/edit`;
    navigate(editProductURL);
  }

  return (
    <div className='container p-5'>
      <div className="card my-5 mx-auto" >
        <div className="card-header w-100 py-2 px-5">
          <div className='d-flex justify-content-between align-items-center'>
            <h4 className="fw-bold">All products</h4>
            <button className='btn btn-primary btn-md' onClick={() => navigate("/addProduct")}>Add Product</button>
          </div>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table align-middle align-items-center text-center table-striped table-hover table-borderless">
              <thead className="table-dark">
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>MRP</th>
                  <th>Sale Price</th>
                  <th>New Collection</th>
                  <th>Featured</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => {
                  const { _id, name, image, category, price, salePrice, newCollection, featured } = product;
                  return (
                    <tr key={_id}>
                      <td>
                        <img src={`http://localhost:5010${image}`} alt="product" style={{ width: '32px', height: '32px' }} />
                      </td>
                      <td className='text-start'>{name}</td>
                      <td className='text-start'>{category}</td>
                      <td className='text-end'>{currINR.format(salePrice)}</td>
                      <td className='text-end'>{currINR.format(price)}</td>
                      <td className='text-end'>
                        <div className="form-check form-switch d-flex justify-content-center align-items-center">
                          <input
                            className="form-check-input me-1"
                            type="checkbox"
                            role="switch"
                            id="status"
                            defaultChecked={newCollection}
                            // value={published}
                            // onChange={() => handlePublished(_id, couponName, published)}
                          />
                        </div>
                      </td>
                      <td className='text-end'>
                      <div className="form-check form-switch d-flex justify-content-center align-items-center">
                          <input
                            className="form-check-input bg-success border-0 me-1"
                            type="checkbox"
                            role="switch"
                            id="status"
                            defaultChecked={featured}
                            // value={published}
                            // onChange={() => handlePublished(_id, couponName, published)}
                          />
                        </div>
                      </td>
                      <td className=''>
                        <div className="d-flex justify-content-end align-item-center">
                          <button type="button" id="editButton"
                            className="btn btn-default p-0 m-0 px-2 py-1"
                            onClick={() => handleEdit(_id)}
                          // onMouseOver={() => createTooltips }
                          // disabled={ adminData.userType !== "super admin" && id <= 4}
                          >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M13.4403 2.56066C12.6927 1.81314 11.4808 1.81311 10.7332 2.5606L3.33829 9.95484C3.15725 10.1359 3.02085 10.3566 2.93989 10.5994L2.02567 13.3421C1.96578 13.5218 2.01254 13.7198 2.14646 13.8538C2.28038 13.9877 2.47846 14.0344 2.65813 13.9746L5.40087 13.0603C5.64368 12.9794 5.86432 12.843 6.04531 12.662L13.4402 5.26783C14.1878 4.52029 14.1878 3.30823 13.4403 2.56066ZM11.4403 3.26774C11.7973 2.91074 12.3761 2.91076 12.7331 3.26777C13.0902 3.6248 13.0902 4.20367 12.7331 4.56069L11.9994 5.29437L10.7065 4.00148L11.4403 3.26774ZM9.99934 4.70855L11.2922 6.00145L5.33823 11.9549C5.26701 12.0261 5.18019 12.0798 5.08464 12.1116L3.29058 12.7096L3.88858 10.9157C3.92044 10.8201 3.97412 10.7332 4.04536 10.662L9.99934 4.70855Z" fill="black" />
                            </svg>
                            <span className='ms-1'>Edit</span>
                          </button>
                          <button type="button" id="deleteButton"
                            className="btn btn-default p-0 m-0 px-2 py-1 ms-1"
                            // data-bs-toggle="tooltip" data-bs-placement="top"
                            // data-bs-custom-class="custom-tooltip"
                            // data-bs-title="This top tooltip is themed via CSS variables."
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"

                            onClick={() => {
                              setModalInfo({ name: name, id: _id });
                            }}
                          // aria-describedby='tooltip'
                          // onMouseOver={() => createTooltips }
                          // disabled={ adminData.userType !== "super admin" && id <= 4}
                          >
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7 3H9C9 2.44772 8.55228 2 8 2C7.44772 2 7 2.44772 7 3ZM6 3C6 1.89543 6.89543 1 8 1C9.10457 1 10 1.89543 10 3H14C14.2761 3 14.5 3.22386 14.5 3.5C14.5 3.77614 14.2761 4 14 4H13.4364L12.2313 12.8378C12.0624 14.0765 11.0044 15 9.75422 15H6.24578C4.99561 15 3.93762 14.0765 3.76871 12.8378L2.56355 4H2C1.72386 4 1.5 3.77614 1.5 3.5C1.5 3.22386 1.72386 3 2 3H6ZM7 6.5C7 6.22386 6.77614 6 6.5 6C6.22386 6 6 6.22386 6 6.5V11.5C6 11.7761 6.22386 12 6.5 12C6.77614 12 7 11.7761 7 11.5V6.5ZM9.5 6C9.77614 6 10 6.22386 10 6.5V11.5C10 11.7761 9.77614 12 9.5 12C9.22386 12 9 11.7761 9 11.5V6.5C9 6.22386 9.22386 6 9.5 6ZM4.75954 12.7027C4.86089 13.4459 5.49568 14 6.24578 14H9.75422C10.5043 14 11.1391 13.4459 11.2405 12.7027L12.4272 4H3.57281L4.75954 12.7027Z" fill="#fff" />
                            </svg>
                            <span className='ms-1'>Delete</span>
                          </button>
                          {/* <div id="tooltip" role="tooltip">Delete</div> */}
                          {/* <button type="button" class="btn btn-primary" >
                            Launch static backdrop modal
                          </button> */}

                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            {/* Modal Start */}
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  {/* <div class="modal-header">
                                  <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div> */}
                  <div class="modal-body text-center">
                    <svg width="28" height="28" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 3H9C9 2.44772 8.55228 2 8 2C7.44772 2 7 2.44772 7 3ZM6 3C6 1.89543 6.89543 1 8 1C9.10457 1 10 1.89543 10 3H14C14.2761 3 14.5 3.22386 14.5 3.5C14.5 3.77614 14.2761 4 14 4H13.4364L12.2313 12.8378C12.0624 14.0765 11.0044 15 9.75422 15H6.24578C4.99561 15 3.93762 14.0765 3.76871 12.8378L2.56355 4H2C1.72386 4 1.5 3.77614 1.5 3.5C1.5 3.22386 1.72386 3 2 3H6ZM7 6.5C7 6.22386 6.77614 6 6.5 6C6.22386 6 6 6.22386 6 6.5V11.5C6 11.7761 6.22386 12 6.5 12C6.77614 12 7 11.7761 7 11.5V6.5ZM9.5 6C9.77614 6 10 6.22386 10 6.5V11.5C10 11.7761 9.77614 12 9.5 12C9.22386 12 9 11.7761 9 11.5V6.5C9 6.22386 9.22386 6 9.5 6ZM4.75954 12.7027C4.86089 13.4459 5.49568 14 6.24578 14H9.75422C10.5043 14 11.1391 13.4459 11.2405 12.7027L12.4272 4H3.57281L4.75954 12.7027Z" fill="red" />
                    </svg>
                    <h5 className='mt-4'>Are You Sure! Want to Delete Selected Products?</h5>
                    <p>Do you really want to delete these records?<br />You can't view this in your list anymore if you delete!</p>
                  </div>
                  <div class="modal-footer">
                    <button type="button" class="btn btn-light px-3 py-2" data-bs-dismiss="modal"
                      onClick={() => {
                        setModalInfo({ name: '', id: '' });
                      }}>No, Keep It</button>
                    <button type="button" class="btn btn-success px-3 py-2"
                      data-bs-dismiss="modal" onClick={() => handleDelete()}>
                      Yes, Delete It
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Modal End */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products;