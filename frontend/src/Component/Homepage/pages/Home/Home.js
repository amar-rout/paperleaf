import React from "react";

import HomeCarousel from "./HomeCarousel/HomeCarousel";
import HomeCategory from "./HomeCategory/HomeCategory";
import HomeTopRatedProducts from "./HomeTopRatedProducts/HomeTopRatedProducts";
// import RecentlyViewedProducts from "./RecentlyViewedProducts/RecentlyViewedProducts";
// import SliderView from "./SliderView";
// import Breadcrumb from "../Breadcrumb/Breadcrumb";

import "./Home.css";
import Meta from "../Meta";

const Home = () => {
    return (
        <main>
            <Meta />
            {/* <Breadcrumb
                links={[
                    { name: 'Home', link: '/', active: false },
                    { name: 'Category', link: '/category', active: false },
                    { name: 'Long Kurti', link: '/longKurti', active: true },
                    // { name: match.params.cat, link: '/category/' + match.params.cat, active: true },
                ]}
            /> */}
            {/* <h6 className="container my-4" style={{ fontSize: "14px" }}>
                <span className="text-dark">Welcome to</span> <strong style={{ color: "rgba(200, 160, 40)" }}>Paperleaf</strong>.
            </h6> */}
            
            <div class="py-3 bg-dark bg-pattern mb-4">
                <div class="container">
                    <div class="row bg-dark">
                        <div class="col-12">
                            <div class="text-center text-white">
                                <span class="fs-6 ls-1">
                                ⚡️ &nbsp;&nbsp;&nbsp;&nbsp; Happy Holiday Deals on Everything &nbsp;&nbsp;&nbsp;&nbsp; ⚡️
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HomeCarousel />
            <HomeCategory />
            <HomeTopRatedProducts />
            <SectionInfo />
            {/* <RecentlyViewedProducts /> */}
            {/* <SliderView /> */}
            {/* <section class="banners mb-15">
                <div class="container">
                    <div class="row">
                        <div class="col">
                            <div class="banner-img wow fadeIn animated animated animated" style={{ visibility: "visible" }}>
                                <img src="./assets/images/bannerImages/banner-1.png" alt="" />
                                    <div class="banner-text">
                                        <span>Smart Offer</span>
                                        <h4>Save 20% on <br/>Woman Bag</h4>
                                        <a href="shop-grid-right.html">Shop Now <i class="fi-rs-arrow-right"></i></a>
                                    </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="banner-img wow fadeIn animated animated animated" style={{ visibility: "visible" }}>
                                <img src="./assets/images/bannerImages/banner-2.jpeg" alt="" />
                                    <div class="banner-text">
                                        <span>Sale off</span>
                                        <h4>Great Summer <br/>Collection</h4>
                                        <a href="shop-grid-right.html">Shop Now <i class="fi-rs-arrow-right"></i></a>
                                    </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="banner-img wow fadeIn animated  mb-sm-0 animated animated" style={{ visibility: "visible" }}>
                                <img src="./assets/images/bannerImages/banner-1.jpeg" alt="" />
                                    <div class="banner-text">
                                        <span>New Arrivals</span>
                                        <h4>Shop Today’s <br/>Deals &amp; Offers</h4>
                                        <a href="shop-grid-right.html">Shop Now <i class="fi-rs-arrow-right"></i></a>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </main>
    );
}

const SectionInfo = () => {
    return (
        <section class="bg-light-subtle border-top">
            <div class="container">
                <div class="row p-5">
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="d-flex mb-4 mb-lg-0">
                            <i class="bi bi-truck fs-4 text-warning"></i>
                            <div class="ms-4 ms-md-4 ">
                                <h6 class="mb-1">
                                    FREE SHIPPING
                                </h6>
                                <p class="mb-0 fs-sm text-muted">
                                    From all orders over <span className="fw-semibold">₹</span>1000
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="d-flex mb-4 mb-lg-0">
                            <i class="bi bi-repeat fs-4 text-warning"></i>
                            <div class="ms-4">
                                <h6 class="mb-1">
                                    FREE RETURNS
                                </h6>
                                <p class="mb-0 fs-sm text-muted">
                                    Return money within 30 days
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="d-flex mb-4 mb-md-0">
                            <i class="bi bi-shield-lock fs-4 text-warning"></i>
                            {/* <i class="bi bi-shield-check"></i> */}
                            <div class="ms-4">
                                <h6 class="mb-1">
                                    SECURE SHOPPING
                                </h6>
                                <p class="mb-0 fs-sm text-muted">
                                    You're in safe hands
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-3">
                        <div class="d-flex">
                            <i class="bi bi-tag fs-4 text-warning"></i>
                            <div class="ms-4">
                                <h6 class="mb-1">
                                    OVER 1,000 STYLES
                                </h6>
                                <p class="mb-0 fs-sm text-muted">
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


/* <form class="form-inline" role="search">
    <div class="form-group">
        <select class="selectpicker" multiple data-live-search="true" data-live-search-placeholder="Search" data-actions-box="true">
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