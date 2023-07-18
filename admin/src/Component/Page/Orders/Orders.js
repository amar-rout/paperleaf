import React, { useEffect, useMemo, useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import './Orders.css';
import Moment from 'react-moment';

const Orders = () => {
  const [loadingAPI, setLoadingAPI] = useState(false);
  const [orders, setOrders] = useState([]);
  const [ordersTable, setOrdersTable] = useState([]);
  const [orderFilter, setOrderFilter] = useState({ userName: "" });
  const [expand, setExpand] = useState(false);
  const [itemExpand, setItemExpand] = useState(false);
  const [pageSize, setPageSize] = useState(5);
  const [pages, setPages] = useState(0);
  const [page, setPage] = useState(0);
  const [id, setId] = useState("");
  const [lowerLimit, setLowerLimit] = useState(0);
  const [upperLimit, setUpperLimit] = useState(pageSize);

  const tableRef = useRef(null);

  const navigate = useNavigate();

  let currINR = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
  });

  useEffect(() => {
    getOrders();
  }, []);

  const getOrders = () => {
    setLoadingAPI(true);
    const adminUser = JSON.parse(localStorage.getItem("admin_user"));
    const config = {
      "headers": {
        "authorization": `Bearer ${adminUser.token}`,
      }
    }
    axios.get('api/orders/', config)
      .then(response => {
        toast.dismiss();
        if (response.data) {
          setOrders(response.data);
          setPages(Math.ceil(response.data.length / pageSize));
          let coll = response.data;
          setOrdersTable(coll.slice(lowerLimit, upperLimit));
        }
        setLoadingAPI(false);
      }).catch(error => {
        setLoadingAPI(false);
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

  // const change = (index) => {
  //   setPage(index);
  //   setLowerLimit((index * pageSize));
  //   console.log(upperLimit);
  //   setUpperLimit(users.length > (upperLimit + pageSize) ? (upperLimit + pageSize) : users.length);
  //   console.log(upperLimit);
  //   console.log(pageSize);
  //   console.log(lowerLimit);
  //   let coll = users;
  //   setUsersTable(coll.slice((index * pageSize), upperLimit));
  //   console.log(usersTable);
  // }


  useEffect(() => {
    let coll = orders;
    setOrdersTable(coll.slice(lowerLimit, upperLimit));
  }, [lowerLimit, upperLimit, orders]);

  // useEffect(() => {
  //   setPages(Math.ceil(ordersTable.length / pageSize));
  // }, [ordersTable]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderFilter({
      ...orderFilter,
      [name]: value
    });
    let orderArray = orders;
    const filteredData = orderArray.filter(item => item.orderId === e.target.value);
    if (filteredData.length > 0) {
      setPage(0);
      setPages(Math.ceil(filteredData.length / pageSize));
      setLowerLimit(0);
      let upper = 0;
      upper = filteredData.length > (Math.ceil(filteredData.length / pageSize)) ? (Math.ceil(filteredData.length / pageSize)) : filteredData.length;
      setUpperLimit(upper);
      setOrdersTable(filteredData);
      // setOrdersTable(ordersTable => ([...ordersTable, ...filteredData]));
      console.log(ordersTable);
    } else {
      setPage(0);
      setPages(Math.ceil(orders.length / pageSize));
      setLowerLimit(0);
      let upper = 0;
      upper = orderArray.length > pageSize ? pageSize : orders.length;
      setUpperLimit(upper);
      setOrdersTable(orderArray.slice(0, upper));
      console.log(ordersTable);
    }
  }

  return (
    <div className='container-fluid pt-5'>
      <div className="card rounded-0 my-5 mx-auto shadow" >
        <div className="card-header bg-light py-2 d-flex justify-content-between align-items-center">
          <div className="h2 fw-bold w-50">Orders</div>
          <div className='text-end d-flex justify-content-between align-items-center'>
            {/* <div className='me-2'>
              <button class="btn btn-light border border-1 border-dark" type="button">
                Copy
              </button>
            </div> */}
            <button class="btn btn-light" type="button" onClick={getOrders}>
              {!loadingAPI ?
                <i class="bi bi-arrow-clockwise h5 fw-normal"></i>
                :
                <div class="spinner-border spinner-border-sm" role="status">

                </div>
              }
            </button>
            <div class="dropdown me-2">
              <button class="btn btn-light border dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Export Data
              </button>
              <ul class="dropdown-menu dropdown-menu-end">
                {/* <li><hr class="dropdown-divider" /></li> */}
                <li><button class="dropdown-item" type="button"><i class="bi bi-clipboard h5 fw-normal me-2"></i> Copy </button></li>
                <li><hr class="dropdown-divider" /></li>
                <li><button class="dropdown-item" type="button"><i class="bi bi-filetype-csv h5 fw-normal me-2"></i> CSV (.csv)</button></li>
                <li><hr class="dropdown-divider" /></li>
                <li><button class="dropdown-item" type="button"><i class="bi bi-filetype-xlsx h5 fw-normal me-2"></i> Excel (.xlsx)</button></li>
                <li><hr class="dropdown-divider" /></li>
                <li><button class="dropdown-item" type="button"><i class="bi bi-filetype-pdf h5 fw-normal me-2"></i> PDF (.pdf)</button></li>
                <li><hr class="dropdown-divider" /></li>
                <li><button class="dropdown-item" type="button"><i class="bi bi-printer h5 fw-normal me-2"></i> Print </button></li>
              </ul>
            </div>

            {/* <div class="dropdown">
              <button class="btn btn-default" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-three-dots-vertical h5 fw-normal"></i>
              </button>
              <ul class="dropdown-menu mt-3">
                <li><button class="dropdown-item" type="button"><i class="bi bi-arrow-clockwise h5 fw-normal me-2"></i> Refresh</button></li>
              </ul>
            </div> */}
          </div>
        </div>
        <div className="card-body">
          {loadingAPI ?
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
            :
            <>
              {orders.length > 0 ?
                <div>
                  <div className='row'>
                    <div className='col-3 col-md-3 mb-2 position-relative'>
                      <span className="input-group">
                        <select className="border-secondary px-1 py-2 m-0 rounded bg-white" aria-label="Default select example"
                          defaultValue={5}
                          onChange={(event) => {
                            setPageSize(event.target.value);
                            setPages(Math.ceil(orders.length / event.target.value));
                            setUpperLimit(orders.length > event.target.value ? event.target.value : orders.length);
                            let col = orders;
                            setOrdersTable(col.slice(lowerLimit, orders.length > event.target.value ? event.target.value : orders.length));
                          }}
                        >
                          <option value="5">05</option>
                          <option value="10">10</option>
                          <option value="20">20</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                        </select>
                      </span>
                    </div>
                    <div className='col-12 col-md-6 position-relative mb-2 d-none d-sm-inline'></div>
                    <div className='col-9 col-md-3 position-relative mb-2'>
                      <div className='d-flex justify-content-end align-items-center'>
                        <input type="text" className="form-control d-inline shadow-none border-dark py-2 ms-1 ms-md-2 me-1 me-md-2" id="searchInput" placeholder="Enter order id" onChange={handleChange} />
                        {/* <button className='btn btn-default '>
                          <i class="bi bi-list-check h5 fw-normal"></i>
                        </button> */}
                        <button className='btn btn-default '>
                          <i class="bi bi-funnel h5 fw-normal"></i>
                          {/* <i class="bi bi-check2-square h5 fw-normal"></i> */}
                        </button>
                        <div class="dropdown">
                          <button class="btn btn-default" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="bi bi-list-check h5 fw-normal"></i>
                          </button>
                          <ul class="dropdown-menu">
                            <li>
                              <button class="dropdown-item" type="button">
                                <i class="bi bi-arrow-clockwise h5 fw-normal me-2"></i>
                                Refresh
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table align-items-center text-center align-middle table-sticky" id="use">
                      <thead className="">
                        <tr className='text-start ms-2' style={{ backgroundColor: 'lightBlue' }}>
                          {/* #b2e7f142 */}
                          <th className='p-3'>#</th>
                          <th className='p-3'>Order ID</th>
                          <th className='p-3'>Created On</th>
                          <th className='p-3'>Order Items</th>
                          <th className='p-3'>Payment Method</th>
                          <th className='p-3'>Payment Status</th>
                          <th className='p-3'>Shipment Status</th>
                          <th className='p-3'>Delivery Status</th>
                          <th className='p-3'>Address</th>
                          <th className='p-3'>Status</th>
                          <th className='p-3'>Action</th>
                        </tr>
                      </thead>
                      <tbody className="table-body">
                        {/* <tr className='' id="spacing-row border-0">
                          <td colSpan="9"></td>
                        </tr> */}
                        {ordersTable.map((order, index) => {
                          const { _id, orderId, createdAt, paymentMethod, paymentStatus, orderItems, address } = order;

                          return (
                            <>
                              <tr key={_id} className='tr-down text-start bg-light border border-5 border-white'>
                                <td className='ls-1 text-center'>{(lowerLimit + (index + 1))}</td>
                                {/* <td className='lh-1 text-start' style={{ width: '48px' }}>
                                  {image &&
                                    <img src={`${image}`} className="user-table-img rounded-circle border border-2 border-secondary" alt={`${name} user`} />
                                  }
                                </td> */}
                                <td className='tr-down lh-1 text-start' style={{ width: '48px !important' }}>
                                  <span className="fw-bold">{orderId}</span>
                                </td>
                                <td className='ls-1'>
                                  <Moment className='' format='DD MMM, YYYY' locale='en'>{createdAt}</Moment>
                                </td>
                                {orderItems.length > 0 ?
                                  <td className='tr-down' data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Click here to see the products">
                                    <span onClick={() => setItemExpand(!itemExpand)} className='d-flex flex-row justify-content-between align-items-center' data-bs-toggle="collapse" href={`#item-${index}`} aria-expanded="false" aria-controls={`item-${index}`} >
                                      <span className=''>
                                        {orderItems.length} Items
                                      </span>
                                      <span class="dropdown-toggle"></span>
                                    </span>
                                  </td>
                                  :
                                  <td className='text-start'></td>
                                }
                                {paymentMethod === 'online' ?
                                  <td className='ls-1 text-capitalize' style={{ backgroundColor: '#b2e7f142' }}>
                                    {paymentMethod === 'online' ? "Online" : "Cash On Delivery"}
                                  </td>
                                  :
                                  <td className='ls-1 text-capitalize'>
                                    {paymentMethod === 'online' ? "Online" : "Cash On Delivery"}
                                  </td>

                                }
                                {paymentStatus === 'success' ?
                                  <td className='ls-1 text-capitalize' style={{ backgroundColor: '#b2e7f142' }}>
                                    <span className='badge fs-6 fw-normal'
                                      style={{ color: '#198754' }}>
                                      {paymentStatus}
                                    </span>
                                  </td>
                                  :
                                  <td className='ls-1 text-capitalize' style={{ backgroundColor: '#FFE5EB' }}>
                                    <span className='badge fs-6 fw-normal'
                                      style={{ color: '#198754' }}>
                                      {paymentStatus}
                                    </span>
                                  </td>
                                }
                                <td className='ls-1 text-capitalize'>Shipped</td>
                                {order.isDelivered ?
                                  <td className='ls-1 text-capitalize' style={{ backgroundColor: '#b2e7f142' }}>
                                    <span className='badge fs-6 fw-normal'
                                      style={{ color: '#198754' }}>
                                      Delivered
                                    </span>
                                  </td>
                                  :
                                  <>
                                    {order.isOrderCancelByUser ?
                                      <td className='ls-1 text-capitalize' style={{ backgroundColor: '#FFE5E5' }}>
                                        <span className='badge fs-6 fw-normal'
                                          style={{ color: '#198754' }}>
                                          Cancelled
                                        </span>
                                      </td>
                                      :
                                      <td className='ls-1 text-capitalize' style={{ backgroundColor: '#BEFFF9' }}>
                                        <span className='badge fs-6 fw-normal'
                                          style={{ color: '#198754' }}>
                                          In Progress
                                        </span>
                                      </td>
                                    }
                                  </>
                                }
                                {/* <td className='ls-1 text-capitalize' style={{ backgroundColor: '#FFE5EB' }}> */}
                                {/* </td> <span className='badge fs-6 fw-normal' */}
                                {/* //     style={{ color: '#198754' }}> */}

                                {/* //   </span> */}
                                {/* // </td> */}
                                {/* // } */}

                                {/* <td className='ls-1'>
                                  <Moment className='' format='DD MMM, YYYY' locale='en'>{dob}</Moment>
                                </td> */}
                                {/* <td className='ls-1'>{gender}</td> */}

                                {/* <td className='ls-1'><span className={isAdmin ? `badge bg-info fs-6 text-dark` : 'badge bg-light text-dark fs-6'}>{isAdmin ? 'True' : 'False'}</span></td> */}
                                {address ?
                                  <td className='tr-down' data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Click here to see the products">
                                    <span onClick={() => setExpand(!expand)} className='d-flex flex-row justify-content-between align-items-center' data-bs-toggle="collapse" href={`#demo-${index}`} aria-expanded="false" aria-controls={`demo-${index}`} >
                                      <span className=''>
                                        Address
                                      </span>
                                      <span class="dropdown-toggle"></span>
                                    </span>
                                  </td>
                                  :
                                  <td className='text-start'></td>
                                }
                                <td className='ls-1'>
                                  <span className='badge fs-6 fw-normal'
                                    style={{ color: '#198754', backgroundColor: '#b2e7f142' }}>
                                    Active
                                  </span>
                                  {/* <div class="p-3 text-success-emphasis bg-success-subtle border border-success-subtle rounded-3">
                                    Active
                                  </div> */}
                                </td>
                                <td className='text-end'>
                                  <div class="dropdown">
                                    <button class="btn btn-default" style={{ backgroundColor: '#b2e7f142' }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                      <i class="bi bi-three-dots-vertical"></i>
                                    </button>
                                    <ul class="dropdown-menu">
                                      <li><h6 class="dropdown-header">Shipment</h6></li>
                                      <li><a class="dropdown-item" href="#">Shipped</a></li>
                                      <li><hr class="dropdown-divider" /></li>
                                      <li><h6 class="dropdown-header">Delivery</h6></li>
                                      <li><a class="dropdown-item" href="#">Delivery Status</a></li>
                                      <li><hr class="dropdown-divider" /></li>
                                      <li><h6 class="dropdown-header">Invoice</h6></li>
                                      <li><a class="dropdown-item" href="#">Show Invoice</a></li>
                                      {/* <li><a class="dropdown-item" href="#">Send Invoice</a></li> */}
                                    </ul>
                                  </div>
                                </td>

                                {/* <td className='tr-down' style={{ width: '64px' }}>
                                  <div className="d-flex justify-content-between align-items-center gap-2">
                                    <button
                                      type="button"
                                      className="btn btn-sm btn-light d-flex justify-content-between align-items-center"
                                    >
                                      <i class="bi bi-eye"></i>
                                    </button>
                                    <button
                                      type="button"
                                      className="btn btn-sm btn-secondary d-flex justify-content-between align-items-center"
                                    >
                                      <i class="bi bi-pencil"></i>
                                    </button>
                                  </div>
                                </td> */}
                              </tr>
                              <tr className='collapse text-start p-0 m-0' id={`item-${index}`}>
                                <td colSpan="9">
                                  <div className='table-responsive'>
                                    <table className='table table-hover align-items-center text-center align-middle table-sticky'>
                                      <thead>
                                        <tr className='text-start ms-2' style={{ backgroundColor: '#b2e7f142' }}>
                                          <th className='ls-1'>Item</th>
                                          <th className='ls-1'>Image</th>
                                          <th className='ls-1'>Category</th>
                                          <th className='ls-1'>Quantity</th>
                                          <th className='ls-1'>Price</th>
                                          <th className='ls-1'>Total Price</th>
                                        </tr>
                                      </thead>
                                      <tbody className='table-body'>
                                        {orderItems.map((item, ind) => {
                                          return (
                                            <tr>
                                              <td className='text-start'>{item.name}</td>
                                              <td className='text-start' style={{ width: '40px' }}>
                                                {item.image &&
                                                  <img src={`${item.image}`} className="user-table-img rounded border border-2 border-secondary" alt={`${item.name} user`} />
                                                }
                                              </td>
                                              <td className='text-start'>{item.category}</td>
                                              <td className='text-center'>{item.quantity}</td>
                                              <td className='text-end'>{currINR.format(item.price)}</td>
                                              <td className='text-end'>{currINR.format(item.quantity * item.price)}</td>
                                            </tr>
                                          )
                                        })}
                                      </tbody>
                                      <tfoot class="table-group-divider" >
                                        <tr>
                                          <td className='text-end' colSpan={5} >Sub Total</td>
                                          <td className='text-end'>{currINR.format(order.totalCost)}</td>
                                        </tr>
                                        <tr>
                                          <td className='text-end' colSpan={5}>
                                            Discount&nbsp;
                                            {order.coupon.discountAmount > 0 ?
                                              <>
                                                {`(Coupon ${order.coupon.name} applied. Flat ${currINR.format(order.coupon.discountAmount)} off)`}
                                              </>
                                              :
                                              <>
                                                {order.coupon.discountPercentage > 0 ?
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
                                          <td className='text-danger text-end'>-{currINR.format(order.discountCost)}</td>
                                        </tr>
                                        <tr>
                                          <td className='text-end' colSpan={5} >Shipping Cost</td>
                                          <td className='text-end'>{currINR.format(order.shippingCost)}</td>
                                        </tr>
                                        <tr>
                                          <th className='text-end' colSpan={5} >Grand Total</th>
                                          <th className='text-end'>{currINR.format(order.grandTotal)}</th>
                                        </tr>
                                      </tfoot>
                                    </table>
                                  </div>
                                </td>
                              </tr>
                              <tr className='collapse text-start p-0 m-0' id={`demo-${index}`}>
                                <td colSpan="9">
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
                                </td>
                              </tr>
                            </>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  <div className='row align-items-center'>
                    <div className='col-3 col-md-3 d-flex fs-6 fs-md-5 justify-content-center justify-content-md-start'>
                      Showing {lowerLimit + 1} to {upperLimit} of {pages === 1 ? upperLimit < orders.length ? upperLimit : orders.length : orders.length} records
                    </div>
                    <div className='col-9 col-md-9 mt-0'>
                      <nav aria-label="Page navigation example d-flex justify-content-end align-items-center">
                        <ul className="pagination justify-content-center justify-content-md-end">
                          <li className={(page + 1) < lowerLimit ? 'page-item' : 'page-item disabled'}>
                            <button className='page-link py-2 px-3 shadow-none'
                              onClick={(e) => {
                                e.preventDefault();
                                setPage(page - 1);
                                setLowerLimit(((page - 1) * pageSize));
                                let upper = upperLimit;
                                upper = orders.length > (((page - 1) * pageSize) + pageSize) ? (((page - 1) * pageSize) + pageSize) : orders.length;
                                setUpperLimit(upper);
                                let coll = orders;
                                setOrdersTable(coll.slice(((page - 1) * pageSize), (((page - 1) * pageSize) + pageSize)));
                              }}
                            >
                              Previous
                            </button>
                          </li>
                          {
                            Array.from({ length: pages }, (elem, index) => {
                              return (
                                <li key={index} className="page-item">
                                  <button type='button' className={`page-link py-2 px-3 shadow-none ${page === index && 'active'}`}
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setPage(index);
                                      setLowerLimit((index * pageSize));
                                      let upper = upperLimit;
                                      upper = orders.length > ((index * pageSize) + pageSize) ? ((index * pageSize) + pageSize) : orders.length;
                                      setUpperLimit(upper);
                                      let coll = orders;
                                      setOrdersTable(coll.slice((index * pageSize), ((index * pageSize) + pageSize)));
                                    }}
                                  >
                                    {index + 1}
                                  </button>
                                </li>
                              )
                            })
                          }
                          <li className={(page + 1) < pages ? 'page-item' : 'page-item disabled'}>
                            <button className='page-link py-2 px-3 shadow-none'
                              onClick={(e) => {
                                e.preventDefault();
                                setPage(page + 1);
                                setLowerLimit(((page + 1) * pageSize));
                                let upper = upperLimit;
                                upper = orders.length > (((page + 1) * pageSize) + pageSize) ? (((page + 1) * pageSize) + pageSize) : orders.length;
                                setUpperLimit(upper);
                                let coll = orders;
                                setOrdersTable(coll.slice(((page + 1) * pageSize), (((page + 1) * pageSize) + pageSize)));
                              }}
                            >
                              Next
                            </button>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  {/* <div>
                    PG: {page}, PGs: {pages}, LL : {lowerLimit}, UL: {upperLimit}
                  </div> */}
                </div>
                :
                <div className="alert alert-danger" role="alert">
                  No collection found
                </div>
              }
            </>
          }
        </div>
      </div>
    </div >
  );
};

export default Orders;
