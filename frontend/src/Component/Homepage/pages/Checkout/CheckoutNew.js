import React, { useEffect, useState } from 'react';
import axios from 'axios';
import bootstrap from 'bootstrap/dist/js/bootstrap.min.js';
import $ from "jquery";


import './Checkout.css';
import { Link, useNavigate } from 'react-router-dom';
import { Alert } from 'bootstrap';

function CheckoutNew() {

    const navigate = useNavigate();
    // const [messageData, setMessageData] = useState("");
    const next = () => {
        const nextTabLinkEl = $('.nav-fill .active').closest('li').next('li').find('a')[0];
        const nextTab = new bootstrap.Tab(nextTabLinkEl);
        nextTab.show();
    }

    const prev = () => {
        const prevTabLinkEl = $('.nav-fill .active').closest('li').prev('li').find('a')[0];
        const prevTab = new bootstrap.Tab(prevTabLinkEl);
        prevTab.show();
    }

    // $('.btnNext').click(function () {
    // });
    // $('.btnPrevious').click(function () {
    // });

    const [checkoutItems, setCheckoutItems] = useState([]);
    const [checkoutAmount, setCheckoutAmount] = useState([]);
    const [user, setUser] = useState({});

    const [paymentMethod, setPaymentMethod] = useState('');

    useEffect(() => {
        const items = JSON.parse(localStorage.getItem("checkout_items"));
        const checkoutDetails = JSON.parse(localStorage.getItem("checkout_details"));
        const loginUser = JSON.parse(localStorage.getItem("user"));
        if (items) {
            setCheckoutItems(items);
        }
        if (checkoutDetails) {
            setCheckoutAmount(checkoutDetails);
        }
        if (loginUser) {
            setUser(loginUser);
        }
    }, []);

    // useEffect(() => {
    //     if (messageData === 'Success') {
    //         navigate(`/checkout/order/success`);
    //     } else {
    //         navigate(`/checkout`);
    //     }
    // }, [messageData, navigate]);

    // const getTotal = () => {
    //     let total = 0
    //     checkoutItems.forEach(item => {
    //         total += item.price * item.qty;
    //     })
    //     return total;
    // }
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 2
    })

    // const totalAmount = getTotal();
    // const shippingCost = 0;
    // const estmdTaxAmount = 0;
    // const discountAmount = 0;
    // const grandTotal = totalAmount + shippingCost + estmdTaxAmount - discountAmount;


    const processOrder = () => {
        if (paymentMethod === 'cod') {
            alert('Order Success');
        } else if (paymentMethod === 'online') {
            displayRazorpay();
        }
        else {
            return 'Please select one payment method';
        }
    }

    const loadScript = (src) => {
        return new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
                reject('Unable to load script');
            };
            document.body.appendChild(script);
        });
    }

    const displayRazorpay = async () => {
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");
        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }
        const config = {
            headers: {
                'Authorization': `Bearer ${user.token}`,
                'Content-Type': 'application/json'
            },
        };
        const orderData = {
            items: checkoutItems,
            billingAddress: [],
            shippingAddress: [],
            discountAmount : checkoutAmount.discountAmount,
            grandTotal: checkoutAmount.grandTotal,
            shippingCost: checkoutAmount.shippingCost,
            totalAmount : checkoutAmount.totalAmount
        };
        const result = await axios.post("/api/orders/newOrder", orderData, config);

        if (!result) {
            alert("Server error. Are you online?");
            return;
        }
        // Getting the order details back
        const { amount, id: order_id, currency } = result.data;

        const options = {
            key: "rzp_test_5jd0R7gE1RSPoa", // Enter the Key ID generated from the Dashboard
            amount: amount.toString(),
            currency: currency,
            name: "Paperleaf",
            description: "Test Transaction",
            // image: { logo },
            order_id: order_id,
            // callback_url: 'https://localhost:3000/checkout/success',
            // redirect: true,
            handler: async function (response) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };

                console.log(data);
                const config = { headers: { 'Content-Type': 'application/json', }, };
                const result = await axios.post(`/api/orders/${order_id}/success`, data, config);
                alert(result.data.msg);
                // if (result.data.msg === 'Success') {
                //     global.location.href(`http://localhost:3000/checkout/${order_id}/success`);
                // } else {
                //     global.location.href('/checkout');
                // }
                // setMessageData(result.data.msg);
            },
            prefill: {
                name: "Amarendra Rout",
                email: "amarendrarout34@gmail.com",
                contact: "7043096106",
            },
            notes: {
                address: "Paperleaf Corporate Office",
            },
            theme: {
                color: "#61dafb",
            },
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
        paymentObject.on('payment.failed', function (response) {
            alert(response.error.code);
            alert(response.error.description);
            alert(response.error.source);
            alert(response.error.step);
            alert(response.error.reason);
            alert(response.error.metadata.order_id);
            alert(response.error.metadata.payment_id);
        });
    }

    return (
        <div className='bg-light py-5'>
            <div className='container py-3 px-md-4'>
                {/* <h5 className='text-center my-4 text-decoration-underline'>Checkout Details</h5> */}
                <div className='row'>
                    <div className='col-12 col-md-8'>
                        <div className='bg-white py-3'>
                            <ul className="nav nav-fill check_nav w-100">
                                <li className="nav-item">
                                    <a className="nav-link check_nav-link active text-center" data-bs-toggle="tab" href="#home">
                                        <span className="step-number">01</span>
                                        <span className="step-title d-block">Billing Info</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link check_nav-link text-center" data-bs-toggle="tab" href="#menu1">
                                        <span className="step-number">02</span>
                                        <span className="step-title d-block">Shipping Info</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link check_nav-link text-center" data-bs-toggle="tab" href="#menu2">
                                        <span className="step-number">03</span>
                                        <span className="step-title d-block">Payment Info</span>
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content mt-2 mt-md-4">
                                <div className="tab-pane container active" id="home">
                                    <div className="row g-2">
                                        <div className="col-12 col-md-4 px-2">
                                            <label className="form-label small ms-2" for="c-fn">Name</label>
                                            <input className="form-control" name='name' type="text" placeholder="Enter full name" required="" id="name" />
                                        </div>
                                        {/* <div className="col-12 col-md-6">
                                            <label className="form-label small" for="c-ln">Last name</label>
                                            <input className="form-control" type="text" placeholder="Your last name" required="" id="c-ln" />
                                        </div> */}
                                        <div className="col-12 col-md-4 px-2">
                                            <label className="form-label small" for="c-email">Email</label>
                                            <input className="form-control" type="email" placeholder="Email address" required="" id="c-email" />
                                        </div>
                                        <div className="col-12 col-md-4 px-2">
                                            <label className="form-label small" for="c-phone">Phone</label>
                                            <div className='input-group'>
                                                <span className="input-group-text">+91</span>
                                                <input className="form-control" type="tel" placeholder="Enter phone number" required="" id="phone" />
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 px-2">
                                            <label className="form-label small" for="c-address">Address line 1</label>
                                            <input className="form-control" type="text" name='address1' required="" id="address1" />
                                        </div>
                                        <div className="col-12 col-md-6 px-2">
                                            <label className="form-label small" for="c-address">Address line 2</label>
                                            <input className="form-control" type="text" name='address2' required="" id="address2" />
                                        </div>
                                        <div className="col-12 col-md-4 px-2">
                                            <label className="form-label small" for="c-country">Country</label>
                                            <select className="form-select" required="" name='country' id="country">
                                                <option value="" selected="" disabled="">Select a country</option>
                                                <option value="Australia">India</option>
                                            </select>
                                        </div>
                                        <div className="col-12 col-md-4 px-2">
                                            <label className="form-label small" for="c-city">City</label>
                                            <input type='text' className="form-select" required="" name='city' id="city" />
                                        </div>
                                        <div className="col-12 col-md-4 px-2">
                                            <label className="form-label small" for="c-zip">Zip code</label>
                                            <input className="form-control" type="text" name="zipcode" placeholder="Enter zip code" required="" id="zipcode" />
                                        </div>

                                        {/* <div className="col-12">
                                    <label className="form-label fs-base" for="c-notes">Order notes <span className="text-muted">(optional)</span></label>
                                    <textarea className="form-control form-control-lg" rows="3" id="c-notes"></textarea>
                                </div> */}
                                        <div className="col-12">
                                            <div className="form-check my-3 ms-2">
                                                <input className="form-control form-check-input shadow-none p-1" type="checkbox" id="same-address" />
                                                <label className="form-check-label fw-normal small mx-2" for="same-address">Billing address same as delivery</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-4 mb-2 d-flex flex-0 justify-content-between align-items-center'>
                                        {/* <a className="btn btn-outline-dark px-3 py-2 disabled" onClick={prev}>Back</a> */}
                                        <span></span>
                                        <Link className="btn btn-primary px-3 py-2" onClick={next}>Next</Link>
                                    </div>
                                </div>
                                <div className="tab-pane container fade" id="menu1">
                                    <div>
                                        <div className="card-title fs-6 fw-400">Shipping information</div>
                                        <p className="card-title-desc">It will be as simple as occidental in fact</p>
                                        <div className="row">
                                            <div className="col-sm-6 col-lg-6 mb-4">
                                                <div className="border rounded active shipping-address card">
                                                    <div className="card-body"><a className="float-end ms-1" href="/ecommerce-checkout">Edit</a>
                                                        <p className="mb-4 fw-semibold">Address 1</p>
                                                        <h6 className="mb-2">Bradley McMillian</h6>
                                                        <p className="mb-1">109 Clarksburg Park Road Show Low, AZ 85901</p>
                                                        <p className="mb-0">Mo. 012-345-6789</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-sm-6 col-lg-6 mb-4">
                                                <div className="border rounded shipping-address card">
                                                    <div className="card-body"><a className="float-end ms-1" href="/ecommerce-checkout">Edit</a>
                                                        <p className="mb-4 fw-semibold">Address 2</p>
                                                        <h6 className="mb-2">Bradley McMillian</h6>
                                                        <p className="mb-1">109 Clarksburg Park Road Show Low, AZ 85901</p>
                                                        <p className="mb-0">Mo. 012-345-6789</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-4 d-flex flex-0 justify-content-between align-items-center'>
                                        <Link className="btn btn-outline-dark px-3 py-2" onClick={prev}>Back</Link>
                                        <Link className="btn btn-primary" onClick={next}>Next</Link>
                                    </div>
                                </div>
                                <div className="tab-pane container fade" id="menu2">
                                    <div className="card-title fw-normal">Payment information</div>
                                    <p className="card-title-desc">It will be as simple as occidental in fact</p>
                                    <div>
                                        <p className="small">Payment method :</p>
                                        {/* <div className="row"> */}
                                        {/* <div className="col-sm-6 col-lg-4">
                                                <div><label className="form-label card-radio-label mb-3"><input name="pay-method"
                                                    id="pay-methodoption1" type="radio"
                                                    className="card-radio-input form-check-input" />
                                                    <div className="card-radio"><i
                                                        className="fab fa-cc-mastercard font-size-24 align-middle me-2"></i><span>Credit
                                                            / Debit Card</span></div>
                                                </label></div>
                                            </div>
                                            <div className="col-sm-6 col-lg-4">
                                                <div>
                                                <label className="form-label card-radio-label mb-3">
                                                <input name="pay-method" id="pay-methodoption2" type="radio" className="card-radio-input form-check-input" />
                                                    <div className="card-radio"><i
                                                        className="fab fa-cc-paypal font-size-24 align-middle me-2"></i><span>Paypal</span>
                                                    </div>
                                                </label></div>
                                            </div>
                                            <div className="col-sm-6 col-lg-4">
                                                <div><label className="form-label card-radio-label mb-3"><input name="pay-method"
                                                    id="pay-methodoption3" type="radio"
                                                    className="card-radio-input form-check-input" />
                                                    <div className="card-radio"><i
                                                        className="far fa-money-bill-alt font-size-24 align-middle me-2"></i><span>Cash
                                                            on Delivery</span></div>
                                                </label></div>
                                            </div> */}
                                        <div className="btn-group payment-method" role="group" aria-label="Basic radio toggle button group">
                                            <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autocomplete="off" />
                                            <label className="py-2 px-4 me-2 w-25 btn btn-outline-dark btn-payment rounded-2 text-start" for="btnradio1"
                                                onClick={() => setPaymentMethod('online')}
                                            >
                                                <i className="bi bi-credit-card-2-front me-1 me-md-3" style={{ fontSize: '24px' }}></i>
                                                <span className='fw-normal'>Razorpay</span>
                                            </label>

                                            {/* <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autocomplete="off" checked />
                                            <label className="py-2 px-4 ms-2 me-2 w-25 btn btn-outline-dark rounded-2 text-start" for="btnradio2">
                                                <i className="bi bi-wallet me-3" style={{ fontSize: '24px' }}></i>
                                                <span className='fw-normal d-block d-md-inline'>Wallet</span>
                                            </label> */}

                                            <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autocomplete="off" />
                                            <label className="py-2 px-2 px-md-4 w-25 btn btn-outline-dark btn-payment rounded-2 text-start" for="btnradio3"
                                                onClick={() => setPaymentMethod('cod')}
                                            >
                                                <i className="bi bi-cash me-1 me-md-3" style={{ fontSize: '24px' }}></i>
                                                <span className='fw-normal '>Cash on Delivery</span>
                                            </label>
                                        </div>
                                        {/* </div> */}
                                        {/* <h5 className="my-3 font-size-14">For card Payment</h5>
                                        <div className="p-4 border">
                                            <form>
                                                <div className="mb-3">
                                                    <label for="cardnameInput" className="form-label small">
                                                        Name on card
                                                    </label>
                                                    <input id="cardnameInput" placeholder="Name on Card" type="text" className="form-control form-control" />
                                                </div>
                                                <div className="row">
                                                    <div className="col-sm-6 col-lg-4">
                                                        <div className="mb-3 mb-lg-0">
                                                            <label for="cardnumberInput" className="form-label small">
                                                                Card Number
                                                            </label>
                                                            <input id="cardnumberInput" placeholder="0000 0000 0000 0000" type="text" className="form-control form-control" /></div>
                                                    </div>
                                                    <div className="col-sm-6 col-lg-4">
                                                        <div className="mb-3 mb-lg-0">
                                                            <label for="expirydateInput" className="form-label small">
                                                                Expiry date
                                                            </label>
                                                            <input id="expirydateInput" placeholder="MM/YY" type="text"
                                                                className="form-control form-control" />
                                                        </div>
                                                    </div>
                                                    <div className="col-sm-6 col-lg-4">
                                                        <div className="mb-3 mb-lg-0">
                                                            <label for="cvvcodeInput" className="form-label small">CVV Code</label>
                                                            <input id="cvvcodeInput" placeholder="Enter CVV Code" type="text" className="form-control form-control" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div> */}
                                        {/* <div className="mt-4 text-end">
                                            <a className="btn btn-success fw-normal text-center px-3 py-2 my-3">Complete order</a>
                                        </div> */}
                                    </div>
                                    <div className='mt-4 d-flex flex-0 justify-content-between align-items-center'>
                                        <Link className="btn btn-outline-dark px-3 py-2" onClick={prev}>Back</Link>
                                        <Link className="btn btn-warning btn-md px-4" onClick={processOrder}>Pay now</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-4'>
                        <div className='bg-white py-3 px-2'>
                            <span className="mb-4 h6">Order Details (Total {checkoutItems.length} items)</span>
                            <hr className="my-7" />
                            <ul className="list-group list-group-lg list-group-flush-y list-group-flush-x mb-7">
                                {checkoutItems.map((item) => {
                                    return (
                                        <li className="list-group-item" >
                                            <div className="row align-items-center">
                                                <div className="col-4">
                                                    <a href="product.html">
                                                        <img src={`http://localhost:5010${item.image}`} width="48" alt="..." className="img-fluid" />
                                                    </a>
                                                </div>
                                                <div className="col">
                                                    <p className="mb-4 fs-sm fw-bold">
                                                        <a className="text-body" href="product.html">{item.name}</a> <br />
                                                        <span className='d-flex justify-content-between align-items-center'>
                                                            <span className="fw-normal">₹{item.price} * {item.qty}</span>
                                                            <span className="fw-normal">₹{item.price * item.qty}</span>
                                                        </span>
                                                    </p>
                                                    {/* <div className="fs-sm text-muted">Size: M <br />Color: Red</div> */}
                                                </div>
                                            </div>
                                        </li>
                                    )
                                })}
                                {/* <li className="list-group-item">
                                    <div className="row align-items-center">
                                        <div className="col-4">
                                            <a href="product.html">
                                                <img src="/assets/images/productImages/product1.jpg" width="100" alt="..." className="img-fluid" />
                                            </a>
                                        </div>
                                        <div className="col">
                                            <p className="mb-4 fs-sm fw-bold">
                                                <a className="text-body" href="product.html">Suede cross body Bag</a> <br />
                                                <span className="text-muted">₹49.00</span>
                                            </p>
                                            <div className="fs-sm text-muted">Size: M <br />Color: Brown</div>
                                        </div>
                                    </div>
                                </li> */}
                            </ul>
                            <div className="card mb-9 bg-light my-3 ">
                                <div className="card-body">
                                    <ul className="list-group list-group-sm list-group-flush-y list-group-flush-x">
                                        <li className="list-group-item d-flex">
                                            <span>Subtotal</span> <span className="ms-auto fs-sm">{formatter.format(checkoutAmount.totalAmount)}</span>
                                        </li>
                                        <li className="list-group-item d-flex">
                                            <span>Discount</span> <span className="ms-auto fs-sm">{checkoutAmount.discountAmount > 0 && "-"} {formatter.format(checkoutAmount.discountAmount)}</span>
                                        </li>
                                        <li className="list-group-item d-flex">
                                            <span>Shipping</span> <span className="ms-auto fs-sm">{formatter.format(checkoutAmount.shippingCost)}</span>
                                        </li>
                                        <li className="list-group-item d-flex fs-lg fw-bold">
                                            <span>Total</span> <span className="ms-auto">{formatter.format(checkoutAmount.grandTotal)}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p className="mb-7 px-5 text-center small text-gray-500">
                                Your personal data will be used to process your order, support
                                your experience throughout this website, and for other purposes
                                described in our privacy policy.
                            </p>
                            {/* <div className='text-end'>
                                <button className="btn btn-dark fw-normal text-center px-3 py-2 my-3">
                                    Place order
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default CheckoutNew