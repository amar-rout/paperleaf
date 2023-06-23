import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Collection = () => {
    const [collections, setCollections] = useState([]);
    const [loading, setLoading] = useState(true);
    const [id, setId] = useState("");
    const [expand, setExpand] = useState("false");

    const navigate = useNavigate();

    useEffect(() => {
        getCollections();
    }, []);

    const getCollections = () => {
        setLoading(true);
        const user = JSON.parse(localStorage.getItem("admin_user"));
        const config = {
            "headers": {
                "authorization": `Bearer ${user.token}`,
            }
        }
        axios.get('api/collection/', config)
            .then(response => {
                toast.dismiss();
                if (response.data) {
                    setCollections(response.data);
                }
                setLoading(false);
            }).catch(error => {
                setLoading(false);
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

    const handleStatus = (id, status, published) => {
        const updateStatus = {
            status: !status,
            published: published
        };
        console.log(updateStatus);
        const user = JSON.parse(localStorage.getItem("admin_user"));
        const config = {
            "headers": {
                "authorization": `Bearer ${user.token}`,
            }
        }
        axios.patch(`api/collection/${id}`, updateStatus, config)
            .then(response => {
                toast.dismiss();
                if (response.data) {
                    toast.success(response.data)
                }
                getCollections();
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

    };
    const handlePublished = (id, status, published) => {
        const updatePublished = {
            status: status,
            published: !published
        };
        console.log(updatePublished);
        const user = JSON.parse(localStorage.getItem("admin_user"));
        const config = {
            "headers": {
                "authorization": `Bearer ${user.token}`,
            }
        }
        axios.patch(`api/collection/${id}`, updatePublished, config)
            .then(response => {
                toast.dismiss();
                if (response.data) {
                    toast.success(response.data)
                }
                getCollections();
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
    };
    const handleShow = () => {

    };
    const handleEdit = () => {

    };
    const handleDelete = () => {
        const user = JSON.parse(localStorage.getItem("admin_user"));
        const config = {
            "headers": {
                "authorization": `Bearer ${user.token}`,
            }
        }
        axios.delete(`api/collection/${id}`, config)
            .then(response => {
                toast.dismiss();
                if (response.data) {
                    toast.success(response.data)
                }
                getCollections();
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

    };
    return (
        <div className='container-fluid pt-5'>
            <div>
                <div className="card my-5 mx-auto" >
                    <div className="card-header py-1 d-flex justify-content-between align-items-center">
                        <h4 className="fw-bold">Collection overview</h4>
                        <button className='btn btn-dark btn-lg btn-md fs-6 small' onClick={() => navigate("/addCollection")}>+ Add Collection</button>
                    </div>
                    <div className="card-body">
                        {loading ?
                            <div class="d-flex justify-content-center">
                                <div class="spinner-border" role="status">
                                    <span class="visually-hidden">Loading...</span>
                                </div>
                            </div>
                            :
                            <>
                                {
                                    collections.length > 0 ?
                                        <div className="table-responsive">
                                            <table className="table table-bordered align-items-center text-center">
                                                <thead className="thead-light ">
                                                    <tr>
                                                        <th>#</th>
                                                        <th>Name</th>
                                                        <th>Products</th>
                                                        <th>Coupons</th>
                                                        <th>Status</th>
                                                        <th>Published</th>
                                                        <th>Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="table-body">
                                                    {collections.map((collection, index) => {
                                                        const { _id, name, products, coupon, status, published } = collection;

                                                        return (
                                                            <>
                                                                <tr key={_id}>
                                                                    <td>{index + 1}.</td>
                                                                    <td className='text-start'>{name}</td>
                                                                    <td onClick={() => setExpand(!expand)} className='d-flex justify-content-around align-items-center' data-bs-toggle="collapse" href={`#demo-${index}`} role="button" aria-expanded="false" aria-controls={`demo-${index}`} >
                                                                        <span>{products.length} Products</span>
                                                                        <span>
                                                                            {
                                                                                expand ? <i class="bi bi-chevron-down"></i> : <i class="bi bi-chevron-up"></i>
                                                                            }
                                                                        </span>
                                                                    </td>
                                                                    <td> {coupon} </td>
                                                                    <td>
                                                                        <div className="form-check form-switch d-flex justify-content-center align-items-center">
                                                                            <input
                                                                                className="form-check-input me-1 p-2 border-0 shadow-none"
                                                                                type="checkbox"
                                                                                role="switch"
                                                                                id="status"
                                                                                defaultChecked={status}
                                                                                onChange={() => handleStatus(_id, status, published)}
                                                                            />
                                                                            {/* <label
                                                                                className="form-check-label text-dark ms-1"
                                                                                htmlFor="status"
                                                                            >
                                                                                {status ? <small>Activated</small> : <small>Dectivated</small>}
                                                                            </label> */}
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="form-check form-switch d-flex justify-content-center align-items-center">
                                                                            <input
                                                                                className="form-check-input me-1 p-2 border-0 shadow-none"
                                                                                type="checkbox"
                                                                                role="switch"
                                                                                id="status"
                                                                                defaultChecked={published}
                                                                                onChange={() => handlePublished(_id, status, published)}
                                                                            />
                                                                        </div>
                                                                    </td>
                                                                    <td>
                                                                        <div className="d-flex justify-content-center gap-2">
                                                                            <button
                                                                                type="button"
                                                                                className="btn btn-outline-dark ms-1"
                                                                                onClick={() => navigate(`/collections/${_id}/edit`)}
                                                                            >
                                                                                Edit
                                                                            </button>
                                                                            <button
                                                                                type="button"
                                                                                className="btn btn-danger ms-1 px-2 d-flex justify-content-between align-items-center p-0 m-0 "
                                                                                data-bs-toggle="modal"
                                                                                data-bs-target="#staticBackdrop"
                                                                                onClick={() => {
                                                                                    setId(_id);
                                                                                }}
                                                                            >
                                                                                <svg className='p-0 m-0' width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                                    <path d="M7 3H9C9 2.44772 8.55228 2 8 2C7.44772 2 7 2.44772 7 3ZM6 3C6 1.89543 6.89543 1 8 1C9.10457 1 10 1.89543 10 3H14C14.2761 3 14.5 3.22386 14.5 3.5C14.5 3.77614 14.2761 4 14 4H13.4364L12.2313 12.8378C12.0624 14.0765 11.0044 15 9.75422 15H6.24578C4.99561 15 3.93762 14.0765 3.76871 12.8378L2.56355 4H2C1.72386 4 1.5 3.77614 1.5 3.5C1.5 3.22386 1.72386 3 2 3H6ZM7 6.5C7 6.22386 6.77614 6 6.5 6C6.22386 6 6 6.22386 6 6.5V11.5C6 11.7761 6.22386 12 6.5 12C6.77614 12 7 11.7761 7 11.5V6.5ZM9.5 6C9.77614 6 10 6.22386 10 6.5V11.5C10 11.7761 9.77614 12 9.5 12C9.22386 12 9 11.7761 9 11.5V6.5C9 6.22386 9.22386 6 9.5 6ZM4.75954 12.7027C4.86089 13.4459 5.49568 14 6.24578 14H9.75422C10.5043 14 11.1391 13.4459 11.2405 12.7027L12.4272 4H3.57281L4.75954 12.7027Z" fill="#fff" />
                                                                                </svg>
                                                                                <span className='p-0 m-0 ms-2'>Delete</span>
                                                                            </button>
                                                                        </div>
                                                                    </td>
                                                                </tr>
                                                                <tr className='collapse text-start' id={`demo-${index}`}>
                                                                    <td colSpan="7">
                                                                        <h5 className='ms-1 text-uppercase text-decoration-underline fw-bold'>Products:</h5>
                                                                        {
                                                                            products.map((product, index) => {
                                                                                return (
                                                                                    <span key={product._id} className='ms-2'>
                                                                                        <span key={product._id} className="badge bg-dark text-white mb-2 fs-6 fw-normal">{index += 1}. {product.name}</span>
                                                                                        <br />
                                                                                    </span>
                                                                                )
                                                                            })
                                                                        }
                                                                    </td>
                                                                </tr>
                                                            </>
                                                        );
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
                                                            <p>Do you really want to delete these records?<br />You can't view this in your list anymore if you delete! {id}</p>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-light px-3 py-2" data-bs-dismiss="modal"
                                                                onClick={() => {
                                                                    setId('');
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

                                        :
                                        <div className="alert alert-danger" role="alert">
                                            No collection found
                                        </div>
                                }
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collection;
