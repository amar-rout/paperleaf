import React from "react";
import { HelmetProvider } from "react-helmet-async";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Meta from "../Meta";

const Cart = () => {

    const handleDeleteCartItem = () => {

    }
    const handleWishlistCartItem = () => {

    }
    const handleCheckout = () => {

    }
    return (
        <HelmetProvider>
            <Meta title="Cart" />
            <Breadcrumb
                links={[
                    { name: 'Home', link: '/', active: false },
                    { name: 'Carts', link: '/carts', active: true },
                ]}
            />
            <div className="container my-5">
                <div className="text-center">
                    <h4>Cart</h4>
                </div>
                <div className="pt-1 px-2 px-md-5">
                    <h5 className="pb-2 pt-md-2 my-4 mt-lg-5">My Cart<span className="fs-base fw-normal text-muted">(4 items)</span></h5>
                    <div className="d-sm-flex align-items-center border-top py-4">
                        <a className="d-inline-block flex-shrink-0 bg-light-subtle rounded-1 p-sm-2 p-xl-3 mb-2 mb-sm-0" href="shop-single.html">
                            <img src="/assets/images/productImages/product1.jpg" width="100" alt="Product" />
                        </a>
                        <div className="w-100 ps-sm-4">
                            <div className="d-flex">
                                <div className="me-3">
                                    <span className="h6 mb-2"><a className="text-decoration-none text-muted link-dark " href="shop-single.html">Candle in concrete bowl</a></span>
                                    <div className="d-sm-flex flex-wrap">
                                        <div className="text-muted small fw-medium me-3">Kurtis</div>
                                    </div>
                                    <div className="d-sm-flex flex-wrap">
                                        <div className="h6 text-muted small me-3">Color: <span className="text-dark fw-medium">Gray night</span></div>
                                        {/* <div className="text-muted small me-3">Weight: <span className="text-dark fw-medium">140g</span></div> */}
                                    </div>
                                </div>
                                <div className="text-end ms-auto">
                                    <div className="fs-5 mb-2">$11.00</div>
                                    <del className="text-muted ms-auto">$15.00</del>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="input-group" style={{ maxWidth: 180 }}>
                                    <button className="btn btn-outline-dark fs-xl px-3" type="button" data-decrement="">
                                        <i className="bi bi-dash-lg"></i>
                                    </button>
                                    <input className="form-control shadow-none disabled border-dark text-center" type="number" value="20" readOnly />
                                    <button className="btn btn-outline-dark px-3" type="button" data-increment="">
                                        <i className="bi bi-plus-lg"></i>
                                    </button>
                                </div>
                                <div className="nav justify-content-end mt-n5 mt-sm-n3 gap-3">
                                    <button className="btn btn-outline-dark" onClick={handleWishlistCartItem}>
                                        <i className="bi bi-heart"></i>
                                        <span className="d-none d-md-inline ms-1">Wishlist</span>
                                    </button>
                                    <button className="btn btn-outline-danger" onClick={handleDeleteCartItem}>
                                        <i className="bi bi-trash"></i>
                                        <span className="d-inline ms-1">Delete</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-sm-flex align-items-center border-top py-4">
                        <a className="d-inline-block flex-shrink-0 bg-light-subtle rounded-1 p-sm-2 p-xl-3 mb-2 mb-sm-0" href="shop-single.html">
                            <img src="/assets/images/productImages/product1.jpg" width="100" alt="Product" />
                        </a>
                        <div className="w-100 ps-sm-4">
                            <div className="d-flex">
                                <div className="me-3">
                                    <span className="h6 mb-2"><a className="text-decoration-none text-muted link-dark " href="shop-single.html">Candle in concrete bowl</a></span>
                                    <div className="d-sm-flex flex-wrap">
                                        <div className="text-muted small fw-medium me-3">Kurtis</div>
                                    </div>
                                    <div className="d-sm-flex flex-wrap">
                                        <div className="h6 text-muted small me-3">Color: <span className="text-dark fw-medium">Gray night</span></div>
                                        {/* <div className="text-muted small me-3">Weight: <span className="text-dark fw-medium">140g</span></div> */}
                                    </div>
                                </div>
                                <div className="text-end ms-auto">
                                    <div className="fs-5 mb-2">$11.00</div>
                                    <del className="text-muted ms-auto">$15.00</del>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="input-group" style={{ maxWidth: 180 }}>
                                    <button className="btn btn-outline-dark fs-xl px-3" type="button" data-decrement="">
                                        <i className="bi bi-dash-lg"></i>
                                    </button>
                                    <input className="form-control shadow-none disabled border-dark text-center" type="number" value="20" readOnly />
                                    <button className="btn btn-outline-dark px-3" type="button" data-increment="">
                                        <i className="bi bi-plus-lg"></i>
                                    </button>
                                </div>
                                <div className="nav justify-content-end mt-n5 mt-sm-n3 gap-3">
                                    <button className="btn btn-outline-dark" onClick={handleWishlistCartItem}>
                                        <i className="bi bi-heart"></i>
                                        <span className="d-none d-md-inline ms-1">Wishlist</span>
                                    </button>
                                    <button className="btn btn-outline-danger" onClick={handleDeleteCartItem}>
                                        <i className="bi bi-trash"></i>
                                        <span className="d-sm-inline ms-1">Delete</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-sm-flex align-items-center border-top py-4">
                        <a className="d-inline-block flex-shrink-0 bg-light-subtle rounded-1 p-sm-2 p-xl-3 mb-2 mb-sm-0" href="shop-single.html">
                            <img src="/assets/images/productImages/product1.jpg" width="100" alt="Product" />
                        </a>
                        <div className="w-100 ps-sm-4">
                            <div className="d-flex">
                                <div className="me-3">
                                    <span className="h6 mb-2"><a className="text-decoration-none text-muted link-dark " href="shop-single.html">Candle in concrete bowl</a></span>
                                    <div className="d-sm-flex flex-wrap">
                                        <div className="text-muted small fw-medium me-3">Kurtis</div>
                                    </div>
                                    <div className="d-sm-flex flex-wrap">
                                        <div className="h6 text-muted small me-3">Color: <span className="text-dark fw-medium">Gray night</span></div>
                                        {/* <div className="text-muted small me-3">Weight: <span className="text-dark fw-medium">140g</span></div> */}
                                    </div>
                                </div>
                                <div className="text-end ms-auto">
                                    <div className="fs-5 mb-2">$11.00</div>
                                    <del className="text-muted ms-auto">$15.00</del>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="input-group" style={{ maxWidth: 180 }}>
                                    <button className="btn btn-outline-dark fs-xl px-3" type="button" data-decrement="">
                                        <i className="bi bi-dash-lg"></i>
                                    </button>
                                    <input className="form-control shadow-none disabled border-dark text-center" type="number" value="20" readOnly />
                                    <button className="btn btn-outline-dark px-3" type="button" data-increment="">
                                        <i className="bi bi-plus-lg"></i>
                                    </button>
                                </div>
                                <div className="nav justify-content-end mt-n5 mt-sm-n3 gap-3">
                                    <button className="btn btn-outline-dark" onClick={handleWishlistCartItem}>
                                        <i className="bi bi-heart"></i>
                                        <span className="d-none d-md-inline ms-1">Wishlist</span>
                                    </button>
                                    <button className="btn btn-outline-danger" onClick={handleDeleteCartItem}>
                                        <i className="bi bi-trash"></i>
                                        <span className="d-sm-inline ms-1">Delete</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="border-top pt-4 mb-3">
                        <div className="input-group border-dashed" style={{ maxWidth: 400 }}>
                            <input className="form-control text-uppercase shadow-none border-dark px-4 py-3" type="text" placeholder="Your coupon code" />
                            <button className="btn btn-dark shadow-none border-dark px-4 py-3" type="button">Apply coupon</button>
                        </div>
                    </div>
                    <ul className="list-unstyled py-3 mb-0">
                        <li className="d-flex justify-content-between mb-2">Subtotal:<span className="fw-semibold ms-2">$92.00</span></li>
                        <li className="d-flex justify-content-between mb-2">Taxes:<span className="fw-semibold ms-2">$8.00</span></li>
                        <li className="d-flex justify-content-between mb-2">Shipping cost:<span className="fw-semibold ms-2">$15.00</span></li>
                    </ul> */}
                    <div className="d-flex justify-content-end align-items-center border-top">
                        <div className="h6 text-muted pt-2">Total:</div>
                        <div className="fs-5 fw-semibold text-dark ms-2">$115.00</div>
                    </div>
                    <div className="d-flex justify-content-end align-items-center pt-5 gap-3">
                        <button className="btn bg-dark text-white shadow-none border-dark px-5 py-3" type="button"
                            onClick={handleCheckout}>
                            Checkout cart
                        </button>
                    </div>
                </div>
            </div>
        </HelmetProvider>
    )
}

export default Cart;