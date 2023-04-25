import React from 'react';

import bootstrap from 'bootstrap/dist/js/bootstrap.min.js';
import $ from "jquery";

import './Checkout.css';

function CheckoutNew() {

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

    return (
        <div className='bg-light py-5'>
            <div className='container py-3 px-md-4'>
                {/* <h5 className='text-center my-4 text-decoration-underline'>Checkout Details</h5> */}
                <div className='row'>
                    <div className='col-12 col-md-8'>
                        <div className='bg-white py-3'>
                            <ul class="nav nav-fill check_nav w-100">
                                <li class="nav-item">
                                    <a class="nav-link check_nav-link active text-center" data-bs-toggle="tab" href="#home">
                                        <span class="step-number">01</span>
                                        <span class="step-title d-block">Billing Info</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-center" data-bs-toggle="tab" href="#menu1">
                                        <span class="step-number">02</span>
                                        <span class="step-title d-block">Shipping Info</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-center" data-bs-toggle="tab" href="#menu2">
                                        <span class="step-number">03</span>
                                        <span class="step-title d-block">Payment Info</span>
                                    </a>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div class="tab-pane container active" id="home">
                                    <div class="row g-2">
                                        <div class="col-12 col-md-4 px-2">
                                            <label class="form-label small ms-2" for="c-fn">Name</label>
                                            <input class="form-control" name='name' type="text" placeholder="Enter full name" required="" id="name" />
                                        </div>
                                        {/* <div class="col-12 col-md-6">
                                            <label class="form-label small" for="c-ln">Last name</label>
                                            <input class="form-control" type="text" placeholder="Your last name" required="" id="c-ln" />
                                        </div> */}
                                        <div class="col-12 col-md-4 px-2">
                                            <label class="form-label small" for="c-email">Email</label>
                                            <input class="form-control" type="email" placeholder="Email address" required="" id="c-email" />
                                        </div>
                                        <div class="col-12 col-md-4 px-2">
                                            <label class="form-label small" for="c-phone">Phone</label>
                                            <div className='input-group'>
                                                <span class="input-group-text">+91</span>
                                                <input class="form-control" type="tel" placeholder="Enter phone number" required="" id="phone" />
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-6 px-2">
                                            <label class="form-label small" for="c-address">Address line 1</label>
                                            <input class="form-control" type="text" name='address1' required="" id="address1" />
                                        </div>
                                        <div class="col-12 col-md-6 px-2">
                                            <label class="form-label small" for="c-address">Address line 2</label>
                                            <input class="form-control" type="text" name='address2' required="" id="address2" />
                                        </div>
                                        <div class="col-12 col-md-4 px-2">
                                            <label class="form-label small" for="c-country">Country</label>
                                            <select class="form-select" required="" name='country' id="country">
                                                <option value="" selected="" disabled="">Select a country</option>
                                                <option value="Australia">India</option>
                                            </select>
                                        </div>
                                        <div class="col-12 col-md-4 px-2">
                                            <label class="form-label small" for="c-city">City</label>
                                            <input type='text' class="form-select" required="" name='city' id="city" />
                                        </div>
                                        <div class="col-12 col-md-4 px-2">
                                            <label class="form-label small" for="c-zip">Zip code</label>
                                            <input class="form-control" type="text" name="zipcode" placeholder="Enter zip code" required="" id="zipcode" />
                                        </div>

                                        {/* <div class="col-12">
                                    <label class="form-label fs-base" for="c-notes">Order notes <span class="text-muted">(optional)</span></label>
                                    <textarea class="form-control form-control-lg" rows="3" id="c-notes"></textarea>
                                </div> */}
                                        <div class="col-12">
                                            <div class="form-check my-3 ms-2">
                                                <input class="form-control form-check-input shadow-none p-1" type="checkbox" id="same-address" />
                                                <label class="form-check-label fw-normal small mx-2" for="same-address">Billing address same as delivery</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-4 mb-2 d-flex flex-0 justify-content-between align-items-center'>
                                        {/* <a class="btn btn-outline-dark px-3 py-2 disabled" onClick={prev}>Back</a> */}
                                        <span></span>
                                        <a class="btn btn-primary px-3 py-2" onClick={next}>Next</a>
                                    </div>
                                </div>
                                <div class="tab-pane container fade" id="menu1">
                                    <div>
                                        <div class="card-title fs-6 fw-400">Shipping information</div>
                                        <p class="card-title-desc">It will be as simple as occidental in fact</p>
                                        <div class="row">
                                            <div class="col-sm-6 col-lg-6 mb-4">
                                                <div class="border rounded active shipping-address card">
                                                    <div class="card-body"><a class="float-end ms-1" href="/ecommerce-checkout">Edit</a>
                                                        <p class="mb-4 fw-semibold">Address 1</p>
                                                        <h6 class="mb-2">Bradley McMillian</h6>
                                                        <p class="mb-1">109 Clarksburg Park Road Show Low, AZ 85901</p>
                                                        <p class="mb-0">Mo. 012-345-6789</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-6 col-lg-6 mb-4">
                                                <div class="border rounded shipping-address card">
                                                    <div class="card-body"><a class="float-end ms-1" href="/ecommerce-checkout">Edit</a>
                                                        <p class="mb-4 fw-semibold">Address 2</p>
                                                        <h6 class="mb-2">Bradley McMillian</h6>
                                                        <p class="mb-1">109 Clarksburg Park Road Show Low, AZ 85901</p>
                                                        <p class="mb-0">Mo. 012-345-6789</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='mt-4 d-flex flex-0 justify-content-between align-items-center'>
                                        <a class="btn btn-outline-dark px-3 py-2" onClick={prev}>Back</a>
                                        <a class="btn btn-primary" onClick={next}>Next</a>
                                    </div>
                                </div>
                                <div class="tab-pane container fade" id="menu2">
                                    <div class="card-title fw-normal">Payment information</div>
                                    <p class="card-title-desc">It will be as simple as occidental in fact</p>
                                    <div>
                                        <p class="small">Payment method :</p>
                                        {/* <div class="row"> */}
                                        {/* <div class="col-sm-6 col-lg-4">
                                                <div><label class="form-label card-radio-label mb-3"><input name="pay-method"
                                                    id="pay-methodoption1" type="radio"
                                                    class="card-radio-input form-check-input" />
                                                    <div class="card-radio"><i
                                                        class="fab fa-cc-mastercard font-size-24 align-middle me-2"></i><span>Credit
                                                            / Debit Card</span></div>
                                                </label></div>
                                            </div>
                                            <div class="col-sm-6 col-lg-4">
                                                <div>
                                                <label class="form-label card-radio-label mb-3">
                                                <input name="pay-method" id="pay-methodoption2" type="radio" class="card-radio-input form-check-input" />
                                                    <div class="card-radio"><i
                                                        class="fab fa-cc-paypal font-size-24 align-middle me-2"></i><span>Paypal</span>
                                                    </div>
                                                </label></div>
                                            </div>
                                            <div class="col-sm-6 col-lg-4">
                                                <div><label class="form-label card-radio-label mb-3"><input name="pay-method"
                                                    id="pay-methodoption3" type="radio"
                                                    class="card-radio-input form-check-input" />
                                                    <div class="card-radio"><i
                                                        class="far fa-money-bill-alt font-size-24 align-middle me-2"></i><span>Cash
                                                            on Delivery</span></div>
                                                </label></div>
                                            </div> */}
                                        <div class="btn-group w-100 payment-method" role="group" aria-label="Basic radio toggle button group">
                                            <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked />
                                            <label class="py-3 px-4 ms-2 me-2 w-25 btn btn-outline-primary rounded-2 text-start" for="btnradio1">
                                                <i class="bi bi-credit-card-2-front me-3" style={{ fontSize: '24px' }}></i>
                                                <span className='fw-normal d-block d-md-inline'>Credit/Debit Card</span>
                                            </label>

                                            <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" checked />
                                            <label class="py-3 px-4 ms-2 me-2 w-25 btn btn-outline-primary rounded-2 text-start" for="btnradio2">
                                                <i class="bi bi-wallet me-3" style={{ fontSize: '24px' }}></i>
                                                <span className='fw-normal d-block d-md-inline'>Wallet</span>
                                            </label>

                                            <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" checked />
                                            <label class="py-3 px-4 ms-2 me-2 w-25 btn btn-outline-primary rounded-2 text-start" for="btnradio3">
                                                <i class="bi bi-cash me-3" style={{ fontSize: '24px' }}></i>
                                                <span className='fw-normal d-block d-md-inline'>Cash on delivery</span>
                                            </label>
                                        </div>
                                        {/* </div> */}
                                        <h5 class="my-3 font-size-14">For card Payment</h5>
                                        <div class="p-4 border">
                                            <form>
                                                <div class="mb-3"><label for="cardnameInput" class="form-label">Name on
                                                    card</label><input id="cardnameInput" placeholder="Name on Card" type="text"
                                                        class="form-control form-control" /></div>
                                                <div class="row">
                                                    <div class="col-sm-6 col-lg-4">
                                                        <div class="mb-3 mb-lg-0"><label for="cardnumberInput" class="form-label">Card
                                                            Number</label><input id="cardnumberInput"
                                                                placeholder="0000 0000 0000 0000" type="text"
                                                                class="form-control form-control" /></div>
                                                    </div>
                                                    <div class="col-sm-6 col-lg-4">
                                                        <div class="mb-3 mb-lg-0"><label for="expirydateInput" class="form-label">Expiry
                                                            date</label><input id="expirydateInput" placeholder="MM/YY" type="text"
                                                                class="form-control form-control" /></div>
                                                    </div>
                                                    <div class="col-sm-6 col-lg-4">
                                                        <div class="mb-3 mb-lg-0"><label for="cvvcodeInput" class="form-label">CVV
                                                            Code</label><input id="cvvcodeInput" placeholder="Enter CVV Code"
                                                                type="text" class="form-control form-control" /></div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        {/* <div class="mt-4 text-end">
                                            <a class="btn btn-success fw-normal text-center px-3 py-2 my-3">Complete order</a>
                                        </div> */}
                                    </div>
                                    <div className='mt-4 d-flex flex-0 justify-content-between align-items-center'>
                                        <a class="btn btn-outline-dark px-3 py-2" onClick={prev}>Back</a>
                                        <a class="btn btn-success" onClick={next}>Complete Order</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-4'>
                        <div className='bg-white py-3 px-2'>
                            <span class="mb-4 h6">Order Details (Total 2 items)</span>
                            <hr class="my-7" />
                            <ul class="list-group list-group-lg list-group-flush-y list-group-flush-x mb-7">
                                <li class="list-group-item">
                                    <div class="row align-items-center">
                                        <div class="col-4">
                                            <a href="product.html">
                                                <img src="/assets/images/productImages/product6.jpg" width="100" alt="..." class="img-fluid" />
                                            </a>
                                        </div>
                                        <div class="col">
                                            <p class="mb-4 fs-sm fw-bold">
                                                <a class="text-body" href="product.html">Cotton floral print Dress</a> <br />
                                                <span class="text-muted">₹40.00</span>
                                            </p>
                                            <div class="fs-sm text-muted">Size: M <br />Color: Red</div>
                                        </div>
                                    </div>
                                </li>
                                <li class="list-group-item">
                                    <div class="row align-items-center">
                                        <div class="col-4">
                                            <a href="product.html">
                                                <img src="/assets/images/productImages/product1.jpg" width="100" alt="..." class="img-fluid" />
                                            </a>
                                        </div>
                                        <div class="col">
                                            <p class="mb-4 fs-sm fw-bold">
                                                <a class="text-body" href="product.html">Suede cross body Bag</a> <br />
                                                <span class="text-muted">₹49.00</span>
                                            </p>
                                            <div class="fs-sm text-muted">Size: M <br />Color: Brown</div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                            <div class="card mb-9 bg-light my-3 ">
                                <div class="card-body">
                                    <ul class="list-group list-group-sm list-group-flush-y list-group-flush-x">
                                        <li class="list-group-item d-flex">
                                            <span>Subtotal</span> <span class="ms-auto fs-sm">₹89.00</span>
                                        </li>
                                        <li class="list-group-item d-flex">
                                            <span>Tax</span> <span class="ms-auto fs-sm">₹00.00</span>
                                        </li>
                                        <li class="list-group-item d-flex">
                                            <span>Shipping</span> <span class="ms-auto fs-sm">₹8.00</span>
                                        </li>
                                        <li class="list-group-item d-flex fs-lg fw-bold">
                                            <span>Total</span> <span class="ms-auto">₹97.00</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <p class="mb-7 px-5 text-center small text-gray-500">
                                Your personal data will be used to process your order, support
                                your experience throughout this website, and for other purposes
                                described in our privacy policy.
                            </p>
                            <div className='text-end'>
                                <button class="btn btn-dark fw-normal text-center px-3 py-2 my-3">
                                    Place order
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutNew