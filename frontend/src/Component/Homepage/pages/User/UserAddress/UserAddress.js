import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Meta from '../../Meta';
import { toast } from 'react-toastify';
import axios from 'axios';
// import AddAddress from './AddAddress';
// import EditAddress from './EditAddress';

const UserAddress = () => {

    const navigate = useNavigate();

    const [loginUser, setLoginUser] = useState({});
    const [deleteId, setDeleteId] = useState("");
    const [addresses, setAddresses] = useState([]);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        setLoginUser(user);
        setAddresses(user.address);
        console.log("Addr " + addresses);
    }, [setLoginUser, setAddresses]);

    // const handleEditAddress = (id) => {
    //     let url = `/user/editAddress/${id}`; 
    //     navigate(url);
    // };

    const handleDeleteAddress = () => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${loginUser.token}`,
            },
        };
        axios.delete(`/api/users/profile/deleteAddress/${deleteId}`, config)
            .then(response => {
                toast.success("Address deleted successfully.");
                localStorage.setItem('user', JSON.stringify(response.data));
                // navigate('/user/address');
                setAddresses(response.data.address);
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

    // const setDeleteAddressById = (id) => {
    //     setDeleteId(id);
    // }

    const handleSetDefaultAddress = () => {

    }

    return (
        <>
            <Meta title="User Address" />
            <div className="container">
                <div className="d-flex justify-content-between align-items-center gap-5 mb-4">
                    <h4 className="mb-0">Address</h4>
                    <button className="btn btn-outline-dark px-1 px-md-4 py-2 py-md-3 d-flex flex-0 justify-content-center align-items-center"
                        onClick={() => navigate("/user/addAddress")}>
                        <i className="bi bi-plus-lg" />
                        <span>Add new address</span>
                    </button>
                </div>
                {
                    addresses.length === 0 ?
                        <div className="text-center">
                            <p>You don't have any saved address yet. Please add your shipping and billing address</p>
                        </div>
                        :
                        <div className="row">{console.log(addresses)}
                            {
                                addresses.map((address, index) => {
                                    return (
                                        <div key={index} className="col-lg-5 col-md-3 col-xxl-4 col-12 mb-4">
                                            <div className="card border-info">
                                                <div className={
                                                    address.isDeliveryAddr ?
                                                        "card-header bg-info-subtle d-flex flex-0 justify-content-between align-items-center py-2 m-0"
                                                        :
                                                        "card-header bg-secondary-subtle d-flex flex-0 justify-content-between align-items-center py-2 m-0"
                                                }>
                                                    <span className="h6 mt-2">{address.addrType}</span>
                                                    {
                                                        !address.isDeliveryAddr &&
                                                        <button className="btn btn-outline-dark py-3 py-md-2" data-bs-toggle="modal" data-bs-target="#setDefaultModal"
                                                            onClick={handleSetDefaultAddress()}>
                                                            Set default address
                                                        </button>
                                                    }
                                                    <div className="modal fade" id="setDefaultModal" tabIndex="-1" aria-labelledby="setDefaultModal" aria-hidden="true">
                                                        <div className="modal-dialog modal-dialog-centered">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <h1 className="modal-title fs-5" id="setDefaultModal">Set default address</h1>
                                                                    {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                                                                </div>
                                                                <div className="modal-body">
                                                                    Do you want to set this as default shipping and billing address?
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-default bg-danger-subtle text-danger px-4 py-2 fs-6" data-bs-dismiss="modal">Cancel</button>
                                                                    <button type="button" className="btn btn-info px-4 py-2 fs-6">Update</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-body p-2">
                                                    <p className="mb-2 fw-semibold fs-6">{address.personName}</p>
                                                    <p className='fw-normal text-muted'>{address.landmark}</p>
                                                    <p className="fw-normal fs-6 text-muted">
                                                        {address.addrLineOne}, {address.addrLineTwo}, {address.city}, {address.state}, {address.country},
                                                        <br />
                                                        PIN - {address.pincode}
                                                    </p>
                                                    <p className="fw-normal text-muted"><span className='fw-semibold'>Phone</span> +91 {address.altPhone}</p>
                                                    <p className='fw-normal text-muted'><span className='fs-6 fw-semibold'>Availability</span> : 09.00 AM - 06.00 PM</p>
                                                </div>
                                                <div className="card-footer bg-body border-0 top-0 d-flex justify-content-start align-items-center gap-2">
                                                    <button className="btn btn-outline-dark py-2 py-md-2"
                                                        onClick={() => navigate(`/user/editAddress/`, { state: { address: address } })}
                                                    >
                                                        {/* </div>onClick={handleEditAddress(address.__id)}> */}
                                                        <i className="bi bi-pencil me-2" /> Edit
                                                    </button>
                                                    <button onClick={() => { setDeleteId(address._id) }} className="btn btn-outline-danger py-2 py-md-2" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                                        <i className="bi bi-trash me-2" /> Delete
                                                    </button>
                                                    <div className="modal fade" id="deleteModal" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                                                        {/* tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true"> */}
                                                        <div className="modal-dialog modal-dialog-centered">
                                                            <div className="modal-content">
                                                                <div className="modal-header">
                                                                    <h1 className="modal-title fs-5" id="deleteModalLabel">Delete address</h1>
                                                                    {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                                                                </div>
                                                                <div className="modal-body">
                                                                    Do you want to delete this address permanently from your address book?
                                                                </div>
                                                                <div className="modal-footer">
                                                                    <button type="button" className="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                                                                    <button type="button" className="btn btn-danger" onClick={handleDeleteAddress} data-bs-dismiss="modal">Delete</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                }
                {/* <div className="row my-4">
                    <div className="col-12">
                        <span className="fw-semibold ">Change Billing and Shipping Address</span>
                    </div>
                </div> */}
                {/* <div className="row mb-4">
                    <div className="col-12 col-md-6 col-lg-6 mb-3">
                        <div className="accordion bg-">
                            <div className="accordion-item">
                                <h6 className="accordion-header border-bottom px-4 py-3">
                                    Shipping Address:
                                </h6>
                                <div className="show">
                                    <div className="accordion-body px-4">
                                        <label for="floatingSelect mb-4">Change Shipping address</label>
                                        <select className="form-select border-light shadow-none mt-2" id="floatingSelect">
                                            <option value="home">Home</option>
                                            <option value="office">Office</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6  mb-3">
                        <div className="accordion">
                            <div className="accordion-item">
                                <h6 className="accordion-header border-bottom px-4 py-3">
                                    Billing Address:
                                </h6>
                                <div className="accordion-body px-4">
                                    <label for="floatingSelect mb-4">Change billing address</label>
                                    <select className="form-select border-light shadow-none mt-2" id="floatingSelect">
                                        <option value="home">Home</option>
                                        <option value="office">Office</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div >
        </>
    )
}

export default UserAddress;