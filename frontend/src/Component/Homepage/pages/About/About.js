import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Meta from "../Meta";

const About = () => {
    return (
        <>  
            <Meta title="About" />
            <Breadcrumb
                links = {[
                    { name: 'Home', link: '/', active: false },
                    { name: 'About', link: '/about', active: true }
                ]}
            />
            <div className="container my-5 text-center">
                <h4>About</h4>
            </div>
        </>
    )
}

export default About;