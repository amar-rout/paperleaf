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
                <div className="row border border-1 rounded-4">
                    <div className="mt-3 mb-2">
                        <span className="mb-0 h5">Basic Information</span>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label className="form-label" htmlFor="firstName">First Name *</label>
                            <input className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none"
                                type="text" name="name" placeholder="First name" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label className="form-label" htmlFor="lastName">Last Name *</label>
                            <input className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="lastName" type="text" placeholder="Last Name" required />
                        </div>
                    </div>
                    {/* <div className="col-12">
                        <div className="form-group">
                            <label className="form-label" htmlFor="emailAddress">Email Address *</label>
                            <input className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="emailAddress" type="email" placeholder="Email Address" required />
                        </div>
                    </div> */}
                    {/* <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label className="form-label" htmlFor="accountPassword">
                                Current Password *
                            </label>
                            <input className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="accountPassword" type="password" placeholder="Current Password *" required="" />
                        </div>
                    </div> */}
                    {/* <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label className="form-label" htmlFor="AccountNewPassword">
                                New Password *
                            </label>
                            <input className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="AccountNewPassword" type="password" placeholder="New Password *" required="" />
                        </div>
                    </div> */}
                    <div className="col-12 col-lg-6">
                        <div className="form-group">
                            <label className="form-label" >Date of Birth</label>
                            <input className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="AccountNewPassword"
                                type="date" placeholder="Date of birth" required />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="form-group">
                            <label className="form-label">Gender</label>
                            <div>
                                <div className="btn-group" role="group" aria-label="Select gender">
                                    <input type="radio" className="btn-check form-control" name="btnradio" id="male" autoComplete="off" />
                                    <label className="btn btn-outline-dark px-4 py-3 me-2 rounded-2" htmlFor="male">Male</label>
                                    <input type="radio" className="btn-check form-control" name="btnradio" id="female" autoComplete="off" />
                                    <label className="btn btn-outline-dark px-4 py-3 ms-2 rounded-2" htmlFor="female">Female</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-3 mt-3 mt-md-0">
                        <button className="btn btn-default btn-outline-dark px-5 py-3 me-2" type="submit">
                            Edit Profile
                        </button>
                        <button className="btn px-5 py-3 bg-success text-white ms-2 disabled" type="submit">
                            Update Profile
                        </button>
                    </div>
                </div>
                <div className="row mt-3 border border-1 rounded-4">
                    <div className="d-flex justify-content-between align-items-center mt-3 mb-2">
                        <span className="mb-0 h5">Update profile photo</span>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label className="form-label" htmlFor="accountAvatar">
                                Upload your profile photo *
                            </label>
                            <input className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="accountAvatar" type="file" placeholder="Select your avatar" />
                        </div>
                        <div className="">
                        <button className="btn px-3 mb-3 px-md-5 py-3 bg-danger text-white me-2" type="submit">
                                Remove Profile Photo
                            </button>
                            <button className="btn ms-2 px-3 mb-3 px-md-5 py-3 bg-success text-white" type="submit">
                                Upload Profile Photo
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
                    <div className="col-12">
                        <div className="form-group">
                            <div className="form-group">
                                <label className="form-label" htmlFor="emailAddress">Email Address *</label>
                                <input className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="emailAddress" type="email" placeholder="Email Address" required />
                            </div>
                        </div>
                        <div className="">
                            <button className="btn me-2 px-3 mb-3 px-md-5 py-3 bg-success text-white" type="submit">
                                Update Email
                            </button>
                        </div>
                    </div>
                </div>
                <div className="row border border-1 rounded-4 mt-3">
                    <div className="d-flex justify-content-between align-items-center mt-3 mb-2">
                        <h5 className="mb-0">Update Password</h5>
                    </div>
                    <div className="col-12">
                        <div className="form-group">
                            <label className="form-label" htmlFor="accountPassword">
                                Current Password *
                            </label>
                            <input className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="accountPassword" type="password" placeholder="Current Password *" required="" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label className="form-label" htmlFor="AccountNewPassword">
                                New Password *
                            </label>
                            <input className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="AccountNewPassword" type="password" placeholder="New Password *" required="" />
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label className="form-label" htmlFor="AccountConfirmPassword">
                                Confirm Password *
                            </label>
                            <input className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="AccountConfirmPassword" type="password" placeholder="New Password *" required="" />
                        </div>
                    </div>
                    <div className="">
                        <button className="btn px-5 py-3 mb-3 bg-success text-white" type="submit">
                            Update Password
                        </button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default UserProfile;