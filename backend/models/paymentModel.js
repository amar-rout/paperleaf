import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema(
    {
        orderCreationId: {
            type: String,
            required: true,
        },
        razorpayPaymentId: {
            type: String,
            required: true,
        },
        razorpayOrderId: {
            type: String,
            required: true,
        },
        razorpaySignature: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
    }
);

const Payment = mongoose.model("Payment", paymentSchema);

export default Payment;