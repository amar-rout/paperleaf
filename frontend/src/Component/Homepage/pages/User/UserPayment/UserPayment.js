import React from 'react';
import { Link } from 'react-router-dom';
// import Breadcrumb from '../../Breadcrumb/Breadcrumb';
import Meta from '../../Meta';

const UserPayment = () => {
    return (
        <>
            <Meta title="User Profile" />
            {/* <Breadcrumb
                links={[
                    { name: 'Home', link: '/', active: false },
                    { name: 'User', link: '/user', active: false },
                    { name: 'Payment', link: '/user/payment', active: true }
                ]}
            /> */}
            <div className="container-fluid container-md">
                <div className="py-3">
                    <div className="d-flex justify-content-between mb-6 align-items-center mb-4">
                        <h4 className="mb-0">Payments</h4>
                        <a href="/" className="btn btn-outline-info px-2 px-md-4 py-3" data-bs-toggle="modal" data-bs-target="#paymentModal">
                            <i className="bi bi-plus-lg"></i> Add New Payment
                        </a>
                    </div>
                </div>
                <ul className="list-group list-group-flush mb-3">
                    <li className="list-group-item bg-light-subtle mb-4 py-2 border-0">
                        <div className="d-flex flex-0 justify-content-between align-items-center">
                            <div className="d-flex px-md-3">
                                {/* <img className="" src="../assets/images/svg-graphics/visa.svg" alt="" /> */}
                                <div className="ms-md-4">
                                    <p className="mb-0 h6">**** 1234</p>
                                    <p className="mb-0 small">Expires in 10/2023</p>
                                </div>
                            </div>
                            <Link to="/" className="btn btn-outline-danger"><i class="bi bi-trash"></i> Remove</Link>
                        </div>
                    </li>
                    <li className="list-group-item bg-light-subtle mb-4 py-2 border-0">
                        <div className="d-flex flex-0 justify-content-between align-items-center">
                            <div className="d-flex px-md-3">
                                <img src="../assets/images/svg-graphics/visa.svg" alt="" />
                                <div className="ms-md-4">
                                    <p className="mb-0 h6">Master Card<br/>Ending in **** 1234</p>
                                    <p className="mb-0 small">Expires in 03/2026</p>
                                </div>
                            </div>
                            <Link to="/" className="btn btn-outline-danger"><i class="bi bi-trash"></i> Remove</Link>
                        </div>
                    </li>
                    <li className="list-group-item bg-light-subtle mb-4 py-2 border-0">
                        <div className="d-flex flex-0 justify-content-between align-items-center">
                            <div className="d-flex px-1 px-md-3">
                                <img src="../assets/images/svg-graphics/visa.svg" alt="" />
                                <div className="ms-md-4">
                                    <p className="mb-0 h6">Discover Card <br/>Ending in **** 1234</p>
                                    <p className="mb-0 small">Expires in 07/2020</p>
                                    <span className="badge bg-warning-subtle text-dark">
                                        This card is expired.
                                    </span>
                                </div>
                            </div>
                            <Link to="/" className="btn btn-outline-danger"><i class="bi bi-trash"></i> Remove</Link>
                        </div>
                    </li>
                    <li className="list-group-item bg-light-subtle mb-4 py-2 border-0">
                        <div className="d-flex flex-0 justify-content-between align-items-center">
                            <div className="d-flex px-1 px-md-3">
                                <img src="../assets/images/svg-graphics/visa.svg" alt="" />
                                <div className="ms-md-4">
                                    <p className="mb-0 h6 text-wrap">American Express Card</p>
                                    <p className="mb-0 small fw-semibold">Ending in **** 1234</p>
                                    <p className="mb-0 small">Expires in 12/2021</p>
                                </div>
                            </div>
                            <Link to="/" className="btn btn-outline-danger"><i class="bi bi-trash"></i> Remove</Link>
                        </div>
                    </li>
                    <li className="list-group-item bg-light-subtle mb-4 py-2 border-0">
                        <div className="d-flex flex-0 justify-content-between align-items-center">
                            <div className="d-flex px-md-3">
                                <img src="../assets/images/svg-graphics/visa.svg" alt="" />
                                <div className="ms-md-4">
                                    <p className="mb-0 h6">Master Card<br/>ending in 1234</p>
                                    <p className="mb-0 small">Expires in 03/2026</p>
                                </div>
                            </div>
                            <Link to="/" className="btn btn-outline-danger"><i class="bi bi-trash"></i> Remove</Link>
                        </div>
                    </li>
                    {/* <li className="list-group-item px-0 py-4">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                    <img src="../assets/images/svg-graphics/mastercard.svg" alt="" className="me-3" />
                                    <div>
                                        <h5 className="mb-0 h6">Mastercard ending in 1234</h5>
                                        <p className="mb-0 small">Expires in 03/2026</p>
                                    </div>
                                </div>
                                <div>
                                    <a href="/" className="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i> Remove</a>
                                </div>
                            </div>
                        </li> 
                        <li className="list-group-item px-0 py-4">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                    <img src="../assets/images/svg-graphics/discover.svg" alt="" className="me-3" />
                                    <div>
                                        <h5 className="mb-0 h6">Discover ending in 1234</h5>
                                        <p className="mb-0 small">Expires in 07/2020 <span className="badge bg-warning text-dark"> This card is
                                            expired.</span></p>
                                    </div>
                                </div>
                                <div>
                                    <a href="/" className="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i> Remove</a>
                                </div>
                            </div>
                        </li> 
                        <li className="list-group-item px-0 py-4">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                    <img src="../assets/images/svg-graphics/americanexpress.svg" alt="" className="me-3" />
                                    <div>
                                        <h5 className="mb-0 h6">American Express ending in 1234</h5>
                                        <p className="mb-0 small">Expires in 12/2021</p>
                                    </div>
                                </div>
                                <div>
                                    <a href="/" className="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i> Remove</a>
                                </div>
                            </div>
                        </li> 
                        <li className="list-group-item px-0 py-4 border-bottom">
                            <div className="d-flex justify-content-between">
                                <div className="d-flex">
                                    <img src="../assets/images/svg-graphics/paypal.svg" alt="" className="me-3" />
                                    <div>
                                        <h5 className="mb-0 h6">Paypal Express ending in 1234</h5>
                                        <p className="mb-0 small">Expires in 10/2021</p>
                                    </div>
                                </div>
                                <div>
                                    <a href="/" className="btn btn-sm btn-outline-danger"><i class="bi bi-trash"></i> Remove</a>
                                </div>
                            </div>
                        </li> */}
                </ul>
            </div>
        </>

    )
}

export default UserPayment;