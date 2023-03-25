import React, { useEffect } from 'react';

import bootstrap from 'bootstrap/dist/js/bootstrap.min.js';
import $ from "jquery";

import './SliderView.css';

const SliderView = () => {

    // const jQueryCode = () => {
    //     if (window.matchMedia("(min-width: 768px)").matches) {
    //         var carouselWidth = $(".carousel-product-inner")[0].scrollWidth;
    //         var cardWidth = $(".carousel-product-item").width();
    //         var cardWidth = $(".carousel-product-item").width();
    //         var scrollPosition = 0;

    //         $("#productCarouselControls .carousel-product-control-next").on("click", function () {
    //             if (scrollPosition < carouselWidth - (cardWidth * 5)) {
    //                 scrollPosition += cardWidth;
    //                 $("#productCarouselControls .carousel-product-inner").animate(
    //                     { scrollLeft: scrollPosition },
    //                     800
    //                 );
    //             }
    //         });
    //         //on Prev click
    //         $("#productCarouselControls .carousel-product-control-prev").on("click", function () {
    //             if (scrollPosition > 0) {
    //                 scrollPosition -= cardWidth;
    //                 $("#productCarouselControls .carousel-product-inner").animate(
    //                     { scrollLeft: scrollPosition },
    //                     800
    //                 );
    //             }
    //         });
    //     } else {
    //         $("#productCarouselControls").addClass("slide");
    //     }
    // }

    const jQueryCode = () => {
        var multipleCardCarousel = document.querySelector("#carouselExampleControls");
        if (window.matchMedia("(min-width: 768px)").matches) {
            var carousel = new bootstrap.Carousel(multipleCardCarousel, {
                interval: false,
            });
            console.log(carousel);
            var carouselWidth = $(".carousel-inner")[0].scrollWidth;
            var cardWidth = $(".carousel-item").width();
            var scrollPosition = 0;
            $("#carouselExampleControls .carousel-control-next").on("click", function () {
                if (scrollPosition < carouselWidth - (cardWidth * 4)) {
                    scrollPosition += cardWidth;
                    $("#carouselExampleControls .carousel-inner").animate({ scrollLeft: scrollPosition }, 100);
                }
            });
            $("#carouselExampleControls .carousel-control-prev").on("click", function () {
                if (scrollPosition > 0) {
                    scrollPosition -= cardWidth;
                    $("#carouselExampleControls .carousel-inner").animate({ scrollLeft: scrollPosition }, 100);
                }
            });
            // console.log(scrollPosition);
            // if (scrollPosition === 0) {
            //     $("#carouselExampleControls .carousel-control-prev").addClass("d-none");
            // } else {
            //     $("#carouselExampleControls .carousel-control-prev").removeClass("d-none");
            // }
            // if (scrollPosition === (carouselWidth - (cardWidth * 5))) {
            //     $("#carouselExampleControls .carousel-control-next").addClass("d-none");
            // }
            // else {
            //     $("#carouselExampleControls .carousel-control-next").removeClass("d-none");
            // }
        } else {
            $(multipleCardCarousel).addClass("slide");
            // carousel.interval(true);
            // $("#carouselExampleControls").addClass("slide");
        }
    }

    useEffect(() => {
        jQueryCode();
    });

    return (
        // <div className="my-2">
            <div id="carouselExampleControls" className="carousel" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="card">
                            {/* <div className="img-wrapper"><img src="..." className="d-block w-100" alt="..."> </div> */}
                            <div className="img-wrapper">
                                <img src="/assets/images/bannerImages/banner-1.jpeg" className="d-block w-100" alt="product" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Card title 1</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                    card's content.</p>
                                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card">
                            {/* <div className="img-wrapper"><img src="..." className="d-block w-100" alt="..."> </div> */}
                            <div className="img-wrapper">
                                <img src="/assets/images/bannerImages/banner-1.jpeg" className="d-block w-100" alt="product" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Card title 2</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                    card's content.</p>
                                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card">
                            {/* <div className="img-wrapper"><img src="..." className="d-block w-100" alt="..."> </div> */}
                            <div className="img-wrapper">
                                <img src="/assets/images/bannerImages/banner-1.jpeg" className="d-block w-100" alt="product" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Card title 3</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                    card's content.</p>
                                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card">
                            {/* <div className="img-wrapper"><img src="..." className="d-block w-100" alt="..."> </div> */}
                            <div className="img-wrapper">
                                <img src="/assets/images/bannerImages/banner-1.jpeg" className="d-block w-100" alt="product" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Card title 4</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                    card's content.</p>
                                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card">
                            {/* <div className="img-wrapper"><img src="..." className="d-block w-100" alt="..."> </div> */}
                            <div className="img-wrapper">
                                <img src="/assets/images/bannerImages/banner-1.jpeg" className="d-block w-100" alt="product" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Card title 5</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                    card's content.</p>
                                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card">
                            {/* <div className="img-wrapper"><img src="..." className="d-block w-100" alt="..."> </div> */}
                            <div className="img-wrapper">
                                <img src="/assets/images/bannerImages/banner-1.jpeg" className="d-block w-100" alt="product" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Card title 6</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                    card's content.</p>
                                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card">
                            {/* <div className="img-wrapper"><img src="..." className="d-block w-100" alt="..."> </div> */}
                            <div className="img-wrapper">
                                <img src="/assets/images/bannerImages/banner-1.jpeg" className="d-block w-100" alt="product" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Card title 7</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                    card's content.</p>
                                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card">
                            {/* <div className="img-wrapper"><img src="..." className="d-block w-100" alt="..."> </div> */}
                            <div className="img-wrapper">
                                <img src="/assets/images/bannerImages/banner-1.jpeg" className="d-block w-100" alt="product" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Card title 8</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                    card's content.</p>
                                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="card">
                            {/* <div className="img-wrapper"><img src="..." className="d-block w-100" alt="..."> </div> */}
                            <div className="img-wrapper">
                                <img src="/assets/images/bannerImages/banner-1.jpeg" className="d-block w-100" alt="product" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Card title 9</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                    card's content.</p>
                                {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        // </div>
    )
}

export default SliderView;