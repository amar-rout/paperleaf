import React, { useState } from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast } from "react-toastify";
const ForgotPassword = () => {

    const navigate = useNavigate();

    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const [user, setUser] = useState({
        email: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        });
    }

    const resetPassword = () => {
        setLoading(true);
        axios.post('/api/users/profile/requestPasswordReset', user)
            .then(response => {
                console.log(response.data);
                setMessage(response.data.message);
                toast.success(response.data.message);
                setLoading(false);
                // navigate('/login');
            }).catch(error => {
                setLoading(false);
                if (error.response) {

                } else if (error.request) {

                } else {

                }
            })
    }

    return (
        <>
            <Breadcrumb
                links={[
                    { name: 'Home', link: '/', active: false },
                    { name: 'Forgot Password', link: '/forgotPassword', active: true }
                ]}
            />
            <div className="container my-5">
                <div className="row">
                    <div className="col-12 col-md-3"></div>
                    <div className="col-12 col-md-6">
                        <h4 class="pt-3 pb-2 pb-lg-3">Forgot your password?</h4>
                        <h6 class="pb-2">Change your password in three easy steps. This helps to keep your new password secure.</h6>
                        <ul class="list-unstyled pb-2 pb-lg-0 mb-2 mb-lg-5 small">
                            <li class="d-flex mb-2"><span class="text-warning fw-semibold me-2">1.</span>Fill in your email address below.</li>
                            <li class="d-flex mb-2"><span class="text-warning fw-semibold me-2">2.</span>We'll email you a temporary link.</li>
                            <li class="d-flex mb-2"><span class="text-warning fw-semibold me-2">3.</span>Use the link to change your password on our secure website.</li>
                        </ul>
                        <div class="card border-0 bg-secondary-subtle mb-5">
                            <div class="card-body">
                                <div class="mb-2">
                                    <label className="mb-1 ms-1" htmlFor="email">Email</label>
                                    <div class="position-relative">
                                        <i class="bi bi-envelope fs-lg position-absolute top-50 start-0 translate-middle-y text-warning opacity-80 ms-3"></i>
                                        <input class="form-control border-light px-4 ps-5 py-3 rounded-3 shadow-none" name="email" onChange={handleChange} id="email" type="email" placeholder="Email address" required />
                                    </div>
                                </div>
                                <button class="btn btn-default bg-warning fw-normal fs-6" type="button"
                                    onClick={resetPassword}>
                                    {
                                        loading &&
                                        <div class="spinner-grow spinner-grow-sm" role="status">
                                            <span class="visually-hidden">Loading...</span>
                                        </div>
                                    } 
                                    Send
                                </button>
                            </div>
                            <div className="text-start ms-2 mb-3 small">
                                Click here to
                                <Link to="/login" className="px-1 fw-bold small text-muted link-dark" type="button">Sign In</Link>
                            </div>
                        </div>
                        {
                            message &&
                            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                                <strong>{message}</strong>
                                <br/><br/>
                                Please check your inbox for the link reset the password
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        }
                    </div>
                    <div className="col-12 col-md-3"></div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword;