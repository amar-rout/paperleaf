import React, { useEffect } from 'react';
import $ from "jquery";

import './SliderView.css';

const SliderView = () => {

    const jQueryCode = () => {
        if (window.matchMedia("(min-width: 768px)").matches) {
            var carouselWidth = $(".carousel-product-inner")[0].scrollWidth;
            // var cardWidth = $(".carousel-product-item").width();
            var cardWidth = $(".carousel-product-item").width();
            var scrollPosition = 0;

            //on Next click
            $("#productCarouselControls .carousel-product-control-next").on("click", function () {
                if (scrollPosition < carouselWidth - (cardWidth * 5)) {
                    scrollPosition += cardWidth;
                    $("#productCarouselControls .carousel-product-inner").animate(
                        { scrollLeft: scrollPosition },
                        800
                    );
                }
            });
            //on Prev click
            $("#productCarouselControls .carousel-product-control-prev").on("click", function () {
                if (scrollPosition > 0) {
                    scrollPosition -= cardWidth;
                    $("#productCarouselControls .carousel-product-inner").animate(
                        { scrollLeft: scrollPosition },
                        800
                    );
                }
            });
        } else {
            $("#productCarouselControls").addClass("slide");
        }
    }

    useEffect(() => {
        jQueryCode();
    });

    return (
        <div className="container">
            <div id="productCarouselControls" className="carousel carousel-product" data-bs-touch="true" data-bs-ride="carousel">
                <div className="carousel-inner carousel-product-inner">
                    <div className="carousel-item carousel-product-item active">
                        <div className="card">
                            <div className="img-wrapper"><img src="./assets/images/bannerImages/banner-1.jpeg" className="d-block w-100" alt="..." /> </div>
                            <div className="card-body">
                                <h5 className="card-title">Card title 1</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                    card's content.</p>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item carousel-product-item">
                        <div className="card">
                            <div className="img-wrapper"><img src="./assets/images/bannerImages/banner-1.jpeg" className="d-block w-100" alt="..." /> </div>
                            <div className="card-body">
                                <h5 className="card-title">Card title 2</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                    card's content.</p>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item carousel-product-item">
                        <div className="card">
                            <div className="img-wrapper"><img src="./assets/images/bannerImages/banner-1.jpeg" className="d-block w-100" alt="..." /> </div>
                            <div className="card-body">
                                <h5 className="card-title">Card title 3</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                    card's content.</p>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item carousel-product-item">
                        <div className="card">
                            <div className="img-wrapper"><img src="./assets/images/bannerImages/banner-1.jpeg" className="d-block w-100" alt="..." /> </div>
                            <div className="card-body">
                                <h5 className="card-title">Card title 4</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                    card's content.</p>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item carousel-product-item">
                        <div className="card">
                            <div className="img-wrapper"><img src="./assets/images/bannerImages/banner-1.jpeg" className="d-block w-100" alt="..." /> </div>
                            <div className="card-body">
                                <h5 className="card-title">Card title 5</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                    card's content.</p>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item carousel-product-item">
                        <div className="card">
                            <div className="img-wrapper"><img src="./assets/images/bannerImages/banner-1.jpeg" className="d-block w-100" alt="..." /> </div>
                            <div className="card-body">
                                <h5 className="card-title">Card title 6</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                    card's content.</p>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item carousel-product-item">
                        <div className="card">
                            <div className="img-wrapper"><img src="./assets/images/bannerImages/banner-1.jpeg" className="d-block w-100" alt="..." /> </div>
                            <div className="card-body">
                                <h5 className="card-title">Card title 7</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                    card's content.</p>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item carousel-product-item">
                        <div className="card">
                            <div className="img-wrapper"><img src="./assets/images/bannerImages/banner-1.jpeg" className="d-block w-100" alt="..." /> </div>
                            <div className="card-body">
                                <h5 className="card-title">Card title 8</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                    card's content.</p>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item carousel-product-item">
                        <div className="card">
                            <div className="img-wrapper"><img src="./assets/images/bannerImages/banner-1.jpeg" className="d-block w-100" alt="..." /> </div>
                            <div className="card-body">
                                <h5 className="card-title">Card title 9</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                    card's content.</p>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item carousel-product-item">
                        <div className="card">
                            <div className="img-wrapper"><img src="./assets/images/bannerImages/banner-1.jpeg" className="d-block w-100" alt="..." /> </div>
                            <div className="card-body">
                                <h5 className="card-title">Card title 10</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                    card's content.</p>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item carousel-product-item">
                        <div className="card">
                            <div className="img-wrapper"><img src="./assets/images/bannerImages/banner-1.jpeg" className="d-block w-100" alt="..." /> </div>
                            <div className="card-body">
                                <h5 className="card-title">Card title 11</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                    card's content.</p>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item carousel-product-item">
                        <div className="card">
                            <div className="img-wrapper"><img src="./assets/images/bannerImages/banner-1.jpeg" className="d-block w-100" alt="..." /> </div>
                            <div className="card-body">
                                <h5 className="card-title">Card title 12</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                                    card's content.</p>
                                <a href="/" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev carousel-product-control-prev" type="button" data-bs-target="#productCarouselControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next carousel-product-control-next" type="button" data-bs-target="#productCarouselControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default SliderView;