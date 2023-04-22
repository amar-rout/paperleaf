import asyncHandler from 'express-async-handler';
import CouponModel from '../models/couponModel.js';
import sanitize from '../utils/sanitize.js';
// import Mongoose from 'mongoose';

// @desc Get all orders
// @route GET /api/orders/:id
// @access Private
export const getAllCoupon = asyncHandler(async (req, res) => {
    const coupons = await CouponModel.find({});
    if (coupons) {
        res.json(coupons);
    } else {
        res.status(404);
        throw new Error('Coupon not found');
    }
});

// @desc Get all orders
// @route GET /api/orders/:id
// @access Private
export const getCouponById = asyncHandler(async (req, res) => {
    const object = await CouponModel.findById(sanitize(req.params.id));
    console.log(req.query.name);
    if (object) {
        res.json(object);
    } else {
        res.status(404);
        throw new Error('Coupon not found');
    }
});

// @desc Get all orders
// @route GET /api/orders/:id
// @access Private
export const getCouponByName = asyncHandler(async (req, res) => {
    const object = await CouponModel.findOne({ couponName: sanitize(req.query.name) });
    console.log(req.query.name);
    if (object) {
        res.json(object);
    } else {
        res.status(404);
        throw new Error('Coupon not found');
    }
});

// @desc Create a category
// @route PUT /api/category/
// @access Private
export const createCoupon = asyncHandler(async (req, res) => {
    const object = new CouponModel({
        couponName: sanitize(req.body.couponName),
        status: sanitize(req.body.status),
        discountType: sanitize(req.body.discountType),
        discountAmount: sanitize(req.body.discountAmount),
        discountPercentage: sanitize(req.body.discountPercentage),
        startDate: sanitize(req.body.startDate),
        endDate: sanitize(req.body.endDate),
        published: sanitize(req.body.published)
    });
    const createdObj = await object.save();
    res.json(createdObj);
});

// @desc Create a category
// @route PUT /api/category/
// @access Private
export const updateCoupon = asyncHandler(async (req, res) => {
    const object = await CouponModel.findById(sanitize(req.params.id));
    if (object) {
        object.couponName = sanitize(req.body.couponName) || object.couponName;
        object.status = sanitize(req.body.status) || object.status;
        object.discountType = sanitize(req.body.discountType) || object.discountType;
        object.discountAmount = sanitize(req.body.discountAmount) || object.discountAmount;
        object.discountPercentage = sanitize(req.body.discountPercentage) || object.discountPercentage;
        object.startDate = sanitize(req.body.startDate) || object.startDate;
        object.endDate = sanitize(req.body.endDate) || object.endDate;
        object.published = sanitize(req.body.published) || object.published;
        // Update coupons
        const updatedObj = await object.save();
        res.status(201).json(updatedObj);
    } else {
        res.status(404);
        throw new Error('Coupon not found');
    }
});

// @desc Create a category
// @route PUT /api/category/
// @access Private
export const deleteCoupon = asyncHandler(async (req, res) => {
    const object = await CouponModel.findById(sanitize(req.params.id));
    if (object) {
        await object.remove();
        res.status(200).json({ message: 'Coupon removed' });
    } else {
        res.status(404);
        throw new Error('Coupon not found');
    }
});