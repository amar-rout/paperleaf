import React from 'react';
// import Breadcrumb from '../../Breadcrumb/Breadcrumb';
import Meta from '../../Meta';

const UserProfile = () => {
    return (
        <>
            <Meta title="User Profile" />
            <div className="container">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="mb-0">My Profile</h4>
                </div>
                <div class="row border border-1 rounded-4">
                    <div className="mt-3 mb-2">
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
                    {/* <div class="col-12">
                        <div class="form-group">
                            <label class="form-label" for="emailAddress">Email Address *</label>
                            <input class="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="emailAddress" type="email" placeholder="Email Address" required />
                        </div>
                    </div> */}
                    {/* <div class="col-12 col-md-6">
                        <div class="form-group">
                            <label class="form-label" for="accountPassword">
                                Current Password *
                            </label>
                            <input class="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="accountPassword" type="password" placeholder="Current Password *" required="" />
                        </div>
                    </div> */}
                    {/* <div class="col-12 col-md-6">
                        <div class="form-group">
                            <label class="form-label" for="AccountNewPassword">
                                New Password *
                            </label>
                            <input class="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="AccountNewPassword" type="password" placeholder="New Password *" required="" />
                        </div>
                    </div> */}
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
                    <div className="mb-3">
                        <button class="btn px-5 py-3 bg-dark text-white" type="submit">
                            Update Profile
                        </button>
                    </div>
                </div>
                <div className="row mt-3 border border-1 rounded-4">
                    <div className="d-flex justify-content-between align-items-center mt-3 mb-2">
                        <span className="mb-0 h5">Update profile photo</span>
                    </div>
                    <div class="col-12">
                        <div class="form-group">
                            <label class="form-label" for="accountAvatar">
                                Upload your profile photo *
                            </label>
                            <input class="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="accountAvatar" type="file" placeholder="Select your avatar" />
                        </div>
                        <div className="">
                            <button class="btn me-2 px-3 mb-3 px-md-5 py-3 bg-dark text-white" type="submit">
                                Upload Profile Photo
                            </button>
                            <button class="btn px-3 mb-3 px-md-5 py-3 bg-danger text-white" type="submit">
                                Remove Profile Photo
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row mt-3 border border-1 rounded-4">
                    <div className="mt-3 mb-2">
                        <span className="mb-0 h5">Update Email ID</span><br />
                        <span className="mb-0">Your current Email ID : </span>
                        <span className='mb-0 h6'>amarendra.rout@gmail.com</span>
                    </div>
                    <div class="col-12">
                        <div class="form-group">
                            <div class="form-group">
                                <label class="form-label" for="emailAddress">Email Address *</label>
                                <input class="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="emailAddress" type="email" placeholder="Email Address" required />
                            </div>
                        </div>
                        <div className="">
                            <button class="btn me-2 px-3 mb-3 px-md-5 py-3 bg-dark text-white" type="submit">
                                Update Email
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row border border-1 rounded-4 mt-3">
                    <div className="d-flex justify-content-between align-items-center mt-3 mb-2">
                        <h5 className="mb-0">Update Password</h5>
                    </div>
                    <div class="col-12">
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
                    <div className="">
                        <button class="btn px-5 py-3 mb-3 bg-dark text-white" type="submit">
                            Update Password
                        </button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default UserProfile;