import React from "react";
import { Link } from "react-router-dom";

import "./Breadcrumb.css";

const Breadcrumb = ({ links }) => {
    return (
        <div className="bg-light">
            <div className="container py-2">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb m-0 my-2">
                        {links.map((linkTo, link) => (
                            <>
                                {!linkTo.active ?
                                    <li key={link} className="breadcrumb-item" >
                                        <Link to={linkTo.link} className="text-decoration-none text-secondary link-warning" style={{fontSize:'14px'}}>{linkTo.name}</Link>
                                    </li>
                                    :
                                    <li key={link} className="breadcrumb-item active" >
                                        <span className="text-decoration-none text-secondary" style={{fontSize:'14px'}}>{linkTo.name}</span>
                                    </li>
                                }
                            </>
                        ))}
                    </ol>
                </nav>
                {/* <hr/> */}
            </div>
        </div>
    )
}
/* 
Call the Breadcrumb like the below
<Breadcrumb
    links={[
        { name: 'Home', link: '/' },
        {
            name: match.params.cat,
            link: '/category/' + match.params.cat,
            active: true,
        },
    ]}
/> */



export default Breadcrumb;