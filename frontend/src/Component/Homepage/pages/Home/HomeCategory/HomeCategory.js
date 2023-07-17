import React from "react";
import { useNavigate } from "react-router-dom";

import "./HomeCategory.css";

const HomeCategory = () => {

    const navigate = useNavigate();

    return (
        <section className="album py-5 bg-light-subtle">
            <div className="container">
                <h4 className="pb-5 text-center">
                    <span className="border-bottom border-2 heading fs-2">Browse all categories</span>
                </h4>
                <div className="text-center d-flex justify-content-center row row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-4 g-2 g-sm-2 g-md-3 g-lg-4">
                    <button className="category-btn col btn btn-default cat-btn" onClick={() => navigate('/category/Dupattas')}>
                        <img src="/assets/images/catImages/dupattas.png" className="category-img rounded-circle border mb-2 mb-md-3" alt="" />
                        <h6 className="category-txt fw-normal pt-2 category-text">Dupattas</h6>
                    </button>
                    {/* <button className="category-btn col btn btn-default cat-btn" onClick={() => navigate('/category/Dress')}>
                        <img src="/assets/images/catImages/dress.png" className="category-img rounded-circle border mb-2 mb-md-3" alt="" />
                        <h6 className="category-txt fw-normal pt-2">Dress</h6>
                    </button> */}
                    <button className="category-btn col btn btn-default cat-btn" onClick={() => navigate('/category/Fabrics')}>
                        <img src="/assets/images/catImages/fabrics.png" className="category-img rounded-circle border mb-2 mb-md-3" alt="" />
                        <h6 className="category-txt fw-normal pt-2">Fabrics</h6>
                    </button>
                    <button className="category-btn col btn btn-default cat-btn" onClick={() => navigate('/category/DressMaterial')}>
                        <img src="/assets/images/catImages/dressmaterial.png" className="category-img rounded-circle border mb-2 mb-md-3" alt="" />
                        <h6 className="category-txt fw-normal pt-2">Dress Material</h6>
                    </button>
                    <button className="category-btn col btn btn-default cat-btn" onClick={() => navigate('/category/Jewellery')}>
                        
                        <img src="/assets/images/catImages/jewellery.png" className="category-img rounded-circle border mb-2 mb-md-3" alt="" />
                        <h6 className="category-txt fw-normal pt-2">Jewellery</h6>
                    </button>
                    <button className="category-btn col btn btn-default cat-btn opacity-1" onClick={() => navigate('/category/newCollections')}>
                        <img src="/assets/images/catImages/others.png" className="category-img rounded-circle border mb-2 mb-md-3" alt="" />
                        <h6 className="category-txt fw-normal pt-2">New Collections</h6>
                    </button>
                </div>
            </div>
            {/* <img src="http://localhost:3000/assets/images/categoryImages/jewellery.png" className="category-img bd-placeholder-img rounded-circle border " alt="" /> */}
        </section>
    );
}

export default HomeCategory;