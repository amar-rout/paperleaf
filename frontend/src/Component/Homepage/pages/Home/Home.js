import React, { useEffect, useState } from "react";

// import HomeCarousel from "./HomeCarousel/HomeCarousel";
import HomeCategory from "./HomeCategory/HomeCategory";
import HomeTopRatedProducts from "./HomeTopRatedProducts/HomeTopRatedProducts";

import SliderView from './SliderView';


import { useSelector, useDispatch } from 'react-redux';
import {
    clearState,
    getStatus,
    productsTopratedAsync,
    productsFeaturedAsync,
    selectTopratedProducts,
    selectFeaturedProducts
} from "../../../../app/productSlice";


import "./Home.css";
import { Link, useNavigate } from "react-router-dom";
import HomeFeaturedProducts from "./HomeFeaturedProducts/HomeFeaturedProducts";


const Home = () => {

    const getProductStatus = useSelector(getStatus);
    const topRatedProduct = useSelector(selectTopratedProducts);
    const featuredProduct = useSelector(selectFeaturedProducts);
    const dispatch = useDispatch();
    const navigate = useNavigate();

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
            setLoading(false);
            dispatch(clearState());
        }
    }, [getProductStatus, dispatch, navigate]);

    useEffect(() => {
        dispatch(productsTopratedAsync("", ""));
        dispatch(clearState());
    }, [dispatch]);

    useEffect(() => {
        dispatch(productsFeaturedAsync("", 8));
        dispatch(clearState());
    }, [dispatch]);


    return (
        <main>
            <div className="py-3 bg-dark bg-pattern mb-4">
                <div className="container">
                    <div className="row bg-dark">
                        <div className="col-12">
                            <div className="text-center text-white">
                                {/* <span className="fs-6 fw-semibold ls-2" style={{ color: "rgba(200, 160, 40)" }}> */}
                                <span className="fs-6 fw-semibold ls-2" style={{ color: "rgb(234, 255, 150)" }}>
                                    {/* rgb(234, 255, 150) */}
                                    {/* ⚡️  */}
                                    <i className="bi bi-lightning-charge-fill fs-5"></i>
                                    &nbsp;&nbsp; Happy Holiday Deals on Everything &nbsp;&nbsp;
                                    <i className="bi bi-lightning-charge-fill fs-5"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h6 className="container my-4 h5">
                <span className="text-dark">Welcome to <span style={{ color: "rgba(200, 160, 40)" }}>Paperleaf</span></span>
            </h6>
            {loading ?
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}></div>
                </div>
                :
                <>
                    {/* <HomeCarousel /> */}
                    <HomeCategory />
                    <Deals />
                    <HomeTopRatedProducts title="Top Products" topProducts={topRatedProduct} />
                    {/* <p className="border border-top border-1 p-0 m-0"></p> */}
                    {/* <HomeTopRatedProducts title="Featured Products" topProducts={featuredProduct} /> */}
                    <HomeFeaturedProducts title="Featured Products" topProducts={featuredProduct} />
                    <NewSection />
                    <SectionInfo />
                    <SliderView />
                </>
            }
        </main>
    );
}

const Deals = () => {

    function getTimeRemaining(endtime) {
        const total = Date.parse(endtime) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));

        return { total, days, hours, minutes, seconds };
    }

    function initializeClockFirst(id, endtime) {
        const clock = document.getElementById(id);
        const daysSpan = clock.querySelector('.days');
        const hoursSpan = clock.querySelector('.hours');
        const minutesSpan = clock.querySelector('.mins');
        const secondsSpan = clock.querySelector('.secs');

        function updateClock() {
            const t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }

        updateClock();

        const timeInterval = setInterval(updateClock, 1000);
    }
    function initializeClockSecond(id, endtime) {
        const clock = document.getElementById(id);
        const daysSpan = clock.querySelector('.days');
        const hoursSpan = clock.querySelector('.hours');
        const minutesSpan = clock.querySelector('.mins');
        const secondsSpan = clock.querySelector('.secs');

        function updateClock() {
            const t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }

        updateClock();

        const timeInterval = setInterval(updateClock, 1000);
    }

    useEffect(() => {
        let id = 'countdown'
        const deadline1 = new Date(Date.parse(new Date()) + 3 * 12 * 60 * 60 * 1000);

        let id2 = 'countdown_1'
        const deadline2 = new Date(Date.parse(new Date()) + 2 * 24 * 60 * 60 * 1000);

        initializeClockFirst(id, deadline1);
        initializeClockSecond(id2, deadline2);
    });

    // useEffect(() => {
    //     let id2 = 'countdown_1'
    //     const deadline2 = new Date(Date.parse(new Date()) + 2 * 24 * 60 * 60 * 1000);
    //     initializeClock( id2, deadline2 );
    // });

    return (
        <section className="bg-white">
            <div className="container py-3">
                <div className="row">
                    <div className="col-12 col-md-6 p-2">
                        <div className="bg-danger-subtle px-3 px-md-5 py-3"
                            style={{ backgroundImage: "url('/assets/images/productImages/product1.png')", backgroundPosition: "right center", backgroundRepeat: "no-repeat", backgroundSize: 'contain', visibility: "visible" }}>
                            <div className="">
                                <span className="h3 text-brand fw-semibold lh-1">Deals of the Day.</span><br />
                                <p className="fs-6 fw-semibold">Limited quantities.</p>
                            </div>
                            <div className="">
                                <span className="h5">
                                    <a className="text-decoration-none text-dark" href="/" style={{ fontFamily: 'Montez' }}>
                                        Handcrafted New Morden Design Dupattas
                                    </a>
                                </span>
                                <div className="my-3">
                                    <span className="fw-bold fs-4 me-2" style={{ color: '#088178' }} >₹139.00</span>
                                    <span className="fw-semibold fs-5 text-danger text-decoration-line-through ms-2">₹160.99</span>
                                </div>
                            </div>
                            <div className="">
                                <span>Hurry Up! Offer End In:</span>
                                <div className="deals-countdown mb-2" id="countdown" data-countdown="2025/03/25 00:00:00">
                                    <span className="countdown-section">
                                        <span className="countdown-amount hover-up days"></span>
                                        <span className="countdown-period"> days </span>
                                    </span>
                                    <span className="countdown-section">
                                        <span className="countdown-amount hover-up hours"></span>
                                        <span className="countdown-period"> hours </span>
                                    </span>
                                    <span className="countdown-section">
                                        <span className="countdown-amount hover-up mins"></span>
                                        <span className="countdown-period"> mins </span>
                                    </span>
                                    <span className="countdown-section">
                                        <span className="countdown-amount hover-up secs"></span>
                                        <span className="countdown-period"> sec </span>
                                    </span>
                                </div>
                                <div className="pt-2">
                                    <a href="/" className="btn btn-outline-dark">Shop Now <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 p-2">
                        <div className="bg-info-subtle px-3 px-md-5 py-3"
                            style={{ backgroundImage: "url('/assets/images/productImages/product1.png')", backgroundPosition: "right center", backgroundRepeat: "no-repeat", backgroundSize: 'contain', visibility: "visible" }}>
                            <div className="">
                                <span className="h3 text-brand fw-semibold lh-1">Deals of the Day.</span><br />
                                <p className="fs-6 fw-semibold">Limited quantities.</p>
                            </div>
                            <div className="">
                                <span className="h5">
                                    <a className="text-decoration-none text-dark" href="/" style={{ fontFamily: 'Montez' }}>
                                        Handcrafted New Morden Design
                                    </a>
                                </span>
                                <div className="my-3">
                                    <span className="fw-bold fs-4 me-2" style={{ color: '#088178' }} >₹139.00</span>
                                    <span className="fw-semibold fs-5 text-danger text-decoration-line-through ms-2">₹160.99</span>
                                </div>
                            </div>
                            <div className="">
                                <span>Hurry Up! Offer End In:</span>
                                <div className="deals-countdown mb-2" id="countdown_1" data-countdown="2025/03/25 00:00:00">
                                    <span className="countdown-section">
                                        <span className="countdown-amount hover-up days"></span>
                                        <span className="countdown-period"> days </span>
                                    </span>
                                    <span className="countdown-section">
                                        <span className="countdown-amount hover-up hours"></span>
                                        <span className="countdown-period"> hours </span>
                                    </span>
                                    <span className="countdown-section">
                                        <span className="countdown-amount hover-up mins"></span>
                                        <span className="countdown-period"> mins </span>
                                    </span>
                                    <span className="countdown-section">
                                        <span className="countdown-amount hover-up secs"></span>
                                        <span className="countdown-period"> sec </span>
                                    </span>
                                </div>
                                <div className="pt-2">
                                    <a href="/" className="btn btn-outline-dark">Shop Now <i className="bi bi-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const NewSection = () => {
    return (
        <section className="bg-light-subtle">
            <div className="container py-3">
                <div className="row">
                    <div className="col-12 col-sm-4 p-2">
                        <div className="bg-info-subtle p-4"
                            style={{ minHeight: 200, backgroundImage: "url('/assets/images/productImages/product1.png')", backgroundPosition: "right center", backgroundRepeat: "no-repeat", backgroundSize: 'contain', visibility: "visible" }} >
                            <span className="fs-6 fw-normal ls-1"><small>Smart Offer</small></span>
                            <p className="w-50 fs-6 fw-semibold">Save 20% on Kurtis</p>
                            <Link to="/" className="text-decoration-none fs-6 fw-semibold text-dark">
                                Shop now <i className="bi bi-arrow-right ms-2"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 p-2" >
                        <div className="bg-danger-subtle p-4" style={{ minHeight: 200 }}>
                            <span className="fs-6 fw-normal ls-1"><small>Smart Offer</small></span>
                            <p className="w-50 fs-6 fw-semibold">Save 20% on Coloured Flora Dresses</p>
                            <Link to="/" className="text-decoration-none fs-6 fw-semibold text-danger">
                                Shop now <i className="bi bi-arrow-right ms-2"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4 p-2">
                        <div className="bg-success-subtle p-4" style={{ minHeight: 200 }}>
                            <span className="fs-6 fw-normal ls-1"><small>Smart Offer</small></span>
                            <p className="w-50 fs-6 fw-semibold">Save 20% on Woman Bag</p>
                            <Link to="/" className="text-decoration-none fs-6 fw-semibold text-success">
                                Shop now <i className="bi bi-arrow-right ms-2"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const SectionInfo = () => {
    return (
        <section className="text-light" style={{ backgroundColor: '#2b3035' }}>
            <div className="container">
                <div className="row py-3">
                    <div className="col-6 col-md-6 col-lg-3">
                        <div className="d-flex mb-4 mb-lg-0">
                            <i className="bi bi-truck fs-2" style={{ color: '#e5c07b' }}></i>
                            <div className="ms-2 ms-md-4 " style={{ color: '#abb2bf' }} >
                                <p className="mb-1 small fw-bold">
                                    FREE SHIPPING
                                </p>
                                <p className="mb-0 small">
                                    From all orders over <span className="fw-semibold">₹</span>1000
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-6 col-lg-3">
                        <div className="d-flex mb-4 mb-lg-0">
                            <i className="bi bi-arrow-repeat fs-2" style={{ color: '#e5c07b' }}></i>
                            <div className="ms-2 ms-md-4 " style={{ color: '#abb2bf' }}>
                                <p className="mb-1 small fw-bold">
                                    FREE RETURNS
                                </p>
                                <p className="mb-0 small">
                                    Return money within 30 days
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-6 col-lg-3">
                        <div className="d-flex mb-4 mb-md-0">
                            <i className="bi bi-shield-check fs-2" style={{ color: '#e5c07b' }}></i>
                            <div className="ms-2 ms-md-4 " style={{ color: '#abb2bf' }}>
                                <p className="mb-1 small fw-bold">
                                    SECURE SHOPPING
                                </p>
                                <p className="mb-0 small">
                                    You're in safe hands
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 col-md-6 col-lg-3">
                        <div className="d-flex">
                            <i className="bi bi-tag fs-2" style={{ color: '#e5c07b' }}></i>
                            <div className="ms-2 ms-md-4 " style={{ color: '#abb2bf' }}>
                                <p className="mb-1 small fw-bold">
                                    OVER 1,000 STYLES
                                </p>
                                <p className="mb-0 small">
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
                            <div className="banner-img     " style={{ visibility: "visible" }}>
                                <img src="./assets/images/bannerImages/banner-1.png" alt="" />
                                    <div className="banner-text">
                                        <span>Smart Offer</span>
                                        <h4>Save 20% on <br/>Woman Bag</h4>
                                        <a href="shop-grid-right.html">Shop Now <i className="fi-rs-arrow-right"></i></a>
                                    </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="banner-img     " style={{ visibility: "visible" }}>
                                <img src="./assets/images/bannerImages/banner-2.jpeg" alt="" />
                                    <div className="banner-text">
                                        <span>Sale off</span>
                                        <h4>Great Summer <br/>Collection</h4>
                                        <a href="shop-grid-right.html">Shop Now <i className="fi-rs-arrow-right"></i></a>
                                    </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="banner-img     mb-sm-0  " style={{ visibility: "visible" }}>
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