import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Meta from "../Meta";

import { useSelector, useDispatch } from 'react-redux';
import {
    registerAsync,
    selectStatus,
    selectErrorMessage,
    clearState
} from "../../../../app/userSlice";

import "./Register.css";

const Register = () => {

    const registerStatus = useSelector(selectStatus);
    const registerErrorMessage = useSelector(selectErrorMessage);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [passwordShown, setPasswordShown] = useState(false);
    const [confirmPasswordShown, setConfirmPasswordShown] = useState(false);
    
    const [errorMessage, setErrorMessage] = useState("");
    const [user, setUser] = useState({
        fname: "",
        mname: "",
        lname: "",
        email: "",
        phone: "",
        gender: "",
        password: "",
        reEnterPassword: ""
    })
    const isEmail = (email) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
    const isPhone = (phone) => /^[0-9]{10}$/i.test(phone);
    
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
    
    const toggleConfirmPassword = () => {
        setConfirmPasswordShown(!confirmPasswordShown);
    }

    useEffect(()=> {
        return() => {
            dispatch(clearState());
        };
    }, [dispatch]);

    useEffect(() => {
        if (registerStatus === "LOADED") {
            dispatch(clearState());
            navigate("/home");
        }
        if (registerStatus === "ERROR") {
            setErrorMessage(registerErrorMessage);
            dispatch(clearState());
        }
    }, [registerStatus, registerErrorMessage, dispatch, navigate]);

    const register = () => {
        const { fname, mname, lname, email, phone, gender, password, reEnterPassword } = user;
        let name = "";
        if (fname && lname && email && isEmail(email) && phone && isPhone(phone) && password && (password === reEnterPassword) && password.length >= 8 && password.length <= 15) {
            if (mname) {
                name = `${fname} ${mname} ${lname}`;
            } else {
                name = `${fname} ${lname}`;
            }
            dispatch(registerAsync({ fname, mname, lname, name, email, phone, gender, password }));

        } else {
            setErrorMessage("Please provide valid input/s");
        }
    }
    return (
        <>
            <Meta title="Login" />
            <Breadcrumb
                links={[
                    { name: 'Home', link: '/', active: false },
                    { name: 'Register', link: '/register', active: true }
                ]}
            />
            <div className="container my-5">
                <h4 className="text-decoration-underline text-center mb-3">Register</h4>
                <div className="row">
                    <div className="col-1 col-md-2 col-lg-2"></div>
                    <div className="col-10 col-md-8 col-lg-8">
                        <div className="row">
                            <div className="col-12">
                                <div className="text-start start-0 m-0 my-3 p-0">
                                    Already have an account?
                                    <Link to="/login" className="px-1 fw-bold fs-small text-muted link-dark" type="button">Sign In</Link>
                                </div>
                            </div>
                            <div className="col-12">
                            </div>
                            <div className="col-12 col-md-4">
                                <label className="form-label">First name *</label>
                                <input className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none"
                                    type="text" name="fname" value={user.fname} onChange={handleChange} placeholder="Enter your first name"
                                />
                            </div>
                            <div className="col-12 col-md-4">
                                <label className="form-label">Middle name</label>
                                <input className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none"
                                    type="text" name="mname" value={user.mname} onChange={handleChange} placeholder="Enter your last name"
                                />
                            </div>
                            <div className="col-12 col-md-4">
                                <label className="form-label">Last name *</label>
                                <input className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none"
                                    type="text" name="lname" value={user.lname} onChange={handleChange} placeholder="Enter your last name"
                                />
                            </div>
                            <div className="col-12 col-md-12">
                                <label className="form-label">Email *</label>
                                <input className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none"
                                    type="text" name="email" value={user.email} onChange={handleChange} placeholder="Enter your Email or Phone" required
                                />
                            </div>
                            <div className="col-12 col-md-6">
                                <label className="form-label">Phone *</label>
                                <div className="input-group input-group-merge border border-0">
                                    <button type="button" disabled className="btn border-1 border-secondary py-3 px-3 fs-6 rounded-0 rounded-start-3 mb-3 text-decoration-none shadow-none fw-normal">IN (+91)</button>
                                    <input className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-end-3 mb-3 text-decoration-none shadow-none"
                                        name="phone" type="tel" pattern="[0-9]{10}" minLength="10" maxLength="10" required
                                        value={user.phone} onChange={handleChange} placeholder="Enter your phone" autoComplete="off" />
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <label className="form-label">Gender</label>
                                <div className="btn-group w-100 opacity-1 mb-3" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" className="btn-check" name="gender" value="Male" id="btnradio1" checked={user.gender === "Male"} onChange={handleChange} autoComplete="off" />
                                    <label className="btn btn-outline-dark py-3 rounded-2 me-2 fw-normal" htmlFor="btnradio1">Male</label>

                                    <input type="radio" className="btn-check" name="gender" value="Female" id="btnradio2" checked={user.gender === "Female"} onChange={handleChange} autoComplete="off" />
                                    <label className="btn btn-outline-dark py-3 rounded-2 ms-2 fw-normal" htmlFor="btnradio2">Female</label>

                                    {/* <input type="radio" className="btn-check" name="gender" value="Others" id="btnradio3" checked={user.gender === "Others"} onChange={handleChange} autoComplete="off" />
                                    <label className="btn btn-outline-dark  py-3" htmlFor="btnradio3">Others</label> */}
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <label className="form-label">Password</label>
                                <div className="input-group input-group-merge border border-0 mb-3">
                                    <input className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-start-3 mb-3 text-decoration-none shadow-none" name="password"
                                        type={passwordShown ? "text" : "password"}
                                        value={user.password} onChange={handleChange} placeholder="Enter your Password"
                                        autoComplete="off" />
                                    <button type="button" className="btn border-1 border-secondary py-3 px-3 fs-6 rounded-0 rounded-end-3 mb-3 text-decoration-none shadow-none" onClick={togglePassword}>
                                        {passwordShown ?
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
                            </div>
                            <div className="col-12 col-md-6">
                                <label className="form-label">Confirm Password</label>
                                <div className="input-group input-group-merge border border-0 mb-3">
                                    <input className="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-start-3 mb-3 text-decoration-none shadow-none"
                                        name="reEnterPassword" type={confirmPasswordShown ? "text" : "password"}
                                        value={user.reEnterPassword} onChange={handleChange} placeholder="Confirm password"
                                        autoComplete="off" />
                                    <button type="button" className="btn border-1 border-secondary py-3 px-3 fs-6 rounded-0 rounded-end-3 mb-3 text-decoration-none shadow-none" onClick={toggleConfirmPassword}>
                                        {confirmPasswordShown ?
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
                            </div>
                            <div className="col-12">
                                <div className="text-danger text-center my-1">
                                    {errorMessage}
                                </div>
                            </div>
                            <div className="col-12 text-center">
                                {registerStatus !== 'LOADING' ?
                                    <button className="btn btn-md btn-default btn-warning rounded-2 fw-normal fs-6" type="button" onClick={register}>Register</button>
                                    :
                                    <button className="btn btn-md btn-default btn-warning rounded-2 fw-normal fs-6" type="button" disabled>
                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                        Loading...
                                    </button>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-1 col-md-2 col-lg-2"></div>
                </div>
            </div>
        </>
    )
}

export default Register;