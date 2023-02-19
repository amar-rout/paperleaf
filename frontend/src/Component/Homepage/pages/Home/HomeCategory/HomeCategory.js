import React from "react";
import { useNavigate } from "react-router-dom";

import "./HomeCategory.css";

const HomeCategory = () => {

    const navigate = useNavigate();

    // const clientURL = process.env.REACT_APP_CLIENT_URL;

    return (

        <section className="album py-5">
            {/* <div className="container m-0 m-sm-default p-1 p-sm-default"> */}
            <div className="container">
                <h4 className="pb-5 text-center">
                    <span className="border-bottom border-2">Browse all categories</span>
                </h4>
                <div className="text-center d-flex justify-content-center row row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-4 g-2 g-sm-2 g-md-3 g-lg-4">
                    {/* <button className="col btn btn-default cat-btn" onClick={() => navigate('/category/kurtis')}>
                        <img src= "/assets/images/categoryImages/kurti.png" className="category-img bd-placeholder-img rounded-circle border " alt="" />
                        <h6 className="fw-normal pt-2 category-text">Kurtis</h6>
                    </button> */}
                    <button className="col btn btn-default cat-btn" onClick={() => navigate('/category/dupattas')}>
                        <img src="/assets/images/catImages/dupattas.png" className="category-img bd-placeholder-img rounded-circle border " alt="" />
                        <h6 className="fw-normal pt-2 category-text">Dupattas</h6>
                    </button>
                    <button className="col btn btn-default cat-btn" onClick={() => navigate('/category/dress')}>
                        <img src="/assets/images/catImages/dress.png" className="category-img bd-placeholder-img rounded-circle border " alt="" />
                        <h6 className="fw-normal pt-2 category-text">Dress</h6>
                    </button>
                    <button className="col btn btn-default cat-btn" onClick={() => navigate('/category/fabrics')}>
                        <img src="/assets/images/catImages/fabrics.png" className="category-img bd-placeholder-img rounded-circle border " alt="" />
                        <h6 className="fw-normal pt-2 category-text">Fabrics</h6>
                    </button>
                    <button className="col btn btn-default cat-btn" onClick={() => navigate('/category/dress')}>
                        <img src="/assets/images/catImages/pants.png" className="category-img bd-placeholder-img rounded-circle border " alt="" />
                        <h6 className="fw-normal pt-2 category-text">Pants / Palazzo</h6>
                    </button>
                    <button className="col btn btn-default cat-btn" onClick={() => navigate('/category/jewellery')}>
                        {/* <img src="http://localhost:3000/assets/images/categoryImages/jewellery.png" className="category-img bd-placeholder-img rounded-circle border " alt="" /> */}
                        <img src="/assets/images/catImages/jewellery.png" className="category-img bd-placeholder-img rounded-circle border " alt="" />
                        <h6 className="fw-normal pt-2 category-text">Jewellery</h6>
                    </button>
                    <button className="col btn btn-default cat-btn opacity-1" onClick={() => navigate('/category/others')}>
                        <img src="/assets/images/catImages/others.png" className="category-img bd-placeholder-img rounded-circle border " alt="" />
                        <h6 className="fw-normal pt-2 category-text">Other Accessories</h6>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default HomeCategory;

/* <div className="col btn btn-default cat-btn">
                        <img src="./assets/images/bannerImages/banner-2.jpeg" className="category-img bd-placeholder-img rounded-circle border " alt="" />
                        <h6 className="fw-normal pt-2 category-text">Heading</h6>
                    </div>
                    <div className="col btn btn-default cat-btn">
                        <img src="./assets/images/bannerImages/banner-2.jpeg" className="category-img bd-placeholder-img rounded-circle border " alt="" />
                        <h6 className="fw-normal pt-2 category-text">Heading</h6>
                    </div>
                    <div className="col btn btn-default cat-btn">
                        <img src="./assets/images/bannerImages/banner-2.jpeg" className="category-img bd-placeholder-img rounded-circle border " alt="" />
                        <h6 className="fw-normal pt-2 category-text">Heading</h6>
                    </div>
                    <div className="col btn btn-default cat-btn">
                        <img src="./assets/images/bannerImages/banner-2.jpeg" className="category-img bd-placeholder-img rounded-circle border " alt="" />
                        <h6 className="fw-normal pt-2 category-text">Heading</h6>
                    </div>
                    <div className="col btn btn-default cat-btn">
                        <img src="./assets/images/bannerImages/banner-2.jpeg" className="category-img bd-placeholder-img rounded-circle border " alt="" />
                        <h6 className="fw-normal pt-2 category-text">Heading</h6>
                    </div> */
