import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import * as moment from 'moment';

import './Checkout.css';

const OrderSuccess = () => {
  const location = useLocation();
  const [order, setOrder] = useState({});
  const [items, setItems] = useState([]);
  useEffect(() => {
    if (location) {
      setOrder(location.state.createdOrder);
      setItems(location.state.createdOrder.orderItems);
    }
  }, [location, setOrder, order, setItems]);
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 2
  });
  // const setDeliveryDate = (createdAt) => {
  //     let date = new Date(new Date(createdAt).toISOString());
  //     date.setDate(date.getDate() + 7);
  //     var dateFormated = date.toISOString().substring(0, 10);
  //     const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  //     let deliveryDate = days[new Date(dateFormated).getDay()] + ", " +
  //                         ;
  //     return deliveryDate;
  // }
  return (
    <div class="container my-3">
      <h4 class="text-center mb-2 mb-md-3 mt-2 mt-md-5">
        <i class="bi bi-check-circle-fill text-success"></i> Order Confirmed
      </h4>
      <div class="row mb-3">
        <div class="col-12 col-md-8 mx-auto text-center mb-2 mb-md-4">
          <p class="lh-2">Thank you for your order!<br />Your order number is <strong>#{order.orderId}</strong>.</p>
          <p class="lh-2">You will receive a confirmation email shortly with your order details.</p>
        </div>
        <div class="col-12 col-md-8 mx-auto mb-3">
          <strong>Order Details</strong>
        </div>
        <div class="col-12 col-md-8 mx-auto">
          <div className='d-flex flex-row justify-content-between align-items-center'>
            <span className='fs-5 fw-bold text-muted'>#{order.orderId}</span>
            <div className='d-flex flex-row justify-content-between align-items-center'>
              <span className=''><i class="bi bi-clock"></i> </span>
              <span className='text-muted text-uppercase ms-1'>{new Date(order.createdAt).toLocaleString()}</span>
            </div>
          </div>
          <hr className='w-100 border-2' />
        </div>
        <div class="col-12 col-md-8 mx-auto">
          <div className='row'>
            <div class="col-6 col-md-4 mx-auto mb-1 mb-md-4">
              <strong>Order Total</strong><br /><p className='fs-6 small text-muted'>{formatter.format(order.grandTotal)}</p>
            </div>
            <div class="col-6 col-md-4 mx-auto mb-1 mb-md-4">
              <strong>Payment Status</strong><br /><p className='fs-6 small text-muted text-uppercase'>{order.paymentStatus}</p>
            </div>
            <div class="col-6 col-md-4 mx-auto mb-1 mb-md-4">
              <strong>Payment Method</strong><br /><p className='fs-6 small text-muted text-uppercase'>{order.paymentMethod}</p>
            </div>
            <div class="col-6 col-md-4 mx-auto mb-1 mb-md-4">
              <strong>Delivery Option</strong><br /><p className='fs-6 small text-muted'>Standard Delivery</p>
            </div>
            {/* <div class="col-6 col-md-4 mx-auto mb-1 mb-md-4">
              <strong>Order Date</strong><br /><p className='fs-6 small text-muted'>{new Date(order.createdAt).toLocaleString()}</p>
            </div>
            <div class="col-6 col-md-4 mx-auto mb-1 mb-md-4">
              <strong>Order Time</strong><br /><p className='fs-6 small text-muted'>{new Date(order.createdAt).toLocaleString()}</p>
            </div> */}
            {
              order.address &&
              <>
                <div class="col-6 col-md-4 mx-auto mb-1 mb-md-4">
                  <strong>Email</strong><br /><p className='fs-6 small text-muted'>{order.address.email}</p>
                </div>
                <div class="col-6 col-md-4 mx-auto mb-1 mb-md-4">
                  <strong>Phone</strong><br /><p className='fs-6 small text-muted'>+91 {order.address.phone}</p>
                </div>
                {/* <div class="col-6 col-md-4 mx-auto mb-1 mb-md-4">
                  <strong>Alt. Phone</strong><br /><p className='fs-6 small text-muted'>+91 {order.address.altphone}</p>
                </div> */}
                <div class="col-6 col-md-4 mx-auto mb-1 mb-md-4">
                  <strong>Expected Delivery</strong><br />
                  <p className='fs-6 small text-muted'>
                    {/* {setDeliveryDate(order.createdAt)} */}

                    { moment(order.createdAt).add(7, 'days').format("dddd, Do MMM YYYY") }
                  </p>
                  {/* {order.createdAt} */}
                  {/* {new Date(order.createdAt).toLocaleString()} */}
                </div>
                <div class="col-6 col-md-4 mx-auto mb-1 mb-md-4"></div>
                <div class="col-6 col-md-4 mx-auto mb-1 mb-md-4"></div>
              </>
            }
          </div>
        </div>
      </div>
      <div class="row mb-3">
        <div class="col-md-8 mx-auto">
          <strong>Order item details</strong>
          <div className='table-responsive'>
            <table class="table table-striped table-hover table-bordered">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Image</th>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {
                  items.map((item, index) => {
                    return (
                      <tr key={item.name}>
                        <td>{index + 1}</td>
                        <td>
                          <img src={`${item.image}`} alt={item.name} style={{ width: '32px', height: 'auto' }} />
                        </td>
                        <td>{item.name}, {item.size}</td>
                        <td>{item.quantity}</td>
                        <td className='text-end'>{formatter.format(item.price)}</td>
                      </tr>
                    );
                  })
                }
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={4} className='text-end'>
                    <p>Total Amount</p>
                    <p>Discount Amount</p>
                    <p>Shipping Amount</p>
                  </td>
                  <td>
                    <p className='text-end'>{formatter.format(order.totalCost)}</p>
                    <p className='text-end'>{formatter.format(order.discountCost)}</p>
                    <p className='text-end'>{formatter.format(order.shippingCost)}</p>
                  </td>
                </tr>
                <tr>
                  <td colSpan={4} className='text-end fw-bold'>Grand Total</td>
                  <td className='fw-bold text-end'>{formatter.format(order.grandTotal)}</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div class="text-center">
            <Link to="/" class="btn btn-default btn-primary px-3 py-2 fw-normal">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderSuccess;