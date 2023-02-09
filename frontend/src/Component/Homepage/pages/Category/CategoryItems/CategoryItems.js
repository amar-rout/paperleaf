import React from "react";

import "./CategoryItems.css";

const CategoryItems = ({ paramsValue, urlLink }) => {

    return (
        // <section className="album py-3">
        //     <div className="container">
        //         <h4 className="pb-5 text-center">
        //             <span className="border-bottom border-2">{paramsValue}</span>
        //         </h4>
        //         <span>{urlLink}</span>
        //     </div>
        // </section>
        <div className="container my-5 text-center">
            <h4>{paramsValue}</h4>
            <span className="my-4">{urlLink}</span>
        </div>
    );
}

export default CategoryItems;

