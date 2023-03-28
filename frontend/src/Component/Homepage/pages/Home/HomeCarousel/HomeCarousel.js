import React from "react";

import "./HomeCarousel.css";

const HomeCarousel = () => {

    return (
        <section className="container-fluid">
            <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-touch="true" data-bs-interval="5000"  >
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="0" aria-label="Slide 1" className="active" aria-current="true"></button>
                    <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="5" aria-label="Slide 6"></button>
                    <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="6" aria-label="Slide 7"></button>
                    <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="7" aria-label="Slide 8"></button>
                    <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="8" aria-label="Slide 9"></button>
                    <button type="button" data-bs-target="#homeCarousel" data-bs-slide-to="9" aria-label="Slide 10"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        {/* <div> */}
                            <div className="image-wrapper">
                                <img src="./assets/images/bannerImages/banner-1.jpeg" className="d-block carousel-item-image" alt="..." />
                            </div>
                            <div className="carousel-caption d-block d-md-block">
                                <h5>1 slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        {/* </div> */}
                        {/* <div>
                            <div className="image-wrapper">
                                <img src="./assets/images/bannerImages/banner-2.jpeg" className="d-block carousel-item-image" alt="..." />
                            </div>
                            <div className="carousel-caption d-block d-md-block">
                                <h5>2 slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div> */}
                    </div>
                    <div className="carousel-item">
                        <div className="image-wrapper">
                            <img src="./assets/images/bannerImages/banner-2.jpeg" className="d-block carousel-item-image" alt="..." />
                        </div>
                        <div className="carousel-caption d-block d-md-block">
                            <h5>2 slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="image-wrapper">
                            <img src="./assets/images/bannerImages/banner-2.jpeg" className="d-block carousel-item-image" alt="..." />
                        </div>
                        <div className="carousel-caption d-block d-md-block">
                            <h5>3 slide label</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="image-wrapper">
                            <img src="./assets/images/bannerImages/banner-2.jpeg" className="d-block carousel-item-image" alt="..." />
                        </div>
                        <div className="carousel-caption d-block d-md-block">
                            <h5>4 slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="image-wrapper">
                            <img src="./assets/images/bannerImages/banner-2.jpeg" className="d-block carousel-item-image" alt="..." />
                        </div>
                        <div className="carousel-caption d-block d-md-block">
                            <h5>5 slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="image-wrapper">
                            <img src="./assets/images/bannerImages/banner-2.jpeg" className="d-block carousel-item-image" alt="..." />
                        </div>
                        <div className="carousel-caption d-block d-md-block">
                            <h5>6 slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="image-wrapper">
                            <img src="./assets/images/bannerImages/banner-2.jpeg" className="d-block carousel-item-image" alt="..." />
                        </div>
                        <div className="carousel-caption d-block d-md-block">
                            <h5>7 slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="image-wrapper">
                            <img src="./assets/images/bannerImages/banner-2.jpeg" className="d-block carousel-item-image" alt="..." />
                        </div>
                        <div className="carousel-caption d-block d-md-block">
                            <h5>8 slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="image-wrapper">
                            <img src="./assets/images/bannerImages/banner-2.jpeg" className="d-block carousel-item-image" alt="..." />
                        </div>
                        <div className="carousel-caption d-block d-md-block">
                            <h5>9 slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="image-wrapper">
                            <img src="./assets/images/bannerImages/banner-2.jpeg" className="d-block carousel-item-image" alt="..." />
                        </div>
                        <div className="carousel-caption d-block d-md-block">
                            <h5>10 slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="d-none d-sm-inline carousel-control-prev rounded-circle" type="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon rounded-circle" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="d-none d-sm-inline carousel-control-next rounded-circle" type="button" data-bs-target="#homeCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon rounded-circle" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
        
    );
}

export default HomeCarousel;