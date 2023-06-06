import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Meta from '../../Meta';
// import AddAddress from './AddAddress';
// import EditAddress from './EditAddress';

const UserAddress = () => {

    const navigate = useNavigate();

    const [addresses, setAddresses] = useState([]);

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        setAddresses(user.address);
        // console.log(addresses);
    }, [setAddresses]);

    // const handleEditAddress = (name) => {
    //     navigate(
    //         "/user/editAddress",
    //         {
    //             state: {
    //                 id: name
    //             }
    //         }
    //     );
    // }

    const handleDeleteAddress = () => {

    }

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
                        <i class="bi bi-plus-lg" />
                        <span>Add new address</span>
                    </button>
                </div>
                {
                    !addresses ?
                        <div className="d-none text-center m-5 p-5">
                            <p>You don't have any saved address yet. Please add your shipping and billing address</p>
                        </div>
                        :
                        <>
                            <div className="row">

                                {
                                    addresses.map((address, index) => {
                                        return (
                                            <div className="col-lg-5 col-md-3 col-xxl-4 col-12 mb-4">
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
                                                        <div class="modal fade" id="setDefaultModal" tabindex="-1" aria-labelledby="setDefaultModal" aria-hidden="true">
                                                            <div class="modal-dialog modal-dialog-centered">
                                                                <div class="modal-content">
                                                                    <div class="modal-header">
                                                                        <h1 class="modal-title fs-5" id="setDefaultModal">Set default address</h1>
                                                                        {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                                                                    </div>
                                                                    <div class="modal-body">
                                                                        Do you want to set this as default shipping and billing address?
                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        <button type="button" class="btn btn-default bg-danger-subtle text-danger px-4 py-2 fs-6" data-bs-dismiss="modal">Cancel</button>
                                                                        <button type="button" class="btn btn-info px-4 py-2 fs-6">Update</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-body p-2">
                                                        <p className="mb-2 fw-semibold fs-6">{address.personName}</p>
                                                        <p className='fw-normal text-muted'>{address.landmark}</p>
                                                        <p className="fw-normal fs-6">
                                                            {address.addrLineOne},
                                                            {address.addrLineTwo},
                                                            {address.city}, {address.state},
                                                            {address.country}, PIN - {address.pincode}
                                                        </p>
                                                        <p className="fw-normal text-muted ">+91 {address.altPhone}</p>
                                                        <p className='fw-normal text-muted'><span className='fs-6 fw-semibold'>Availability</span> : 09.00 AM - 06.00 PM</p>
                                                    </div>
                                                    <div className="card-footer bg-body border-0 top-0 d-flex justify-content-start align-items-center gap-2">
                                                        <button className="btn btn-outline-dark py-2 py-md-2"
                                                        >
                                                            {/* onClick={handleEditAddress()}> */}
                                                            <i class="bi bi-pencil me-2" /> Edit
                                                        </button>
                                                        <button className="btn btn-outline-danger py-2 py-md-2" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                                            <i class="bi bi-trash me-2" /> Delete
                                                        </button>
                                                        <div class="modal fade" id="deleteModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                                                            {/* tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true"> */}
                                                            <div class="modal-dialog modal-dialog-centered">
                                                                <div class="modal-content">
                                                                    <div class="modal-header">
                                                                        <h1 class="modal-title fs-5" id="deleteModalLabel">Delete address</h1>
                                                                        {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                                                                    </div>
                                                                    <div class="modal-body">
                                                                        Do you want to delete this address permanently from your address book?
                                                                    </div>
                                                                    <div class="modal-footer">
                                                                        <button type="button" class="btn btn-light" data-bs-dismiss="modal">Cancel</button>
                                                                        <button type="button" class="btn btn-danger" onClick={handleDeleteAddress}>Delete</button>
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
                        </>
                }
                {/* <div className="row my-4">
                    <div className="col-12">
                        <span className="fw-semibold ">Change Billing and Shipping Address</span>
                    </div>
                </div> */}
                {/* <div className="row mb-4">
                    <div className="col-12 col-md-6 col-lg-6 mb-3">
                        <div class="accordion bg-">
                            <div class="accordion-item">
                                <h6 class="accordion-header border-bottom px-4 py-3">
                                    Shipping Address:
                                </h6>
                                <div class="show">
                                    <div class="accordion-body px-4">
                                        <label for="floatingSelect mb-4">Change Shipping address</label>
                                        <select class="form-select border-light shadow-none mt-2" id="floatingSelect">
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
                                <div class="accordion-body px-4">
                                    <label for="floatingSelect mb-4">Change billing address</label>
                                    <select class="form-select border-light shadow-none mt-2" id="floatingSelect">
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