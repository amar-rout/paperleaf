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
                                        <Link to={linkTo.link} className="text-decoration-none fs-6 text-secondary link-warning">{linkTo.name}</Link>
                                    </li>
                                    :
                                    <li key={link} className="breadcrumb-item fs-6 active" >
                                        <span className="fs-6">{linkTo.name}</span>
                                    </li>
                                }
                            </>
                        ))}
                    </ol>
                </nav>
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