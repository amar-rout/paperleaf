import React, { useEffect, useState } from "react";

import HomeCarousel from "./HomeCarousel/HomeCarousel";
import HomeCategory from "./HomeCategory/HomeCategory";
import HomeTopRatedProducts from "./HomeTopRatedProducts/HomeTopRatedProducts";


import { useSelector, useDispatch } from 'react-redux';
import {
    clearState,
    getStatus,
    getError,
    productsTopratedAsync,
    productsFeaturedAsync,
    selectTopratedProducts,
    selectFeaturedProducts
} from "../../../../app/productSlice";


import "./Home.css";
import { useNavigate } from "react-router-dom";


const Home = () => {

    const getProductStatus = useSelector(getStatus);
    const getProductError = useSelector(getError);
    const topRatedProduct = useSelector(selectTopratedProducts);
    const featuredProduct = useSelector(selectFeaturedProducts);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        return () => {
            dispatch(clearState());
        };
    }, [dispatch]);

    useEffect(() => {
        if (getProductStatus === "LOADING") {
            setLoading(true);
            dispatch(clearState());
        }
        if (getProductStatus === "LOADED") {
            dispatch(clearState());
            setLoading(false);
        }
        if (getProductStatus === "ERROR") {
            setErrorMessage(getProductError);
            setLoading(false);
            dispatch(clearState());
        }
    }, [getProductStatus, getProductError, dispatch, navigate]);

    useEffect(() => {
        dispatch(productsTopratedAsync("", ""));
        dispatch(clearState());
        dispatch(productsFeaturedAsync());
        dispatch(clearState());
    }, [dispatch]);


    return (
        <main>
            <div className="py-3 bg-dark bg-pattern mb-4">
                <div className="container">
                    <div className="row bg-dark">
                        <div className="col-12">
                            <div className="text-center text-white">
                                <span className="fs-6 ls-1">
                                    ⚡️ &nbsp;&nbsp;&nbsp;&nbsp; Happy Holiday Deals on Everything &nbsp;&nbsp;&nbsp;&nbsp; ⚡️
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h6 className="container my-4" style={{ fontSize: "14px" }}>
                <span className="text-dark">Welcome to</span> <strong style={{ color: "rgba(200, 160, 40)" }}>Paperleaf</strong>.
            </h6>
            <p>{errorMessage}</p>
            {loading ?
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: "75%"}}></div>
                </div>
                :
                <>
                    <HomeCarousel />
                    <HomeCategory />
                    <HomeTopRatedProducts title="Top Products" topProducts={topRatedProduct} />
                    <p className="border border-top border-1 p-0 m-0"></p>
                    <HomeTopRatedProducts title="Featured Products" topProducts={featuredProduct} />
                    <SectionInfo />
                </>
            }
        </main>
    );
}

const SectionInfo = () => {
    return (
        <section className="bg-light-subtle border-top">
            <div className="container">
                <div className="row p-5">
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="d-flex mb-4 mb-lg-0">
                            <i className="bi bi-truck fs-4 text-warning"></i>
                            <div className="ms-4 ms-md-4 ">
                                <h6 className="mb-1">
                                    FREE SHIPPING
                                </h6>
                                <p className="mb-0 fs-sm text-muted">
                                    From all orders over <span className="fw-semibold">₹</span>1000
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="d-flex mb-4 mb-lg-0">
                            <i className="bi bi-repeat fs-4 text-warning"></i>
                            <div className="ms-4">
                                <h6 className="mb-1">
                                    FREE RETURNS
                                </h6>
                                <p className="mb-0 fs-sm text-muted">
                                    Return money within 30 days
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="d-flex mb-4 mb-md-0">
                            <i className="bi bi-shield-lock fs-4 text-warning"></i>
                            <div className="ms-4">
                                <h6 className="mb-1">
                                    SECURE SHOPPING
                                </h6>
                                <p className="mb-0 fs-sm text-muted">
                                    You're in safe hands
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-3">
                        <div className="d-flex">
                            <i className="bi bi-tag fs-4 text-warning"></i>
                            <div className="ms-4">
                                <h6 className="mb-1">
                                    OVER 1,000 STYLES
                                </h6>
                                <p className="mb-0 fs-sm text-muted">
                                    We have everything you need
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;


// import RecentlyViewedProducts from "./RecentlyViewedProducts/RecentlyViewedProducts";
// import SliderView from "./SliderView";
// import Breadcrumb from "../Breadcrumb/Breadcrumb";
/* import Meta from "../Meta";
    <Meta  />
    <Breadcrumb
    links={[
        { name: 'Home', link: '/', active: false },
        { name: 'Category', link: '/category', active: false },
        { name: 'Long Kurti', link: '/longKurti', active: true },
        // { name: match.params.cat, link: '/category/' + match.params.cat, active: true },
    ]}
/> */
/* <RecentlyViewedProducts />
<SliderView /> */
/* <section className="banners mb-15">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="banner-img wow fadeIn animated animated animated" style={{ visibility: "visible" }}>
                                <img src="./assets/images/bannerImages/banner-1.png" alt="" />
                                    <div className="banner-text">
                                        <span>Smart Offer</span>
                                        <h4>Save 20% on <br/>Woman Bag</h4>
                                        <a href="shop-grid-right.html">Shop Now <i className="fi-rs-arrow-right"></i></a>
                                    </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="banner-img wow fadeIn animated animated animated" style={{ visibility: "visible" }}>
                                <img src="./assets/images/bannerImages/banner-2.jpeg" alt="" />
                                    <div className="banner-text">
                                        <span>Sale off</span>
                                        <h4>Great Summer <br/>Collection</h4>
                                        <a href="shop-grid-right.html">Shop Now <i className="fi-rs-arrow-right"></i></a>
                                    </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="banner-img wow fadeIn animated  mb-sm-0 animated animated" style={{ visibility: "visible" }}>
                                <img src="./assets/images/bannerImages/banner-1.jpeg" alt="" />
                                    <div className="banner-text">
                                        <span>New Arrivals</span>
                                        <h4>Shop Today’s <br/>Deals &amp; Offers</h4>
                                        <a href="shop-grid-right.html">Shop Now <i className="fi-rs-arrow-right"></i></a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */


/* <form className="form-inline" role="search">
    <div className="form-group">
        <select className="selectpicker" multiple data-live-search="true" data-live-search-placeholder="Search" data-actions-box="true">
            <optgroup label="filter1">
                <option>option1</option>
                <option>option2</option>
                <option>option3</option>
                <option>option4</option>
            </optgroup>
            <optgroup label="filter2">
                <option>option1</option>
                <option>option2</option>
                <option>option3</option>
                <option>option4</option>
            </optgroup>
            <optgroup label="filter3">
                <option>option1</option>
                <option>option2</option>
                <option>option3</option>
                <option>option4</option>
            </optgroup>
        </select>
    </div>
</form> */