import React from "react";

import "./CategoryItems.css";

const CategoryItems = ({ paramsValue, urlLink }) => {

    return (
        <div className="container my-5 text-center">
            <h4>{paramsValue}</h4>
            <span className="my-4">{urlLink}</span>
        </div>
    );
}

export default CategoryItems;