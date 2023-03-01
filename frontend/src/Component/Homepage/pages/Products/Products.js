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
                    <section className="album py-3 bg-body">
                        <div className="container">
                            <div className="row mb-50">
                                <div className="col-12 col-md-6">
                                    {/* <div className={`detail-gallery mx-md-5 px-2 px-md-5 ${stickyClass}`}> */}
                                    <div className="detail-gallery mx-md-5 px-2 px-md-5">
                                        <span className="zoom-icon"><i className="fi-rs-search"></i></span>
                                        <img src={product.image} alt="product" style={{ width: "100%", height: "80%" }} />
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12 col-xs-12">
                                    <div className="detail-info">
                                        <h2 className="title-detail">{product.name}</h2>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <span> Brands: PaperLeaf</span>
                                            <span className='d-flex justify-content-start align-items-center '>
                                                <ReactStars classNames=""  {...{
                                                    size: 20,
                                                    count: 5,
                                                    color: "#feeecc",
                                                    activeColor: "#fdad01",
                                                    value: product.rating,
                                                    a11y: true,
                                                    edit: false,
                                                    isHalf: true
                                                }} />
                                                <span className="small ms-1 me-5 text-muted">
                                                    <span className='ms-1' style={{ color: '#fdad01' }}>4.5</span>
                                                    <span className='ms-1'>(25 reviews)</span>
                                                </span>
                                            </span>
                                        </div>
                                        <div className="clearfix product-price-cover">
                                            <div className="product-price primary-color float-left">
                                                <span className="text-brand fs-4 fw-bold">₹120.00</span>
                                                <span className="ms-2 ms-md-4 fs-6 fw-normal text-decoration-line-through">₹200.00</span>
                                                <span className="ms-2 ms-md-4 fs-6 fw-bold text-muted">Flat 25% Off</span>
                                            </div>
                                        </div>
                                        <div className="bt-1 border-color-1 mt-15 mb-15"></div>
                                        <div className="short-desc mb-30">
                                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam rem officia, corrupti reiciendis minima nisi modi, quasi, odio minus dolore impedit fuga eum eligendi? Officia doloremque facere quia. Voluptatum, accusantium!</p>
                                        </div>
                                        <div className="product_sort_info font-xs mb-30">
                                            <ul className='text-decoration-none'>
                                                <li className="mb-1"><i className="fi-rs-crown mr-5"></i> 1 Year AL Jazeera Brand Warranty</li>
                                                <li className="mb-1"><i className="fi-rs-refresh mr-5"></i> 30 Day Return Policy</li>
                                                <li><i className="bi bi-card mr-5"></i> Cash on Delivery available</li>
                                            </ul>
                                        </div>
                                        <div class="border border-0 mb-3" role="group" aria-label="Basic radio toggle button group">
                                            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" />
                                            <label class="btn btn-outline-danger mx-2" style={{ width: 40, height: 40, borderRadius: '50%' }} for="btnradio1">S</label>

                                            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" />
                                            <label class="btn btn-outline-danger mx-2" style={{ width: 40, height: 40, borderRadius: '50%' }} for="btnradio2">M</label>

                                            <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                                            <label class="btn btn-outline-danger mx-2" style={{ width: 40, height: 40, borderRadius: '50%' }} for="btnradio3">L</label>
                                        </div>
                                        <div className="detail-extralink">
                                            <div className="detail-qty border radius">
                                                <a href="/" className="qty-down"><i className="fi-rs-angle-small-down"></i></a>
                                                <span className="qty-val">1</span>
                                                <a href="/" className="qty-up"><i className="fi-rs-angle-small-up"></i></a>
                                            </div>
                                            <div className="product-extra-link2">
                                                <button type="submit" className="button button-add-to-cart">Add to cart</button>
                                                <a aria-label="Add To Wishlist" className="action-btn hover-up" href="shop-wishlist.html"><i className="fi-rs-heart"></i></a>
                                                <a aria-label="Compare" className="action-btn hover-up" href="shop-compare.html"><i className="fi-rs-shuffle"></i></a>
                                            </div>
                                        </div>
                                        <ul className="product-meta font-xs color-grey mt-50">
                                            <li className="mb-5">SKU: <a href="/">FWM15VKT</a></li>
                                            <li className="mb-5">Tags: <a href="/" rel="tag">Cloth</a>, <a href="/" rel="tag">Women</a>, <a href="/" rel="tag">Dress</a> </li>
                                            <li>Availability:<span className="in-stock text-success ml-5">8 Items In Stock</span></li>
                                        </ul>
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