import React, { useEffect, useState } from 'react';
import Meta from '../../Meta';

const AddAddress = () => {

    const initialAddress = {
        addrType: "Home",
        addrName: "",
        personName: "",
        phone: "",
        addrLineOne: "",
        addrLineTwo: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
        isDeliveryAddr: false,
    };

    const [address, setAddress] = useState(initialAddress);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddress((address) => ({
            ...address,
            [name]: value
        }));
    };

    useEffect(() => {
        switch (address.addrType) {
            case "Home":
                setAddress((addr) => ({
                    ...addr,
                    addrName: "Home"
                }));
                break;
            case "Office":
                setAddress((addr) => ({
                    ...addr,
                    addrName: "Office"
                }));
                break;
            default:
                break;
        }
        console.log(address);
    }, [address, setAddress]);

    const handleSubmit = () => {
        console.log("Submitted");
    }

    return (
        <>
            <Meta title="Add new address" />
            <div className="container">
                <div className="d-flex justify-content-between align-items-center gap-5 mb-4">
                    <h4 className="mb-0">Add new address</h4>
                </div>
                <form onSubmit={handleSubmit}>
                    <div class="row">
                        <div className="col-12 col-lg-6 mb-3">
                            <div className="form-group">
                                <label className="form-label">Address Type</label>
                                <div>
                                    <div className="btn-group w-100" role="group" aria-label="Select address">
                                        <input type="radio" className="btn-check form-control" name="addrType" id="home" autoComplete="off" value="Home" onChange={handleChange} checked={address.addrType === "Home"} />
                                        <label className="btn btn-outline-dark px-3 px-md-4 py-3 py-md-3 me-2 rounded-pill" htmlFor="home">
                                            Home
                                        </label>
                                        <input type="radio" className="btn-check form-control" name="addrType" id="office" autoComplete="off" value="Office" onChange={handleChange} checked={address.addrType === "Office"} />
                                        <label className="btn btn-outline-dark px-3 px-md-4 py-3 py-md-3 me-2 rounded-pill" htmlFor="office">
                                            Office
                                        </label>
                                        <input type="radio" className="btn-check form-control" name="addrType" id="other" autoComplete="off" value="Other" onChange={handleChange} checked={address.addrType === "Other"} />
                                        <label className="btn btn-outline-dark px-3 px-md-4 py-3 py-md-3 me-2 rounded-pill" htmlFor="other">
                                            Other
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            {
                                address.addrType === 'Other' &&
                                <div class="form-group">
                                    <label class="form-label" for="addressName">Address Name *</label>
                                    <input className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none"
                                        type="text" onChange={handleChange} name="addrName" placeholder="Address name" required />
                                </div>
                            }
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="form-group">
                                <label class="form-label" for="name">C/O Name *</label>
                                <input className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none"
                                    type="text" onChange={handleChange} name="name" placeholder="Name" />
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="form-group">
                                <label class="form-label" for="mobilePhone">Phone *</label>
                                <input class="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="mobilePhone" type="tel" name="altPhone" onChange={handleChange} placeholder="Mobile Phone" required="" />
                            </div>
                        </div>
                        {/* <div class="col-12 col-md-6">
                        <div class="form-group">
                            <label class="form-label" for="lastName">Last Name *</label>
                            <input class="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none"
                                    id="lastName" name="lname" type="text" placeholder="Last Name" required />
                        </div>
                    </div> */}
                        {/* <div class="col-12">
                        <div class="form-group">
                            <label class="form-label" for="emailAddress">Email Address *</label>
                            <input class="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="emailAddress" type="email" placeholder="Email Address" required />
                        </div>
                    </div> */}
                        <div class="col-12 col-md-6">
                            <div class="form-group">
                                <label class="form-label" for="landmark">Landmark *</label>
                                <input class="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none"
                                    name="landmark" onChange={handleChange} id="landmark" type="text" placeholder="Near By Location" required />
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="form-group">
                                <label class="form-label" for="addressLineOne">Address Line 1 *</label>
                                <input class="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="addressLineOne" name="addressLineOne" onChange={handleChange} type="text" placeholder="Address Line 1" required />
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="form-group">
                                <label class="form-label" for="addressLineTwo">Address Line 2</label>
                                <input class="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="addressLineTwo" type="text" name="addressLineTwo" onChange={handleChange} placeholder="Address Line 2" required />
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="form-group">
                                <label class="form-label" for="townCity">Town / City *</label>
                                <input class="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" name="city" onChange={handleChange} id="townCity" type="text"
                                    placeholder="Town / City" required="" />
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="form-group">
                                <label class="form-label" for="state">State *</label>
                                <input class="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" name="state" onChange={handleChange} id="state" type="text"
                                    placeholder="State" required="" />
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="form-group">
                                <label class="form-label" for="townCity">Country *</label>
                                <input class="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" name="city" onChange={handleChange} id="country" type="text"
                                    placeholder="Country" required="" />
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <div class="form-group">
                                <label class="form-label" for="zipPostCode">Pincode *</label>
                                <input class="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="zipPostCode" type="text" name='pincode' onChange={handleChange} placeholder="ZIP / Postcode" required="" />
                            </div>
                        </div>
                        {/* <div class="col-12">
                        <div class="form-group">
                            <label class="form-label" for="mobilePhone">Mobile Phone *</label>
                            <input class="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="mobilePhone" type="tel" name="altPhone" onChange={handleChange} placeholder="Mobile Phone" required="" />
                        </div>
                    </div> */}
                        <div class="col-12 mt-4 mb-2">
                            <div class="form-group">
                                <div class="form-check mb-3 d-flex flex-0 justify-content-start align-items-center gap-2">
                                    <input type="checkbox" class="form-check-input border-0 bg-dark shadow-none" id="isDeliveryAddr"
                                        style={{ width: "24px", height: "24px" }} />
                                    <label class="form-check-label" for="isDeliveryAddr">Default delivery address</label>
                                </div>
                                {/* <div class="form-check mb-3 d-flex flex-0 justify-content-start align-items-center gap-2">
                                <input type="checkbox" class="form-check-input bg-dark border-0 shadow-none" id="defaultShippingAddress"
                                    style={{ width: "24px", height: "24px" }} />
                                <label class="form-check-label" for="defaultShippingAddress">Default shipping address</label>
                            </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="mt-2 d-flex gap-3">
                        <button class="btn px-5 py-3 btn-danger" type="submit">
                            Clear
                        </button>
                        <button class="btn btn-dark px-5 py-3" type="submit">
                            Add Address
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default AddAddress;