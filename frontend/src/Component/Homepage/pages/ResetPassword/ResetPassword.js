import React, { useState } from "react"
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { useLocation, useNavigate } from "react-router-dom";
import axios from 'axios';
// import Meta from "../Meta";

const ResetPassword = () => {
    const search = useLocation().search;
    const email = new URLSearchParams(search).get('email');
    const resetToken = new URLSearchParams(search).get('resetToken');

    const navigate = useNavigate();

    const [userPassword, setUserPassword] = useState({
        newPassword: "",
        confPassword: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserPassword({
            ...userPassword,
            [name]: value
        });
    }

    const handleResetPassword = () => {
        axios.put(`/api/users/profile/resetPassword?email=${email}&resetToken=${resetToken}`, userPassword)
            .then(response => {
                navigate('/login');
            }).catch(error => {
                if (error.response) {

                } else if (error.request) {

                } else {

                }
            })
    }

    return (
        <>
            {/* <Meta title="ResetPassword" /> */}
            <Breadcrumb
                links={[
                    { name: 'Home', link: '/', active: false },
                    { name: 'ResetPassword', link: '/resetPassword', active: true }
                ]}
            />
            <div className="container">
                <div className="row px-2 px-md-5 mx-2 mx-md-5">
                    {/* <div className="d-flex justify-content-between align-items-center mt-4 mb-2">
                        
                    </div> */}
                    {/* <div class="col-12">
                        <div class="form-group">
                            <label class="form-label" for="accountPassword">
                                Current Password *
                            </label>
                            <input class="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="accountPassword" type="password" placeholder="Current Password *" required="" />
                        </div>
                    </div> */}
                    <div class="col-12 col-md-4"></div>
                    <div class="col-12 col-md-4 mt-5">
                        <h4 className="mb-4">Reset password</h4>
                        <div class="form-group">
                            <label class="form-label" for="AccountNewPassword">
                                New Password *
                            </label>
                            <input class="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="AccountNewPassword" type="password" placeholder="New Password *" required
                                name="newPassword" onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div class="col-12 col-md-4"></div>
                    <div class="col-12 col-md-4"></div>
                    <div class="col-12 col-md-4">
                        <div class="form-group">
                            <label class="form-label" for="AccountConfirmPassword">
                                Confirm Password *
                            </label>
                            <input class="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="AccountConfirmPassword" type="password" placeholder="New Password *" required
                                name="confPassword" onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div class="col-12 col-md-4"></div>
                    <div class="col-12 col-md-4"></div>
                    <div class="col-12 col-md-4">
                        <div className="mb-4">
                            <button class="btn px-5 py-3 bg-dark text-white" type="button" onClick={handleResetPassword} >
                                Save
                            </button>
                        </div>
                    </div>
                    <div class="col-12 col-md-4"></div>

                </div>
            </div>
        </>
    )
}

export default ResetPassword;