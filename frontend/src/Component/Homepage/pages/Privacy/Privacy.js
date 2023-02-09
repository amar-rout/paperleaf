import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Meta from "../Meta";

const Privacy = () => {
    return (
        <>  
            <Meta title="Privacy" />
            <Breadcrumb
                links={[
                    { name: 'Home', link: '/', active: false },
                    { name: 'Privacy', link: '/privacy', active: true }
                ]}
            />
            <div className="container my-5 text-center">
                <h4>Privacy</h4>
            </div>
        </>
    )
}

export default Privacy;