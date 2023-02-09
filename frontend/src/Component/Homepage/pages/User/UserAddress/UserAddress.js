import React from 'react';
// import Breadcrumb from '../../Breadcrumb/Breadcrumb';
import Meta from '../../Meta';

const UserAddress = () => {
    return (
        <>
            <Meta title="User Orders" />
            {/* <Breadcrumb
                links={[
                    { name: 'Home', link: '/', active: false },
                    { name: 'User', link: '/user', active: false },
                    { name: 'Address', link: '/user/address', active: true }
                ]}
            /> */}
            <div className="container mt-2">
                <div className="d-flex justify-content-start align-items-center gap-5 mb-4">
                    <h4 className="mb-">Address</h4>
                    <a href="/" className="btn btn-md btn-outline-primary" data-bs-toggle="modal" data-bs-target="#addAddressModal">
                        <i class="bi bi-plus-lg"/> Add address
                    </a>
                </div>
                <div className="row">
                    <div className="col-lg-5 col-xxl-4 col-12 mb-4">
                        <div className="card border-info">
                            <div className="card-header bg-info-subtle border-0 p-0 m-0 px-2 py-2">
                                <span className="h6">Home</span>
                            </div>
                            <div className="card-body p-2">
                                <p className="mb-2 fw-semibold">Amarendra Rout</p>
                                <p className="mb-1">
                                    Plot no 1520, Snow House,<br/>
                                    CDA Sector-6, Cuttack, Odisha<br/>
                                    INDIA, 753006
                                </p>
                                <p className="mb-1">+91 7043096106</p>
                                <p><small><span className="fw-semibold">Availability : </span> 06.00 AM - 10.00 PM</small></p>
                            </div>
                            <div className="card-footer bg-body border-0 top-0 d-flex justify-content-start align-items-center gap-2">
                                <a href="/" className="btn btn-sm btn-outline-dark rounded rounded-3">
                                    <i class="bi bi-pencil" /> Edit
                                </a>
                                <a href="/" className="btn btn-sm btn-outline-danger rounded rounded-3" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                    <i class="bi bi-trash" /> Delete
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-xxl-4 col-12 mb-4">
                        <div className="card">
                            <div className="card-header bg-light-subtle border-0 p-0 m-0 px-2 py-2">
                                <span className="h6">Office</span>
                            </div>
                            <div className="card-body p-2">
                                <p className="mb-2 fw-semibold">Amarendra Rout</p>
                                <p className="mb-1">
                                    Plot no 1520, Snow House,<br/>
                                    CDA Sector-6, Cuttack, Odisha<br/>
                                    INDIA, 753006
                                </p>
                                <p className="mb-1">+91 7043096106</p>
                                <p><small><span className="fw-semibold">Availability : </span> 10.00 AM - 04.00 PM</small></p>
                            </div>
                            <div className="card-footer bg-body border-0 top-0 d-flex justify-content-start align-items-center gap-2">
                                <a href="/" className="btn btn-sm btn-outline-dark rounded rounded-3">
                                    <i class="bi bi-pencil" /> Edit
                                </a>
                                <a href="/" className="btn btn-sm btn-outline-danger rounded rounded-3" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                    <i class="bi bi-trash" /> Delete
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-xxl-4 col-12 mb-4">
                        <div className="card">
                            <div className="card-header bg-light-subtle border-0 p-0 m-0 px-2 py-2">
                                <span className="h6">Other</span>
                            </div>
                            <div className="card-body p-2">
                                <p className="mb-2 fw-semibold">Amarendra Rout</p>
                                <p className="mb-1">
                                    Plot no 1520, Snow House,<br/>
                                    CDA Sector-6, Cuttack, Odisha<br/>
                                    INDIA, 753006
                                </p>
                                <p className="mb-1">+91 7043096106</p>
                                <p><small><span className="fw-semibold">Availability : </span> 10.00 AM - 04.00 PM</small></p>
                            </div>
                            <div className="card-footer bg-body border-0 top-0 d-flex justify-content-start align-items-center gap-2">
                                <a href="/" className="btn btn-sm btn-outline-dark rounded rounded-3">
                                    <i class="bi bi-pencil" /> Edit
                                </a>
                                <a href="/" className="btn btn-sm btn-outline-danger rounded rounded-3" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                    <i class="bi bi-trash" /> Delete
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserAddress;