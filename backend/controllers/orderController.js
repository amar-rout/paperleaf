import mercadopago from 'mercadopago';
import asyncHandler from 'express-async-handler';
import OrderModel from '../models/orderModel.js';
import PaymentModel from '../models/paymentModel.js';
import ProductModel from '../models/productModel.js';
import UserModel from '../models/userModel.js';
import sanitize from '../utils/sanitize.js';
import Mongoose from 'mongoose';
import axios from 'axios';
import Razorpay from 'razorpay';
import crypto from 'crypto';
// const Razorpay = require("razorpay");

// @desc Create new order
// @route POST /api/orders
// @access Private
export const createNewOrder = asyncHandler(async (req, res) => {
  const { grandTotal } = req.body;
  let amount = grandTotal * 100;
  console.log(amount);
  try {
    const instance = new Razorpay({
      key_id: "rzp_test_5jd0R7gE1RSPoa",
      key_secret: "XvY6c8ukwbGyyqA0Xc5cu49q",
    });
    const options = {
      amount: amount, // amount in smallest currency unit
      currency: "INR",
      receipt: "receipt_order_74394",
    };

    const order = await instance.orders.create(options);

    if (!order) return res.status(500).send("Some error occured");

    res.json(order);
  } catch (error) {
    res.status(500).send(error);
  }
});


// @desc Create new order
// @route POST /api/orders
// @access Private
export const successOrder = asyncHandler(async (req, res) => {
  // const { id } = req.params.id;
  // type ObjectId = Schema.Types.ObjectId;

  const user = req.user;
  try {
    const {
      orderId,
      items,
      address,
      discountAmount,
      grandTotal,
      shippingCost,
      totalAmount,
      paymentMethod,
      orderCreationId,
      razorpayPaymentId,
      razorpayOrderId,
      razorpaySignature,
    } = req.body;

    let paymStatus = "";
    let itemArray = [];
    let payId = "";
    let isPaid = false;

    if (paymentMethod === 'online') {
      // Creating our own digest
      // The format should be like this:
      // digest = hmac_sha256(orderCreationId + "|" + razorpayPaymentId, secret);
      const shasum = crypto.createHmac("sha256", "XvY6c8ukwbGyyqA0Xc5cu49q");
      shasum.update(`${orderCreationId}|${razorpayPaymentId}`);
      const digest = shasum.digest("hex");

      // comaparing our digest with the actual signature
      if (digest !== razorpaySignature) {
        // return res.status(400).json({ msg: "Transaction is not legit!" });
        paymStatus = 'fail';
      } else {
        
        // THE PAYMENT IS LEGIT & VERIFIED
        // YOU CAN SAVE THE DETAILS IN YOUR DATABASE IF YOU WANT
        const payment = new PaymentModel({
          orderCreationId: orderCreationId,
          razorpayPaymentId: razorpayPaymentId,
          razorpayOrderId: razorpayOrderId,
          razorpaySignature: razorpaySignature,
        });

        const createdPayment = await payment.save();
        if (createdPayment) {
          paymStatus = 'success';
          payId = createdPayment._id;
          isPaid = true;
        }
      }
    } else {
      paymStatus = 'pending';
    }

    if (items && items.length === 0) {
      res.status(400);
      throw new Error('No items in this order');
    } else {
      for (const item in items) {
        await ProductModel.findById(sanitize(items[item].pId))
          .then((res) => {
            itemArray.push({
              id: res._id,
              name: res.name,
              image: res.image,
              size: items[item].size,
              category: res.category,
              quantity: items[item].qty,
              price: res.price,
            });
          })
          .catch((err) => {
            res.status(404);
            throw new Error('Item in order not found, try again later');
          });
      }
    }

    const addr = {
      name: user.name,
      email: user.email,
      phone: user.phone,
      altphone: address.altphone.toString(),
      address1: address.address1.toString(),
      address2: address.address2.toString(),
      landmark: address.landmark.toString(),
      city: address.city.toString(),
      state: address.state.toString(),
      pincode: address.pincode.toString(),
      country: 'IN'
    };

    // console.log("Addr" + addr);
    // Generate data for OrderModel

    const order = new OrderModel({
      // _id: Mongoose.Types.ObjectId("230507000115"),
      user: user._id,
      orderId: orderId,
      orderItems: itemArray,
      address: addr,
      shippingCost: shippingCost,
      totalCost: totalAmount,
      discountCost: discountAmount,
      grandTotal: grandTotal,
      paymentMethod: paymentMethod,
      paymentStatus: paymStatus,
      paymentId: payId,
      isPaid: isPaid,
      paidAt: new Date(),
    })

    const createdOrder = await order.save();

    // console.log("Order: " + createdOrder);

    res.status(201).json({ msg: 'success', createdOrder });
    // res.json({
    //   msg: "success",
    //   orderId: razorpayOrderId,
    //   paymentId: razorpayPaymentId,
    // });
    // response.render('http://localhost:3000/checkout/success', {
    //   msg: "success",
    //   orderId: razorpayOrderId,
    //   paymentId: razorpayPaymentId,
    // });

  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

// @desc Create new order
// @route POST /api/orders
// @access Private
export const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    orderItemsQty,
    shippingAddress,
    billingAddress,
    paymentMethod,
  } = req.body;
  let iArr = [];
  let itemsPrice = 0;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No items in this order');
  } else {
    for (const item in orderItems) {
      await ProductModel.findById(sanitize(orderItems[item]))
        .then((res) => {
          iArr.push({ id: res._id, price: res.price });
          itemsPrice += res.price * orderItemsQty[orderItems[item]];
        })
        .catch((err) => {
          res.status(404);
          throw new Error('Item in order not found, try again later');
        });
    }

    let pref;
    let shippingPrice = +itemsPrice > 1000 ? 0 : 100;
    let taxPrice = Number(0.15 * +itemsPrice).toFixed(2);
    let totalPrice = +itemsPrice + +taxPrice + +shippingPrice;


    if (paymentMethod === 'MercadoPago') {
      mercadopago.configurations.setAccessToken(
        process.env.MERCADO_PAGO_ACCESS_TOKEN,
      );
      let preference = {
        items: [
          {
            title: 'Ecommerce Test!',
            quantity: 1,
            unit_price: totalPrice,
          },
        ],
        back_urls: {
          success: `http://localhost:3000/profile`,
          failure: `http://localhost:3000/profile`,
          pending: `http://localhost:3000/profile`,
        },
        auto_return: 'approved',
      };
      await mercadopago.preferences
        .create(preference)
        .then(function (response) {
          pref = response.body.id;
          //res.json({ id: response.body.id });
        })
        .catch(function (error) {
          console.log(error);
          res.status(500);
          throw new Error('MercadoPago API Error, try again');
        });
    }
    var order = new OrderModel({
      user: req.user._id,
      orderItems: iArr,
      orderItemsQty: sanitize(orderItemsQty),
      shippingAddress: sanitize(shippingAddress),
      paymentMethod: sanitize(paymentMethod || 'PayPal'),
      paymentId: pref,
      itemsPrice: sanitize(itemsPrice),
      taxPrice,
      shippingPrice,
      totalPrice,
    });
    if (paymentMethod === 'MercadoPago') {
      const config = {
        headers: {
          Authorization: 'Bearer ' + process.env.MERCADO_PAGO_ACCESS_TOKEN,
        },
      };
      const data = {
        back_urls: {
          success: `http://localhost:3000/order/${order._id}/pay`,
          failure: `http://localhost:3000/order/${order._id}/pay`,
          pending: `http://localhost:3000/order/${order._id}/pay`,
        },
      };
      axios.put(
        `https://api.mercadopago.com/checkout/preferences/${pref}`,
        data,
        config,
      );
      // await fetch(`https://api.mercadopago.com/checkout/preferences/${pref}`, {
      //   method: 'PUT',
      //   headers: config,
      //   body: data,
      // })
      //   .then((res) => res.json())
      //   .then((data) => console.log(data));
    }

    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
});

// @desc Gets order by id
// @route GET /api/orders/:id
// @access Private
export const getOrderById = asyncHandler(async (req, res) => {
  if (!Mongoose.Types.ObjectId.isValid(sanitize(req.params.id))) {
    res.status(404);
    throw new Error('Order not found');
  }
  const order = await OrderModel.findById(sanitize(req.params.id)).populate(
    'user',
    'name email',
  );

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

// @desc Get all orders
// @route GET /api/orders/:id
// @access Private
export const getAllOrders = asyncHandler(async (req, res) => {
  const orders = await OrderModel.find({}).populate('user', 'name email');

  if (orders) {
    res.json(orders);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

// @desc Update order to paid
// @route PUT /api/orders/:id/pay
// @access Private
export const putUpdateOrderPay = asyncHandler(async (req, res) => {
  const order = await OrderModel.findById(sanitize(req.params.id));

  if (order) {
    switch (order.paymentMethod) {
      case 'MercadoPago':
        order.isPaid = req.body.status === 'approved';
        order.paidAt = req.body.status === 'approved' ? Date.now() : null;
        order.paymentResult = {
          id: req.body.payment_id,
          status: req.body.status,
          update_time: Date.now(),
          email_Address: null,
        };
        break;

      case 'PayPal':
        order.isPaid = true;
        order.paidAt = Date.now();
        order.paymentResult = {
          id: req.body.id,
          status: req.body.status,
          update_time: req.body.update_time,
          email_Address: req.body.payer.email_address,
        };
        break;

      default:
        res.status(500);
        throw new Error('Error with the paying method from your order');
        break;
    }

    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

// @desc Update order to delivered
// @route PUT /api/orders/:id/deliver
// @access Private
export const putUpdateOrderToDelivered = asyncHandler(async (req, res) => {
  const order = await OrderModel.findById(sanitize(req.params.id));

  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();

    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error('Order not found');
  }
});

// @desc Get logged user orders
// @route GET /api/orders/myorders
// @access Private
export const getOrderUserOrders = asyncHandler(async (req, res) => {
  const order = await OrderModel.find({ user: req.user._id });
  res.json(order);
});
