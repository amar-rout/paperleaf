import mongoose from 'mongoose';

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    orderId: {
      type: String,
      required: true,
    },
    orderItems: [
      {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: 'Product',
        },
        name: { type: String, required: true },
        image: { type: String, required: true },
        size: { type: String, required: false },
        category: { type: String, required: false },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
    address: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, required: true },
      altphone: { type: String, required: false },
      address1: { type: String, required: true },
      address2: { type: String, required: true },
      landmark: { type: String, required: false },
      city: { type: String, required: true },
      state: { type: String, required: true },
      pincode: { type: String, required: true },
      country: { type: String, required: true, default: 'IN' },
    },
    coupon: {
      name: { type: String, required: true, default: 'DEFAULT' },
      discountAmount: {
        type: Number,
        required: true,
        default: 0.0
      },
      discountPercentage: {
        type: Number,
        required: true,
        default: 0
      },
    },
    taxPrice: { type: Number, required: false, default: 0.0 },
    shippingCost: { type: Number, required: true, default: 0.0 },
    totalCost: { type: Number, required: true, default: 0.0 },
    discountCost: { type: Number, required: true, default: 0.0 },
    grandTotal: { type: Number, required: true, default: 0.0 },
    paymentMethod: {
      type: String,
      required: true,
      enum: ['cod', 'online'],
    },
    paymentStatus: {
      type: String,
      required: true,
      enum: ["success", "fail", "pending"],
    },
    paymentId: {
      type: String,
      required: false
    },
    isPaid: { type: Boolean, required: true, default: false },
    paidAt: { type: Date },
    isDelivered: { type: Boolean, required: false, default: false },
    deliveredAt: { type: Date, required: false },
    isOrderCancelByUser: { type: Boolean, required: true, default: false },
    cancelledAt: { type: Date, required: false },
  },
  {
    timestamps: true,
  },
);

const Order = mongoose.model('Order', orderSchema);

export default Order;
