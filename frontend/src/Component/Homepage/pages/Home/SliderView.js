import React, { useEffect } from 'react';

// import bootstrap from 'bootstrap/dist/js/bootstrap.min.js';
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
        // var multipleCardCarousel = document.querySelector("#carouselExampleControls");
        if (window.matchMedia("(min-width: 768px)").matches) {
            // var carousel = new bootstrap.Carousel(multipleCardCarousel, {
            //     interval: false,
            // });
            // console.log(carousel);
            var carouselWidth = $(".carousel-inner")[0].scrollWidth;
            var cardWidth = $(".carousel-item").width();
            var scrollPosition = 0;
            $("#carouselExampleControls .carousel-control-next").on("click", function () {
                if (scrollPosition < carouselWidth - (cardWidth * 4)) {
                    scrollPosition += cardWidth;
                    $("#carouselExampleControls .carousel-inner").animate(
                        { scrollLeft: scrollPosition }, 100
                    );
                }
            });
            $("#carouselExampleControls .carousel-control-prev").on("click", function () {
                if (scrollPosition > 0) {
                    scrollPosition -= cardWidth;
                    $("#carouselExampleControls .carousel-inner").animate(
                        { scrollLeft: scrollPosition }, 100
                    );
                }
            });
        } else {
            // $(multipleCardCarousel).addClass("slide");
            // $("#carouselExampleControls").addClass("slide");
        }
    }

    useEffect(() => {
        jQueryCode();
    });

    return (
        <div className="container my-2">
            <div id="carouselExampleControls" class="carousel" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div class="card">
                            {/* <div class="img-wrapper"><img src="..." class="d-block w-100" alt="..."> </div> */}
                            <div class="card-body">
                                <h5 class="card-title">Card title 1</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                                    card's content.</p>
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="card">
                            {/* <div class="img-wrapper"><img src="..." class="d-block w-100" alt="..."> </div> */}
                            <div class="card-body">
                                <h5 class="card-title">Card title 2</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                                    card's content.</p>
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="card">
                            {/* <div class="img-wrapper"><img src="..." class="d-block w-100" alt="..."> </div> */}
                            <div class="card-body">
                                <h5 class="card-title">Card title 3</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                                    card's content.</p>
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="card">
                            {/* <div class="img-wrapper"><img src="..." class="d-block w-100" alt="..."> </div> */}
                            <div class="card-body">
                                <h5 class="card-title">Card title 4</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                                    card's content.</p>
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="card">
                            {/* <div class="img-wrapper"><img src="..." class="d-block w-100" alt="..."> </div> */}
                            <div class="card-body">
                                <h5 class="card-title">Card title 5</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                                    card's content.</p>
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="card">
                            {/* <div class="img-wrapper"><img src="..." class="d-block w-100" alt="..."> </div> */}
                            <div class="card-body">
                                <h5 class="card-title">Card title 6</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                                    card's content.</p>
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="card">
                            {/* <div class="img-wrapper"><img src="..." class="d-block w-100" alt="..."> </div> */}
                            <div class="card-body">
                                <h5 class="card-title">Card title 7</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                                    card's content.</p>
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="card">
                            {/* <div class="img-wrapper"><img src="..." class="d-block w-100" alt="..."> </div> */}
                            <div class="card-body">
                                <h5 class="card-title">Card title 8</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                                    card's content.</p>
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                    </div>
                    <div class="carousel-item">
                        <div class="card">
                            {/* <div class="img-wrapper"><img src="..." class="d-block w-100" alt="..."> </div> */}
                            <div class="card-body">
                                <h5 class="card-title">Card title 9</h5>
                                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                                    card's content.</p>
                                {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default SliderView;