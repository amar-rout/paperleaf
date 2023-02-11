import React from 'react';
import Meta from '../../Meta';

const AddAddress = () => {
    return (
        <>
            <Meta title="Add new address" />
            <div className="container">
                <div className="d-flex justify-content-between align-items-center gap-5 mb-4">
                    <h4 className="mb-0">Add new address</h4>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="form-group">
                            <label class="form-label" for="addressName">Address Name *</label>
                            <input className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none"
                                type="text" name="addressName" placeholder="Address name" required />
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="form-group">
                            <label class="form-label" for="firstName">First Name *</label>
                            <input className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none"
                                type="text" name="name" placeholder="First name" />
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="form-group">
                            <label class="form-label" for="lastName">Last Name *</label>
                            <input class="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="lastName" type="text" placeholder="Last Name" required />
                        </div>
                    </div>
                    {/* <div class="col-12">
                        <div class="form-group">
                            <label class="form-label" for="emailAddress">Email Address *</label>
                            <input class="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="emailAddress" type="email" placeholder="Email Address" required />
                        </div>
                    </div> */}
                    <div class="col-12">
                        <div class="form-group">
                            <label class="form-label" for="country">Country *</label>
                            <input class="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="country" type="text" placeholder="Country" required />
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-group">
                            <label class="form-label" for="addressLineOne">Address Line 1 *</label>
                            <input class="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="addressLineOne" type="text" placeholder="Address Line 1" required />
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-group">
                            <label class="form-label" for="addressLineTwo">Address Line 2</label>
                            <input class="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="addressLineTwo" type="text" placeholder="Address Line 2" required />
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="form-group">
                            <label class="form-label" for="townCity">Town / City *</label>
                            <input class="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="townCity" type="text" placeholder="Town / City" required="" />
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="form-group">
                            <label class="form-label" for="zipPostCode">ZIP / Postcode *</label>
                            <input class="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="zipPostCode" type="text" placeholder="ZIP / Postcode" required="" />
                        </div>
                    </div>
                    <div class="col-12">
                        <div class="form-group">
                            <label class="form-label" for="mobilePhone">Mobile Phone *</label>
                            <input class="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="mobilePhone" type="tel" placeholder="Mobile Phone" required="" />
                        </div>
                    </div>
                    <div class="col-12 mt-2">
                        <div class="form-group">
                            <div class="form-check mb-3 d-flex flex-0 justify-content-start align-items-center gap-2">
                                <input type="checkbox" class="form-check-input border-0 bg-dark shadow-none" id="defaultDeliveryAddress"
                                    style={{ width: "24px", height: "24px" }} />
                                <label class="form-check-label" for="defaultDeliveryAddress">Default delivery address</label>
                            </div>
                            <div class="form-check mb-3 d-flex flex-0 justify-content-start align-items-center gap-2">
                                <input type="checkbox" class="form-check-input bg-dark border-0 shadow-none" id="defaultShippingAddress"
                                    style={{ width: "24px", height: "24px" }} />
                                <label class="form-check-label" for="defaultShippingAddress">Default shipping address</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-2">
                    <button class="btn px-5 py-3 bg-dark text-white" type="submit">
                        Add Address
                    </button>
                </div>
            </div>
        </>
    )
}

export default AddAddress;