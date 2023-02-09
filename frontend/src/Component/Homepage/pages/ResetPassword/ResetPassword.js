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
            <div>Reset Password</div>
        </>
    )
}

export default ResetPassword;