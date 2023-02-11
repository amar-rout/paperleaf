import React from 'react';
import { useNavigate } from 'react-router-dom';
import Meta from '../../Meta';
// import AddAddress from './AddAddress';
// import EditAddress from './EditAddress';

const UserAddress = () => {

    const navigate = useNavigate();

    const handleEditAddress = () => {
        navigate("/user/editAddress");
    }

    const handleDeleteAddress = () => {

    }

    const handleSetDefaultAddress = () => {

    }

    return (
        <>
            <Meta title="User Orders" />
            <div className="container mt-2">
                <div className="d-flex justify-content-between align-items-center gap-5 mb-4">
                    <h4 className="mb-0">Address</h4>
                    <button className="btn btn-md btn-outline-primary"
                        onClick={() => navigate("/user/addAddress")}>
                        <i class="bi bi-plus-lg fs-5" /> Add new address
                    </button>
                </div>
                <div className="d-none text-center m-5 p-5">
                    <p>You don't have any saved address yet. Please add your shipping and billing address</p>
                </div>
                <div className="row">
                    <div className="col-lg-5 col-xxl-4 col-12 mb-4">
                        <div className="card border-info">
                            <div className="card-header bg-info-subtle d-flex flex-0 justify-content-between align-items-center p-2 m-0">
                                <span className="h6 mt-2">Home</span>
                            </div>
                            <div className="card-body p-2">
                                <p className="mb-2 fw-semibold">Amarendra Rout</p>
                                <p className="mb-1">
                                    Plot no 1520, Snow House,<br />
                                    CDA Sector-6, Cuttack, Odisha<br />
                                    INDIA, 753006
                                </p>
                                <p className="mb-1">+91 7043096106</p>
                                <p><small><span className="fw-semibold">Availability : </span> 06.00 AM - 10.00 PM</small></p>
                                <div>
                                    <button className="btn btn-sm disabled btn-outline-dark rounded rounded-3" data-bs-toggle="modal" data-bs-target="#deleteModal"
                                        onClick={handleSetDefaultAddress}>
                                        Set default address
                                    </button>
                                </div>
                            </div>
                            <div className="card-footer bg-body border-0 top-0 d-flex justify-content-start align-items-center gap-2">
                                <button className="btn btn-sm btn-outline-dark px-3 rounded rounded-3"
                                    onClick={handleEditAddress}>
                                    <i class="bi bi-pencil" /> Edit
                                </button>
                                <button className="btn btn-sm btn-outline-danger px-3 rounded rounded-3" data-bs-toggle="modal" data-bs-target="#deleteModal"
                                    onClick={handleDeleteAddress}>
                                    <i class="bi bi-trash" /> Delete
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-xxl-4 col-12 mb-4">
                        <div className="card">
                            <div className="card-header bg-light-subtle d-flex flex-0 justify-content-between align-items-center p-2 m-0">
                                <span className="h6 mt-2">Office</span>
                            </div>
                            <div className="card-body p-2">
                                <p className="mb-2 fw-semibold">Amarendra Rout</p>
                                <p className="mb-1">
                                    Plot no 1520, Snow House,<br />
                                    CDA Sector-6, Cuttack, Odisha<br />
                                    INDIA, 753006
                                </p>
                                <p className="mb-1">+91 7043096106</p>
                                <p><small><span className="fw-semibold">Availability : </span> 10.00 AM - 04.00 PM</small></p>
                                <div>
                                    <button className="btn btn-sm btn-outline-dark rounded rounded-3" data-bs-toggle="modal" data-bs-target="#deleteModal"
                                        onClick={handleSetDefaultAddress}>
                                        Set default address
                                    </button>
                                </div>
                            </div>
                            <div className="card-footer bg-body border-0 top-0 d-flex justify-content-start align-items-center gap-2">
                                <button className="btn btn-sm btn-outline-dark px-3 rounded rounded-3"
                                    onClick={handleEditAddress}>
                                    <i class="bi bi-pencil" /> Edit
                                </button>
                                <button className="btn btn-sm btn-outline-danger px-3 rounded rounded-3" data-bs-toggle="modal" data-bs-target="#deleteModal"
                                    onClick={handleDeleteAddress}>
                                    <i class="bi bi-trash" /> Delete
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-xxl-4 col-12 mb-4">
                        <div className="card">
                            <div className="card-header bg-light-subtle d-flex flex-0 justify-content-between align-items-center p-2 m-0">
                                <span className="h6 mt-2">Other</span>
                            </div>
                            <div className="card-body p-2">
                                <p className="mb-2 fw-semibold">Amarendra Rout</p>
                                <p className="mb-1">
                                    Plot no 1520, Snow House,<br />
                                    CDA Sector-6, Cuttack, Odisha<br />
                                    INDIA, 753006
                                </p>
                                <p className="mb-1">+91 7043096106</p>
                                <p><small><span className="fw-semibold">Availability : </span> 10.00 AM - 04.00 PM</small></p>
                                <div>
                                    <button className="btn btn-sm btn-outline-dark rounded rounded-3" data-bs-toggle="modal" data-bs-target="#deleteModal"
                                        onClick={handleSetDefaultAddress}>
                                        Set default address
                                    </button>
                                </div>
                            </div>
                            <div className="card-footer bg-body border-0 top-0 d-flex justify-content-start align-items-center gap-2">
                                <button className="btn btn-sm btn-outline-dark px-3 rounded rounded-3"
                                    onClick={handleEditAddress}>
                                    <i class="bi bi-pencil" /> Edit
                                </button>
                                <button className="btn btn-sm btn-outline-danger px-3 rounded rounded-3" data-bs-toggle="modal" data-bs-target="#deleteModal"
                                    onClick={handleDeleteAddress}>
                                    <i class="bi bi-trash" /> Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-12 col-md-6 col-lg-6 mb-3">
                        <div class="accordion bg-">
                            <div class="accordion-item">
                                <h6 class="accordion-header border-bottom px-4 py-3">
                                    Shipping Address:
                                </h6>
                                <div class="show">
                                    <div class="accordion-body">
                                        <label for="floatingSelect">Change Shipping address</label>
                                        <select class="form-select shadow-none mt-2" id="floatingSelect">
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
                        <div class="accordion">
                            <div class="accordion-item">
                                <h6 class="accordion-header border-bottom px-4 py-3">
                                    Billing Address:
                                </h6>
                                <div class="accordion-body">
                                    <label for="floatingSelect">Change Shipping address</label>
                                    <select class="form-select mt-2 shadow-none" id="floatingSelect">
                                        <option value="home">Home</option>
                                        <option value="office">Office</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserAddress;