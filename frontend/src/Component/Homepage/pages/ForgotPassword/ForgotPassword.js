import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
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
                        <div class="card border-0 bg-warning-subtle">
                            <form class="card-body">
                                <div class="mb-2">
                                    <div class="position-relative">
                                        <i class="bi bi-envelope fs-lg position-absolute top-50 start-0 translate-middle-y text-warning opacity-80 ms-3"></i>
                                        <input class="form-control border-light px-4 ps-5 py-3 rounded-3 shadow-none" type="email" placeholder="Email address" required="" />
                                    </div>
                                </div>
                                <button class="btn btn-default bg-warning fw-normal fs-6" type="submit">Send</button>
                            </form>
                            <div className="text-start ms-2 mb-3 small">
                                Click here to
                                <Link to="/login" className="px-1 fw-bold small text-muted link-dark" type="button">Sign In</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-3"></div>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword;