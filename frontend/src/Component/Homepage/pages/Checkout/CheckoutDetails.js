import React from 'react';

import './Checkout.css';

function CheckoutDetails() {
    return (
        <div className='container p-3'>
            <div className='row'>
                <div class="card">
                    <div class="card-body">
                        <div id="checkout-nav-pills-wizard" class="twitter-bs-wizard">
                            <ul class="twitter-bs-wizard-nav nav nav-pills nav-justified">
                                <li class="nav-item">
                                    <a href="/" class="active nav-link">
                                        <span class="step-number">01</span>
                                        <span class="step-title visually-hidden">Billing Info</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="/" class="nav-link">
                                        <span class="step-number">02</span>
                                        <span class="step-title visually-hidden">Shipping Info</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="/" class="nav-link">
                                        <span class="step-number">03</span>
                                        <span class="step-title visually-hidden">Payment Info</span>
                                    </a>
                                </li>
                            </ul>
                            <div class="tab-content twitter-bs-wizard-tab-content">
                                <div class="tab-pane active">
                                    <div class="h5 card-title">Billing information</div>
                                    <p class="card-title-desc">If several languages coalesce, the grammar of the resulting</p>
                                    <form class="">
                                        <div>
                                            <div>
                                                <div class="row">
                                                    <div class="col-lg-4">
                                                        <div class="mb-4">
                                                            <label for="billing-name" class="form-label">Name</label>
                                                            <input id="billing-name"
                                                                placeholder="Enter your name" type="text"
                                                                class="form-control form-control" />
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <div class="mb-4"><label for="billing-email-address" class="form-label">Email
                                                            Address</label>
                                                            <input id="billing-email-address"
                                                                placeholder="Enter your email" type="email"
                                                                class="form-control form-control" /></div>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <div class="mb-4"><label for="billing-phone"
                                                            class="form-label">Phone</label><input type="text" class="form-control"
                                                                id="billing-phone" placeholder="Enter your Phone no." /></div>
                                                    </div>
                                                </div>
                                                <div class="mb-4"><label for="billing-address"
                                                    class="form-label col-md-2 col-form-label">Address</label><textarea
                                                        class="form-control" id="billing-address" rows="3"
                                                        placeholder="Enter full address"></textarea></div>
                                                <div class="row">
                                                    <div class="col-lg-4">
                                                        <div class="mb-4 mb-lg-0"><label class="form-label">Country</label><select
                                                            class="form-select select2" title="Country">
                                                            <option value="0">Select Country</option>
                                                            <option value="IN">India</option>
                                                        </select></div>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <div class="mb-4 mb-lg-0"><label for="billing-city"
                                                            class="form-label">City</label><input id="billing-city"
                                                                placeholder="Enter City" type="text" class="form-control form-control" />
                                                        </div>
                                                    </div>
                                                    <div class="col-lg-4">
                                                        <div class="mb-0"><label for="zip-code" class="form-label">Zip / Postal
                                                            code</label><input id="zip-code" placeholder="Enter Postal code"
                                                                type="text" class="form-control form-control" /></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div id="v-pills-payment" role="tabpanel" aria-labelledby="v-pills-payment-tab" class="tab-pane">
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
                                </div>
                                <div id="v-pills-confir" role="tabpanel" class="tab-pane">
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
                                        <div class="mt-4 text-end"><a class="btn btn-success" href="/ecommerce-checkout">Complete
                                            order</a></div>
                                    </div>
                                </div>
                            </div>
                            <ul class="pager wizard twitter-bs-wizard-pager-link">
                                <li class="previous disabled"><a href="/ecommerce-checkout">Previous</a></li>
                                <li class="next"><a href="/ecommerce-checkout">Next</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckoutDetails;