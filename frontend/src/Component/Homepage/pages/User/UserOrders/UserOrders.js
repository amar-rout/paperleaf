import React from 'react';
import { Link } from 'react-router-dom';
// import Breadcrumb from '../../Breadcrumb/Breadcrumb';
import Meta from '../../Meta';

const UserOrders = () => {
    return (
        <>
            <Meta title="User Orders" />
            {/* <Breadcrumb
                links={[
                    { name: 'Home', link: '/', active: false },
                    { name: 'User', link: '/user', active: false },
                    { name: 'Orders', link: '/user/orders', active: true }
                ]}
            /> */}
            <div className="container-fluid">
                <div class="d-flex align-items-center mb-4">
                    <span class="mb-0 h4">Orders</span>
                    {/* <select class="form-select ms-auto shadow-none border-1 border-dark py-2" style={{ maxWidth: 200 }}>
                        <option value="All tme">For all time</option>
                        <option value="Last month">Last month</option>
                        <option value="Last month">Last Year</option>
                        <option value="Last month">2022</option>
                    </select> */}
                </div>
                <div class="card border-0">
                    <div class="card-body p-0">
                        <div class="accordion accordion-alt accordion-orders" id="orders">
                            <div class="accordion-item border-top mb-0">
                                <div class="accordion-header">
                                    <a class="accordion-button bg-light shadow-none d-flex fs-5 fw-normal text-decoration-none py-3 collapsed" href="#orderOne" data-bs-toggle="collapse" aria-expanded="false" aria-controls="orderOne">
                                        <div class="d-flex justify-content-between w-100" style={{ maxWidth: 440 }}>
                                            <div class="me-1 me-sm-4">
                                                <div class="h6 small text-dark"><small>#78A6431D409</small></div>
                                                <div class="badge bg-info-subtle text-info small rounded-pill"><small>In progress</small></div>
                                            </div>
                                            <div class="me-1 me-sm-4">
                                                <span class="d-none d-sm-block mb-2 h6 small text-muted"><small>Order date</small></span>
                                                <div class="d-sm-none mb-2 h6 small text-muted"><small>Date</small></div>
                                                <div class="h6 small text-dark"><small>Jan 27, 2022</small></div>
                                            </div>
                                            <div class="me-1 me-sm-4">
                                                <div class="h6 small text-muted mb-2"><small>Total</small></div>
                                                <div class="h6 small fw-semibold text-dark"><small>₹16,000.00</small></div>
                                            </div>
                                        </div>
                                        <div class="accordion-button-img d-none d-sm-flex align-items-center ms-auto">
                                            <div class="mx-1">
                                                <img src="/assets/images/productImages/product1.jpg" width="48" alt="Product" />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <div class="accordion-collapse collapse" id="orderOne" data-bs-parent="#orders" style={{}}>
                                    <div class="accordion-body">
                                        <div class="table-responsive pt-1">
                                            <table class="table align-middle w-100" style={{ minWidth: 450 }}>
                                                <tbody><tr>
                                                    <td class="border-0 py-1 px-0">
                                                        <div class="d-flex align-items-center">
                                                            <a class="d-inline-block flex-shrink-0 bg-light-subtle rounded-1 p-md-2 p-lg-3" href="shop-single.html">
                                                                <img src="/assets/images/productImages/product1.jpg" width="110" alt="Product" />
                                                            </a>
                                                            <div class="ps-3 ps-sm-4">
                                                                <h4 class="h6 mb-2">
                                                                    <Link to="shop-single.html">Candle in concrete bowl</Link>
                                                                </h4>
                                                                <div class="text-muted small me-3">Color: <span class="text-dark fw-medium">Gray night</span></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                                        <div class="h6 small text-muted mb-2">Quantity</div>
                                                        <div class="small fw-semibold text-dark">1</div>
                                                    </td>
                                                    <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                                        <div class="h6 small text-muted mb-2">Price</div>
                                                        <div class="h6 small fw-semibold text-dark">₹16</div>
                                                    </td>
                                                    <td class="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                                                        <div class="h6 small text-muted mb-2">Total</div>
                                                        <div class="h6 small fw-semibold text-dark">₹16</div>
                                                    </td>
                                                </tr>
                                                </tbody></table>
                                        </div>
                                        <div class="bg-light-subtle rounded-1 p-4 my-2">
                                            <div class="row">
                                                <div class="col-sm-5 col-md-3 col-lg-4 mb-3 mb-md-0">
                                                    <div class="fs-5 small fw-semibold text-dark mb-1">Payment:</div>
                                                    <div class="small fs-6 fw-normal">Upon the delivery</div>
                                                    <a class="btn btn-link text-muted link-info text-decoration-none py-1 px-0 mt-2" href="/">
                                                        <i class="bi bi-clock me-2"></i>
                                                        Order history
                                                    </a>
                                                </div>
                                                <div class="col-sm-7 col-md-5 mb-4 mb-md-0">
                                                    <div class="fs-5 small fw-semibold text-dark mb-1">Delivery address:</div>
                                                    <div class="small">1520, Snow House, CDA-6<br />Cuttack, Odisha 753006</div>
                                                </div>
                                                <div class="col-md-4 col-lg-3 text-md-end">
                                                    <button class="btn btn-outline-dark w-100 w-md-auto py-3 d-flex justify-content-center align-items-center" type="button">
                                                        <i class="bi bi-star p-0 m-0 me-2" /> Leave a review
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item border-top mb-0">
                                <div class="accordion-header">
                                    <a class="accordion-button shadow-none bg-light d-flex fs-5 fw-normal text-decoration-none py-3 collapsed" href="#orderTwo" data-bs-toggle="collapse" aria-expanded="false" aria-controls="orderTwo">
                                        <div class="d-flex justify-content-between w-100" style={{ maxWidth: 440 }}>
                                            <div class="me-1 me-sm-4">
                                                <div class="h6 small text-dark"><small>#47H76G09F33</small></div>
                                                <span class="badge bg-danger-subtle text-danger small rounded-pill"><small>Canceled</small></span>
                                            </div>
                                            <div class="me-1 me-sm-4">
                                                <div class="d-none d-sm-block h6 small text-muted mb-2"><small>Order date</small></div>
                                                <div class="d-sm-none h6 small text-muted mb-2"><small>Date</small></div>
                                                <div class="small fw-medium text-dark"><small>Sep 14, 2022</small></div>
                                            </div>
                                            <div class="me-1 me-sm-4">
                                                <div class="h6 small text-muted mb-2"><small>Total</small></div>
                                                <div class="h6 small text-dark"><small>₹59.00</small></div>
                                            </div>
                                        </div>
                                        <div class="accordion-button-img d-none d-sm-flex align-items-center ms-auto">
                                            <div class="mx-1">
                                                <img src="/assets/images/productImages/product1.jpg" width="48" alt="Product" />
                                            </div>
                                            <div class="mx-1">
                                                <img src="/assets/images/productImages/product5.jpg" width="48" alt="Product" />
                                            </div>
                                            <div class="mx-1">
                                                <img src="/assets/images/productImages/product9.jpg" width="48" alt="Product" />
                                            </div>
                                        </div></a></div>
                                <div class="accordion-collapse collapse" id="orderTwo" data-bs-parent="#orders" style={{}}>
                                    <div class="accordion-body">
                                        <div class="table-responsive pt-1">
                                            <table class="table align-middle w-100" style={{ minWidth: 450 }}>
                                                <tbody><tr>
                                                    <td class="border-0 py-1 px-0">
                                                        <div class="d-flex align-items-center">
                                                            <a class="d-inline-block flex-shrink-0 bg-light-subtle rounded-1 p-md-2 p-lg-3" href="shop-single.html">
                                                                <img src="/assets/images/productImages/product1.jpg" width="110" alt="Product" />
                                                            </a>
                                                            <div class="ps-3 ps-sm-4">
                                                                <h4 class="h6 mb-2"><a href="shop-single.html">Analogue wall clock</a></h4>
                                                                <div class="text-muted small me-3">Color: <span class="text-dark fw-medium">Turquoise</span></div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                                        <div class="small text-muted mb-2">Quantity</div>
                                                        <div class="small fw-medium text-dark">1</div>
                                                    </td>
                                                    <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                                        <div class="small text-muted mb-2">Price</div>
                                                        <div class="small fw-medium text-dark"> ₹25</div>
                                                    </td>
                                                    <td class="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                                                        <div class="small text-muted mb-2">Total</div>
                                                        <div class="small fw-medium text-dark"> ₹25</div>
                                                    </td>
                                                </tr>
                                                    <tr>
                                                        <td class="border-0 py-1 px-0">
                                                            <div class="d-flex align-items-center">
                                                                <a class="d-inline-block flex-shrink-0 bg-light-subtle rounded-1 p-md-2 p-lg-3" href="shop-single.html">
                                                                    <img src="/assets/images/productImages/product5.jpg" width="110" alt="Product" />
                                                                </a>
                                                                <div class="ps-3 ps-sm-4">
                                                                    <h4 class="h6 mb-2"><a href="shop-single.html">Glossy round vase</a></h4>
                                                                    <div class="text-muted small me-3">Color: <span class="text-dark fw-medium">White</span></div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                                            <div class="small text-muted mb-2">Quantity</div>
                                                            <div class="small fw-medium text-dark">1</div>
                                                        </td>
                                                        <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                                            <div class="small text-muted mb-2">Price</div>
                                                            <div class="small fw-medium text-dark"> ₹15</div>
                                                        </td>
                                                        <td class="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                                                            <div class="small text-muted mb-2">Total</div>
                                                            <div class="small fw-medium text-dark"> ₹15</div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="border-0 py-1 px-0">
                                                            <div class="d-flex align-items-center">
                                                                <a class="d-inline-block flex-shrink-0 bg-light-subtle rounded-1 p-md-2 p-lg-3" href="shop-single.html">
                                                                    <img src="/assets/images/productImages/product9.jpg" width="110" alt="Product" />
                                                                </a>
                                                                <div class="ps-3 ps-sm-4">
                                                                    <h4 class="h6 mb-2"><a href="shop-single.html">Ceramic flower pot</a></h4>
                                                                    <div class="text-muted small me-3">Color: <span class="text-dark fw-medium">Gray concrete</span></div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                                            <div class="small text-muted mb-2">Quantity</div>
                                                            <div class="small fw-medium text-dark">1</div>
                                                        </td>
                                                        <td class="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                                            <div class="small text-muted mb-2">Price</div>
                                                            <div class="small fw-medium text-dark"> ₹19</div>
                                                        </td>
                                                        <td class="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                                                            <div class="small text-muted mb-2">Total</div>
                                                            <div class="small fw-medium text-dark"> ₹19</div>
                                                        </td>
                                                    </tr>
                                                </tbody></table>
                                        </div>
                                        <div class="bg-light-subtle rounded-1 p-4 my-2">
                                            <div class="row">
                                                <div class="col-sm-5 col-md-3 col-lg-4 mb-3 mb-md-0">
                                                    <div class="fs-5 small fw-semibold text-dark mb-1">Payment:</div>
                                                    <div class="small fs-6 fw-normal">Upon the delivery</div>
                                                    <a class="btn btn-link text-muted link-info text-decoration-none py-1 px-0 mt-2" href="/">
                                                        <i class="bi bi-clock me-2"></i>
                                                        Order history
                                                    </a>
                                                </div>
                                                <div class="col-sm-7 col-md-5 mb-4 mb-md-0">
                                                    <div class="fs-5 small fw-semibold text-dark mb-1">Delivery address:</div>
                                                    <div class="small">1520, Snow House, CDA-6<br />Cuttack, Odisha 753006</div>
                                                </div>
                                                <div class="col-md-4 col-lg-3 text-md-end">
                                                    <button class="btn btn-outline-dark w-100 w-md-auto py-3 d-flex justify-content-center align-items-center" type="button">
                                                        <i class="bi bi-star p-0 m-0 me-2" /> Leave a review
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="d-sm-flex align-items-center pt-5">
                            {/* <nav class="order-sm-2 ms-sm-auto mb-4 mb-sm-0" aria-label="Orders pagination">
                                <ul class="pagination pagination-sm justify-content-center">
                                    <li class="page-item active" aria-current="page">
                                        <span class="page-link">1<span class="visually-hidden">(current)</span></span>
                                    </li>
                                    <li class="page-item"><a class="page-link" href="/">2</a></li>
                                    <li class="page-item"><a class="page-link" href="/">3</a></li>
                                    <li class="page-item"><a class="page-link" href="/">4</a></li>
                                </ul>
                            </nav> */}
                            <button class="btn bg-dark text-white px-4 py-3" type="button">Load more orders</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserOrders;