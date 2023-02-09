import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Meta from "../Meta";

const Contact = () => {
    return (
        <>  
            <Meta title="Contact" />
            <Breadcrumb
                links={[
                    { name: 'Home', link: '/', active: false },
                    { name: 'Contact', link: '/contact', active: true }
                ]}
            />
            <div className="container my-5 text-center">
                <h4>Contact</h4>
            </div>
        </>
    )
}

export default Contact;