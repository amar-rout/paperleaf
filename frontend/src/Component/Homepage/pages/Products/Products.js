import React, { useEffect, useState } from 'react';
import ReactStars from "react-rating-stars-component";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Breadcrumb from '../Breadcrumb/Breadcrumb';

import { clearState, productDetailsAsync, selectProduct, getStatus, getError } from "../../../../app/productSlice";


const Products = () => {
    const [productID, setProductID] = useState("");
    const [productName, setProductName] = useState("");
    const [product, setProduct] = useState({});

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
    }, [id]);

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
                        <div className="container bg-body shadow py-3">
                            <div className="row mb-50">
                                <div className="col-12 col-md-6">
                                    {/* <div className={`detail-gallery mx-md-5 px-2 px-md-5 ${stickyClass}`}> */}
                                    <div className="mx-md-5 px-2 px-md-5">
                                        <span className="zoom-icon"><i className="fi-rs-search"></i></span>
                                        <img src={product.image} alt="product" style={{ width: "100%", height: "400px" }} />
                                        <div className="d-flex flex-0 justify-content-start align-items-center py-2">
                                            <img className="p-1" src={product.image} alt="product" style={{ width: "80px", height: "80px" }} />
                                            <img className="p-1" src={product.image} alt="product" style={{ width: "80px", height: "80px" }} />
                                            <img className="p-1" src={product.image} alt="product" style={{ width: "80px", height: "80px" }} />
                                            <img className="p-1" src={product.image} alt="product" style={{ width: "80px", height: "80px" }} />
                                            <img className="p-1" src={product.image} alt="product" style={{ width: "80px", height: "80px" }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6">
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
                                                    <span className='' style={{ color: '#fdad01' }}>4.5</span>
                                                    <span className='ms-1'>(25 reviews)</span>
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
                            </div>
                        </div>
                    </section>
                </>
            }
        </>
    )
}

export default Products;