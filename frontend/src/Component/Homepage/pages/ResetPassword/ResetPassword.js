import React from "react"
import Breadcrumb from "../Breadcrumb/Breadcrumb";
// import Meta from "../Meta";

const ResetPassword = () => {
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
                    <div className="d-flex justify-content-between align-items-center mt-4 mb-2">
                        <h4 className="mb-0">Reset password</h4>
                    </div>
                    {/* <div class="col-12">
                        <div class="form-group">
                            <label class="form-label" for="accountPassword">
                                Current Password *
                            </label>
                            <input class="form-control form-control-lg border-1 border-secondary py-3 px-4 fs-6 rounded-3 mb-3 text-decoration-none shadow-none" id="accountPassword" type="password" placeholder="Current Password *" required="" />
                        </div>
                    </div> */}
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
                            Reset password
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResetPassword;