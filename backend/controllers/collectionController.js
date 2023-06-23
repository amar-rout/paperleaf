import asyncHandler from 'express-async-handler';
import ColletionModel from '../models/collectionModel.js';
import sanitize from '../utils/sanitize.js';
import Mongoose from 'mongoose';

// @desc Get all orders
// @route GET /api/orders/:id
// @access Private
export const getAllCollection = asyncHandler(async (req, res) => {
    const collections = await ColletionModel.find({});
    if (collections) {
        res.json(collections);
    } else {
        res.status(404);
        throw new Error('Collection not found');
    }
});

// @desc Get all orders
// @route GET /api/orders/:id
// @access Private
export const getCollectionById = asyncHandler(async (req, res) => {
    const collections = await ColletionModel.findById(sanitize(req.params.id));
    if (collections) {
        res.json(collections);
    } else {
        res.status(404);
        throw new Error('Collection not found');
    }
});

// @desc Create a Collection
// @route PUT /api/Collection/
// @access Private
export const createCollection = asyncHandler(async (req, res) => {
    const {name, products, coupon, status, published} = req.body;
    const collection = new ColletionModel({
        name: sanitize(name),
        products: sanitize(products),
        coupon: sanitize(coupon),
        status: sanitize(status),
        published: sanitize(published)
    });
    // console.log(object);
    const createdObj = await collection.save();
    console.log(createdObj);
    res.json(createdObj);
});

// @desc Create a Collection
// @route PUT /api/Collection/
// @access Private
export const updateCollection = asyncHandler(async (req, res) => {
    const { name, products, coupon, status, published } = req.body;
    console.log(status);
    const object = await ColletionModel.findById(sanitize(req.params.id));
    if (object) {
        object.name = sanitize(name) || object.name;
        object.products = sanitize(products) || object.products;
        object.coupon = sanitize(coupon) || object.coupon;
        object.status = sanitize(status);
        object.published = sanitize(published);
        console.log(object);
        const updatedObj = await object.save();
        res.status(201).json("Updated succefully.");
    } else {
        res.status(404);
        throw new Error('Collection not found');
    }
});

// @desc Create a Collection
// @route PUT /api/Collection/
// @access Private
export const deleteCollection = asyncHandler(async (req, res) => {
    const object = await ColletionModel.findById(sanitize(req.params.id));
    const name = object.name;
    if (object) {
        await object.remove();
        res.status(200).json({ message: `Collection ${name} removed successfully` });
    } else {
        res.status(404);
        throw new Error('Collection not found');
    }
});