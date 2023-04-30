import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { getCartCount, incrementQuantity, decrementQuantity, removeCartItem } from "../../../../app/cartSlice";

const CartItems = (products) => {
    const cartCount = useSelector(getCartCount);
    const dispatch = useDispatch();

    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        setCartItems(products.products)
    }, [products]);

    const getTotal = () => {
        let total = 0
        cartItems.forEach(item => {
            total += item.price * item.qty;
        })
        return total;
    }
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 2
    })

    const totalAmount = getTotal();
    const shippingCost = 0;
    const estmdTaxAmount = 0;
    const discountAmount = 0;
    const grandTotal = totalAmount + shippingCost + estmdTaxAmount + discountAmount;

    const setCheckoutItems = () => {
        localStorage.setItem("checkout_items", JSON.stringify(cartItems));
    }

    return (
        <>
            <div className="row">
                <div className="col-12 col-md-8">
                    <div className="pt-1 px-2 px-md-5">
                        <h5 className="pb-2 pt-md-2 my-4 mt-lg-5 fs-6">My Cart<span className="fs-base fw-normal text-muted"> ({cartCount} items)</span></h5>
                        {cartItems.map((product) =>
                            <div key={product.pId} className="d-flex align-items-center border-top py-4 py-md-4">
                                <a className="d-inline-block flex-shrink-0 bg-light-subtle rounded-1 p-sm-2 p-xl-3 mb-2 mb-sm-0" href={`/products/${product.pId}`}>
                                    <img src={product.image} width="75" alt="Product" />
                                </a>
                                <div className="w-100 ps-3 ps-sm-4">
                                    <div className="d-flex">
                                        <div className="me-3">
                                            <span className="mb-2">
                                                <a className="text-decoration-none text-muted link-dark" href="shop-single.html">
                                                    {product.name}
                                                </a>
                                            </span>
                                            <div>
                                                <span className="small"><small>{product.category}</small></span>,
                                                <span className="small">Size: <span className="text-dark fw-medium">{product.size}</span></span>
                                            </div>
                                        </div>
                                        <div className="text-end ms-auto">
                                            <div className="fs-6 fw-medium mb-2">{formatter.format(product.price * product.qty)}</div>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="input-group" style={{ maxWidth: 150 }}>
                                            <button className="btn btn-outline-dark fs-xl px-3" type="button" data-decrement=""
                                                onClick={() => dispatch(decrementQuantity(product.pId))}>
                                                <i className="bi bi-dash-lg"></i>
                                            </button>
                                            <input className="form-control shadow-none disabled border-dark text-center" type="number" value={product.qty} readOnly />
                                            <button className="btn btn-outline-dark px-3" type="button" data-increment=""
                                                onClick={() => dispatch(incrementQuantity(product.pId))}>
                                                <i className="bi bi-plus-lg"></i>
                                            </button>
                                        </div>
                                        <div className="nav justify-content-end mt-n5 mt-sm-n3 gap-2">
                                            <button className="btn btn-outline-dark">
                                                <i className="bi bi-cart"></i>
                                                <span className="d-none d-md-inline ms-1">Add to wishlist</span>
                                            </button>
                                            <button className="btn btn-outline-danger"
                                                onClick={() => dispatch(removeCartItem(product.pId))}>
                                                <i className="bi bi-trash"></i>
                                                <span className="d-none d-md-inline ms-1">Remove</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
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
                                        <td className="text-end">{formatter.format(totalAmount)}</td>
                                    </tr>
                                    <tr>
                                        <td>Discount : </td>
                                        <td className="text-end">{formatter.format(discountAmount)}</td>
                                    </tr>
                                    <tr>
                                        <td>Shipping Charge :</td>
                                        <td className="text-end">{formatter.format(shippingCost)}</td>
                                    </tr>
                                    <tr>
                                        <td>Estimated Tax : </td>
                                        <td className="text-end">{formatter.format(estmdTaxAmount)}</td>
                                    </tr>
                                    <tr>
                                        <th className="text-muted">Total :</th>
                                        <th className="text-end">{formatter.format(grandTotal)}</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="input-group border border-1 rounded-2 mt-3 py-1 p-2">
                        <input type="text" class="form-control shadow-none border-0 py-2" placeholder="Coupon code" aria-label="Recipient's username" />
                        <button class="btn btn-warning rounded-2 fw-semibold py-2 px-4" type="button">Apply Coupon</button>
                        {/* bg-warning-subtle */}
                    </div>
                    <p class="alert alert-warning mt-3" role="alert">
                        Use coupon code <b>FIRSTBUY</b> and get 10% discount !
                    </p>
                    <div className="d-flex justify-content-between align-items-center my-3 gap-2">
                        <Link to="/" className="btn btn-md btn-outline-dark w-100 py-2 fs-6 fw-normal small" type="button">
                            <small>Continue Shopping</small>
                        </Link>
                        <Link to="/checkout" onClick={setCheckoutItems} className="btn btn-md btn-warning w-100 py-2 fs-5 fw-normal" type="button">
                            <small>Place order</small>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CartItems;


/* <div key={product.pId} className="d-flex align-items-center border-top py-4 py-md-4">
                                <a className="d-inline-block flex-shrink-0 bg-light-subtle rounded-1 p-sm-2 p-xl-3 mb-2 mb-sm-0" href="shop-single.html">
                                    <img src={product.image} width="75" alt="Product" />
                                </a>
                                <div className="w-75 ps-3 ps-sm-4">
                                    <div className="d-flex">
                                        <div className="me-3">
                                            <span className="mb-2">
                                                <a className="text-decoration-none text-muted link-dark" href="shop-single.html">
                                                    {product.name}
                                                </a>
                                            </span>
                                            <div>
                                                <div className="text-muted small fw-medium">
                                                    <small>{product.category}</small>
                                                </div>,
                                                <div className="h6 text-muted small">
                                                    Size: <span className="text-dark fw-medium">{product.size}</span>
                                                </div>
                                                <div className="text-end ms-auto">
                                                    <div className="fs-5 fw-medium mb-2">₹{product.price * product.qty}</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="input-group d-flex justify-content-between align-items-center" style={{ maxWidth: 150 }}>
                                                <button className="btn btn-outline-dark fs-xl px-3" type="button" data-decrement=""
                                                    onClick={() => dispatch(decrementQuantity(product.pId))}>
                                                    <i className="bi bi-dash-lg"></i>
                                                </button>
                                                <input className="form-control shadow-none disabled border-dark text-center" type="number" value={product.qty} readOnly />
                                                <span className="">{product.qty}</span>
                                                <button className="btn btn-outline-dark px-3" type="button" data-increment=""
                                                    onClick={() => dispatch(incrementQuantity(product.pId))}>
                                                    <i className="bi bi-plus-lg"></i>
                                                </button>
                                            </div>
                                            <div className="nav justify-content-end mt-n5 mt-sm-n3 gap-2">
                                                <button className="btn btn-outline-dark" >
                                                    <i className="bi bi-heart"></i>
                                                    <span className="d-none d-md-inline ms-1">Add to wishlist</span>
                                                </button>
                                                <button className="btn btn-outline-danger"
                                                    onClick={() => dispatch(removeCartItem(product.pId))}>
                                                    <i className="bi bi-trash"></i>
                                                    <span className="d-none d-md-inline ms-1">Remove</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */