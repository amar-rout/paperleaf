import React from 'react'
import { Link } from 'react-router-dom';

function OrderSuccess() {
  return (
    <div class="container">
      <div class="text-center my-5">
        <h1 class="display-6"><i class="bi bi-check-circle-fill text-success"></i> Order Confirmed</h1>
      </div>
      <div class="row my-5">
        <div class="col-md-8 mx-auto text-center">
          <p class="lead">Thank you for your order! Your order number is <strong>123456</strong>.</p>
          <p class="lead">You will receive a confirmation email shortly with your order details.</p>
        </div>
      </div>
      <div class="row my-5">
        <div class="col-md-8 mx-auto">
          <h6 class="mb-3">Order Details</h6>
          <div className='table-responsive'>
            <table class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Product 1</td>
                  <td>2</td>
                  <td>₹20.00</td>
                </tr>
                <tr>
                  <td>Product 2</td>
                  <td>1</td>
                  <td>₹10.00</td>
                </tr>
                <tr>
                  <td>Product 3</td>
                  <td>3</td>
                  <td>₹15.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="text-center">
            <Link to="/" class="btn btn-primary">Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderSuccess;