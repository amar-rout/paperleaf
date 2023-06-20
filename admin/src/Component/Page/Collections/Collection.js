import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Collection = () => {
    const [collections, setCollections] = useState([]);
    const [id, setId] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
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
    }, []);

    const handleStatus = () => {

    };
    const handlePublished = () => {

    };
    const handleShow = () => {

    };
    const handleEdit = () => {

    };
    const handleDelete = () => {

    };
    return (
        <div className='container-fluid pt-5'>
            <div>
                <div className="card my-5 mx-auto" >
                    <div className="card-header py-1 d-flex justify-content-between align-items-center">
                        <h4 className="fw-bold">Collection overview</h4>
                        <button className='btn btn-primary btn-lg btn-md fs-6 small' onClick={() => navigate("/addCollection")}>+ Add Collection</button>
                    </div>
                    <div className="card-body">
                        {collections.length > 0 ?
                            <div className="table-responsive">
                                <table className="table align-items-center text-center">
                                    <thead className="thead-light ">
                                        <tr>
                                            {/* <th>Id</th> */}
                                            <th>Name</th>
                                            <th>Products</th>
                                            <th>Coupons</th>
                                            <th>Status</th>
                                            <th>Published</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {collections.map((collection) => {
                                            const { _id, name, products, coupon, status, published } = collection;

                                            return (
                                                <tr key={_id}>
                                                    {/* <th>{_id}</th> */}
                                                    <td className='text-start'>{name}</td>
                                                    <td className='text-start'>
                                                        {
                                                            products.map((product, index) => {
                                                                return (
                                                                    <span key={product._id}>
                                                                        <span key={product._id} className="badge text-dark fs-6 fw-normal">{index += 1}. {product.name}</span>
                                                                        <br /> 
                                                                    </span>
                                                                )
                                                            })
                                                        }
                                                    </td>
                                                    <td> {coupon} </td>
                                                    <td>
                                                        <div className="form-check form-switch d-flex justify-content-center align-items-center">
                                                            <input
                                                                className="form-check-input me-1"
                                                                type="checkbox"
                                                                role="switch"
                                                                id="status"
                                                                defaultChecked={status}
                                                                onChange={() => handleStatus(_id, name, status, published)}
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
                                                                className="form-check-input me-1"
                                                                type="checkbox"
                                                                role="switch"
                                                                id="status"
                                                                defaultChecked={published}
                                                                onChange={() => handlePublished(_id, name, status, published)}
                                                            />
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="d-flex justify-content-center">
                                                            <button
                                                                type="button"
                                                                className="btn btn-sm btn-danger ms-1"
                                                                onClick={() => handleEdit(_id)}
                                                            >
                                                                Edit
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-sm btn-danger ms-1"
                                                                onClick={() => handleDelete(_id)}
                                                            >
                                                                Delete
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>

                            :
                            <div className="alert alert-danger" role="alert">
                                No collection found
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collection;
