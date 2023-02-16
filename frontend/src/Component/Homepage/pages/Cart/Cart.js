import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { Link, useNavigate } from "react-router-dom";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Meta from "../Meta";

const Cart = () => {
    const navigate = useNavigate();

    const handleDeleteCartItem = () => {

    }
    const handleWishlistCartItem = () => {

    }
    const handleCheckout = () => {
        navigate("/checkout");
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
                <div className="row">
                    <div className="col-12 col-md-8">
                        <div className="pt-1 px-2 px-md-5">
                            <h5 className="pb-2 pt-md-2 my-4 mt-lg-5">My Cart<span className="fs-base fw-normal text-muted">(4 items)</span></h5>
                            <div className="d-sm-flex align-items-center border-top py-2">
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
                                            <div className="fs-5 mb-2">₹11.00</div>
                                            <del className="text-muted ms-auto">₹15.00</del>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="input-group" style={{ maxWidth: 180 }}>
                                            <button className="btn btn-outline-dark fs-xl px-3" type="button" data-decrement="">
                                                <i className="bi bi-dash-lg"></i>
                                            </button>
                                            <input className="form-control shadow-none disabled border-dark text-center p-0" type="number" value="20" readOnly />
                                            <button className="btn btn-outline-dark px-3" type="button" data-increment="">
                                                <i className="bi bi-plus-lg"></i>
                                            </button>
                                        </div>
                                        <div className="nav justify-content-end mt-n5 mt-sm-n3 gap-3">
                                            <button className="btn btn-outline-dark" onClick={handleWishlistCartItem}>
                                                <i className="bi bi-heart"></i>
                                                <span className="d-none d-md-inline ms-1 small">Add to wishlist</span>
                                            </button>
                                            <button className="btn btn-outline-danger" onClick={handleDeleteCartItem}>
                                                <i className="bi bi-trash"></i>
                                                <span className="d-sm-inline ms-1 small">Remove</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-sm-flex align-items-center border-top py-2">
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
                                            <div className="fs-5 mb-2">₹11.00</div>
                                            <del className="text-muted ms-auto">₹15.00</del>
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
                                                <span className="d-none d-md-inline ms-1 small">Add to wishlist</span>
                                            </button>
                                            <button className="btn btn-outline-danger" onClick={handleDeleteCartItem}>
                                                <i className="bi bi-trash"></i>
                                                <span className="d-sm-inline ms-1 small">Remove</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="d-sm-flex align-items-center border-top py-2">
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
                                            <div className="fs-5 mb-2">₹11.00</div>
                                            <del className="text-muted ms-auto">₹15.00</del>
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
                                                <span className="d-none d-md-inline ms-1 small">Add to wishlist</span>
                                            </button>
                                            <button className="btn btn-outline-danger" onClick={handleDeleteCartItem}>
                                                <i className="bi bi-trash"></i>
                                                <span className="d-sm-inline ms-1 small">Remove</span>
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
                        <li className="d-flex justify-content-between mb-2">Subtotal:<span className="fw-semibold ms-2">₹92.00</span></li>
                        <li className="d-flex justify-content-between mb-2">Taxes:<span className="fw-semibold ms-2">₹8.00</span></li>
                        <li className="d-flex justify-content-between mb-2">Shipping cost:<span className="fw-semibold ms-2">₹15.00</span></li>
                    </ul> */}
                            <div className="d-flex justify-content-end align-items-center border-top">
                                <div className="h6 text-muted pt-2">Total:</div>
                                <div className="fs-5 fw-semibold text-dark ms-2">₹115.00</div>
                            </div>
                            {/* <div className="d-flex justify-content-between align-items-center pt-5 gap-3">
                                <Link className="text-dark h6 fw-bold text-decoration-none link-warning" type="button"
                                    to="/">
                                    <i className="bi bi-arrow-left"></i> Home
                                </Link>
                                <button className="btn bg-dark text-white shadow-none border-dark px-5 py-3" type="button"
                                    onClick={handleCheckout}>
                                    Add more items
                                </button>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-12 col-md-4 my-md-5 py-md-5">
                        <div class="border p-3 mt-4 mt-lg-0 rounded">
                            <span class="header-title mb-5 h5">Order Summary</span>
                            <div class="table-responsive pt-3">
                                <table class="table mb-0">
                                    <tbody>
                                        <tr>
                                            <td>Grand Total :</td>
                                            <td className="text-end">₹1571.19</td>
                                        </tr>
                                        <tr>
                                            <td>Discount : </td>
                                            <td className="text-end">- ₹157.11</td>
                                        </tr>
                                        <tr>
                                            <td>Shipping Charge :</td>
                                            <td className="text-end">₹25.00</td>
                                        </tr>
                                        <tr>
                                            <td>Estimated Tax : </td>
                                            <td className="text-end">₹19.22</td>
                                        </tr>
                                        <tr>
                                            <th className="text-muted">Total :</th>
                                            <th className="text-end">₹1458.3</th>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="alert alert-warning mt-3" role="alert">
                            Use coupon code <strong>HYPBM</strong> and get 10% discount !
                        </div>
                        <div class="input-group border border-1 rounded-3 mt-3 py-1">
                            <input type="text" class="form-control shadow-none border-0 py-2" placeholder="Coupon code" aria-label="Recipient's username" />
                            <button class="btn btn-light border-0 rounded-pill mx-2 px-1 px-md-3 py-2" type="button">Apply Coupons</button>
                        </div>
                        <button className="w-100 btn bg-dark text-white float-end shadow-none border-dark px-5 py-3 my-3" type="button"
                            onClick={handleCheckout}>
                            Proceed to Checkout
                        </button>
                        <Link className="text-dark fs-6 fw-semibold text-decoration-none link-warning mt-3" type="button"
                            to="/">
                            <i className="bi bi-arrow-left"></i> Continue Shopping
                        </Link>
                        {/* <button className="btn bg-dark text-white shadow-none border-dark px-5 py-3" type="button"
                            onClick={handleCheckout}>
                            Continue shopping
                        </button> */}
                    </div>
                </div>
            </div>
        </HelmetProvider>
    )
}

export default Cart;