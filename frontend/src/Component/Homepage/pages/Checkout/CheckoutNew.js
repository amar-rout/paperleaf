import React from 'react';

import bootstrap from 'bootstrap/dist/js/bootstrap.min.js';
import $ from "jquery";

import './Checkout.css';

function CheckoutNew() {

    const next = () => {
        const nextTabLinkEl = $('.nav-tabs .active').closest('li').next('li').find('a')[0];
        const nextTab = new bootstrap.Tab(nextTabLinkEl);
        nextTab.show();
    }

    const prev = () => {
        const prevTabLinkEl = $('.nav-tabs .active').closest('li').prev('li').find('a')[0];
        const prevTab = new bootstrap.Tab(prevTabLinkEl);
        prevTab.show();
    }

    // $('.btnNext').click(function () {
    // });
    // $('.btnPrevious').click(function () {
    // });

    return (
        <div className='container px-5 py-3'>
            <div className='row'>
                <div className='col-12 col-md-8'>

                    <ul class="nav nav-tabs nav-pills">
                        <li class="nav-item">
                            <a class="nav-link active" data-bs-toggle="tab" href="#home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="tab" href="#menu1">Menu 1</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="tab" href="#menu2">Menu 2</a>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane container active" id="home">
                            <div class="row g-4 pb-4 pb-md-5 mb-3 mb-md-1">
                                <div class="col-12 col-md-6">
                                    <label class="form-label fs-base" for="c-fn">First name</label>
                                    <input class="form-control form-control-lg" type="text" placeholder="Your first name" required="" id="c-fn" />
                                </div>
                                <div class="col-12 col-md-6">
                                    <label class="form-label fs-base" for="c-ln">Last name</label>
                                    <input class="form-control form-control-lg" type="text" placeholder="Your last name" required="" id="c-ln" />
                                </div>
                                <div class="col-12 col-md-6">
                                    <label class="form-label fs-base" for="c-email">Email</label>
                                    <div class="position-relative"><i class="ai-mail fs-lg position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                                        <input class="form-control form-control-lg ps-5" type="email" placeholder="Email address" required="" id="c-email" />
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <label class="form-label fs-base" for="c-phone">Phone</label>
                                    <div class="position-relative"><i class="ai-phone fs-lg position-absolute top-50 start-0 translate-middle-y ms-3"></i>
                                        <input class="form-control form-control-lg ps-5" type="tel" data-format="{&quot;numericOnly&quot;: true, &quot;delimiters&quot;: [&quot;+1 &quot;, &quot; &quot;, &quot; &quot;], &quot;blocks&quot;: [0, 3, 3, 2]}" placeholder="+1 ___ ___ __" required="" id="c-phone" />
                                    </div>
                                </div>
                                <div class="col-12">
                                    <label class="form-label fs-base" for="c-address">Address line 1</label>
                                    <input class="form-control form-control-lg" type="text" required="" id="c-address" />
                                </div>
                                <div class="col-12">
                                    <label class="form-label fs-base" for="c-address">Address line 2</label>
                                    <input class="form-control form-control-lg" type="text" required="" id="c-address" />
                                </div>
                                <div class="col-12 col-md-4">
                                    <label class="form-label fs-base" for="c-country">Country</label>
                                    <select class="form-select form-select-lg" required="" id="c-country">
                                        <option value="" selected="" disabled="">Select a country</option>
                                        <option value="Australia">India</option>
                                    </select>
                                </div>
                                <div class="col-12 col-md-4">
                                    <label class="form-label fs-base" for="c-city">City</label>
                                    <input type='text' class="form-select form-select-lg" required="" name='city' id="city" />
                                </div>
                                <div class="col-12 col-md-4">
                                    <label class="form-label fs-base" for="c-zip">Zip code</label>
                                    <input class="form-control form-control-lg" type="text" data-format="{&quot;delimiter&quot;: &quot;-&quot;, &quot;blocks&quot;: [3, 4], &quot;uppercase&quot;: true}" placeholder="XXX-XXXX" required="" id="c-zip" />
                                </div>

                                {/* <div class="col-12">
                                    <label class="form-label fs-base" for="c-notes">Order notes <span class="text-muted">(optional)</span></label>
                                    <textarea class="form-control form-control-lg" rows="3" id="c-notes"></textarea>
                                </div> */}
                                <div class="col-12">
                                    <div class="form-check">
                                        <input class="form-check-input" type="checkbox" id="same-address" checked disabled />
                                        <label class="form-check-label text-dark fw-medium" for="same-address">Billing address same as delivery</label>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex flex-0 justify-content-between align-items-center'>
                                <a class="btn btn-primary" onClick={prev} disabled>Back</a>
                                <a class="btn btn-primary" onClick={next}>Next</a>
                            </div>
                        </div>
                        <div class="tab-pane container fade" id="menu1">
                            <div>
                                <div class="h4 card-title">Shipping information</div>
                                <p class="card-title-desc">It will be as simple as occidental in fact</p>
                                <div class="row">
                                    <div class="col-sm-6 col-lg-4">
                                        <div class="border rounded active shipping-address card">
                                            <div class="card-body"><a class="float-end ms-1" href="/ecommerce-checkout">Edit</a>
                                                <h5 class="font-size-14 mb-4">Address 1</h5>
                                                <h5 class="font-size-14">Bradley McMillian</h5>
                                                <p class="mb-1">109 Clarksburg Park Road Show Low, AZ 85901</p>
                                                <p class="mb-0">Mo. 012-345-6789</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-sm-6 col-lg-4">
                                        <div class="border rounded shipping-address card">
                                            <div class="card-body"><a class="float-end ms-1" href="/ecommerce-checkout">Edit</a>
                                                <h5 class="font-size-14 mb-4">Address 2</h5>
                                                <h5 class="font-size-14">Bradley McMillian</h5>
                                                <p class="mb-1">109 Clarksburg Park Road Show Low, AZ 85901</p>
                                                <p class="mb-0">Mo. 012-345-6789</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex flex-0 justify-content-between align-items-center'>
                                <a class="btn btn-primary" onClick={prev}>Back</a>
                                <a class="btn btn-primary" onClick={next}>Next</a>
                            </div>
                        </div>
                        <div class="tab-pane container fade" id="menu2">
                            <div class="h5 card-title">Payment information</div>
                            <p class="card-title-desc">It will be as simple as occidental in fact</p>
                            <div>
                                <h5 class="font-size-14">Payment method :</h5>
                                <div class="row">
                                    <div class="col-sm-6 col-lg-4">
                                        <div><label class="form-label card-radio-label mb-3"><input name="pay-method"
                                            id="pay-methodoption1" type="radio"
                                            class="card-radio-input form-check-input" />
                                            <div class="card-radio"><i
                                                class="fab fa-cc-mastercard font-size-24 align-middle me-2"></i><span>Credit
                                                    / Debit Card</span></div>
                                        </label></div>
                                    </div>
                                    <div class="col-sm-6 col-lg-4">
                                        <div><label class="form-label card-radio-label mb-3"><input name="pay-method"
                                            id="pay-methodoption2" type="radio"
                                            class="card-radio-input form-check-input" />
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
                                    </div>
                                </div>
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
                                <div class="mt-4 text-end">
                                    <a class="btn btn-success">Completeorder</a>
                                </div>
                            </div>
                            <div className='d-flex flex-0 justify-content-between align-items-center'>
                                <a class="btn btn-primary" onClick={prev}>Back</a>
                                <a class="btn btn-primary" onClick={next} disabled>Next</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-md-4'>
                    <span class="mb-7 h5">Order Items (3)</span>
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
                                        <span class="text-muted">$40.00</span>
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
                                        <span class="text-muted">$49.00</span>
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
                                    <span>Subtotal</span> <span class="ms-auto fs-sm">$89.00</span>
                                </li>
                                <li class="list-group-item d-flex">
                                    <span>Tax</span> <span class="ms-auto fs-sm">$00.00</span>
                                </li>
                                <li class="list-group-item d-flex">
                                    <span>Shipping</span> <span class="ms-auto fs-sm">$8.00</span>
                                </li>
                                <li class="list-group-item d-flex fs-lg fw-bold">
                                    <span>Total</span> <span class="ms-auto">$97.00</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p class="mb-7 px-5 text-center small text-gray-500">
                        Your personal data will be used to process your order, support
                        your experience throughout this website, and for other purposes
                        described in our privacy policy.
                    </p>
                    <button class="btn w-100 btn-dark py-3 my-3">
                        Place Order
                    </button>
                </div>
            </div>

        </div>
    )
}

export default CheckoutNew