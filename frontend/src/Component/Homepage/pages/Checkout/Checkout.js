import React from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Meta from '../Meta';

const Checkout = () => {
    return (
        <>
            <Meta title="Checkout order" />
            <Breadcrumb
                links={[
                    { name: 'Home', link: '/', active: false },
                    { name: 'Checkout', link: '/Checkout', active: true }
                ]}
            />
            <section className="album py-3">
                <div className="container">
                    <h4 className="pb-5 text-center">
                        <span className="border-bottom border-2">Checkout</span>
                    </h4>
                    <div class="row">
                        <div class="col-lg-6">
                            <span class="fs-5 fw-normal text-body text-uppercase pb-2 pb-sm-3">1. <span class="text-decoration-underline ms-1">Shipping details</span></span>
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
                            <h3 class="fs-base fw-normal text-body text-uppercase pb-2 pb-sm-3">2.<span class="text-decoration-underline ms-1">Shipping method</span></h3>
                            <div class="form-check mb-4">
                                <input class="form-check-input" type="radio" name="shipping" id="standard" />
                                <label class="form-check-label d-flex justify-content-between" for="standard"><span><span class="d-block fs-base text-dark fw-medium mb-1">Standard Delivery</span><span class="text-body">Delivery in 5 - 8 working days</span></span><span class="fs-base text-dark fw-semibold">$8.00</span></label>
                            </div>
                            <div class="form-check mb-4">
                                <input class="form-check-input" type="radio" name="shipping" checked="" id="express" />
                                <label class="form-check-label d-flex justify-content-between" for="express"><span><span class="d-block fs-base text-dark fw-medium mb-1">Express Shipping</span><span class="text-body">Delivery in 3 - 5 working days</span></span><span class="fs-base text-dark fw-semibold">$15.00</span></label>
                            </div>
                            <div class="form-check mb-4">
                                <input class="form-check-input" type="radio" name="shipping" id="local" />
                                <label class="form-check-label d-flex justify-content-between" for="local"><span><span class="d-block fs-base text-dark fw-medium mb-1">Local Pickup</span><span class="text-body">Delivery in 1 - 2 working days</span></span><span class="fs-base text-dark fw-semibold">Free</span></label>
                            </div>
                            <h3 class="fs-base fw-normal text-body text-uppercase mt-n4 mt-md-n3 pt-5 pb-2 pb-sm-3">3.<span class="text-decoration-underline ms-1">Payment method</span></h3>
                            <div class="form-check mb-4">
                                <input class="form-check-input" type="radio" name="payment" checked="" id="card" />
                                <label class="form-check-label" for="card"><span><span class="d-block fs-base text-dark fw-medium mb-1">Credit Card</span><span class="text-body">Mastercard, Maestro, American Express, Visa are accepted</span></span></label>
                            </div>
                            <div class="form-check mb-4">
                                <input class="form-check-input" type="radio" name="payment" id="cash" />
                                <label class="form-check-label" for="cash"><span><span class="d-block fs-base text-dark fw-medium mb-1">Cash on Delivery</span><span class="text-body">Pay with cash upon the delivery</span></span></label>
                            </div>
                            <div class="d-none d-lg-block pt-5 mt-n3">
                                <div class="form-check mb-4">
                                    <input class="form-check-input" type="checkbox" checked="" id="save-info" />
                                    <label class="form-check-label" for="save-info"><span class="text-muted">Your personal information will be used to process your order, to support your experience on this site and for other purposes described in the </span><a class="fw-medium" href="/">privacy policy</a></label>
                                </div>
                                <button class="btn btn-lg btn-primary" type="submit">Place an order</button>
                            </div>
                        </div>
                        <div class="col-12 col-md-5 col-lg-5 offset-lg-1">
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
                        {/* <div class="col-lg-5 offset-lg-1 pt-1">
                            <h2 class="pb-2 pt-md-2 my-4 mt-lg-5">Order summary <span class="fs-base fw-normal text-muted">(4 items)</span></h2>
                            <div class="d-sm-flex align-items-center border-top py-4"><a class="d-inline-block flex-shrink-0 bg-secondary rounded-1 p-sm-2 p-xl-3 mb-2 mb-sm-0" href="shop-single.html"><img src="assets/img/shop/cart/01.png" width="110" alt="Product" /></a>
                                <div class="w-100 pt-1 ps-sm-4">
                                    <div class="d-flex">
                                        <div class="me-3">
                                            <h3 class="h5 mb-2"><a href="shop-single.html">Candle in concrete bowl</a></h3>
                                            <div class="d-sm-flex flex-wrap">
                                                <div class="text-muted fs-sm me-3">Color: <span class="text-dark fw-medium">Gray night</span></div>
                                                <div class="text-muted fs-sm me-3">Weight: <span class="text-dark fw-medium">140g</span></div>
                                            </div>
                                        </div>
                                        <div class="text-end ms-auto">
                                            <div class="fs-5 mb-2">$11.00</div>
                                            <del class="text-muted ms-auto">$15.00</del>
                                        </div>
                                    </div>
                                    <div class="count-input ms-n3">
                                        <button class="btn btn-icon fs-xl" type="button" data-decrement="">-</button>
                                        <input class="form-control" type="number" value="2" readonly="" />
                                        <button class="btn btn-icon fs-xl" type="button" data-increment="">+</button>
                                    </div>
                                    <div class="nav justify-content-end mt-n5 mt-sm-n3"><a class="nav-link fs-xl p-2" href="/" data-bs-toggle="tooltip" aria-label="Remove" data-bs-original-title="Remove"><i class="ai-trash"></i></a></div>
                                </div>
                            </div>
                            <div class="d-sm-flex align-items-center border-top py-4"><a class="d-inline-block flex-shrink-0 bg-secondary rounded-1 p-sm-2 p-xl-3 mb-2 mb-sm-0" href="shop-single.html"><img src="assets/img/shop/cart/02.png" width="110" alt="Product" /></a>
                                <div class="w-100 pt-1 ps-sm-4">
                                    <div class="d-flex">
                                        <div class="me-3">
                                            <h3 class="h5 mb-2"><a href="shop-single.html">Exquisite glass vase</a></h3>
                                        </div>
                                        <div class="text-end ms-auto">
                                            <div class="fs-5 mb-2">$23.00</div>
                                        </div>
                                    </div>
                                    <div class="count-input ms-n3">
                                        <button class="btn btn-icon fs-xl" type="button" data-decrement="">-</button>
                                        <input class="form-control" type="number" value="1" readonly="" />
                                        <button class="btn btn-icon fs-xl" type="button" data-increment="">+</button>
                                    </div>
                                    <div class="nav justify-content-end mt-n5 mt-sm-n3"><a class="nav-link fs-xl p-2" href="/" data-bs-toggle="tooltip" aria-label="Remove" data-bs-original-title="Remove"><i class="ai-trash"></i></a></div>
                                </div>
                            </div>
                            <div class="d-sm-flex align-items-center border-top py-4"><a class="d-inline-block flex-shrink-0 bg-secondary rounded-1 p-sm-2 p-xl-3 mb-2 mb-sm-0" href="shop-single.html"><img src="assets/img/shop/cart/03.png" width="110" alt="Product" /></a>
                                <div class="w-100 pt-1 ps-sm-4">
                                    <div class="d-flex">
                                        <div class="me-3">
                                            <h3 class="h5 mb-2"><a href="shop-single.html">Set for a dinner party of 7 items</a></h3>
                                        </div>
                                        <div class="text-end ms-auto">
                                            <div class="fs-5 mb-2">$47.00</div>
                                        </div>
                                    </div>
                                    <div class="count-input ms-n3">
                                        <button class="btn btn-icon fs-xl" type="button" data-decrement="">-</button>
                                        <input class="form-control" type="number" value="1" readonly="" />
                                        <button class="btn btn-icon fs-xl" type="button" data-increment="">+</button>
                                    </div>
                                    <div class="nav justify-content-end mt-n5 mt-sm-n3"><a class="nav-link fs-xl p-2" href="/" data-bs-toggle="tooltip" aria-label="Remove" data-bs-original-title="Remove"><i class="ai-trash"></i></a></div>
                                </div>
                            </div>
                            <div class="border-top pt-4 mb-3">
                                <div class="input-group input-group-sm border-dashed" style={{ maxWidth: 310 }}>
                                    <input class="form-control text-uppercase" type="text" placeholder="Your coupon code" />
                                    <button class="btn btn-secondary" type="button">Apply coupon</button>
                                </div>
                            </div>
                            <ul class="list-unstyled py-3 mb-0">
                                <li class="d-flex justify-content-between mb-2">Subtotal:<span class="fw-semibold ms-2">$92.00</span></li>
                                <li class="d-flex justify-content-between mb-2">Taxes:<span class="fw-semibold ms-2">$8.00</span></li>
                                <li class="d-flex justify-content-between mb-2">Shipping cost:<span class="fw-semibold ms-2">$15.00</span></li>
                            </ul>
                            <div class="d-flex align-items-center justify-content-between border-top fs-xl pt-4">Total:<span class="fs-3 fw-semibold text-dark ms-2">$115.00</span></div>
                        </div> */}
                    </div>
                </div>
            </section>

            {/* <section className="container my-5">
                <div class="row">
                    <div class="col-12 col-md-7">
                        <form>
                            <h6 class="mb-7">Billing Details</h6>
                            <div class="row mb-9">
                                <div class="col-12 col-md-6">
                                    <div class="form-group">
                                        <label class="form-label" for="checkoutBillingFirstName">First Name *</label>
                                        <input class="form-control form-control-sm" id="checkoutBillingFirstName" type="text" placeholder="First Name" required="" />
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="form-group">
                                        <label class="form-label" for="checkoutBillingLastName">Last Name *</label>
                                        <input class="form-control form-control-sm" id="checkoutBillingLastName" type="text" placeholder="Last Name" required="" />
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <label class="form-label" for="checkoutBillingEmail">Email *</label>
                                        <input class="form-control form-control-sm" id="checkoutBillingEmail" type="email" placeholder="Email" required="" />
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <label class="form-label" for="checkoutBillingCompany">Company name *</label>
                                        <input class="form-control form-control-sm" id="checkoutBillingCompany" type="text" placeholder="Company name (optional)" />
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <label class="form-label" for="checkoutBillingCountry">Country *</label>
                                        <input class="form-control form-control-sm" id="checkoutBillingCountry" type="text" placeholder="Country" required="" />
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <label class="form-label" for="checkoutBillingAddress">Address Line 1 *</label>
                                        <input class="form-control form-control-sm" id="checkoutBillingAddress" type="text" placeholder="Address Line 1" required="" />
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <label class="form-label" for="checkoutBillingAddressTwo">Address Line 2</label>
                                        <input class="form-control form-control-sm" id="checkoutBillingAddressTwo" type="text" placeholder="Address Line 2 (optional)" />
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="form-group">
                                        <label class="form-label" for="checkoutBillingTown">Town / City *</label>
                                        <input class="form-control form-control-sm" id="checkoutBillingTown" type="text" placeholder="Town / City" required="" />
                                    </div>
                                </div>
                                <div class="col-12 col-md-6">
                                    <div class="form-group">
                                        <label class="form-label" for="checkoutBillingZIP">ZIP / Postcode *</label>
                                        <input class="form-control form-control-sm" id="checkoutBillingZIP" type="text" placeholder="ZIP / Postcode" required="" />
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group mb-0">
                                        <label class="form-label" for="checkoutBillingPhone">Mobile Phone *</label>
                                        <input class="form-control form-control-sm" id="checkoutBillingPhone" type="tel" placeholder="Mobile Phone" required="" />
                                    </div>
                                </div>
                            </div>
                            <h6 class="mb-7">Shipping Details</h6>
                            <div class="table-responsive mb-6">
                                <table class="table table-bordered table-sm table-hover mb-0">
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div class="form-check custom-radio">
                                                    <input class="form-check-input" id="checkoutShippingStandard" name="shipping" type="radio" />
                                                    <label class="form-check-label text-body text-nowrap" for="checkoutShippingStandard">
                                                        Standard Shipping
                                                    </label>
                                                </div>
                                            </td>
                                            <td>Delivery in 5 - 7 working days</td>
                                            <td>$8.00</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="form-check custom-radio">
                                                    <input class="form-check-input" id="checkoutShippingExpress" name="shipping" type="radio" />
                                                    <label class="form-check-label text-body text-nowrap" for="checkoutShippingExpress">
                                                        Express Shipping
                                                    </label>
                                                </div>
                                            </td>
                                            <td>Delivery in 3 - 5 working days</td>
                                            <td>$12.00</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="form-check custom-radio">
                                                    <input class="form-check-input" id="checkoutShippingShort" name="shipping" type="radio" />
                                                    <label class="form-check-label text-body text-nowrap" for="checkoutShippingShort">
                                                        1 - 2 Shipping
                                                    </label>
                                                </div>
                                            </td>
                                            <td>Delivery in 1 - 2 working days</td>
                                            <td>$18.00</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <div class="form-check custom-radio">
                                                    <input class="form-check-input" id="checkoutShippingFree" name="shipping" type="radio" />
                                                    <label class="form-check-label text-body text-nowrap" for="checkoutShippingFree">
                                                        Free Shipping
                                                    </label>
                                                </div>
                                            </td>
                                            <td>Living won't the He one every subdue
                                                meat replenish face was you morning
                                                firmament darkness.</td>
                                            <td>$0.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="mb-9">
                                <div class="form-check">
                                    <input class="form-check-input" id="checkoutShippingAddress" type="checkbox" />
                                    <label class="form-check-label fs-sm collapsed" data-bs-toggle="collapse" data-bs-target="#checkoutShippingAddressCollapse" for="checkoutShippingAddress" aria-expanded="false">
                                        Ship to a different address?
                                    </label>
                                </div>
                                <div class="collapse" id="checkoutShippingAddressCollapse" style={{}}>
                                    <div class="row mt-6">
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label class="form-label" for="checkoutShippingAddressCountry">Country *</label>
                                                <input class="form-control form-control-sm" id="checkoutShippingAddressCountry" type="text" placeholder="Country" />
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label class="form-label" for="checkoutShippingAddressLineOne">Address Line 1 *</label>
                                                <input class="form-control form-control-sm" id="checkoutShippingAddressLineOne" type="text" placeholder="Address Line 1" />
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group">
                                                <label class="form-label" for="checkoutShippingAddressLineTwo">Address Line 2</label>
                                                <input class="form-control form-control-sm" id="checkoutShippingAddressLineTwo" type="text" placeholder="Address Line 2 (optional)" />
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label class="form-label" for="checkoutShippingAddressTown">Town / City *</label>
                                                <input class="form-control form-control-sm" id="checkoutShippingAddressTown" type="text" placeholder="Town / City" />
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="form-group">
                                                <label class="form-label" for="checkoutShippingAddressZIP">ZIP / Postcode *</label>
                                                <input class="form-control form-control-sm" id="checkoutShippingAddressZIP" type="text" placeholder="ZIP / Postcode" />
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <button class="btn btn-sm btn-outline-dark" type="submit">
                                                Save Address
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h6 class="mb-7">Payment</h6>
                            <div class="list-group list-group-sm mb-7">
                                <div class="list-group-item">
                                    <div class="form-check custom-radio">
                                        <input class="form-check-input" id="checkoutPaymentCard" name="payment" type="radio" data-collapse="show" data-target="#checkoutPaymentCardCollapse" />
                                        <label class="form-check-label fs-sm text-body text-nowrap" for="checkoutPaymentCard">
                                            Credit Card <img class="ms-2" src="assets/img/brands/color/cards.svg" alt="..." />
                                        </label>
                                    </div>
                                </div>
                                <div class="list-group-item py-0 collapse show" id="checkoutPaymentCardCollapse" style={{}}>
                                    <div class="row gx-5 py-5">
                                        <div class="col-12">
                                            <div class="form-group mb-4">
                                                <label class="visually-hidden" for="checkoutPaymentCardNumber">Card Number</label>
                                                <input class="form-control form-control-sm" id="checkoutPaymentCardNumber" type="text" placeholder="Card Number *" required="" />
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-group mb-4">
                                                <label class="visually-hidden" for="checkoutPaymentCardName">Name on Card</label>
                                                <input class="form-control form-control-sm" id="checkoutPaymentCardName" type="text" placeholder="Name on Card *" required="" />
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-4">
                                            <div class="form-group mb-md-0">
                                                <label class="visually-hidden" for="checkoutPaymentMonth">Month</label>
                                                <select class="form-select form-select-sm" id="checkoutPaymentMonth">
                                                    <option>January</option>
                                                    <option>February</option>
                                                    <option>March</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-4">
                                            <div class="form-group mb-md-0">
                                                <label class="visually-hidden" for="checkoutPaymentCardYear">Year</label>
                                                <select class="form-select form-select-sm" id="checkoutPaymentCardYear">
                                                    <option>2017</option>
                                                    <option>2018</option>
                                                    <option>2019</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-12 col-md-4">
                                            <div class="input-group input-group-merge">
                                                <input class="form-control form-control-sm" id="checkoutPaymentCardCVV" type="text" placeholder="CVV *" required="" />
                                                <div class="input-group-append">
                                                    <span class="input-group-text" data-bs-toggle="popover" data-bs-placement="top" data-bs-trigger="hover" data-bs-content="The CVV Number on your credit card or debit card is a 3 digit number on VISA, MasterCard and Discover branded credit and debit cards." data-bs-original-title="" title="">
                                                        <span><i class="fe fe-help-circle"></i></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="list-group-item">
                                    <div class="form-check custom-radio">
                                        <input class="form-check-input" id="checkoutPaymentPaypal" name="payment" type="radio" data-collapse="hide" data-target="#checkoutPaymentCardCollapse" />
                                        <label class="form-check-label fs-sm text-body text-nowrap" for="checkoutPaymentPaypal">
                                            <img src="assets/img/brands/color/paypal.svg" alt="..." />
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <textarea class="form-control form-control-sm mb-9 mb-md-0 fs-xs" rows="5" placeholder="Order Notes (optional)"></textarea>
                        </form>
                    </div>
                    <div class="col-12 col-md-5 col-lg-4 offset-lg-1">
                        <h6 class="mb-7">Order Items (3)</h6>
                        <hr class="my-7" />
                        <ul class="list-group list-group-lg list-group-flush-y list-group-flush-x mb-7">
                            <li class="list-group-item">
                                <div class="row align-items-center">
                                    <div class="col-4">
                                        <a href="product.html">
                                            <img src="assets/img/products/product-6.jpg" alt="..." class="img-fluid" />
                                        </a>
                                    </div>
                                    <div class="col">
                                        <p class="mb-4 fs-sm fw-bold">
                                            <a class="text-body" href="product.html">Cotton floral print Dress</a> <br />
                                            <span class="text-muted">$40.00</span>
                                        </p>
                                        <div class="fs-sm text-muted">
                                            Size: M <br />
                                            Color: Red
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li class="list-group-item">
                                <div class="row align-items-center">
                                    <div class="col-4">
                                        <a href="product.html">
                                            <img src="assets/img/products/product-10.jpg" alt="..." class="img-fluid" />
                                        </a>
                                    </div>
                                    <div class="col">
                                        <p class="mb-4 fs-sm fw-bold">
                                            <a class="text-body" href="product.html">Suede cross body Bag</a> <br />
                                            <span class="text-muted">$49.00</span>
                                        </p>
                                        <div class="fs-sm text-muted">
                                            Color: Brown
                                        </div>

                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div class="card mb-9 bg-light">
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
                        <p class="mb-7 fs-xs text-gray-500">
                            Your personal data will be used to process your order, support
                            your experience throughout this website, and for other purposes
                            described in our privacy policy.
                        </p>
                        <button class="btn w-100 btn-dark">
                            Place Order
                        </button>
                    </div>
                </div>
            </section> */}
        </>
    )
}

export default Checkout;