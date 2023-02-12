import React from 'react';
// import Breadcrumb from '../../Breadcrumb/Breadcrumb';
import Meta from '../../Meta';

const UserProfile = () => {
    return (
        <>
            <Meta title="User Profile" />
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4 className="mb-0">My Profile</h4>
                </div>
                <div class="row">
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
                    <div class="col-12">
                        <div class="form-group">
                            <label class="form-label" for="emailAddress">Email Address *</label>
                            <input class="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="emailAddress" type="email" placeholder="Email Address" required />
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="form-group">
                            <label class="form-label" for="accountPassword">
                                Current Password *
                            </label>
                            <input class="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="accountPassword" type="password" placeholder="Current Password *" required="" />
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="form-group">
                            <label class="form-label" for="AccountNewPassword">
                                New Password *
                            </label>
                            <input class="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="AccountNewPassword" type="password" placeholder="New Password *" required="" />
                        </div>
                    </div>
                    <div class="col-12 col-lg-6">
                        <div class="form-group">
                            <label class="form-label" >Date of Birth</label>
                            <input class="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="AccountNewPassword"
                                type="date" placeholder="Date of birth" required />
                        </div>
                    </div>
                    <div class="col-12 col-lg-6">
                        <div class="form-group">
                            <label class="form-label">Gender</label>
                            <div>
                                <div class="btn-group" role="group" aria-label="Select gender">
                                    <input type="radio" class="btn-check form-control" name="btnradio" id="male" autocomplete="off" />
                                    <label class="btn btn-outline-dark px-4 py-3" for="male">Male</label>

                                    <input type="radio" class="btn-check form-control" name="btnradio" id="female" autocomplete="off" />
                                    <label class="btn btn-outline-dark px-4 py-3" for="female">Female</label>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="my-2">
                        <button class="btn px-5 py-3 bg-dark text-white" type="submit">
                            Update Profile
                        </button>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="d-flex justify-content-between align-items-center mt-4 mb-2">
                        <h5 className="mb-0">Update Password</h5>
                    </div>
                    <div class="col-12 mt-3">
                        <div class="form-group">
                            <label class="form-label" for="accountPassword">
                                Current Password *
                            </label>
                            <input class="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="accountPassword" type="password" placeholder="Current Password *" required="" />
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="form-group">
                            <label class="form-label" for="AccountNewPassword">
                                New Password *
                            </label>
                            <input class="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="AccountNewPassword" type="password" placeholder="New Password *" required="" />
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="form-group">
                            <label class="form-label" for="AccountConfirmPassword">
                                Confirm Password *
                            </label>
                            <input class="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="AccountConfirmPassword" type="password" placeholder="New Password *" required="" />
                        </div>
                    </div>
                    <div className="my-4">
                        <button class="btn px-5 py-3 bg-dark text-white" type="submit">
                            Update Password
                        </button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default UserProfile;