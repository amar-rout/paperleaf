import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Breadcrumb from '../Breadcrumb/Breadcrumb';

import { clearState, productDetailsAsync, selectProduct, getStatus, getError } from "../../../../app/productSlice";


const Products = () => {
    const [productID, setProductID] = useState("");
    const [productName, setProductName] = useState("");
    const [product, setProduct] = useState({});

    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let slider1 = '';
    let slider2 = '';

    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const getProduct = useSelector(selectProduct);
    const getProductStatus = useSelector(getStatus);
    const getProductError = useSelector(getError);

    const { id } = useParams();
    const dispatch = useDispatch();

    const [prodQuantity, setProdQuantity] = useState(1);

    useEffect(() => {
        setProductID(id);
        setNav1(slider1);
        setNav2(slider2);
    }, [id, slider1, slider2]);

    useEffect(() => {
        setProduct(getProduct);
        setProductName(product.name);
        dispatch(clearState());
    }, [dispatch, getProduct, product]);

    useEffect(() => {
        if (getProductStatus === "LOADING") {
            setLoading(true);
        }
        if (getProductStatus === "LOADED") {
            setProduct(getProduct);
            setLoading(false);
            dispatch(clearState());
        }
        if (getProductStatus === "ERROR") {
            setLoading(false);
            setErrorMessage(getProductError);
            dispatch(clearState());
        }
    }, [dispatch, getProduct, getProductStatus, getProductError]);

    useEffect(() => {
        setProductID(id);
        dispatch(productDetailsAsync(id));
        dispatch(clearState());
    }, [dispatch, id, productID]);

    return (
        <>
            <Breadcrumb
                links={[
                    { name: 'Home', link: '/', active: false },
                    // { name: 'Products', link: '/Products', active: false },
                    { name: `${productName}`, link: `/${productName}`, active: true }
                ]}
            />
            {loading ?
                <div className="container my-5 py-5 text-center">
                    <div className="spinner-border" style={{ width: '3rem', height: '3rem' }} role="status">
                        <span className="">Loading...</span>
                    </div>
                </div>
                :
                <>
                    {errorMessage === '' && <>{errorMessage}</>}
                    <section className="album py-3 bg-light-subtle">
                        <div className="container bg-body shadow p-md-5 p-2">
                            <div className="row mb-50">
                                <div className="col-12 col-md-4">
                                    {/* <div className={`detail-gallery mx-md-5 px-2 px-md-5 ${stickyClass}`}> */}
                                    {/* <div className="mx-md-5 px-2 px-md-5">
                                        <span className="zoom-icon"><i className="fi-rs-search"></i></span>
                                        <img src={product.image} alt="product" style={{ width: "100%", height: "400px" }} />
                                        <div className="d-flex flex-0 justify-content-start align-items-center py-2">
                                            <img className="p-1" src="/assets/images/productImages/DressMaterial/3.jpg" alt="product" style={{ width: "80px", height: "80px" }} />
                                            <img className="p-1" src="/assets/images/productImages/DressMaterial/2.jpg" alt="product" style={{ width: "80px", height: "80px" }} />
                                            <img className="p-1" src="/assets/images/productImages/DressMaterial/8.jpg" alt="product" style={{ width: "80px", height: "80px" }} />
                                            <img className="p-1" src="/assets/images/productImages/DressMaterial/9.jpg" alt="product" style={{ width: "80px", height: "80px" }} />
                                            <img className="p-1" src={product.image} alt="product" style={{ width: "64px", height: "64px" }} />
                                            <img className="p-1" src={product.image} alt="product" style={{ width: "64px", height: "64px" }} />
                                        </div>
                                    </div> */}
                                    <div>
                                        <Slider ref={slider => (slider1 = slider)}>
                                            <div>
                                                <img src={`http://localhost:5010${product.image}`} alt="product" style={{ width: "100%", height: "400px" }} />
                                            </div>
                                            {product.images && product.images.map((image) => {
                                                return (
                                                    <div>
                                                        <img src={`http://localhost:5010${image}`} alt="product" style={{ width: "100%", height: "400px" }} />
                                                    </div>
                                                )
                                            })}
                                            {product.images && product.images.map((image) => {
                                                return (
                                                    <div>
                                                        <img src={`http://localhost:5010${image}`} alt="product" style={{ width: "100%", height: "400px" }} />
                                                    </div>
                                                )
                                            })}

                                        </Slider>
                                        <Slider
                                            asNavFor={nav1}
                                            ref={slider => (slider2 = slider)}
                                            slidesToShow={6}
                                            swipeToSlide={true}
                                            focusOnSelect={true}
                                        >
                                            <div>
                                                <img src={`http://localhost:5010${product.image}`} className='p-2' alt={product.image} style={{ width: "64px", height: "64px" }} />
                                            </div>
                                            {product.images && product.images.map((image) => {
                                                return (
                                                    <div>
                                                        <img src={`http://localhost:5010${image}`} className='p-2' alt="product" style={{ width: "64px", height: "64px" }} />
                                                    </div>
                                                )
                                            })}
                                            {product.images && product.images.map((image) => {
                                                return (
                                                    <div>
                                                        <img src={`http://localhost:5010${image}`} className='p-2' alt="product" style={{ width: "64px", height: "64px" }} />
                                                    </div>
                                                )
                                            })}
                                        </Slider>
                                    </div>
                                </div>
                                <div className="col-12 col-md-8">
                                    <div className="detail-info mx-md-3 px-2 px-md-3 py-2 py-md-0">
                                        <div className="d-flex justify-content-between align-items-center">
                                            {product.countInStock > 0 ?
                                                <>
                                                    <span className="px-2 py-1 small bg-success-subtle text-success rounded">In Stock</span>
                                                </>
                                                :
                                                <span className="px-2 py-1 small bg-danger-subtle text-danger rounded">Out of Stocks</span>
                                            }
                                            <span className='d-flex justify-content-end align-items-center '>
                                                <ReactStars classNames=""  {...{
                                                    size: 18,
                                                    count: 5,
                                                    color: "#feeecc",
                                                    activeColor: "#fdad01",
                                                    value: product.rating,
                                                    a11y: true,
                                                    edit: false,
                                                    isHalf: true
                                                }} />
                                                <span className="small ms-1 me-5 text-muted">
                                                    <span className=''>{product.rating}</span>
                                                    {/* style={{ color: '#fdad01' }} */}
                                                    <span className='ms-1'>({product.numReviews} reviews)</span>
                                                </span>
                                            </span>
                                        </div>
                                        <p className="mt-2 mb-3 small fw-semibold text-muted">PAPERLEAF</p>
                                        <h2 className="title-detail fw-bold" style={{ fontFamily: 'Montserrat !important' }}>{product.name}</h2>
                                        <div>
                                            <span className="text-brand fs-3 fw-bold text-muted">₹{product.price}</span>
                                            {product.salePrice > 0 && <span className="ms-2 ms-md-4 fs-3 fw-bold text-muted text-decoration-line-through">₹{product.salePrice}</span>}
                                            {/* <span className="ms-2 ms-md-4 fs-6 fw-bold text-muted">Flat 25% Off</span> */}
                                        </div>
                                        <div className="bt-1 border-color-1 mt-15 mb-15"></div>
                                        {/* <div className="short-desc mb-30">
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!</p>
                                        </div> */}
                                        {/* <div className="product_sort_info font-xs mb-30">
                                            <ul className='text-decoration-none'>
                                                <li className="mb-1"><i className="fi-rs-crown mr-5"></i> 1 Year AL Jazeera Brand Warranty</li>
                                                <li className="mb-1"><i className="fi-rs-refresh mr-5"></i> 30 Day Return Policy</li>
                                                <li><i className="bi bi-card mr-5"></i> Cash on Delivery available</li>
                                            </ul>
                                        </div> */}
                                        <div className="my-4 d-flex flex-0 justify-content-start align-items-center">
                                            <div>
                                                <span className="me-2">Size </span>
                                            </div>
                                            <div class="" role="group" aria-label="Basic radio toggle button group">
                                                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" />
                                                <label class="btn btn-outline-danger me-2 p-0 m-0" style={{ width: 28, height: 28, borderRadius: '50%' }} for="btnradio1"><small>XS</small></label>

                                                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                                                <label class="btn btn-outline-danger me-2 p-0 m-0" style={{ width: 28, height: 28, borderRadius: '50%' }} for="btnradio2"><small>S</small></label>

                                                <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                                                <label class="btn btn-outline-danger me-2 p-0 m-0" style={{ width: 28, height: 28, borderRadius: '50%' }} for="btnradio3"><small>M</small></label>

                                                <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off" />
                                                <label class="btn btn-outline-danger me-2 p-0 m-0" style={{ width: 28, height: 28, borderRadius: '50%' }} for="btnradio4"><small>L</small></label>

                                                <input type="radio" class="btn-check" name="btnradio" id="btnradio5" autocomplete="off" />
                                                <label class="btn btn-outline-danger me-2 p-0 m-0" style={{ width: 28, height: 28, borderRadius: '50%' }} for="btnradio5"><small>XL</small></label>

                                                <input type="radio" class="btn-check" name="btnradio" id="btnradio6" autocomplete="off" />
                                                <label class="btn btn-outline-danger me-2 p-0 m-0" style={{ width: 28, height: 28, borderRadius: '50%' }} for="btnradio6"><small>XXL</small></label>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-0 justify-content-start align-items-center">
                                            <div>
                                                <span className="me-2">Quantity </span>
                                            </div>
                                            <div className="input-group input-group-sm" style={{ maxWidth: 150 }}>
                                                {prodQuantity > 1 ?
                                                    <button className="btn btn-outline-dark fs-xl px-3" type="button" data-decrement=""
                                                        onClick={() => setProdQuantity(prodQuantity - 1)}>
                                                        <i className="bi bi-dash-lg"></i>
                                                    </button>
                                                    :
                                                    <button className="btn btn-outline-dark fs-xl px-3 disabled" type="button" data-decrement="">
                                                        <i className="bi bi-dash-lg"></i>
                                                    </button>
                                                }
                                                <span className="form-control shadow-none disabled border-dark text-center">{prodQuantity}</span>
                                                {/* value={product.qty} /> */}
                                                {prodQuantity < 5 ?
                                                    <button className="btn btn-outline-dark fs-xl px-3" type="button" data-decrement=""
                                                        onClick={() => setProdQuantity(prodQuantity + 1)}>
                                                        <i className="bi bi-plus-lg"></i>
                                                    </button>
                                                    :
                                                    <button className="btn btn-outline-dark fs-xl px-3 disabled" type="button" data-decrement="">
                                                        <i className="bi bi-dash-lg"></i>
                                                    </button>
                                                }
                                            </div>
                                        </div>
                                        <p className="text-muted fw-normal small mb-4"><small>*Please contact our service helpdesk if you want to order more than 5 pieces in a single order</small></p>
                                        <div className="my-4 d-flex flex-0 justify-content-start align-items-center">
                                            <div className="me-2">
                                                <button type="submit" className="btn btn-warning px-3"><small>Add to cart</small></button>
                                            </div>
                                            <div className="ms-2">
                                                <button type="submit" className="btn btn-outline-dark px-3"><small>Buy now</small></button>
                                            </div>
                                        </div>
                                        {/* <div className="detail-extralink">
                                            <div className="product-extra-link2">
                                                <button type="submit" className="button button-add-to-cart">Add to cart</button>
                                                <a aria-label="Add To Wishlist" className="action-btn hover-up" href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                <a aria-label="Compare" className="action-btn hover-up" href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                            </div>
                                        </div> */}
                                        {/* <ul className="product-meta font-xs color-grey mt-50">
                                            <li className="mb-5">SKU: <a href="/">FWM15VKT</a></li>
                                            <li className="mb-5">Tags: <a href="/" rel="tag">Cloth</a>, <a href="/" rel="tag">Women</a>, <a href="/" rel="tag">Dress</a> </li>
                                            <li>Availability:<span className="in-stock text-success ml-5">8 Items In Stock</span></li>
                                        </ul> */}
                                    </div>
                                </div>

                                {/* ReactSlick slider Begin */}
                                {/* <div class="row p-5">
                                    <div class="col-md-4">
                                        <div>
                                            <Slider ref={slider => (slider1 = slider)}>
                                                <div>
                                                    <img src={`http://localhost:5010${product.image}`} alt="product" style={{ width: "100%", height: "400px" }} />
                                                </div>
                                                {product.images && product.images.map((image) => {
                                                    return (
                                                        <div>
                                                            <img src={`http://localhost:5010${image}`} alt="product" style={{ width: "100%", height: "400px" }} />
                                                        </div>
                                                    )
                                                })}
                                                {product.images && product.images.map((image) => {
                                                    return (
                                                        <div>
                                                            <img src={`http://localhost:5010${image}`} alt="product" style={{ width: "100%", height: "400px" }} />
                                                        </div>
                                                    )
                                                })}

                                            </Slider>
                                            <Slider
                                                asNavFor={nav1}
                                                ref={slider => (slider2 = slider)}
                                                slidesToShow={6}
                                                swipeToSlide={true}
                                                focusOnSelect={true}
                                            >
                                                <div>
                                                    <img src={`http://localhost:5010${product.image}`} className='p-2' alt={product.image} style={{ width: "64px", height: "64px" }} />
                                                </div>
                                                {product.images && product.images.map((image) => {
                                                    return (
                                                        <div>
                                                            <img src={`http://localhost:5010${image}`} className='p-2' alt="product" style={{ width: "64px", height: "64px" }} />
                                                        </div>
                                                    )
                                                })}
                                                {product.images && product.images.map((image) => {
                                                    return (
                                                        <div>
                                                            <img src={`http://localhost:5010${image}`} className='p-2' alt="product" style={{ width: "64px", height: "64px" }} />
                                                        </div>
                                                    )
                                                })}
                                            </Slider>
                                        </div>
                                    </div>
                                </div> */}
                                {/* ReactSlick slider End */}

                                {/* Slick slider Begin */}

                                {/* <div class="row">
                                    <div class="col-md-5">
                                        <div class="slick-wrapper">
                                            <div class="slider-for mb-3 slick-initialized slick-slider">
                                                <button class="slick-prev slick-arrow" aria-label="Previous" type="button" style={{}}>Previous</button>
                                                <div class="slick-list draggable">
                                                    <div class="slick-track" style={{ opacity: 1, width: 1240 }}>
                                                        <div class="slick-slide-item slick-slide" data-slick-index="0" aria-hidden="true" tabindex="-1" style={{ width: 248, position: 'relative', left: 0, top: 0, zIndex: 998, opacity: 0, transition: 'opacity 500ms ease 0s' }}>
                                                            <img src="../../assets/images/products/2.jpg" class="w-100 rounded" alt="" />
                                                        </div>
                                                        <div class="slick-slide-item slick-slide" data-slick-index="1" aria-hidden="true" tabindex="-1" style={{width: 248, position: 'relative', left: -248, top: 0, zIndex: 998, opacity: 0, transition: 'opacity 500ms ease 0s'}}>
                                                            <img src="../../assets/images/products/1.jpg" class="w-100 rounded" alt="" />
                                                        </div>
                                                        <div class="slick-slide-item slick-slide" data-slick-index="2" aria-hidden="true" tabindex="-1" style={{width: 248, position: 'relative', left: -496, top: 0, zIndex: 998, opacity: 0, transition: 'opacity 500ms ease 0s'}}>
                                                            <img src="../../assets/images/products/3.jpg" class="w-100 rounded" alt="" />
                                                        </div>
                                                        <div class="slick-slide-item slick-slide slick-current slick-active" data-slick-index="3" aria-hidden="false" tabindex="0" style={{width: 248, position: 'relative', left: -744, top: 0, zIndex: 999, opacity: 1 }}>
                                                            <img src="../../assets/images/products/4.jpg" class="w-100 rounded" alt="" />
                                                        </div>
                                                        <div class="slick-slide-item slick-slide" data-slick-index="4" aria-hidden="true" tabindex="-1" style={{width: 248, position: 'relative', left: -992, top: 0, zIndex: 998, opacity: 0, transition: 'opacity 500ms ease 0s'}}>
                                                            <img src="../../assets/images/products/5.jpg" class="w-100 rounded" alt="" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <button class="slick-next slick-arrow" aria-label="Next" type="button" style={{}}>Next</button></div>
                                            <div class="slick-nav-wrapper">
                                                <div class="slider-nav slick-initialized slick-slider"><button class="slick-prev slick-arrow" aria-label="Previous" type="button" style={{}}>Previous</button>
                                                    <div class="slick-list draggable" style={{padding: '0 60px'}}>
                                                        <div class="slick-track" style={{opacity: 1, width: 602, transform: 'translate3d(-258px, 0px, 0px)'}}>
                                                        <div class="slick-slide-item m-2 slick-slide slick-cloned" data-slick-index="-4" aria-hidden="true" tabindex="-1" style={{width: 27}}>
                                                            <img src="../../assets/images/products/1.jpg" class="w-100 rounded" alt="" />
                                                        </div>
                                                        <div class="slick-slide-item m-2 slick-slide slick-cloned" data-slick-index="-3" aria-hidden="true" tabindex="-1" style={{width: 27}}>
                                                            <img src="../../assets/images/products/3.jpg" class="w-100 rounded" alt="" />
                                                        </div>
                                                        <div class="slick-slide-item m-2 slick-slide slick-cloned" data-slick-index="-2" aria-hidden="true" tabindex="-1" style={{width: 27}}>
                                                            <img src="../../assets/images/products/4.jpg" class="w-100 rounded" alt="" />
                                                        </div>
                                                        <div class="slick-slide-item m-2 slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" tabindex="-1" style={{width: 27}}>
                                                            <img src="../../assets/images/products/5.jpg" class="w-100 rounded" alt="" />
                                                        </div>
                                                        <div class="slick-slide-item m-2 slick-slide" data-slick-index="0" aria-hidden="true" tabindex="-1" style={{width: 27}}>
                                                            <img src="../../assets/images/products/2.jpg" class="w-100 rounded" alt="" />
                                                        </div>
                                                        <div class="slick-slide-item m-2 slick-slide" data-slick-index="1" aria-hidden="true" tabindex="-1" style={{width: 27}}>
                                                            <img src="../../assets/images/products/1.jpg" class="w-100 rounded" alt="" />
                                                        </div>
                                                        <div class="slick-slide-item m-2 slick-slide slick-active" data-slick-index="2" aria-hidden="false" tabindex="-1" style={{width: 27}}>
                                                            <img src="../../assets/images/products/3.jpg" class="w-100 rounded" alt="" />
                                                        </div>
                                                        <div class="slick-slide-item m-2 slick-slide slick-current slick-active slick-center" data-slick-index="3" aria-hidden="false" tabindex="0" style={{width: 27}}>
                                                            <img src="../../assets/images/products/4.jpg" class="w-100 rounded" alt="" />
                                                        </div>
                                                        <div class="slick-slide-item m-2 slick-slide slick-active" data-slick-index="4" aria-hidden="false" tabindex="0" style={{width: 27}}>
                                                            <img src="../../assets/images/products/5.jpg" class="w-100 rounded" alt="" />
                                                        </div>
                                                        <div class="slick-slide-item m-2 slick-slide slick-cloned" data-slick-index="5" aria-hidden="true" tabindex="-1" style={{width: 27}}>
                                                            <img src="../../assets/images/products/2.jpg" class="w-100 rounded" alt="" />
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <button class="slick-next slick-arrow" aria-label="Next" type="button" style={{}}>Next</button></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-7">
                                        <div class="d-flex justify-content-between align-items-start mt-4 mt-md-0">
                                            <div>
                                                <div class="small text-muted mb-2">Technology Products</div>
                                                <h2>Ultimate Ears Wonderboom</h2>
                                                <p>
                                                    <span class="badge bg-success">In stock</span>
                                                </p>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda
                                                    autem eaque error explicabo fugiat iusto necessitatibus, temporibus. Laudantium,
                                                    voluptate?</p>
                                                <div class="d-flex gap-3 mb-3 align-items-center">
                                                    <h4 class="text-muted mb-0">
                                                        <del>$699,99</del>
                                                    </h4>
                                                    <h4 class="mb-0">$499,90</h4>
                                                </div>
                                                <div class="d-flex gap-2 mb-3">
                                                    <i class="bi bi-star-fill text-warning"></i>
                                                    <i class="bi bi-star-fill text-warning"></i>
                                                    <i class="bi bi-star-fill text-warning"></i>
                                                    <i class="bi bi-star-fill text-warning"></i>
                                                    <i class="bi bi-star-fill text-muted"></i>
                                                    <span>(3)</span>
                                                </div>
                                                <p>Features:</p>
                                                <p>It is a long established fact that a reader will be distracted.
                                                    Contrary to popular belief, Lorem Ipsum is not text.
                                                    There are many variations of passages of Lorem.</p>
                                            </div>
                                            <a href="/" class="btn btn-icon flex-shrink-0">
                                                <i class="bi bi-heart-fill text-danger"></i> 50
                                            </a>
                                        </div>
                                    </div>
                                </div> */}
                                {/* Slick Slider End */}

                                <div className="col-12">
                                    <div class="card w-100 p-0 m-0 mt-5">
                                        <div class="card-header">
                                            <ul class="nav nav-pills" role="tablist">
                                                <li class="nav-item">
                                                    <a class="nav-link active" id="description-tab" data-bs-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Descriptions</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" id="reviews-tab" data-bs-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Reviews (3)</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" id="sss-tab" data-bs-toggle="tab" href="#sss" role="tab" aria-controls="sss" aria-selected="false">SSS</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="card-body">
                                            <div class="tab-content">
                                                <div class="tab-pane fade active show" id="description" role="tabpanel" aria-labelledby="description-tab">
                                                    <p class="font-weight-bold">Where was he raised?</p>
                                                    <p>Vivamus ultricies augue vitae commodo condimentum. Nullamfaucibus eros eu mauris
                                                        feugiat, eget consectetur tortor tempus. Sed volutpatmollis dui eget fringilla.
                                                        Vestibulum blandit urna ut tellus lobortis tristique.Vestibulum ante ipsum
                                                        primis in
                                                        faucibus orci luctus et ultrices posuere cubiliaCurae; Pellentesque quis cursus
                                                        mauris. Nam in ornare erat. Vestibulum convallisenim ac massa dapibus
                                                        consectetur.
                                                        Maecenas facilisis eros ac felis mattis, egetauctor sapien varius.</p>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam asperiores
                                                        dolorum
                                                        earum fugiat nostrum obcaecati, quis ratione rerum sapiente soluta!</p>
                                                    <p class="font-weight-bold">Chemicals in</p>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur,
                                                        reiciendis!</p>
                                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, animi, aperiam
                                                        corporis, dolorum fugiat fugit maxime nisi optio quo similique sit sunt tempora.
                                                        Commodi culpa debitis deleniti dolore maiores, maxime praesentium. Autem dicta
                                                        dolore ipsum molestiae quae, quasi soluta tempora.</p>
                                                </div>
                                                <div class="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                                                    <div class="row">
                                                        <div class="col-lg-8">
                                                            <div class="mb-5">
                                                                <div class="display-6">4.0</div>
                                                                <div class="d-flex gap-2 my-3">
                                                                    <i class="bi bi-star-fill icon-lg text-warning"></i>
                                                                    <i class="bi bi-star-fill icon-lg text-warning"></i>
                                                                    <i class="bi bi-star-fill icon-lg text-warning"></i>
                                                                    <i class="bi bi-star-fill icon-lg text-warning"></i>
                                                                    <i class="bi bi-star-fill icon-lg text-muted"></i>
                                                                    <span>(3)</span>
                                                                </div>
                                                            </div>
                                                            <div class="list-group list-group-flush mb-4">
                                                                <div class="list-group-item d-flex px-0">
                                                                    <div class="avatar flex-shrink-0 me-3">
                                                                        <span class="avatar-text bg-purple rounded-circle">R</span>
                                                                    </div>
                                                                    <div>
                                                                        <h5 class="mb-1">Rodger Stutely</h5>
                                                                        <div class="d-flex gap-2 mb-3">
                                                                            <i class="bi bi-star-fill text-warning"></i>
                                                                            <i class="bi bi-star-fill text-warning"></i>
                                                                            <i class="bi bi-star-fill text-warning"></i>
                                                                            <i class="bi bi-star-fill text-warning"></i>
                                                                            <i class="bi bi-star-fill text-muted"></i>
                                                                        </div>
                                                                        <div>I love your products. It is very easy and fun to use this panel. I would
                                                                            recommend it
                                                                            to
                                                                            everyone.
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="list-group-item d-flex px-0">
                                                                    <div class="avatar flex-shrink-0 me-3">
                                                                        <span class="avatar-text bg-orange rounded-circle">C</span>
                                                                    </div>
                                                                    <div>
                                                                        <h5 class="mb-1">Corly Hailston</h5>
                                                                        <div class="d-flex gap-2 mb-3">
                                                                            <i class="bi bi-star-fill text-warning"></i>
                                                                            <i class="bi bi-star-fill text-warning"></i>
                                                                            <i class="bi bi-star-fill text-warning"></i>
                                                                            <i class="bi bi-star-fill text-warning"></i>
                                                                            <i class="bi bi-star-fill text-warning"></i>
                                                                        </div>
                                                                        <div>I love your products. It is very easy and fun to use this panel. I would
                                                                            recommend it
                                                                            to
                                                                            everyone.
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="list-group-item d-flex px-0">
                                                                    <div class="avatar flex-shrink-0 me-3">
                                                                        <img src="../../assets/images/user/man_avatar2.jpg" class="rounded-circle" alt="" />
                                                                    </div>
                                                                    <div>
                                                                        <h5 class="mb-1">Hurleigh Smallcomb</h5>
                                                                        <div class="d-flex gap-2 mb-3">
                                                                            <i class="bi bi-star-fill text-warning"></i>
                                                                            <i class="bi bi-star-fill text-warning"></i>
                                                                            <i class="bi bi-star-fill text-warning"></i>
                                                                            <i class="bi bi-star-fill text-warning"></i>
                                                                            <i class="bi bi-star-fill text-warning"></i>
                                                                        </div>
                                                                        <div>I love your products. It is very easy and fun to use this panel. I would
                                                                            recommend it
                                                                            to
                                                                            everyone.
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <form>
                                                                <div class="mb-3">
                                                                    <label class="form-label">Comment:</label>
                                                                    <textarea rows="3" class="form-control" placeholder="Your opinion on the product"></textarea>
                                                                </div>
                                                                <div class="mb-3">
                                                                    <label class="form-label">Rate:</label>
                                                                    <div class="d-flex align-items-center">
                                                                        <div class="rating-example">
                                                                            <div class="jq-star" style={{ width: 22, height: 22 }}>
                                                                            </div>
                                                                        </div>
                                                                        <div class="live-rating ms-3"></div>
                                                                    </div>
                                                                </div>
                                                                <button class="btn btn-primary mt-3" type="button" id="button-addon2">Send Review</button>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane fade" id="sss" role="tabpanel" aria-labelledby="sss-tab">
                                                    <div class="accordion" id="accordionExample">
                                                        <div class="accordion-item">
                                                            <h2 class="accordion-header" id="headingOne">
                                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                                                                    How are the delivery processes carried out?
                                                                </button>
                                                            </h2>
                                                            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                                <div class="accordion-body">It has survived not only five centuries, but
                                                                    also the leap into electronic typesetting, remaining essentially
                                                                    unchanged. It was popularised in the 1960s with the release of
                                                                    Letraset sheets containing Lorem Ipsum passages, and more recently
                                                                    with desktop publishing software like Aldus PageMaker including
                                                                    versions of Lorem Ipsum.
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="accordion-item">
                                                            <h2 class="accordion-header" id="headingTwo">
                                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                                    Is there a payment option at the door?
                                                                </button>
                                                            </h2>
                                                            <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                                                <div class="accordion-body">It has survived not only five centuries, but
                                                                    also the leap into electronic typesetting, remaining essentially
                                                                    unchanged. It was popularised in the 1960s with the release of
                                                                    Letraset sheets containing Lorem Ipsum passages, and more recently
                                                                    with desktop publishing software like Aldus PageMaker including
                                                                    versions of Lorem Ipsum.
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="accordion-item">
                                                            <h2 class="accordion-header" id="headingThree">
                                                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                                    How many can I order at the same time?
                                                                </button>
                                                            </h2>
                                                            <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                                                <div class="accordion-body">It has survived not only five centuries, but
                                                                    also the leap into electronic typesetting, remaining essentially
                                                                    unchanged. It was popularised in the 1960s with the release of
                                                                    Letraset sheets containing Lorem Ipsum passages, and more recently
                                                                    with desktop publishing software like Aldus PageMaker including
                                                                    versions of Lorem Ipsum.
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            }
        </>
    )
}

export default Products;