import React from 'react';
// import Breadcrumb from '../../Breadcrumb/Breadcrumb';
import Meta from '../../Meta';

import "./UserSetting.css";

const UserSetting = () => {
    return (
        <>
            <Meta title="User Profile" />
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="mb-0">Settings</h4>
                </div>
                <div class="row gap-3">
                    <div class="col-12 col-md-6">
                        <div className="card border-1 scroll-mt-3" id="deleteAccountSection">
                            <div className="card-header">
                                <span className="mb-0 h4">Deactivate Account</span>
                            </div>
                            <div className="card-body">
                                <div className="alert text-bg-light d-flex align-items-center" role="alert">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="32" width="32" className="me-3"><path d="M23.39,10.53,13.46.6a2.07,2.07,0,0,0-2.92,0L.61,10.54a2.06,2.06,0,0,0,0,2.92h0l9.93,9.92A2,2,0,0,0,12,24a2.07,2.07,0,0,0,1.47-.61l9.92-9.92A2.08,2.08,0,0,0,23.39,10.53ZM11,6.42a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Zm1.05,11.51h0a1.54,1.54,0,0,1-1.52-1.47A1.47,1.47,0,0,1,12,14.93h0A1.53,1.53,0,0,1,13.5,16.4,1.48,1.48,0,0,1,12.05,17.93Z" style={{ fill: "#eed202" }}></path></svg>
                                    </div>
                                    <div>
                                        <h6 className="mb-0">If you deactivate your account, you will loose some functionality.</h6>
                                        Take a backup of your data.
                                    </div>
                                </div>
                                <div className="mb-3 mt-5">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input form_check_input_checkbox bg-secondary border-0 shadow-none" id="deactivateAccount" />
                                        <label className="form-check-label" for="deactivateAccount">
                                            I confirm that I'd like to deactivate my account
                                        </label>
                                    </div>
                                </div>
                                <div className="text-end mt-3">
                                    <button type="button" className="btn btn-warning px-2 px-md-5 py-3">Deactivate Account</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div className="card border-1 scroll-mt-3" id="deleteAccountSection">
                            <div className="card-header">
                                <span className="mb-0 h4">Delete Account</span>
                            </div>
                            <div className="card-body">
                                <div className="alert text-bg-light d-flex align-items-center" role="alert">
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="32" width="32" className="me-3"><path d="M23.39,10.53,13.46.6a2.07,2.07,0,0,0-2.92,0L.61,10.54a2.06,2.06,0,0,0,0,2.92h0l9.93,9.92A2,2,0,0,0,12,24a2.07,2.07,0,0,0,1.47-.61l9.92-9.92A2.08,2.08,0,0,0,23.39,10.53ZM11,6.42a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Zm1.05,11.51h0a1.54,1.54,0,0,1-1.52-1.47A1.47,1.47,0,0,1,12,14.93h0A1.53,1.53,0,0,1,13.5,16.4,1.48,1.48,0,0,1,12.05,17.93Z" style={{ fill: "#D0342C" }}></path></svg>
                                    </div>
                                    <div>
                                        <h6 className="mb-0">If you delete your account, you will lose all your data</h6>
                                        Take a backup of your data.
                                    </div>
                                </div>
                                <div className="mb-3 mt-5">
                                    <div className="form-check">
                                        <input type="checkbox" className="form-check-input form_check_input_checkbox bg-secondary border-0 shadow-none" id="deleteAccount" />
                                        <label className="form-check-label" for="deleteAccount">
                                            I confirm that I'd like to delete my account
                                        </label>
                                    </div>
                                </div>
                                <div className="text-end mt-3">
                                    <button type="button" className="btn btn-danger px-2 px-md-5 py-3">Delete Account</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="mt-4 mb-2">
                        <span className="mb-0 h5">Basic Information</span>
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
                    <div class="col-12 col-lg-6">
                        <div class="form-group">
                            <label class="form-label" >Date of Birth</label>
                            <input class="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="AccountNewPassword"
                                type="date" placeholder="Date of birth" required />
                        </div>
                    </div>
                    <div className="mb-3">
                        <button class="btn px-5 py-3 bg-dark text-white" type="submit">
                            Update Profile
                        </button>
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default UserSetting;