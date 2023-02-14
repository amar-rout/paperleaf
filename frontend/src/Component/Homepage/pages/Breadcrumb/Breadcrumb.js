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
                            <span key={link}>
                                {!linkTo.active ?
                                    <li className="breadcrumb-item fs-6" >
                                        <Link to={linkTo.link}>{linkTo.name} / </Link>
                                    </li>
                                    :
                                    <li className="breadcrumb-item fs-6 active" >
                                        {linkTo.name}
                                    </li>
                                }
                            </span>
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