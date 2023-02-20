import React from 'react';
import ReactStars from "react-rating-stars-component";

import Breadcrumb from '../Breadcrumb/Breadcrumb';

const Products = () => {
    return (
        <>
            <Breadcrumb
                links={[
                    { name: 'Home', link: '/', active: false },
                    { name: 'Products', link: '/Products', active: true }
                ]}
            />
            <section className="album py-3">
                <div className="container">
                    <h4 className="pb-5 text-center">
                        <span className="border-bottom border-2">Products</span>
                    </h4>
                    <div className='row'>
                        <div className='col-12'>
                            <div class="row mb-50">
                                <div class="col-md-6 col-sm-12 col-xs-12">
                                    <div class="detail-gallery mx-md-5 px-2 px-md-5">
                                        <span class="zoom-icon"><i class="fi-rs-search"></i></span>
                                        <img src="/assets/images/productImages/Dress/IMG_DR_L1.jpg" alt="product" style={{ width: "100%", height: "100%" }} />
                                        {/* <div class="product-image-slider slick-initialized slick-slider">
                                            <div class="slick-list draggable"><div class="slick-track" style={{opacity: 1, width: 5040, transform: 'translate3d(-336px, 0px, 0px)'}}>
                                                <figure class="border-radius-10 slick-slide slick-cloned" data-slick-index="-1" id="" aria-hidden="true" tabindex="-1" style={{width: 336}}>
                                                    <img src="assets/imgs/shop/product-16-7.jpg" alt="product" />
                                                </figure>
                                                <figure class="border-radius-10 slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="0" style={{width:336}}>
                                                    <img src="assets/imgs/shop/product-16-2.jpg" alt="product" />
                                                </figure>
                                                <figure class="border-radius-10 slick-slide" data-slick-index="1" aria-hidden="true" tabindex="-1" style={{width:336}}>
                                                    <img src="assets/imgs/shop/product-16-1.jpg" alt="product" />
                                                </figure>
                                                <figure class="border-radius-10 slick-slide" data-slick-index="2" aria-hidden="true" tabindex="-1" style={{width:336}}>
                                                    <img src="assets/imgs/shop/product-16-3.jpg" alt="product" />
                                                </figure>
                                            </div>
                                            </div>
                                        </div> */}
                                        {/* <div class="slider-nav-thumbnails pl-15 pr-15 slick-initialized slick-slider">
                                            <button type="button" class="slick-prev slick-arrow">
                                                <i class="fi-rs-angle-left"></i>
                                            </button>
                                            <button type="button" class="slick-next slick-arrow">
                                                <i class="fi-rs-angle-right"></i>
                                            </button>
                                        </div> */}
                                    </div>
                                </div>
                                <div class="col-md-6 col-sm-12 col-xs-12">
                                    <div class="detail-info">
                                        <h2 class="title-detail">Colorful Pattern Shirts HD450</h2>
                                        <div class="d-flex justify-content-between align-items-center">
                                            <span> Brands: PaperLeaf</span>
                                            <span className='d-flex justify-content-start align-items-center '>
                                                <ReactStars classNames=""  {...{
                                                    size: 15,
                                                    count: 5,
                                                    color: "#feeecc",
                                                    activeColor: "#fdad01",
                                                    value: 4.5,
                                                    a11y: true,
                                                    edit: false,
                                                    isHalf: true
                                                }} />
                                                <span class="small ms-1 me-5 text-muted"> (25 reviews)</span>
                                            </span>
                                        </div>
                                        <div class="clearfix product-price-cover">
                                            <div class="product-price primary-color float-left">
                                                <span class="text-brand fs-4 fw-bold">₹120.00</span>
                                                <span class="ms-2 ms-md-4 fs-6 fw-normal text-decoration-line-through">₹200.00</span>
                                                <span class="ms-2 ms-md-4 fs-6 fw-bold text-muted">25% Off</span>
                                            </div>
                                        </div>
                                        {/* <div class="bt-1 border-color-1 mt-15 mb-15"></div>
                                        <div class="short-desc mb-30">
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!</p>
                                        </div>
                                        <div class="product_sort_info font-xs mb-30">
                                            <ul>
                                                <li class="mb-10"><i class="fi-rs-crown mr-5"></i> 1 Year AL Jazeera Brand Warranty</li>
                                                <li class="mb-10"><i class="fi-rs-refresh mr-5"></i> 30 Day Return Policy</li>
                                                <li><i class="fi-rs-credit-card mr-5"></i> Cash on Delivery available</li>
                                            </ul>
                                        </div> */}
                                        {/* <div class="attr-detail attr-color mb-15">
                                            <strong class="mr-10">Color</strong>
                                            <ul class="list-filter color-filter">
                                                <li><a href="/" data-color="Red"><span class="product-color-red"></span></a></li>
                                                <li><a href="/" data-color="Yellow"><span class="product-color-yellow"></span></a></li>
                                                <li class="active"><a href="/" data-color="White"><span class="product-color-white"></span></a></li>
                                                <li><a href="/" data-color="Orange"><span class="product-color-orange"></span></a></li>
                                                <li><a href="/" data-color="Cyan"><span class="product-color-cyan"></span></a></li>
                                                <li><a href="/" data-color="Green"><span class="product-color-green"></span></a></li>
                                                <li><a href="/" data-color="Purple"><span class="product-color-purple"></span></a></li>
                                            </ul>
                                        </div> */}
                                        {/* <div class="attr-detail attr-size">
                                            <strong class="mr-10">Size</strong>
                                            <ul class="list-filter size-filter font-small">
                                                <li><a href="/">S</a></li>
                                                <li class="active"><a href="/">M</a></li>
                                                <li><a href="/">L</a></li>
                                                <li><a href="/">XL</a></li>
                                                <li><a href="/">XXL</a></li>
                                            </ul>
                                        </div> */}
                                        {/* <div class="bt-1 border-color-1 mt-30 mb-30"></div>
                                        <div class="detail-extralink">
                                            <div class="detail-qty border radius">
                                                <a href="/" class="qty-down"><i class="fi-rs-angle-small-down"></i></a>
                                                <span class="qty-val">1</span>
                                                <a href="/" class="qty-up"><i class="fi-rs-angle-small-up"></i></a>
                                            </div>
                                            <div class="product-extra-link2">
                                                <button type="submit" class="button button-add-to-cart">Add to cart</button>
                                                <a aria-label="Add To Wishlist" class="action-btn hover-up" href="shop-wishlist.html"><i class="fi-rs-heart"></i></a>
                                                <a aria-label="Compare" class="action-btn hover-up" href="shop-compare.html"><i class="fi-rs-shuffle"></i></a>
                                            </div>
                                        </div> */}
                                        {/* <ul class="product-meta font-xs color-grey mt-50">
                                            <li class="mb-5">SKU: <a href="/">FWM15VKT</a></li>
                                            <li class="mb-5">Tags: <a href="/" rel="tag">Cloth</a>, <a href="/" rel="tag">Women</a>, <a href="/" rel="tag">Dress</a> </li>
                                            <li>Availability:<span class="in-stock text-success ml-5">8 Items In Stock</span></li>
                                        </ul> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products;