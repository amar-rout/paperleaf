import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment/locale/fr';
import axios from 'axios';
import { toast } from 'react-toastify';
import DataTable from 'datatables.net-bs5';
import 'datatables.net-responsive-dt';

// import { createPopperLite as createPopper, preventOverflow, flip, } from '@popperjs/core';

import './Products.css';
// import { set } from 'mongoose';

function Products() {

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);

  const [modalInfo, setModalInfo] = useState({
    id: '',
    name: ''
  });
  // let table = new DataTable('#productTable');
  let table = new DataTable('#productTable');
  // table.dtOptions = {
  //   pagingType: 'full_numbers',
  //   paging: false,
  //   dom: 'Bfrtip',
  //   pageLength: 10,
  //   scrollX: true,
  //   buttons: [
  //     'colvis',
  //     'excel',
  //     'print'
  //   ],
  //   processing: true,
  //   deferRender: true,
  //   destroy: true
  // };

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
    axios.get('/api/products/all')
      .then(response => {
        setLoading(false);
        setProducts(response.data);
      }).catch(error => {
        if (error.response) {
          setLoading(false);
          console.error(error.response.data.message)
        } else if (error.request) {
          setLoading(false);
          // Handle proper error messages
        } else {
          setLoading(false);
          console.error(error.message)
        }
      })
  }

  const handleNewCollection = (id, name, featured, published, status) => {
    let statusVal;
    if (status && status === true) {
      statusVal = false;
    } else {
      statusVal = true;
    }
    let statusData = { "newCollection": statusVal, "featured": featured, "published": published };
    axios.patch(`/api/products/${id}`, statusData)
      .then(response => {
        toast.dismiss();
        // let message = statusVal === "Active" ? "activated" : "deactivated";
        // toast.success(`Coupon ${name} ${message}`);
        toast.success(`Product ${name} changed successfully`);
      }).catch(error => {
        if (error.response) {
          toast.dismiss();
          toast.error(error.response.data.message);
        } else if (error.request) {
          toast.dismiss();
          toast.error(error.request);
        } else {
          toast.dismiss();
          toast.error(error.message);
        }
      })
  }

  const handleFeatured = (id, name, featured, published, newCollection) => {
    let featuredVal;
    console.log("Published: " + featured);
    if (featured && featured === true) {
      featuredVal = "false";
    } else {
      featuredVal = "true";
    }
    let featuredData = { "featured": featuredVal, "published": published, "newCollection": newCollection };
    console.log(featuredData);
    axios.patch(`/api/products/${id}`, featuredData)
      .then(response => {
        toast.dismiss();
        // let message = featuredVal === "true" ? "featured" : "";
        toast.success(`Product ${name} changed successfully`);
      }).catch(error => {
        if (error.response) {
          toast.dismiss();
          toast.error(error.response.data.message);
        } else if (error.request) {
          toast.dismiss();
          toast.error(error.request);
        } else {
          toast.dismiss();
          toast.error(error.message);
        }
      })
  }

  const handlePublished = (id, name, published, featured, newCollection) => {
    let publishedVal;
    if (published && published === true) {
      publishedVal = "false";
    } else {
      publishedVal = "true";
    }
    let publishedData = { "featured": featured, "published": publishedVal, "newCollection": newCollection };
    console.log(publishedData);
    axios.patch(`/api/products/${id}`, publishedData)
      .then(response => {
        toast.dismiss();
        // let message = featuredVal === "true" ? "featured" : "";
        toast.success(`Product ${name} changed successfully`);
      }).catch(error => {
        if (error.response) {
          toast.dismiss();
          toast.error(error.response.data.message);
        } else if (error.request) {
          toast.dismiss();
          toast.error(error.request);
        } else {
          toast.dismiss();
          toast.error(error.message);
        }
      })
  }

  const handleDelete = () => {
    const { name, id } = modalInfo;
    const deleteProductURL = `/api/products/${id}`;
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
    <div className='container-fluid'>
      <div id="content" class="pt-5 mt-5">
        <h2 class="mb-4">Products overview</h2>
      </div>
      {
        loading ?
          <div className="d-flex flex-column justify-content-center align-items-center mt-5 pt-5">
            <div className="spinner-grow spinner-grow-md mt-5" role="status">
              <span className="sr-only visually-hidden">Loading...</span>
            </div>
            <h6>Loading...</h6>
          </div>
          :
          <div className="card my-5 mx-auto" >
            <div className="card-header w-100">
              <div className='d-flex justify-content-between align-items-center'>
                <h4 className="fw-bold fs-4 pt-2">All products</h4>
                <button className='btn btn-primary btn-lg btn-md fs-6 small' onClick={() => navigate("/addProduct")}>Add New Product</button>
              </div>
            </div>
            <div className="card-body">
              <div className="table-responsive p-1">
                {/* <table id='productTable' className="table align-middle align-items-center text-center table-striped table-hover table-borderless"> */}
                {/* <table id='productTable' className="dataTable display compact cell-border hover order-column row-border stripe"> */}
                <table id="productTable" class="dataTable display cell-border compact hover order-column row-border stripe" style={{ width: '100%' }} aria-describedby="example_info">
                  <thead className="dataTable_header">
                    <tr className='text-center'>
                      <td className='p-0'><small>#</small></td>
                      <td className='p-0'><small>Image</small></td>
                      <td className='p-0'><small>Name</small></td>
                      <td className='p-0'><small>Category</small></td>
                      <td className='p-0'><small>MRP</small></td>
                      <td className='p-0'><small>Price</small></td>
                      <td className='p-0'><small>New<br />Collection</small></td>
                      <td className='p-0'><small>Featured</small></td>
                      <td className='p-0'><small>Published</small></td>
                      <td className='p-0'><small>Created On</small></td>
                      <td className='p-0'><small>Action</small></td>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((product, index) => {
                      const { _id, name, image, category, price, salePrice, newCollection, featured, published, createdAt, updatedAt } = product;
                      return (
                        <tr key={_id}>
                          <td className='text-center small'>{index + 1}</td>
                          <td className='text-center'>
                            <img src={`${image}`} alt="product" style={{ width: '80px', height: '100px' }} />
                          </td>
                          <td className='text-start small'>{name}</td>
                          <td className='text-start small'>{category}</td>
                          <td className='text-end small'>{currINR.format(salePrice)}</td>
                          <td className='text-end small'>{currINR.format(price)}</td>
                          <td className='text-end small'>
                            <div className="form-check form-switch d-flex justify-content-center align-items-center">
                              <input
                                className="form-check-input shadow-none me-1"
                                type="checkbox"
                                role="switch"
                                id="status"
                                defaultChecked={newCollection}
                                // value={published}
                                onChange={() => handleNewCollection(_id, name, featured, published, newCollection)}
                              />
                            </div>
                          </td>
                          <td className='text-end small'>
                            <div className="form-check form-switch d-flex justify-content-center align-items-center">
                              <input
                                className="form-check-input shadow-none me-1"
                                type="checkbox"
                                role="switch"
                                id="status"
                                defaultChecked={featured}
                                // value={featured}
                                onChange={() => handleFeatured(_id, name, featured, published, newCollection)}
                              />
                            </div>
                          </td>
                          <td className='text-end small'>
                            <div className="form-check form-switch d-flex justify-content-center align-items-center">
                              <input
                                className="form-check-input shadow-none me-1"
                                type="checkbox"
                                role="switch"
                                id="publish"
                                defaultChecked={published}
                                // value={published}
                                onChange={() => handlePublished(_id, name, published, featured, newCollection)}
                              />
                            </div>
                            {/* {published ? "true" : "false"} */}
                          </td>
                          <td>
                            {/* <Moment fromNow ago>{createdAt}</Moment> */}
                            <Moment className='small' format='DD MMM, YYYY' locale='en'>{createdAt}</Moment>
                            <br />
                            <Moment className='small' format='DD MMM, YYYY' locale='en'>{updatedAt}</Moment>
                            {/* <Moment locale='in'>{createdAt}</Moment> */}
                          </td>
                          {/* {createdAt} */}
                          <td className='small'>
                            <div className="d-flex justify-content-end align-item-center">
                              {/* <button type="button" id="viewButton"
                                className="btn btn-default p-0 m-0 px-2 py-1"
                              // onClick={() => handleEdit(_id)}
                              // onMouseOver={() => createTooltips }
                              // disabled={ adminData.userType !== "super admin" && id <= 4}
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
                                  <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                  <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                </svg>
                                {/* <span className='ms-1'>Edit</span> */}
                              {/* </button> */}
                              <button type="button" id="editButton"
                                className="btn btn-default p-0 m-0 px-2 py-1 ms-1"
                                onClick={() => handleEdit(_id)}
                              // onMouseOver={() => createTooltips }
                              // disabled={ adminData.userType !== "super admin" && id <= 4}
                              >
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M13.4403 2.56066C12.6927 1.81314 11.4808 1.81311 10.7332 2.5606L3.33829 9.95484C3.15725 10.1359 3.02085 10.3566 2.93989 10.5994L2.02567 13.3421C1.96578 13.5218 2.01254 13.7198 2.14646 13.8538C2.28038 13.9877 2.47846 14.0344 2.65813 13.9746L5.40087 13.0603C5.64368 12.9794 5.86432 12.843 6.04531 12.662L13.4402 5.26783C14.1878 4.52029 14.1878 3.30823 13.4403 2.56066ZM11.4403 3.26774C11.7973 2.91074 12.3761 2.91076 12.7331 3.26777C13.0902 3.6248 13.0902 4.20367 12.7331 4.56069L11.9994 5.29437L10.7065 4.00148L11.4403 3.26774ZM9.99934 4.70855L11.2922 6.00145L5.33823 11.9549C5.26701 12.0261 5.18019 12.0798 5.08464 12.1116L3.29058 12.7096L3.88858 10.9157C3.92044 10.8201 3.97412 10.7332 4.04536 10.662L9.99934 4.70855Z" fill="black" />
                                </svg>
                                {/* <span className='ms-1'>Edit</span> */}
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
                                {/* <span className='ms-1'>Delete</span> */}
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
      }
    </div>
  )
}

export default Products;