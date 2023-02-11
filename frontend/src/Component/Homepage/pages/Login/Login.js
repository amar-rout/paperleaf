import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Meta from "../Meta";

import "./Login.css";

const Login = () => {

    const [passwordShown, setPasswordShown] = useState(false);
    const navigate = useNavigate()
    const isEmail = (email) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const loginURL = `${process.env.REACT_APP_SERVER_URL}/login`
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    const login = () => {
        if (user.email && user.password && isEmail(user.email) && user.password.length >= 8 && user.password.length <= 15) {
            axios.post(loginURL, user)
                .then(response => {
                    // updateUser(response.data.user)
                    setSuccessMessage("Login Successful");
                    setErrorMessage("");
                    navigate("/", { replace: true })
                }).catch(error => {
                    if (error.response) {
                        setErrorMessage(error.response.data.message)
                        setSuccessMessage("")
                    } else if (error.request) {
                        setSuccessMessage("");
                        setErrorMessage("Couldn't connect to server. Please try again later.");
                    } else {
                        setErrorMessage("Error" + error.message)
                        setSuccessMessage("")
                    }
                })
        } else {
            setSuccessMessage("");
            setErrorMessage("Please provide valid inputs");
        }
    }
    return (
        <>
            <Meta title="Login" />
            <Breadcrumb
                links={[
                    { name: 'Home', link: '/', active: false },
                    { name: 'Login', link: '/login', active: true }
                ]}
            />
            <div className="container my-5">
                <h4 className="mb-4 text-center">Login to Paperleaf</h4>
                <div className="row my-2">
                    <div className="col-1 col-md-2 col-lg-4"></div>
                    <div className="col-10 col-md-8 col-lg-4">
                        <div className="text-start start-0 p-0 m-0">
                            Don't have an account yet?
                            <Link to="/register" className="px-1 fw-semibold mx-1my-0 fs-small m-0" type="button">Register here</Link>
                        </div>
                        <div className="mt-4">
                            <label className="form-label">
                                Username
                            </label>
                            <div className="position-relative">
                                <i className="bi bi-envelope fs-lg position-absolute top-50 start-0 translate-middle-y text-dark opacity-80 ms-3"></i>
                                <input className="form-control form-control-lg px-4 ps-5 py-3 border-1 border-secondary rounded rounded-3 mb-3 fs-6 text-decoration-none shadow-none"
                                    type="text" name="email" value={user.email} onChange={handleChange} placeholder="Ener your Email or Phone" required={true}
                                    style={{ minHeight: "48px !important" }} />
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items center">
                            <label className="form-label">Password</label>
                            <Link to='/forgotPassword' className="text-dark fw-semibold link-warning" type="button">
                                <small>Forgot Password</small>
                            </Link>
                        </div>
                        <div className="input-group input-group-merge position-relative border border-1 border-secondary rounded-3 mb-3">
                            <input className="form-control form-control-lg border border-0 border-end border-dark ms-5 px-0 py-3 fs-6 text-decoration-none shadow-none" name="password"
                                type={passwordShown ? "text" : "password"}
                                value={user.password} onChange={handleChange} placeholder="Enter your Password"
                                autoComplete="off">
                            </input>
                            <i className="z-3 bi bi-key fs-lg position-absolute top-50 start-0 translate-middle-y text-dark link-dark opacity-80 ms-3"></i>
                            <button type="button" className="btn btn-sm input-group-text px-3" onClick={togglePassword}>
                                { passwordShown ?
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L5.6453 6.35239C3.97044 7.49179 2.7234 9.27384 2.28017 11.3979C2.22377 11.6682 2.39718 11.9331 2.6675 11.9895C2.93782 12.0459 3.20268 11.8725 3.25909 11.6021C3.6629 9.66699 4.82367 8.06291 6.36714 7.07422L7.95336 8.66045C7.07297 9.29611 6.5 10.3311 6.5 11.5C6.5 13.433 8.067 15 10 15C11.1689 15 12.2039 14.427 12.8396 13.5466L17.1464 17.8536C17.3417 18.0488 17.6583 18.0488 17.8536 17.8536C18.0488 17.6583 18.0488 17.3417 17.8536 17.1464L2.85355 2.14645ZM12.1194 12.8265C11.6773 13.5314 10.8934 14 10 14C8.61929 14 7.5 12.8807 7.5 11.5C7.5 10.6066 7.96863 9.82265 8.67348 9.38057L12.1194 12.8265ZM10.1235 8.00214L13.4979 11.3765C13.4342 9.54169 11.9583 8.06576 10.1235 8.00214ZM10 6C9.43016 6 8.87149 6.07353 8.33419 6.21285L7.53113 5.40979C8.31349 5.14331 9.14485 5 10 5C13.6934 5 16.9425 7.67312 17.7199 11.3979C17.7763 11.6682 17.6029 11.933 17.3325 11.9895C17.0622 12.0459 16.7974 11.8725 16.7409 11.6021C16.0574 8.32688 13.2057 6 10 6Z" fill="#e28743" />
                                    </svg>
                                    :
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.25909 11.6021C3.94254 8.32689 6.79437 6 10 6C13.2057 6 16.0574 8.32688 16.7409 11.6021C16.7974 11.8725 17.0622 12.0459 17.3325 11.9895C17.6029 11.933 17.7763 11.6682 17.7199 11.3979C16.9425 7.67312 13.6934 5 10 5C6.3066 5 3.05742 7.67311 2.28017 11.3979C2.22377 11.6682 2.39718 11.933 2.6675 11.9895C2.93782 12.0459 3.20268 11.8725 3.25909 11.6021ZM10 8C8.067 8 6.5 9.567 6.5 11.5C6.5 13.433 8.067 15 10 15C11.933 15 13.5 13.433 13.5 11.5C13.5 9.567 11.933 8 10 8ZM7.5 11.5C7.5 10.1193 8.61929 9 10 9C11.3807 9 12.5 10.1193 12.5 11.5C12.5 12.8807 11.3807 14 10 14C8.61929 14 7.5 12.8807 7.5 11.5Z" fill="#212121" />
                                    </svg>
                                }
                            </button>
                        </div>
                        <div className="d-flex justify-content-between align-items center mb-4">
                            <div className="form-check my-2">
                                <input type="checkbox" className="form-check-input" id="remember" />
                                <label className="form-check-label" htmlFor="remember">
                                    Remember me
                                </label>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items center">
                            <button className="btn btn-md btn-default btn-warning w-100 my-2 py-3 rounded rounded-3 fw-semibold" type="button" onClick={login}>Login</button>
                        </div>
                        <div className="text-danger text-center my-1">
                            {errorMessage}
                        </div>
                        <div className="text-success text-center">
                            {successMessage}
                        </div>
                    </div>
                    <div className="col-1 col-md-2 col-lg-4"></div>
                </div>
            </div>
        </>
    )
}

export default Login;



/* <form>
my-2 p-0 px-4 w-100 rounded-pill input-group
    <div className="row">
        <div className="col-12">
            <div className="mb-4">

                <!-- Label -->
                <label className="form-label">
                    Email Address
                </label>

                <!-- Input -->
                <input type="email" className="form-control" placeholder="Your email address">
            </div>
        </div>

        <div className="col-12">
            <!-- Password -->
            <div className="mb-4">

                <div className="row">
                    <div className="col">

                        <!-- Label -->
                        <label className="form-label">
                            Password
                        </label>
                    </div>

                    <div className="col-auto">

                        <!-- Help text -->
                        <a href="./reset-password-illustration.html" className="form-text small text-muted link-primary">Forgot password</a>
                    </div>
                </div> <!-- / .row -->

                <!-- Input -->
                <div className="input-group input-group-merge">
                    <input type="password" className="form-control" autocomplete="off" data-toggle-password-input="" placeholder="Your password">

                        <button type="button" className="input-group-text px-4 text-secondary link-primary" data-toggle-password=""></button>
                </div>
            </div>
        </div>
    </div> <!-- / .row -->

    <div className="form-check">

        <!-- Input -->
        <input type="checkbox" className="form-check-input" id="remember">

            <!-- Label -->
            <label className="form-check-label" for="remember">
                Remember me
            </label>
    </div>

    <div className="row align-items-center text-center">
        <div className="col-12">

            <!-- Button -->
            <button type="button" className="btn w-100 btn-primary mt-6 mb-2">Sign in</button>
        </div>

        <div className="col-12">

            <!-- Link -->
            <small className="mb-0 text-muted">Don't have an account yet? <a href="./sign-up-basic.html" className="fw-semibold">Sign up</a></small>
        </div>
    </div> <!-- / .row -->
</form> */