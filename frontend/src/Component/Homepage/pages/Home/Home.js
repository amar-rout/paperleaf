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
// import "./Section.css";
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
            {/* <div className="py-3 bg-dark bg-pattern mb-4"></div> */}
            {/* <div className="container">
                <div className="row bg-dark bg-pattern py-3">
                    <div className="col-12">
                        <div className="text-center text-white">
                            <span className="fs-6 fw-semibold ls-2" style={{ color: "rgb(234, 255, 150)" }}>
                                <i className="bi bi-lightning-charge-fill fs-5"></i>
                                &nbsp;&nbsp; Happy Holiday Deals on Everything &nbsp;&nbsp;
                                <i className="bi bi-lightning-charge-fill fs-5"></i>
                            </span>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <span className="fs-6 fw-semibold ls-2" style={{ color: "rgba(200, 160, 40)" }}> */}
            {/* rgb(234, 255, 150) */}
            {/* ⚡️  */}
            <div className="container">
                <div className="col-12 col-md-6">
                    <h6 className="my-3 my-md-5 h5">
                        <span className="text-dark">Welcome to <span style={{ color: "rgba(200, 160, 40)" }}>Paperleaf</span></span>
                    </h6>
                </div>
                {/* <div className="col-6">
                    <button className="carousel-control-prev" type="button" data-bs-target="/carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="/carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div> */}
            </div>

            {loading ?
                <div className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{ width: "75%" }}></div>
                </div>
                :
                <>
                    {/* <HomeCarousel /> */}
                    <div className="container mb-5">
                        <SliderView />
                    </div>
                    <HomeCategory />


                    {/* <p className="border border-top border-1 p-0 m-0"></p> */}
                    {/* <HomeTopRatedProducts title="Featured Products" topProducts={featuredProduct} /> */}
                    {/* <ul className="nav nav-pills nav-fill">
                        <li className="nav-item">
                            <HomeTopRatedProducts title="Top Products" topProducts={topRatedProduct} />
                        </li>
                        <li className="nav-item">
                            <HomeFeaturedProducts title="Featured Products" topProducts={featuredProduct} />
                        </li>
                    </ul> */}
                    <div className="">

                    </div>
                    <div className="bg-light">
                        <div className="container pt-4 pb-2">
                            <div className="row">
                                {/* <div className="col-12 col-md-2 mb-2">
                                    <div className="card">
                                        <div className="bg-info-subtle p-4"
                                            style={{ minHeight: 400, backgroundImage: "url('/assets/images/productImages/product1.png')", backgroundPosition: "right center", backgroundRepeat: "no-repeat", backgroundSize: 'contain', visibility: "visible" }} >
                                            <span className="fs-6 fw-normal ls-1"><small>Smart Offer</small></span>
                                            <p className="w-50 fs-6 fw-semibold">Save 20% on Kurtis</p>
                                            <Link to="/" className="text-decoration-none fs-6 fw-semibold text-dark">
                                                Shop now <i className="bi bi-arrow-right ms-2"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="col-12 col-md-12 mb-2">
                                    <div className="mb-2 ">
                                        <ul className="nav nav-tabs nav-pills mb-3" id="pills-tab" role="tablist">
                                            <li className="nav-item mx-2" role="presentation">
                                                <button className="nav-link bg-transparent p-0 m-0 mb-3 text-muted active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                                                    New in Store
                                                    {/* <span class="position-relative">
                                                        <span className="fs-4 text-dark text-decoration-underline">Privacy Policy</span>
                                                        <span class="position-absolute top-50 start-50 translate-middle ms-3 z-n1">
                                                            <svg width="300px" height="62.1px" enable-background="new 0 0 366 62.1" viewBox="0 0 366 62.1" xmlns="http://www.w3.org/2000/svg">
                                                                <path fill="#fff39e" d="m322.5 25.3c0 1.4 2.9 0.8 3.1 1.6 0.8 1.1-1.1 1.3-0.6 2.4 13.3 0.9 26.9 1.7 40.2 4-2.5 0.7-4.9 1.6-7.3 1.1-4-0.9-8.2-1-12.2-1.2-8.5-0.5-16.9-1.9-25.5-1.7h-3.1c2.6 0.6 4.8 0.4 5.7 2.2-7.3 0.4-14.1-0.8-21.2-1.1-0.2 0.6-0.5 1.2-0.8 1.8 21.3 0.7 42.5 1.6 64.3 4.6-4.2 1.6-7.7 1-10.8 0.8-6.8-0.5-13.5-1.3-20.3-1.9-0.9-0.1-2.3-0.1-2.9 0.2-2.2 1.6-4.3 0.6-7 0.4 1.4-1 2.5 0.5 3.9-0.8-5.6-1-10.7 0.6-15.9 0s-10.5-0.6-16.6-0.8c2 1.6 4.6 1.3 6.2 1.4 4.9 0 9.9 0.8 14.8 0.7 5.3-0.1 10.4 0.5 15.5 0.9 3.2 0.3 6.7-0.1 9.9-0.4 1.1-0.1 0.5 0.3 0.6 0.6 0.5 0.9 2.2 0.8 3.6 0.8 5.1-0.1 10.1 0.6 14.8 1.5 0.8 0.1 1.5 0 1.7 0.7 0 0.7-0.8 0.6-1.5 0.8-3.9 1.2-7.4-0.2-11.1-0.2-2 0-4.3-1.5-6 0.5-0.3 0.4-1.4 0.1-2.2-0.1-4.5-0.8-9.1-0.5-13.8-1.5-2.3-0.5-5.6 0.1-8.4 0.5-4 0.5-8-0.7-12.1-0.9-3.4-0.2-7.1-0.5-10.5-0.7-7.1-0.3-14.2-1.2-22.3-0.4 4.9 1.1 9.4 1.2 13.8 1.2 9.7 0 19.2 2.3 28.9 1.6 7.3 3.2 15.9 1.5 23.8 2.9 4.9 0.8 10.1 0.8 15.2 1.2 0.5 0 0.8 0.3 1.1 0.9-20-2.1-40.2-1.4-60.8-3 4.9 2.1 10.8-0.3 15.3 2.7-8 1.9-15.8-0.9-23.5-0.1 2.8 1.4 7.1 1.1 9.3 3.3 0.5 0.5 0.2 1.1-1.2 1.3 2.3 1 3.4-2.1 5.7-0.4 0.2-0.6 0.2-1 0.3-1.5 0.8-0.3 2 0.8 1.5 1.5-0.2 0.1 0 0.3 0 0.5 18.7 0.4 37.3 1.7 56.2 3.6-1.7 1.1-2.8 1.2-4.2 1.1-7.1-0.5-14.1-0.9-21.2-1.4-3.1-0.2-6.3-0.4-9.4-0.4-7.6-0.2-15-0.7-22.4-1-9-0.4-17.9-0.1-26.9-0.1-1.2 0-2.9-0.4-3.9 1 14.8 0.3 29.7 0.6 44.4 1.1 14.8 0.6 29.9 1.3 44.2 4.2-4.3 1-8.8 0.9-13 0.5-5.3-0.5-10.5-1.1-15.8-1.2-11.4-0.3-22.9-0.9-34.3-1.2-17.6-0.4-35.4-0.3-53.1-0.4-10.8-0.1-21.7-0.2-32.5 0-17.8 0.4-35.7 0.2-53.5 0.5-13.1 0.3-26.3 0.1-39.4 0.5-11.1 0.3-22.4 0.6-33.6 1-13.1 0.6-26.1 0.2-39.3 0.4-3.9 0.1-7.6 0.2-11.8-0.2 0.9-1.2 2.3-1.3 3.9-1.3 8.4 0.2 16.6-0.4 24.9-0.9 3.9-0.2 7.9-0.4 11.9 0.2 2.5 0.4 5.3-0.3 8-0.4 7.3-0.4 14.7-0.7 22-0.9 11.9-0.5 23.7-1.2 35.6-0.8 7.7 0.2 15.3-0.6 22.9-0.1 2.3 0.2 4.3-0.5 6.5-1h-17.6c-9.6 0-19-0.1-28.6 0-8 0.1-16.1 0.3-24 0.8-2.6 0.2-5.4 0.1-8.2 0.1-10.1 0.3-20.1 0.6-30.2 0.5-5.4 0-10.7-0.1-15.9 0.6-2.3 0.3-4-1.3-6.5-0.6 0.2 0.4 0.5 0.9 0.6 1.5-1.9 0-4 0.4-4.9-0.1-4.2-2.2-9.4-1.5-14.1-2.3-1.7-0.3-3.7-0.1-4.3-1.5-0.5-1.3 1.9-1.5 2.6-2.6-4.2-1.4-4.6-5-8.5-7.2-1.5 0.2-0.9 2.8-4.2 1.3 0.3 2.4 4.5 3.9 2.8 6.4-2.3 0.3-3.2-0.8-4.2-1.7-2.5-4-5.1-8.4-5.1-12.7 0.2-6.8 0.2-13.8 3.6-20.4 0.3-0.5 0.3-1 0.8-1.4 0.9-0.9 1.2-2.4 3.6-2.1 2.2 0.2 2.5 1.5 2.6 2.6 0.2 1.4 1.5 1.8 3.2 2.5 0.9-1.4 0.5-2.9 2.6-3.7 0.2-0.1 0.3-0.4 0.3-0.4-3.1-2.2 1.2-2.2 2.3-3.3-3.1-1.8-4-4.3-3.7-7-1.5-0.3-3.1-0.4-4.5 0-1.7 0.6-2.2-0.5-2.9-1 0.6-0.5 0.8-1.1 2.2-1.3 7.6-0.9 15.2-1.7 22.9-2 20-0.7 39.9-0.9 59.9-1 11.9-0.1 23.8 0.4 35.6 1.1 3.6 0.2 7.1-0.9 10.7-0.5 7.9 0.9 15.8 0.3 23.8 0.5 7.3 0.1 14.4-0.6 21.7-0.1 12.2 0.9 24.4 0.3 36.7 0.6 9.4 0.3 18.9 0.4 28.2 1 11.9 0.7 23.8 1.3 35.6 2 11.1 0.6 22.4 0.5 33.3 2 7.1 1 14.4 1.1 21.3 2.4 4 0.7 8.2 1.6 12.4 1.9 2.2 0.2 0.9 1 1.5 1.5-4-0.8-8-0.8-12.1-1.4-4.3-0.7-8.5-1-12.8 0.4-2.9 1-6.3 0.2-9.3-0.1-10.2-1.1-20.6-1.6-30.8-2.4-12.1-0.9-24.3-1.4-36.4-2.1-9.9-0.6-20-0.5-29.9-1-11.4-0.6-22.7 0-34.2-0.5-6.3-0.3-12.3-0.3-18.5-0.4-4.2-0.1-8.4 1.3-12.8 0.3 0.6 0.2 1.2 0.7 1.9 0.7 10.5 0 20.9 1.9 31.6 1.7 6.5-0.1 13.1 0.2 19.8 0.8 3.2 0.3 6.3-0.4 9.7-0.1 7.6 0.7 15.5 0.5 23 0.8 12.4 0.5 24.7 0.4 37.1 1.1 13.3 0.7 26.8 2.1 39.9 4.1 6.2 0.9 12.7 1.5 19.2 1.7 0.6 0 1.1 0.1 1.5 0.5-4.6 0.1-9.3 0-13.9-0.5-0.6 1.1 1.4 0.9 1.5 1.9-9.7 1.6-19.6-1.4-29.4-0.1 2.2 1.4 5.1 1 7.4 1 7.3 0.1 14.1 1.3 21.2 1.9 2.8 0.3 5.9 0 8.5 0.8 1.5 0.5 4.6-1.1 4.9 1.3 4-0.7 7.3 1.5 11.1 1.2 4-0.3 7.7 0.6 11.6 1.1 0.8 0.1 2.2 0.3 2.3 1.1 0.2 1-1.1 1.2-2 1.5-3.4 1-6.7-0.4-10.1-0.4-0.9 0-2-0.2-2.9-0.2-9.4 0.1-18.8-1.3-28.3-1.8-6-0.4-12.1-0.9-18.1-1.3 0 0.2 0 0.4-0.2 0.6 6.1 0.5 12.1 1.4 18.3 0.7z"></path>
                                                            </svg>
                                                        </span>
                                                    </span> */}
                                                </button>
                                            </li>
                                            {/* <li className="nav-item mx-2" role="presentation">
                                                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Featured Products</button>
                                            </li> */}
                                        </ul>
                                    </div>
                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                                            <HomeTopRatedProducts title="Top Products" topProducts={topRatedProduct} />
                                        </div>
                                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                                            <HomeFeaturedProducts title="Featured Products" topProducts={featuredProduct} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <Deals /> */}
                    <div className="bg-light py-5">
                        <div className="container">
                            <div className="row">
                                {/* <div className="col-12 col-md-2 px-4 mb-2">
                                    <div className="text-center">
                                        <h4>Monthly Best Sale</h4>
                                    </div>
                                    <div className="card"> */}
                                {/* <div className="bg-info-subtle p-4"
                                            style={{ minHeight: 400, backgroundImage: "url('/assets/images/productImages/product1.png')", backgroundPosition: "right center", backgroundRepeat: "no-repeat", backgroundSize: 'contain', visibility: "visible" }} >
                                            <span className="fs-6 fw-normal ls-1"><small>Smart Offer</small></span>
                                            <p className="w-50 fs-6 fw-semibold">Save 20% on Kurtis</p>
                                            <Link to="/" className="text-decoration-none fs-6 fw-semibold text-dark">
                                                Shop now <i className="bi bi-arrow-right ms-2"></i>
                                            </Link>
                                        </div> */}
                                {/* <img src="/assets/images/special_offer_home.png" alt="special offer" style={{ minHeight: 400 }} />
                                    </div>
                                </div> */}
                                {/* <div className="col-12 col-md-1"></div> */}
                                {/* <div className="col-12 col-md-12 mb-2">
                                    <div className="mb-2">
                                        <ul className="nav nav-tabs nav-pills mb-3" id="pills-tab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="pills-top-tab" data-bs-toggle="pill" data-bs-target="#pills-top" type="button" role="tab" aria-controls="pills-top" aria-selected="true">Top Products</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="pills-featured-tab" data-bs-toggle="pill" data-bs-target="#pills-featured" type="button" role="tab" aria-controls="pills-featured" aria-selected="false">Featured Products</button>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade show active" id="pills-top" role="tabpanel" aria-labelledby="pills-top-tab" tabindex="0">
                                            <HomeTopRatedProducts title="Top Products" topProducts={topRatedProduct} />
                                        </div>
                                        <div className="tab-pane fade" id="pills-featured" role="tabpanel" aria-labelledby="pills-featured-tab" tabindex="0">
                                            <HomeFeaturedProducts title="Featured Products" topProducts={featuredProduct} />
                                        </div>
                                    </div> */}
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                    <NewSection />
                    {/* <SectionInfo1 /> */}
                    <SectionInfo />
                    {/* <SliderView /> */}
                    {/* <SectionInfo1 /> */}
                </>
            }
        </main>
    );
}

// const Deals = () => {

//     function getTimeRemaining(endtime) {
//         const total = Date.parse(endtime) - Date.parse(new Date());
//         const seconds = Math.floor((total / 1000) % 60);
//         const minutes = Math.floor((total / 1000 / 60) % 60);
//         const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
//         const days = Math.floor(total / (1000 * 60 * 60 * 24));

//         return { total, days, hours, minutes, seconds };
//     }

//     function initializeClockFirst(id, endtime) {
//         const clock = document.getElementById(id);
//         const daysSpan = clock.querySelector('.days');
//         const hoursSpan = clock.querySelector('.hours');
//         const minutesSpan = clock.querySelector('.mins');
//         const secondsSpan = clock.querySelector('.secs');

//         function updateClock() {
//             const t = getTimeRemaining(endtime);

//             daysSpan.innerHTML = t.days;
//             hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
//             minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
//             secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

//             if (t.total <= 0) {
//                 clearInterval(timeInterval);
//             }
//         }

//         updateClock();

//         const timeInterval = setInterval(updateClock, 1000);
//     }
//     function initializeClockSecond(id, endtime) {
//         const clock = document.getElementById(id);
//         const daysSpan = clock.querySelector('.days');
//         const hoursSpan = clock.querySelector('.hours');
//         const minutesSpan = clock.querySelector('.mins');
//         const secondsSpan = clock.querySelector('.secs');

//         function updateClock() {
//             const t = getTimeRemaining(endtime);

//             daysSpan.innerHTML = t.days;
//             hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
//             minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
//             secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

//             if (t.total <= 0) {
//                 clearInterval(timeInterval);
//             }
//         }

//         updateClock();

//         const timeInterval = setInterval(updateClock, 1000);
//     }

//     useEffect(() => {
//         let id = 'countdown'
//         const deadline1 = new Date(Date.parse(new Date()) + 3 * 12 * 60 * 60 * 1000);

//         let id2 = 'countdown_1'
//         const deadline2 = new Date(Date.parse(new Date()) + 2 * 24 * 60 * 60 * 1000);

//         initializeClockFirst(id, deadline1);
//         initializeClockSecond(id2, deadline2);
//     });

//     // useEffect(() => {
//     //     let id2 = 'countdown_1'
//     //     const deadline2 = new Date(Date.parse(new Date()) + 2 * 24 * 60 * 60 * 1000);
//     //     initializeClock( id2, deadline2 );
//     // });

//     return (
//         <section className="bg-white">
//             <div className="container py-3">
//                 <div className="row">
//                     <div className="col-12 col-md-6 p-2">
//                         <div className="bg-danger-subtle px-3 px-md-5 py-3"
//                             style={{ backgroundImage: "url('/assets/images/productImages/product1.png')", backgroundPosition: "right center", backgroundRepeat: "no-repeat", backgroundSize: 'contain', visibility: "visible" }}>
//                             <div className="">
//                                 <span className="h3 text-brand fw-semibold lh-1">Deals of the Day.</span><br />
//                                 <p className="fs-6 fw-semibold">Limited quantities.</p>
//                             </div>
//                             <div className="">
//                                 <span className="h5">
//                                     <a className="text-decoration-none text-dark" href="/" style={{ fontFamily: 'Montez' }}>
//                                         Handcrafted New Morden Design Dupattas
//                                     </a>
//                                 </span>
//                                 <div className="my-3">
//                                     <span className="fw-bold fs-4 me-2" style={{ color: '/088178' }} >₹139.00</span>
//                                     <span className="fw-semibold fs-5 text-danger text-decoration-line-through ms-2">₹160.99</span>
//                                 </div>
//                             </div>
//                             <div className="">
//                                 <span>Hurry Up! Offer End In:</span>
//                                 <div className="deals-countdown mb-2" id="countdown" data-countdown="2025/03/25 00:00:00">
//                                     <span className="countdown-section">
//                                         <span className="countdown-amount hover-up days"></span>
//                                         <span className="countdown-period"> days </span>
//                                     </span>
//                                     <span className="countdown-section">
//                                         <span className="countdown-amount hover-up hours"></span>
//                                         <span className="countdown-period"> hours </span>
//                                     </span>
//                                     <span className="countdown-section">
//                                         <span className="countdown-amount hover-up mins"></span>
//                                         <span className="countdown-period"> mins </span>
//                                     </span>
//                                     <span className="countdown-section">
//                                         <span className="countdown-amount hover-up secs"></span>
//                                         <span className="countdown-period"> sec </span>
//                                     </span>
//                                 </div>
//                                 <div className="pt-2">
//                                     <a href="/" className="btn btn-outline-dark">Shop Now <i className="bi bi-arrow-right"></i></a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-12 col-md-6 p-2">
//                         <div className="bg-info-subtle px-3 px-md-5 py-3"
//                             style={{ backgroundImage: "url('/assets/images/productImages/product1.png')", backgroundPosition: "right center", backgroundRepeat: "no-repeat", backgroundSize: 'contain', visibility: "visible" }}>
//                             <div className="">
//                                 <span className="h3 text-brand fw-semibold lh-1">Deals of the Day.</span><br />
//                                 <p className="fs-6 fw-semibold">Limited quantities.</p>
//                             </div>
//                             <div className="">
//                                 <span className="h5">
//                                     <a className="text-decoration-none text-dark" href="/" style={{ fontFamily: 'Montez' }}>
//                                         Handcrafted New Morden Design
//                                     </a>
//                                 </span>
//                                 <div className="my-3">
//                                     <span className="fw-bold fs-4 me-2" style={{ color: '/088178' }} >₹139.00</span>
//                                     <span className="fw-semibold fs-5 text-danger text-decoration-line-through ms-2">₹160.99</span>
//                                 </div>
//                             </div>
//                             <div className="">
//                                 <span>Hurry Up! Offer End In:</span>
//                                 <div className="deals-countdown mb-2" id="countdown_1" data-countdown="2025/03/25 00:00:00">
//                                     <span className="countdown-section">
//                                         <span className="countdown-amount hover-up days"></span>
//                                         <span className="countdown-period"> days </span>
//                                     </span>
//                                     <span className="countdown-section">
//                                         <span className="countdown-amount hover-up hours"></span>
//                                         <span className="countdown-period"> hours </span>
//                                     </span>
//                                     <span className="countdown-section">
//                                         <span className="countdown-amount hover-up mins"></span>
//                                         <span className="countdown-period"> mins </span>
//                                     </span>
//                                     <span className="countdown-section">
//                                         <span className="countdown-amount hover-up secs"></span>
//                                         <span className="countdown-period"> sec </span>
//                                     </span>
//                                 </div>
//                                 <div className="pt-2">
//                                     <a href="/" className="btn btn-outline-dark">Shop Now <i className="bi bi-arrow-right"></i></a>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// }

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

// const SectionInfo1 = () => {
//     return (
//         <div className="container px-5">
//             <div className="row my-4">
//                 <div className="col-md-3 col-sm-6"></div>
//                 <div className="col-md-3 col-sm-6">
//                     <div className="product-grid">
//                         <div className="product-image">
//                             <a href="/" className="image">
//                                 <img className="pic-1" src="http://localhost:5010/uploads/image-1681551757369.jpg" alt="prod" />
//                                 <img className="pic-2" src="http://localhost:5010/uploads/image-1681551757369.jpg" alt="prod" />
//                             </a>
//                             <ul className="product-links">
//                                 <li><a href="/"><i className="fa fa-shopping-cart"></i></a></li>
//                                 <li><a href="/"><i className="far fa-heart"></i></a></li>
//                                 <li><a href="/"><i className="fa fa-random"></i></a></li>
//                                 <li><a href="/"><i className="fa fa-search"></i></a></li>
//                             </ul>
//                         </div>
//                         <div className="product-content">
//                             <ul className="rating">
//                                 <li className="fa fa-star"></li>
//                                 <li className="fa fa-star"></li>
//                                 <li className="fa fa-star"></li>
//                                 <li className="fa fa-star"></li>
//                                 <li className="far fa-star"></li>
//                             </ul>
//                             <h3 className="title"><a href="/">Women's Blouse Top</a></h3>
//                             <div className="price">$85.55</div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-md-3 col-sm-6">
//                     <div className="product-grid">
//                         <div className="product-image">
//                             <a href="/" className="image">
//                                 <img className="pic-1" src="http://localhost:5010/uploads/image-1681550837241.jpg" alt="prod" />
//                                 <img className="pic-2" src="http://localhost:5010/uploads/image-1681550837241.jpg" alt="prod" />
//                             </a>
//                             <ul className="product-links">
//                                 <li><a href="/"><i className="fa fa-shopping-cart"></i></a></li>
//                                 <li><a href="/"><i className="far fa-heart"></i></a></li>
//                                 <li><a href="/"><i className="fa fa-random"></i></a></li>
//                                 <li><a href="/"><i className="fa fa-search"></i></a></li>
//                             </ul>
//                         </div>
//                         <div className="product-content">
//                             <ul className="rating">
//                                 <li className="fa fa-star"></li>
//                                 <li className="fa fa-star"></li>
//                                 <li className="fa fa-star"></li>
//                                 <li className="far fa-star"></li>
//                                 <li className="far fa-star"></li>
//                             </ul>
//                             <h3 className="title"><a href="/">Men's Jacket</a></h3>
//                             <div className="price">$88.88</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
// <section className="featured section-padding">
//     <div className="container pb-25">
//         <div className="row">
//             <div className="col-lg-2 col-md-4 col-06 mb-md-3 mb-lg-0">
//                 <div className="banner-features" style={{ visibility: 'visible' }}>
//                     <img src="assets/imgs/theme/icons/feature-1.png" alt="" />
//                     <h4 className="bg-dark small text-light p-4">Free Shipping</h4>
//                 </div>
//             </div>
//             <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
//                 <div className="banner-features" style={{ visibility: 'visible' }}>
//                     <img src="assets/imgs/theme/icons/feature-2.png" alt="" />
//                     <h4 className="bg-info small text-light p-4">Online order</h4>
//                 </div>
//             </div>
//             <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
//                 <div className="banner-features" style={{ visibility: 'visible' }}>
//                     <img src="assets/imgs/theme/icons/feature-3.png" alt="" />
//                     <h4 className="bg-success small text-light p-4">Save Money</h4>
//                 </div>
//             </div>
//             <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
//                 <div className="banner-features" style={{ visibility: 'visible' }}>
//                     <img src="assets/imgs/theme/icons/feature-4.png" alt="" />
//                     <h4 className="bg-4">Promotions</h4>
//                 </div>
//             </div>
//             <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
//                 <div className="banner-features" style={{ visibility: 'visible' }}>
//                     <img src="assets/imgs/theme/icons/feature-5.png" alt="" />
//                     <h4 className="bg-5">Happy Sell</h4>
//                 </div>
//             </div>
//             <div className="col-lg-2 col-md-4 mb-md-3 mb-lg-0">
//                 <div className="banner-features" style={{ visibility: 'visible' }}>
//                     <img src="assets/imgs/theme/icons/feature-6.png" alt="" />
//                     <h4 className="bg-6">24/7 Support</h4>
//                 </div>
//             </div>
//         </div>
//     </div>
// </section>
//     );
// };

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
                                    From all orders over <span className="fw-semibold">₹</span>2000
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