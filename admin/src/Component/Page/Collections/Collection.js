import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import './Collection.css';

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
                <div className="card my-5 mx-auto shadow" >
                    <div className="card-header bg-light py-2 d-flex justify-content-between align-items-center">
                        <h4 className="fw-bold w-50 fs-5 fs-md-4">Collection overview</h4>
                        {/* <button className='btn btn-dark btn-lg btn-md fs-6 small' onClick={() => navigate("/addCollection")}>+ Add Collection</button> */}
                        <div className='d-flex justify-content-around align-items-center'>
                            <button
                                type="button"
                                className="ms-2 btn btn-dark p-2 d-flex justify-content-between align-items-center"
                                onClick={() => navigate("/addCollection")}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-plus-lg text-white" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                </svg>
                                <span className='p-0 m-0 ms-2'>Add New</span>
                            </button>
                        </div>
                    </div>
                    <div className="card-body">
                        {loading ?
                            <div className="d-flex justify-content-center">
                                <div className="spinner-border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            </div>
                            :
                            <>
                                {collections.length > 0 ?
                                    <div>
                                        <div className='row'>
                                            <div className='col-6 col-md-3 mb-2 position-relative'>
                                                <span className="input-group">
                                                    <span className="input-group-text p-0 m-0 border-0 bg-body text-dark me-2" id="basic-addon1">
                                                        Show
                                                    </span>
                                                    <select className="border-secondary px-1 py-2 m-0 rounded" style={{ width: '20px !important' }} aria-label="Default select example">
                                                        <option selected>10</option>
                                                        <option value="1">25</option>
                                                        <option value="2">50</option>
                                                        <option value="3">100</option>
                                                    </select>
                                                    <span className="input-group-text p-0 m-0 border-0 bg-body text-dark ms-2" id="basic-addon1">
                                                        entries
                                                    </span>
                                                </span>
                                            </div>
                                            <div className='col-12 col-md-6 position-relative mb-2 d-none d-sm-inline'></div>
                                            <div className='col-6 col-md-3 position-relative mb-2'>
                                                <div className='d-flex justify-content-end'>
                                                    <input type="text" className="form-control d-inline shadow-none border-dark py-2" id="searchInput" placeholder="Search text ..." />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="table-responsive">
                                            <table className="table table-bordered border-dark table-hover align-items-center text-center align-middle">
                                                <thead className="thead-light">
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
                                                                    <th style={{ width: '48px' }}>{index + 1}.</th>
                                                                    <th className='text-start'>{name}</th>
                                                                    <td className='table-active tr-down' data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Click here to see the products">
                                                                        <span onClick={() => setExpand(!expand)} className='d-flex flex-row justify-content-between align-items-center' data-bs-toggle="collapse" href={`#demo-${index}`} aria-expanded="false" aria-controls={`demo-${index}`} >
                                                                            <span className=''>
                                                                                {products.length} Products
                                                                            </span>
                                                                            {/* <span>
                                                                                {
                                                                                    expand ? <i className="bi bi-chevron-down"></i> : <i className="bi bi-chevron-up"></i>
                                                                                }
                                                                            </span> */}
                                                                        </span>
                                                                    </td>
                                                                    <td className='ls-1' style={{ width: '96px' }}> {coupon} </td>
                                                                    <td style={{ width: '64px' }}>
                                                                        <div className="form-check form-switch d-flex justify-content-center align-items-center">
                                                                            <input
                                                                                className={`form-check-input ${status ? 'bg-dark' : 'bg-light'} me-1 p-2 border-0 shadow-none`}
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
                                                                                {status ? <small>Active</small> : <small>Deactive</small>}
                                                                            </label> */}
                                                                        </div>
                                                                        <label
                                                                            className="form-check-label text-dark"
                                                                            htmlFor="status"
                                                                        >
                                                                            {status ? <small>Active</small> : <small>Deactive</small>}
                                                                        </label>
                                                                    </td>
                                                                    <td style={{ width: '64px' }}>
                                                                        <div className="form-check form-switch d-flex justify-content-center align-items-center">
                                                                            <input
                                                                                className={`form-check-input ${published ? 'bg-dark' : 'bg-light'} me-1 p-2 border-0 shadow-none`}
                                                                                type="checkbox"
                                                                                role="switch"
                                                                                id="status"
                                                                                defaultChecked={published}
                                                                                onChange={() => handlePublished(_id, status, published)}
                                                                            />
                                                                            {/* <label
                                                                                className="form-check-label text-dark ms-1"
                                                                                htmlFor="status"
                                                                            >
                                                                                {published ? <small>Published</small> : <small>Unpublished</small>}
                                                                            </label> */}
                                                                        </div>
                                                                        <label
                                                                            className="form-check-label text-dark"
                                                                            htmlFor="status"
                                                                        >
                                                                            {published ? <small>Published</small> : <small>Unpublished</small>}
                                                                        </label>
                                                                    </td>
                                                                    <td style={{ width: '64px' }}>
                                                                        <div className="d-flex justify-content-between align-items-center gap-2">
                                                                            <button
                                                                                type="button"
                                                                                className="btn btn-secondary p-2 d-flex justify-content-between align-items-center"
                                                                                onClick={() => navigate(`/collections/${_id}/edit`)}
                                                                            >
                                                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z" />
                                                                                </svg>
                                                                                <span className='p-0 m-0 ms-2'>Edit</span>
                                                                            </button>
                                                                            <button
                                                                                type="button"
                                                                                className="btn btn-danger ms-1 p-2 d-flex justify-content-between align-items-center"
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
                                                                <tr className='collapse text-start table-active' id={`demo-${index}`}>
                                                                    <td colSpan="7">
                                                                        <h5 className='ms-1 text-uppercase text-decoration-underline fs-6 fw-bold'>Products:</h5>
                                                                        {
                                                                            products.map((product, index) => {
                                                                                return (
                                                                                    <span key={product._id} className='ms-2'>
                                                                                        <span key={product._id} className="badge bg-dark text-light mb-2 fs-6 fw-normal"><span className='fw-semibold'>{index += 1}.</span> {product.name}</span>
                                                                                        {/* <br /> */}
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
                                            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                                <div className="modal-dialog modal-dialog-centered">
                                                    <div className="modal-content">
                                                        {/* <div className="modal-header">
                                                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div> */}
                                                        <div className="modal-body text-center">
                                                            <svg width="28" height="28" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M7 3H9C9 2.44772 8.55228 2 8 2C7.44772 2 7 2.44772 7 3ZM6 3C6 1.89543 6.89543 1 8 1C9.10457 1 10 1.89543 10 3H14C14.2761 3 14.5 3.22386 14.5 3.5C14.5 3.77614 14.2761 4 14 4H13.4364L12.2313 12.8378C12.0624 14.0765 11.0044 15 9.75422 15H6.24578C4.99561 15 3.93762 14.0765 3.76871 12.8378L2.56355 4H2C1.72386 4 1.5 3.77614 1.5 3.5C1.5 3.22386 1.72386 3 2 3H6ZM7 6.5C7 6.22386 6.77614 6 6.5 6C6.22386 6 6 6.22386 6 6.5V11.5C6 11.7761 6.22386 12 6.5 12C6.77614 12 7 11.7761 7 11.5V6.5ZM9.5 6C9.77614 6 10 6.22386 10 6.5V11.5C10 11.7761 9.77614 12 9.5 12C9.22386 12 9 11.7761 9 11.5V6.5C9 6.22386 9.22386 6 9.5 6ZM4.75954 12.7027C4.86089 13.4459 5.49568 14 6.24578 14H9.75422C10.5043 14 11.1391 13.4459 11.2405 12.7027L12.4272 4H3.57281L4.75954 12.7027Z" fill="red" />
                                                            </svg>
                                                            <h5 className='mt-4'>Are You Sure! Want to Delete Selected Products?</h5>
                                                            <p>Do you really want to delete these records?<br />You can't view this in your list anymore if you delete! {id}</p>
                                                        </div>
                                                        <div className="modal-footer">
                                                            <button type="button" className="btn btn-light px-3 py-2" data-bs-dismiss="modal"
                                                                onClick={() => {
                                                                    setId('');
                                                                }}>No, Keep It</button>
                                                            <button type="button" className="btn btn-success px-3 py-2"
                                                                data-bs-dismiss="modal" onClick={() => handleDelete()}>
                                                                Yes, Delete It
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Modal End */}
                                        </div>
                                        <div className='row align-items-center'>
                                            <div className='col-12 col-md-3 mb-3 d-flex justify-content-center justify-content-md-start'>
                                                Showing 1 to 5 out of 25 records
                                            </div>
                                            <div className='col-12 col-md-3'></div>
                                            <div className='col-12 col-md-6'>
                                                <nav aria-label="Page navigation example d-flex">
                                                    <ul className="pagination justify-content-center justify-content-md-end">
                                                        <li className="page-item disabled">
                                                            <span class="page-link py-2 px-3">Previous</span>
                                                        </li>
                                                        <li className="page-item">
                                                            <a className="page-link py-2 px-3" href="#">1</a>
                                                        </li>
                                                        <li className="page-item">
                                                            <a className="page-link py-2 px-3" href="#">2</a>
                                                        </li>
                                                        <li className="page-item">
                                                            <a className="page-link py-2 px-3" href="#">3</a>
                                                        </li>
                                                        <li className="page-item">
                                                            <a className="page-link py-2 px-3" href="#">Next</a>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
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