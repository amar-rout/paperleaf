import React, { useEffect, useState } from 'react';
import Meta from '../../Meta';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const EditAddress = () => {

    const {state} = useLocation();

    const [loginUser, setLoginUser] = useState({});
    const [loadAddress, setLoadAddress] = useState(false);
    const [addressInputErrorMessage, setAddressInputErrorMessage] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        setLoginUser(JSON.parse(localStorage.getItem("user")));
    }, [setLoginUser]);

    const [address, setAddress] = useState(state.address);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAddress((address) => ({
            ...address,
            [name]: value
        }));
    };

    const handleUpdateAddress = () => {
        console.log(address);
        setLoadAddress(true);
        if (address) {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${loginUser.token}`,
                },
            };
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
            axios.patch(`/api/users/profile/editAddress/${state.address._id}`, address, config)
                .then(response => {
                    toast.success("Address added successfully.");
                    setLoadAddress(false);
                    localStorage.setItem('user', JSON.stringify(response.data));
                    navigate('/user/address')
                }).catch(error => {
                    setLoadAddress(false);
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
        } else {
            setAddressInputErrorMessage("Please provide valid mobile number");
        }
    }

    return (
        <>
            <Meta title="Add new address" />
            <div className="container">
                <div className="d-flex justify-content-between align-items-center gap-5 mb-4">
                    <h4 className="mb-0">Update address</h4>
                </div>
                {/* <form onSubmit={handleSubmit}> */}
                <div className="row">
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
                    <div className="col-12 col-md-6">
                        {
                            address.addrType === 'Other' &&
                            <div className="form-group">
                                <label className="form-label" htmlFor="addressName">Address Name *</label>
                                <input className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none"
                                    type="text" value={address.addrName} onChange={handleChange} name="addrName" placeholder="Address name" required />
                            </div>
                        }
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label className="form-label" htmlFor="personName">C/O Name *</label>
                            <input className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none"
                                id="personName" value={address.personName} type="text" onChange={handleChange} name="personName" placeholder="C/O Name" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label className="form-label" htmlFor="mobilePhone">Phone *</label>
                            <input value={address.altPhone} className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="mobilePhone" type="tel" name="altPhone" onChange={handleChange} placeholder="Mobile Phone" required />
                        </div>
                    </div>
                    {/* <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label className="form-label" htmlFor="lastName">Last Name *</label>
                            <input className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none"
                                    id="lastName" name="lname" type="text" placeholder="Last Name" required />
                        </div>
                    </div> */}
                    {/* <div className="col-12">
                        <div className="form-group">
                            <label className="form-label" htmlFor="emailAddress">Email Address *</label>
                            <input className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="emailAddress" type="email" placeholder="Email Address" required />
                        </div>
                    </div> */}
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label className="form-label" htmlFor="landmark">Landmark *</label>
                            <input className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none"
                                name="landmark" value={address.landmark} onChange={handleChange} id="landmark" type="text" placeholder="Near By Location" required />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label className="form-label" htmlFor="addrLineOne">Address Line 1 *</label>
                            <input value={address.addrLineOne} className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="addrLineOne" name="addrLineOne" onChange={handleChange} type="text" placeholder="Address Line 1" required />
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label className="form-label" htmlFor="addrLineTwo">Address Line 2</label>
                            <input value={address.addrLineTwo} className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="addrLineTwo" type="text" name="addrLineTwo" onChange={handleChange} placeholder="Address Line 2" required />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label className="form-label" htmlFor="townCity">Town / City *</label>
                            <input value={address.city} className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" name="city" onChange={handleChange} id="townCity" type="text"
                                placeholder="Town / City" required />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label className="form-label" htmlFor="state">State *</label>
                            <input value={address.state} className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" name="state" onChange={handleChange} id="state" type="text"
                                placeholder="State" required />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label className="form-label" htmlFor="country">Country *</label>
                            <input value={address.country} className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" name="country" onChange={handleChange} id="country" type="text"
                                placeholder="Country" required />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label className="form-label" htmlFor="zipPostCode">Pincode *</label>
                            <input value={address.pincode} className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="zipPostCode" type="text" name='pincode' onChange={handleChange} placeholder="ZIP / Postcode" required="" />
                        </div>
                    </div>
                    {/* <div className="col-12">
                        <div className="form-group">
                            <label className="form-label" htmlFor="mobilePhone">Mobile Phone *</label>
                            <input className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="mobilePhone" type="tel" name="altPhone" onChange={handleChange} placeholder="Mobile Phone" required="" />
                        </div>
                    </div> */}
                    <div className="col-12 mt-4 mb-2">
                        <div className="form-group">
                            <div className="form-check mb-3 d-flex flex-0 justify-content-start align-items-center gap-2">
                                <input checked={address.isDeliveryAddr} type="checkbox" className="form-check-input border-0 bg-dark shadow-none" id="isDeliveryAddr"
                                    name="isDeliveryAddr" onChange={() => { setAddress({ ...address, isDeliveryAddr: !address.isDeliveryAddr }) }} style={{ width: "24px", height: "24px" }} />
                                <label className="form-check-label" htmlFor="isDeliveryAddr">Default delivery address</label>
                            </div>
                            {/* <div className="form-check mb-3 d-flex flex-0 justify-content-start align-items-center gap-2">
                                <input type="checkbox" className="form-check-input bg-dark border-0 shadow-none" id="defaultShippingAddress"
                                    style={{ width: "24px", height: "24px" }} />
                                <label className="form-check-label" htmlFor="defaultShippingAddress">Default shipping address</label>
                            </div> */}
                        </div>
                    </div>
                </div>
                {
                    addressInputErrorMessage &&
                    <div className='my-2'>
                        {addressInputErrorMessage}
                    </div>
                }
                <div className="mt-2 d-flex gap-3">
                    {
                        !loadAddress ?
                            <button className="btn btn-dark px-5 py-3 fs-6 fw-normal" type="button"
                            onClick={handleUpdateAddress}>
                                Save Address
                            </button>
                            :
                            <button disabled={loadAddress} className="btn btn-success px-4 px-md-5 py-3" type="button">
                                <span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                Saving...
                            </button>
                    }

                </div>
                {/* </form> */}
            </div>
        </>
    )
}

export default EditAddress;