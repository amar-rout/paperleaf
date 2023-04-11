import asyncHandler from 'express-async-handler';
import CategoryModel from '../models/categoryModel.js';
import sanitize from '../utils/sanitize.js';
import Mongoose from 'mongoose';

// @desc Get all orders
// @route GET /api/orders/:id
// @access Private
export const getAllCategory = asyncHandler(async (req, res) => {
    const categories = await CategoryModel.find({});
    if (categories) {
        res.json(categories);
    } else {
        res.status(404);
        throw new Error('Category not found');
    }
});

// @desc Get all orders
// @route GET /api/orders/:id
// @access Private
export const getCategoryById = asyncHandler(async (req, res) => {
    const categories = await CategoryModel.findById(sanitize(req.params.id));
    if (categories) {
        res.json(categories);
    } else {
        res.status(404);
        throw new Error('Category not found');
    }
});

// @desc Create a category
// @route PUT /api/category/
// @access Private
export const createCategory = asyncHandler(async (req, res) => {
    const object = new CategoryModel({
        name: sanitize(req.body.name),
        status: sanitize(req.body.status),
    });
    const createdObj = await object.save();
    res.json(createdObj);
});

// @desc Create a category
// @route PUT /api/category/
// @access Private
export const updateCategory = asyncHandler(async (req, res) => {
    const object = await CategoryModel.findById(sanitize(req.params.id));
    if (object) {
        object.name = sanitize(req.body.name) || object.name;
        object.status = sanitize(req.body.status) || object.status;

        const updatedObj = await object.save();
        res.status(201).json(updatedObj);
    } else {
        res.status(404);
        throw new Error('Category not found');
    }
});

// @desc Create a category
// @route PUT /api/category/
// @access Private
export const deleteCategory = asyncHandler(async (req, res) => {
    const object = await CategoryModel.findById(sanitize(req.params.id));
    if (object) {
        await object.remove();
        res.status(200).json({ message: 'Category removed' });
    } else {
        res.status(404);
        throw new Error('Category not found');
    }
});