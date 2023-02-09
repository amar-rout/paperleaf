import React from 'react';
import Breadcrumb from '../../Breadcrumb/Breadcrumb';
import Meta from '../../Meta';

const UserAddress = () => {
    return (
        <>
            <Meta title="User Orders" />
            <Breadcrumb
                links={[
                    { name: 'Home', link: '/', active: false },
                    { name: 'User', link: '/user', active: false },
                    { name: 'Address', link: '/user/address', active: true }
                ]}
            />
            <div className="container my-5 text-center">
                <h4>User Address</h4>
                <div>
                    <div className="py-6 p-md-6 p-lg-10">
                        <div className="d-flex justify-content-between mb-6">
                            <h2 className="mb-0">Address</h2>
                            <a href="#" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#addAddressModal">
                                Add a new address
                            </a>
                        </div>
                        <div className="row">
                            <div className="col-lg-5 col-xxl-4 col-12 mb-4">
                                {/* <!-- form --> */}
                                <div className="card">
                                    <div className="card-body p-6">
                                        <div className="form-check mb-4">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="homeRadio" checked="" />
                                            <label className="form-check-label text-dark fw-semi-bold" for="homeRadio">
                                                Home
                                            </label>
                                        </div>
                                        {/* <!-- address --> */}
                                        <p className="mb-6">Jitu Chauhan<br />
                                            4450 North Avenue Oakland, <br />
                                            Nebraska, United States,<br />
                                            402-776-1106
                                        </p>
                                        {/* <!-- btn --> */}
                                        <a href="#" className="btn btn-light btn-disable btn-sm">Default address</a>
                                        <div className="mt-4">
                                            <a href="#" className="text-inherit">Edit </a>
                                            <a href="#" className="text-danger ms-3" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-xxl-4 col-12 mb-4">
                                <div className="card">
                                    <div className="card-body p-6">
                                        <div className="form-check mb-4">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="officeRadio" />
                                            <label className="form-check-label text-dark fw-semi-bold" for="officeRadio">
                                                Office
                                            </label>
                                        </div>
                                        <p className="mb-6">Nitu Chauhan<br />
                                            3853 Coal Road <br />
                                            Tannersville, Pennsylvania, 18372, United States <br />
                                            402-776-1106
                                        </p>
                                        <a href="#" className="link-primary">Set as Default</a>
                                        <div className="mt-4">
                                            <a href="#" className="text-inherit">Edit </a>
                                            <a href="#" className="text-danger ms-3" data-bs-toggle="modal" data-bs-target="#deleteModal">Delete
                                            </a>
                                        </div>
                                    </div>
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