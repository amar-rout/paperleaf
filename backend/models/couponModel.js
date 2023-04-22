import mongoose from 'mongoose';

const couponSchema = mongoose.Schema({
        couponName: { 
            type: String,
            trim: true,
            required: true
        },
        status: {
            type: String,
            trim: true,
            enum: ['Active', 'Inactive'],
            required: true,
            default: 'Active'
        },
        discountType: {
            type: String,
            trim: true,
            enum: ['Percentage', 'Amount'],
            required: true,
            default: 'Percentage'
        },
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
        startDate: {
            type: Date,
            required: true,
            default: true
        },
        endDate: {
            type: Date,
            required: true,
            default: true
        },
        published: {
            type: Boolean,
            required: true,
            default: true
        },
    },
    {
        timestamps: true,
    },
);

const Coupon = mongoose.model('Coupon', couponSchema);

export default Coupon;