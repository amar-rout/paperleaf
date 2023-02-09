import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

const ForgotPassword = () => {
    return (
        <>
            <Breadcrumb
                links={[
                    { name: 'Home', link: '/', active: false },
                    { name: 'Forgot Password', link: '/forgotPassword', active: true }
                ]}
            />
            <div className="container my-5 text-center">
                <h4>Forgot Password</h4>
            </div>
        </>
    )
}

export default ForgotPassword;