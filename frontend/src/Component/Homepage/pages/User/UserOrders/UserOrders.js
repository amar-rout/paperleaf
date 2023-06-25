import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import moment from 'moment';
import ReactStars from "react-rating-stars-component";
import Breadcrumb from '../../Breadcrumb/Breadcrumb';
import Meta from '../../Meta';
import { useDispatch, useSelector } from "react-redux";
import Moment from 'react-moment';
import 'moment/locale/fr';
import axios from 'axios';
import { toast } from 'react-toastify';

// import {
//     clearState,
//     getOrdersAsync,
//     // getOrderByID,
//     getOrders,
//     getStatus,
//     // getError
// } from '../../../../../app/orderSlice';

const UserOrders = () => {
    const [loading, setLoading] = useState(false);
    const [orders, setOrders] = useState([]);
    const [prodReview, setProdReview] = useState({});

    const initialComment = {
        title: "",
        rating: 0,
        images: [],
        comment: "",
    }
    const [comment, setComment] = useState(initialComment);

    const handleCommentChange = (e) => {
        setComment({ ...comment, comment: e.target.value });
    }

    // const dispatch = useDispatch();

    // const allOrders = useSelector(getOrders);
    // const orderByID = useSelector(getOrderByID);
    // const orderStatus = useSelector(getStatus);
    // const orderError = useSelector(getError);

    let INR = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
    });

    // useEffect(() => {
    //     dispatch(clearState());
    // },[dispatch]);

    useEffect(() => {
        setLoading(true);
        const user = JSON.parse(localStorage.getItem('user'));
        axios.get(`${process.env.REACT_APP_SERVER_URL}/api/orders/myorders`, {
            "headers": {
                "authorization": `Bearer ${user.token}`,
            }
        }).then(response => {
            // toast.dismiss();
            if (response.data) {
                setLoading(false);
                setOrders(response.data);
            }
        }).catch(error => {
            if (error.response) {
                // toast.dismiss();
                // toast.error(error.response.data.message);
            } else if (error.request) {
                // toast.dismiss();
                // toast.error(error.request);
            } else {
                // toast.dismiss();
                // toast.error(error.message);
            }
        })
        
        // setLoginUser(user);
    }, [setOrders]);

    // useEffect(() => {
    //     if (orderStatus === 'LOADING') {
    //         setLoading(true);
    //         dispatch(clearState());
    //     }
    //     else if (orderStatus === 'LOADED') {
    //         setLoading(false);
    //         setOrders(allOrders);
    //         // console.log(orders);
    //         dispatch(clearState());
    //     }
    //     else if (orderStatus === 'ERROR') {
    //         setLoading(false);
    //         dispatch(clearState());
    //     }
    // }, [dispatch, orders, orderStatus, allOrders]);

    const handleComment = () => {
        const user = JSON.parse(localStorage.getItem("user"));
        axios.post(`${process.env.REACT_APP_SERVER_URL}/api/products/reviews/${prodReview.pId}`, comment, {
            "headers": {
                "authorization": `Bearer ${user.token}`,
            }
        }).then(response => {
            toast.dismiss();
            if (response.data) {
                toast.success("Comment posted Successfully");
            }
        }).catch(error => {
            if (error.response) {
                toast.dismiss();
                toast.error(error.response.data.message);
            } else if (error.request) {
                toast.dismiss();
                toast.error(error.request);
            } else {
                toast.dismiss();
                toast.error(error.message);
            }
        })
    }

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
            {
                loading ?
                    "loading"
                    :
                    <div className="">
                        <div className="d-flex align-items-center my-3">
                            <span className="mb-0 h4 text-decoration-underline">My Orders</span>
                            {/* <select className="form-select ms-auto shadow-none border-1 border-dark py-2" style={{ maxWidth: 200 }}>
                                <option value="All tme">For all time</option>
                                <option value="Last month">Last month</option>
                                <option value="Last month">Last Year</option>
                                <option value="Last month">2022</option>
                            </select> */}
                        </div>
                        {
                            orders.length <= 0 ?
                                <div className="text-center pt-5">
                                    <p>You haven't made any orders yet.</p>
                                </div>
                                :

                                <div className="card border-0 m-0">
                                    <div className="card-body p-0 m-0">
                                        <div className="accordion accordion-alt accordion-orders p-0 m-0" id="orders">
                                            {
                                                orders.map((order, index) => {
                                                    return (
                                                        <div key={order._id} className="accordion-item border-top mb-0">
                                                            <div className="accordion-header">
                                                                <a className="accordion-button px-2 bg-light shadow-none d-flex fs-5 fw-normal text-decoration-none py-3 collapsed" href={`#order${index}`} data-bs-toggle="collapse" aria-expanded="false" aria-controls={`order${index}`}>
                                                                    <div className="d-flex justify-content-between w-100" style={{ maxWidth: 440 }}>
                                                                        <div className="me-1 me-sm-4">
                                                                            <div className="small fw-semibold text-dark"><small>#{order.orderId}</small></div>
                                                                            {
                                                                                !order.isDelivered ?
                                                                                    <>
                                                                                        {
                                                                                            order.isOrderCancelByUser ?
                                                                                                <span className="badge badge-sm bg-danger-subtle text-danger rounded-pill small"><small>Cancelled</small></span>
                                                                                                :
                                                                                                <span className="badge badge-sm bg-warning text-dark rounded-pill small"><small>In Progress</small></span>
                                                                                        }
                                                                                    </>
                                                                                    :
                                                                                    <span className="badge badge-sm bg-success-subtle text-success small fs-6 rounded-pill"><small>Success</small></span>
                                                                            }
                                                                        </div>
                                                                        <div className="me-1 me-sm-4">
                                                                            <span className="d-none d-sm-block mb-1 mb-md-2 fs-6 small text-muted"><small>Order date</small></span>
                                                                            <p className="d-sm-none mb-0 mb-md-2 fs-6 small text-muted"><small>Date</small></p>
                                                                            <p className="fs-6 small text-dark">
                                                                                <small><Moment format='DD MMM, YYYY' locale='en'>{order.createdAt}</Moment></small>
                                                                            </p>
                                                                        </div>
                                                                        <div className="me-1 me-sm-4">
                                                                            <div className="fs-6 small text-muted mb-1 mb-md-2"><small>Total</small></div>
                                                                            <div className="fs-6 small fw-semibold text-dark"><small>{INR.format(order.grandTotal)}</small></div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="accordion-button-img d-none d-sm-flex align-items-center ms-auto">
                                                                        {
                                                                            order.orderItems.map((orderItem) => {
                                                                                return (
                                                                                    <div key={orderItem._id} className="mx-1">
                                                                                        <img src={`${orderItem.image}`} width="48" alt="Product" />
                                                                                    </div>
                                                                                )
                                                                            })
                                                                        }
                                                                    </div>
                                                                </a>
                                                            </div>
                                                            <div className="accordion-collapse collapse" id={`order${index}`} data-bs-parent="#orders" style={{}}>
                                                                <div className="accordion-body">
                                                                    <div className="table-responsive pt-1">
                                                                        {/* <table className="table align-middle w-100" style={{ minWidth: 450 }}> */}
                                                                        <table className="table align-middle table-hover table-bordered">
                                                                            <thead className='border text-center small fs-6 fw-semibold text-dark bg-light'>
                                                                                <tr>
                                                                                    <th className="py-1 px-0"><small>#</small></th>
                                                                                    <th className="py-1 px-0"><small>Product</small></th>
                                                                                    <th className="py-1 px-0"><small>Qty</small></th>
                                                                                    <th className="py-1 px-0"><small>Price</small></th>
                                                                                    <th className="py-1 px-0"><small>TotalPrice</small></th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                {
                                                                                    order.orderItems.map((orderItem, index) => {
                                                                                        return (
                                                                                            <>
                                                                                                <tr key={orderItem._id}>
                                                                                                    <td>
                                                                                                        <div className="dropdown">
                                                                                                            <button className="btn btn-light" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                                                                                <i className="bi bi-three-dots-vertical fs-5 fw-bold"></i>
                                                                                                            </button>
                                                                                                            <ul className="dropdown-menu dropdown-menu-light">
                                                                                                                <li className='my-2'>
                                                                                                                    <Link className='dropdown-item text-decoration-none fs-6' to={`/products/${orderItem.id}`}>View Product</Link>
                                                                                                                </li>
                                                                                                                <li><hr className="dropdown-divider" /></li>
                                                                                                                <li className='my-2'>
                                                                                                                    <span className="dropdown-item fs-6" data-bs-toggle="modal" data-bs-target='#reviewModal'
                                                                                                                        onClick={() => {
                                                                                                                            setProdReview({
                                                                                                                                _id: order._id,
                                                                                                                                pId: orderItem.id,
                                                                                                                                image: orderItem.image,
                                                                                                                                name: orderItem.name
                                                                                                                            })
                                                                                                                        }}
                                                                                                                    >
                                                                                                                        Review Product
                                                                                                                    </span>
                                                                                                                </li>
                                                                                                            </ul>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td className="py-1 px-0 px-md-2">
                                                                                                        <div className="d-flex justify-content-between align-items-center">
                                                                                                            <div className='d-flex justify-content-start align-items-center'>
                                                                                                                <a className="d-inline-block flex-shrink-0 bg-light-subtle rounded-1 p-0" href="shop-single.html">
                                                                                                                    <img src={`${orderItem.image}`} width={64} height={64} alt="Product" />
                                                                                                                </a>
                                                                                                                <div className="ps-3 ps-sm-4">
                                                                                                                    <h4 className="fs-6 mb-2">
                                                                                                                        {/* <Link className='link-dark text-decoration-none' to={`/products/${orderItem.id}`}> */}
                                                                                                                        {orderItem.name}
                                                                                                                        {/* </Link> */}
                                                                                                                    </h4>
                                                                                                                    {/* <p className="small text-muted mb-2"><small>Qty {orderItem.quantity}</small></p> */}
                                                                                                                    {/* <div className="small fw-semibold text-dark"></div> */}
                                                                                                                    {/* <div className="text-muted small me-3">Color: <span className="text-dark fw-medium">Gray night</span></div> */}
                                                                                                                </div>
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </td>
                                                                                                    <td className="py-1 pe-0 ps-1 ps-sm-2">
                                                                                                        {/* <p className="fs-6 small text-dark mb-2"><small>Quantity</small></p> */}
                                                                                                        <p className="small fw-normal text-muted text-center ms-2">{orderItem.quantity}</p>
                                                                                                    </td>
                                                                                                    <td className="py-1 pe-0 ps-1 ps-sm-2 fs-6 small me-1 fw-normal text-muted text-right">
                                                                                                        {/* <p className="fs-6 small text-dark mb-2"><small>Unit Price</small></p> */}
                                                                                                        {/* <p className="small fw-normal text-muted text-right ms-2">{INR.format(orderItem.price)}</p> */}
                                                                                                        <small>{INR.format(orderItem.price)}</small>
                                                                                                    </td>
                                                                                                    <td className="py-1 pe-0 ps-1 ps-sm-2 fs-6 small fw-normal text-muted text-right">
                                                                                                        {/* <p className="fs-6 small text-dark mb-2"><small>Price</small></p> */}
                                                                                                        {/* <p className="fs-6 small fw-normal text-muted text-right">{INR.format(orderItem.price * orderItem.quantity)}</p> */}
                                                                                                        <small>{INR.format(orderItem.price * orderItem.quantity)}</small>
                                                                                                    </td>
                                                                                                    {/* <td className="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                                                                                                        <div className="fs-6 small text-muted mb-2">Total</div>
                                                                                                        <div className="fs-6 small fw-semibold text-dark">₹16</div>
                                                                                                    </td> */}
                                                                                                </tr>
                                                                                                {/* <tr>
                                                                                                    <button className="w-100 shadow btn btn-outline-dark w-md-auto py-2 d-flex justify-content-center align-items-center" type="button">
                                                                                                        <i className="bi bi-star" />
                                                                                                        <span className='ms-2'>Review Order</span>
                                                                                                    </button>
                                                                                                </tr> */}
                                                                                            </>
                                                                                        )
                                                                                    })
                                                                                }
                                                                            </tbody>
                                                                            <tfoot>
                                                                                <tr>
                                                                                    <td colSpan={4} >Sub Total</td>
                                                                                    <td className='text-right'>{INR.format(order.totalCost)}</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td colSpan={4}>
                                                                                        Discount&nbsp;
                                                                                        {
                                                                                            order.coupon.discountAmount > 0 ?
                                                                                                <>
                                                                                                    {`(Coupon ${order.coupon.name} applied. Flat ${INR.format(order.coupon.discountAmount)} off)`}
                                                                                                </>
                                                                                                :
                                                                                                <>
                                                                                                    {
                                                                                                        order.coupon.discountPercentage > 0 ?
                                                                                                            <>
                                                                                                                {`(Coupon ${order.coupon.name} applied. Flat ${order.coupon.discountPercentage}% off)`}3
                                                                                                            </>
                                                                                                            :
                                                                                                            <>
                                                                                                            </>
                                                                                                    }
                                                                                                </>
                                                                                        }
                                                                                    </td>
                                                                                    <td className='text-danger text-right'>-{INR.format(order.discountCost)}</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <td colSpan={4} >Shipping Cost</td>
                                                                                    <td className='align-right'>{INR.format(order.shippingCost)}</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <th colSpan={4} >Grand Total</th>
                                                                                    <th className='text-right'>{INR.format(order.grandTotal)}</th>
                                                                                </tr>
                                                                            </tfoot>
                                                                        </table>
                                                                    </div>
                                                                    <div className="bg-light rounded-1 p-4 my-2">
                                                                        <div className="row">
                                                                            <div className="col-sm-5 col-md-4 col-lg-4 mb-3 mb-md-0">
                                                                                <div className="fs-6 fw-semibold text-dark mb-1 small"><small>Payment Method:</small></div>
                                                                                <div className="small fs-6 fw-normal">
                                                                                    {
                                                                                        order.paymentMethod === "online" ?
                                                                                            <p className='small'>Online Payment</p>
                                                                                            :
                                                                                            <p className='small'>Cash on delivery</p>
                                                                                    }
                                                                                </div>
                                                                                <div className="fs-6  fw-semibold text-dark mb-1 small"><small>Payment Status:</small></div>
                                                                                <div className="small fs-6 fw-normal">
                                                                                    {
                                                                                        order.paymentMethod === "online" && order.paymentStatus === "success" ?
                                                                                            <p className='text-success small'>Success</p>
                                                                                            :
                                                                                            <>
                                                                                                {
                                                                                                    order.paymentMethod === "cod" && order.paymentStatus === "pending" ?
                                                                                                        <p className='text-warning  small'>Pending</p>
                                                                                                        :
                                                                                                        <p className='text-success small'>Success</p>
                                                                                                }
                                                                                            </>
                                                                                    }
                                                                                </div>
                                                                                {/* <div className="fs-6  fw-semibold text-dark mb-1 small"><small>Shipping Status:</small></div>
                                                                                <div className="small fs-6 fw-normal">
                                                                                    {
                                                                                        order.paymentMethod === "online" ?
                                                                                            <p className='small'>Online Payment</p>
                                                                                            :
                                                                                            <p className='small'>Cash on delivery</p>
                                                                                    }
                                                                                </div> */}
                                                                                <div className="fs-6  fw-semibold text-dark mb-1 small"><small>Delivery Status:</small></div>
                                                                                <div className="small fs-6 fw-normal">
                                                                                    {
                                                                                        order.isDelivered ?
                                                                                            <p className='small text-success'>Delivered</p>
                                                                                            :
                                                                                            <>
                                                                                                {
                                                                                                    order.isCanceledByUser ?
                                                                                                        <p className='small text-danger'>Cancelled</p>
                                                                                                        :
                                                                                                        <p className='small text-info'>In Progress</p>
                                                                                                }
                                                                                            </>
                                                                                    }
                                                                                </div>
                                                                                {/* <a className="btn btn-link text-muted link-info text-decoration-none py-1 px-0 mt-2" href="/">
                                                                                    <i className="bi bi-clock me-2"></i>
                                                                                    Order history
                                                                                </a> */}
                                                                            </div>
                                                                            <div className="col-sm-7 col-md-4 mb-4 mb-md-0">
                                                                                <p className="fs-6 fw-semibold text-dark mb-1 small"><small>Delivery address:</small></p>
                                                                                <div className="small">
                                                                                    <p className='ls-1 p-0 m-0'>{order.address.landmark}</p>
                                                                                    {order.address.address1}, {order.address.address2}, {order.address.city}, {order.address.state}, <br />
                                                                                    {order.address.country}, Pin code - {order.address.pincode}
                                                                                </div>
                                                                                <div className="small">
                                                                                    Phone : +91 {order.address.phone}<br />
                                                                                    Alt Phone: +91 {order.address.altphone}
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-4 col-lg-3 text-md-end">
                                                                                <div className='d-flex flex-sm-column gap-3 justify-content-between align-items-center'>
                                                                                    {order.isDelivered ?
                                                                                        <button className="w-100 disabled shadow btn btn-outline-danger w-md-auto py-2 d-flex justify-content-center align-items-center" type="button">
                                                                                            <i className="bi bi-x-circle"></i>
                                                                                            <span className='ms-2'>Cancel order</span>
                                                                                        </button>
                                                                                        :
                                                                                        <button className="w-100 shadow btn btn-outline-danger w-md-auto py-2 d-flex justify-content-center align-items-center" type="button">
                                                                                            <i className="bi bi-x-circle"></i>
                                                                                            <span className='ms-2'>Cancel order</span>
                                                                                        </button>
                                                                                    }
                                                                                    <button className="w-100 shadow btn btn-outline-dark w-md-auto py-2 d-flex justify-content-center align-items-center" type="button">
                                                                                        <i className="bi bi-star" />
                                                                                        <span className='ms-2'>Review Order</span>
                                                                                    </button>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div >
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                        }
                    </div >
            }
            {/* Review Modal */}
            <div className="modal fade" id='reviewModal' data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby='#reviewModalLabel' aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-fullscreen-sm-down">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id='reviewModalLabel'>Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className='d-flex flex-column align-items-center text-center gap-2'>
                                <img src={`${prodReview.image}`} width={164} height={164} alt="Product" />
                                <p>{prodReview.name}</p>
                            </div>
                            <div>
                                {/* <form> */}
                                <div class="mb-3">
                                    <div class="d-flex justify-content-start align-items-center">
                                        <span class="me-2">Rate:</span>
                                        <div class="rating-example">
                                            <ReactStars {...{
                                                size: 30,
                                                count: 5,
                                                activeColor: "#fdad01",
                                                // value: 3.5,
                                                a11y: true,
                                                isHalf: true,
                                                emptyIcon: <i className="bi bi-star" />,
                                                halfIcon: <i className="bi bi-star-half" />,
                                                filledIcon: <i className="bi bi-star-fill" />,
                                                edit: true,
                                                onChange: (newValue) => {
                                                    setComment({ ...comment, rating: newValue });
                                                }
                                            }} />
                                        </div>
                                        <div class="live-rating ms-3"></div>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Comment:</label>
                                    <textarea rows="6" name="comment" class="form-control shadow-none border-warning" placeholder="Your opinion on the product"
                                        onChange={handleCommentChange}
                                    >
                                    </textarea>
                                </div>
                                {/* <button class="btn btn-warning fw-normal mt-3 px-4 py-2" type="button" id="button-addon2"> POST </button> */}

                                {/* </form> */}
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-default bg-danger-subtle text-danger btn-lg me-2 fs-6 fw-normal" data-bs-dismiss="modal">Close</button>
                            <button className="ms-2 btn btn-default bg-warning text-white btn-lg fs-6 fw-normal" data-bs-dismiss="modal"
                                onClick={handleComment}
                            >
                                Post Comment
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* Review Modal */}
        </>
    )
}

export default UserOrders;

{/* <div className="accordion accordion-alt accordion-orders" id="orders">
    <div className="accordion-item border-top mb-0">
        <div className="accordion-header">
            <a className="accordion-button bg-light shadow-none d-flex fs-5 fw-normal text-decoration-none py-3 collapsed" href="#orderOne" data-bs-toggle="collapse" aria-expanded="false" aria-controls="orderOne">
                <div className="d-flex justify-content-between w-100" style={{ maxWidth: 440 }}>
                    <div className="me-1 me-sm-4">
                        <div className="fs-6 small text-dark"><small>#78A6431D409</small></div>
                        <div className="badge bg-info-subtle text-info small rounded-pill"><small>In progress</small></div>
                    </div>
                    <div className="me-1 me-sm-4">
                        <span className="d-none d-sm-block mb-2 fs-6 small text-muted"><small>Order date</small></span>
                        <div className="d-sm-none mb-2 fs-6 small text-muted"><small>Date</small></div>
                        <div className="fs-6 small text-dark"><small>Jan 27, 2022</small></div>
                    </div>
                    <div className="me-1 me-sm-4">
                        <div className="fs-6 small text-muted mb-2"><small>Total</small></div>
                        <div className="fs-6 small fw-semibold text-dark"><small>₹16,000.00</small></div>
                    </div>
                </div>
                <div className="accordion-button-img d-none d-sm-flex align-items-center ms-auto">
                    <div className="mx-1">
                        <img src="/assets/images/productImages/product1.jpg" width="48" alt="Product" />
                    </div>
                </div>
            </a>
        </div>
        <div className="accordion-collapse collapse" id="orderOne" data-bs-parent="#orders" style={{}}>
            <div className="accordion-body">
                <div className="table-responsive pt-1">
                    <table className="table align-middle w-100" style={{ minWidth: 450 }}>
                        <tbody><tr>
                            <td className="border-0 py-1 px-0">
                                <div className="d-flex align-items-center">
                                    <a className="d-inline-block flex-shrink-0 bg-light-subtle rounded-1 p-md-2 p-lg-3" href="shop-single.html">
                                        <img src="/assets/images/productImages/product1.jpg" width="110" alt="Product" />
                                    </a>
                                    <div className="ps-3 ps-sm-4">
                                        <h4 className="fs-6 mb-2">
                                            <Link to="shop-single.html">Candle in concrete bowl</Link>
                                        </h4>
                                        <div className="text-muted small me-3">Color: <span className="text-dark fw-medium">Gray night</span></div>
                                    </div>
                                </div>
                            </td>
                            <td className="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                <div className="fs-6 small text-muted mb-2">Quantity</div>
                                <div className="small fw-semibold text-dark">1</div>
                            </td>
                            <td className="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                <div className="fs-6 small text-muted mb-2">Price</div>
                                <div className="fs-6 small fw-semibold text-dark">₹16</div>
                            </td>
                            <td className="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                                <div className="fs-6 small text-muted mb-2">Total</div>
                                <div className="fs-6 small fw-semibold text-dark">₹16</div>
                            </td>
                        </tr>
                        </tbody></table>
                </div>
                <div className="bg-light-subtle rounded-1 p-4 my-2">
                    <div className="row">
                        <div className="col-sm-5 col-md-3 col-lg-4 mb-3 mb-md-0">
                            <div className="fs-5 small fw-semibold text-dark mb-1">Payment:</div>
                            <div className="small fs-6 fw-normal">Upon the delivery</div>
                            <a className="btn btn-link text-muted link-info text-decoration-none py-1 px-0 mt-2" href="/">
                                <i className="bi bi-clock me-2"></i>
                                Order history
                            </a>
                        </div>
                        <div className="col-sm-7 col-md-5 mb-4 mb-md-0">
                            <div className="fs-5 small fw-semibold text-dark mb-1">Delivery address:</div>
                            <div className="small">1520, Snow House, CDA-6<br />Cuttack, Odisha 753006</div>
                        </div>
                        <div className="col-md-4 col-lg-3 text-md-end">
                            <button className="btn btn-outline-dark w-100 w-md-auto py-3 d-flex justify-content-center align-items-center" type="button">
                                <i className="bi bi-star p-0 m-0 me-2" /> Leave a review
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="accordion-item border-top mb-0">
        <div className="accordion-header">
            <a className="accordion-button shadow-none bg-light d-flex fs-5 fw-normal text-decoration-none py-3 collapsed" href="#orderTwo" data-bs-toggle="collapse" aria-expanded="false" aria-controls="orderTwo">
                <div className="d-flex justify-content-between w-100" style={{ maxWidth: 440 }}>
                    <div className="me-1 me-sm-4">
                        <div className="fs-6 small text-dark"><small>#47H76G09F33</small></div>
                        <span className="badge bg-danger-subtle text-danger small rounded-pill"><small>Canceled</small></span>
                    </div>
                    <div className="me-1 me-sm-4">
                        <div className="d-none d-sm-block fs-6 small text-muted mb-2"><small>Order date</small></div>
                        <div className="d-sm-none fs-6 small text-muted mb-2"><small>Date</small></div>
                        <div className="small fw-medium text-dark"><small>Sep 14, 2022</small></div>
                    </div>
                    <div className="me-1 me-sm-4">
                        <div className="fs-6 small text-muted mb-2"><small>Total</small></div>
                        <div className="fs-6 small text-dark"><small>₹59.00</small></div>
                    </div>
                </div>
                <div className="accordion-button-img d-none d-sm-flex align-items-center ms-auto">
                    <div className="mx-1">
                        <img src="/assets/images/productImages/product1.jpg" width="48" alt="Product" />
                    </div>
                    <div className="mx-1">
                        <img src="/assets/images/productImages/product5.jpg" width="48" alt="Product" />
                    </div>
                    <div className="mx-1">
                        <img src="/assets/images/productImages/product9.jpg" width="48" alt="Product" />
                    </div>
                </div></a></div>
        <div className="accordion-collapse collapse" id="orderTwo" data-bs-parent="#orders" style={{}}>
            <div className="accordion-body">
                <div className="table-responsive pt-1">
                    <table className="table align-middle w-100" style={{ minWidth: 450 }}>
                        <tbody><tr>
                            <td className="border-0 py-1 px-0">
                                <div className="d-flex align-items-center">
                                    <a className="d-inline-block flex-shrink-0 bg-light-subtle rounded-1 p-md-2 p-lg-3" href="shop-single.html">
                                        <img src="/assets/images/productImages/product1.jpg" width="110" alt="Product" />
                                    </a>
                                    <div className="ps-3 ps-sm-4">
                                        <h4 className="fs-6 mb-2"><a href="shop-single.html">Analogue wall clock</a></h4>
                                        <div className="text-muted small me-3">Color: <span className="text-dark fw-medium">Turquoise</span></div>
                                    </div>
                                </div>
                            </td>
                            <td className="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                <div className="small text-muted mb-2">Quantity</div>
                                <div className="small fw-medium text-dark">1</div>
                            </td>
                            <td className="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                <div className="small text-muted mb-2">Price</div>
                                <div className="small fw-medium text-dark"> ₹25</div>
                            </td>
                            <td className="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                                <div className="small text-muted mb-2">Total</div>
                                <div className="small fw-medium text-dark"> ₹25</div>
                            </td>
                        </tr>
                            <tr>
                                <td className="border-0 py-1 px-0">
                                    <div className="d-flex align-items-center">
                                        <a className="d-inline-block flex-shrink-0 bg-light-subtle rounded-1 p-md-2 p-lg-3" href="shop-single.html">
                                            <img src="/assets/images/productImages/product5.jpg" width="110" alt="Product" />
                                        </a>
                                        <div className="ps-3 ps-sm-4">
                                            <h4 className="fs-6 mb-2"><a href="shop-single.html">Glossy round vase</a></h4>
                                            <div className="text-muted small me-3">Color: <span className="text-dark fw-medium">White</span></div>
                                        </div>
                                    </div>
                                </td>
                                <td className="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                    <div className="small text-muted mb-2">Quantity</div>
                                    <div className="small fw-medium text-dark">1</div>
                                </td>
                                <td className="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                    <div className="small text-muted mb-2">Price</div>
                                    <div className="small fw-medium text-dark"> ₹15</div>
                                </td>
                                <td className="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                                    <div className="small text-muted mb-2">Total</div>
                                    <div className="small fw-medium text-dark"> ₹15</div>
                                </td>
                            </tr>
                            <tr>
                                <td className="border-0 py-1 px-0">
                                    <div className="d-flex align-items-center">
                                        <a className="d-inline-block flex-shrink-0 bg-light-subtle rounded-1 p-md-2 p-lg-3" href="shop-single.html">
                                            <img src="/assets/images/productImages/product9.jpg" width="110" alt="Product" />
                                        </a>
                                        <div className="ps-3 ps-sm-4">
                                            <h4 className="fs-6 mb-2"><a href="shop-single.html">Ceramic flower pot</a></h4>
                                            <div className="text-muted small me-3">Color: <span className="text-dark fw-medium">Gray concrete</span></div>
                                        </div>
                                    </div>
                                </td>
                                <td className="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                    <div className="small text-muted mb-2">Quantity</div>
                                    <div className="small fw-medium text-dark">1</div>
                                </td>
                                <td className="border-0 py-1 pe-0 ps-3 ps-sm-4">
                                    <div className="small text-muted mb-2">Price</div>
                                    <div className="small fw-medium text-dark"> ₹19</div>
                                </td>
                                <td className="border-0 text-end py-1 pe-0 ps-3 ps-sm-4">
                                    <div className="small text-muted mb-2">Total</div>
                                    <div className="small fw-medium text-dark"> ₹19</div>
                                </td>
                            </tr>
                        </tbody></table>
                </div>
                <div className="bg-light-subtle rounded-1 p-4 my-2">
                    <div className="row">
                        <div className="col-sm-5 col-md-3 col-lg-4 mb-3 mb-md-0">
                            <div className="fs-5 small fw-semibold text-dark mb-1">Payment:</div>
                            <div className="small fs-6 fw-normal">Upon the delivery</div>
                            <a className="btn btn-link text-muted link-info text-decoration-none py-1 px-0 mt-2" href="/">
                                <i className="bi bi-clock me-2"></i>
                                Order history
                            </a>
                        </div>
                        <div className="col-sm-7 col-md-5 mb-4 mb-md-0">
                            <div className="fs-5 small fw-semibold text-dark mb-1">Delivery address:</div>
                            <div className="small">1520, Snow House, CDA-6<br />Cuttack, Odisha 753006</div>
                        </div>
                        <div className="col-md-4 col-lg-3 text-md-end">
                            <button className="btn btn-outline-dark w-100 w-md-auto py-3 d-flex justify-content-center align-items-center" type="button">
                                <i className="bi bi-star p-0 m-0 me-2" /> Leave a review
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div> * /
    < div className = "d-sm-flex align-items-center pt-5" >
<nav className="order-sm-2 ms-sm-auto mb-4 mb-sm-0" aria-label="Orders pagination">
<ul className="pagination pagination-sm justify-content-center">
<li className="page-item active" aria-current="page">
<span className="page-link">1<span className="visually-hidden">(current)</span></span>
</li>
<li className="page-item"><a className="page-link" href="/">2</a></li>
<li className="page-item"><a className="page-link" href="/">3</a></li>
<li className="page-item"><a className="page-link" href="/">4</a></li>
</ul>
</nav>
<button className="btn bg-dark text-white px-4 py-3" type="button">Load more orders</button>
</div > */}