import asyncHandler from 'express-async-handler';
import ProductModel from '../models/productModel.js';
import sanitize from '../utils/sanitize.js';
import Mongoose from 'mongoose';

// @desc Fetch all products
// @route GET /api/products
// @access Public
export const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 12;
  const page = Number(req.query.pageNumber);

  const keyword = req.query.keyword
    ? {
      name: {
        // $regex is there so the user doesn't have to search exact product name
        $regex: req.query.keyword,
        $options: 'i',
      },
      published: true,
    }
    : {};

  const count = await ProductModel.countDocuments({ ...keyword });
  const products = await ProductModel.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1));
  res.json({ products, page, pages: Math.ceil(count / pageSize) });
});

// @desc Get all products
// @route GET /api/product/all
// @access Private
export const getAllProducts = asyncHandler(async (req, res) => {
  const products = await ProductModel.find({});
  if (products) {
    res.json(products);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});



// @desc Fetch a single product
// @route GET /api/products/:id
// @access Public
export const getProductById = asyncHandler(async (req, res) => {
  if (!Mongoose.Types.ObjectId.isValid(sanitize(req.params.id))) {
    res.status(404);
    throw new Error('Bad ObjectId');
  }
  const product = await ProductModel.findById(sanitize(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// @desc Fetch all categories names
// @route GET /api/products/category/name
// @access Public
export const getCategoryNames = asyncHandler(async (req, res) => {
  const categoryNames = await ProductModel.distinct('category');
  if (categoryNames.length > 0) {
    res.json(categoryNames);
  } else {
    res.json([]);
  }
});

// @desc Fetch all product of a given category
// @route GET /api/products/category/:cat
// @access Public
export const getProductByCategory = asyncHandler(async (req, res) => {
  const pageSize = 12;
  const page = Number(req.query.pageNumber);

  const cat = sanitize(req.params.category);
  if (cat.includes("newCollections")) {
    const count = await ProductModel.countDocuments({
      newCollection: true,
      published: true
    });

    const category = await ProductModel.find({
      newCollection: true,
      published: true
    })
      .limit(pageSize)
      .skip(pageSize * (page - 1))
      .sort({"createdAt": -1});

    if (category.length > 0) {
      res.json({ page, pages: Math.ceil(count / pageSize), products: category });
    } else {
      res.status(404);
      throw new Error('Category is empty');
    }
  } else {
    const count = await ProductModel.countDocuments({
      category: sanitize(req.params.category),
      published: true
    });

    const category = await ProductModel.find({
      category: sanitize(req.params.category),
      published: true
    })
      .limit(pageSize)
      .skip(pageSize * (page - 1))
      .sort({"createdAt": -1});

    if (category.length > 0) {
      res.json({ page, pages: Math.ceil(count / pageSize), products: category });
    } else {
      res.status(404);
      throw new Error('Category is empty');
    }
  }
});

// @desc Delete a product
// @route GET /api/products/:id
// @access Private
export const deleteProductAdmin = asyncHandler(async (req, res) => {
  const object = await ProductModel.findById(sanitize(req.params.id));

  if (object) {
    await object.remove();
    res.status(200).json({ message: 'Product removed' });
  } else {
    res.status(404);
    throw new Error('Object not found');
  }
});

// @desc Create a product
// @route PUT /api/product/
// @access Private
export const createProductAdmin = asyncHandler(async (req, res) => {
  const object = new ProductModel({
    // user: req.body._id,
    name: sanitize(req.body.name),
    image: sanitize(req.body.image),
    images: sanitize(req.body.images),
    price: sanitize(req.body.price),
    salePrice: sanitize(req.body.salePrice),
    category: sanitize(req.body.category),
    newCollection: true,
    featured: sanitize(req.body.featured),
    brand: sanitize(req.body.brand),
    description: sanitize(req.body.description),
    countInStock: sanitize(req.body.countInStock),
    rating: 0,
    numReviews: 0,
    reviews: [],
  });
  const createdObj = await object.save();
  res.json(createdObj);
});

// @desc Update product data
// @route PATCH /api/product/
// @access Private
export const updateProductAdmin = asyncHandler(async (req, res) => {
  const object = await ProductModel.findById(sanitize(req.params.id));
  if (object) {

    object.name = sanitize(req.body.name) || object.name;
    object.price = sanitize(req.body.price) || object.price;
    object.salePrice = sanitize(req.body.salePrice) || object.salePrice;
    object.image = sanitize(req.body.image) || object.image;
    object.images = sanitize(req.body.images) || object.images;
    object.category = sanitize(req.body.category) || object.category;
    object.brand = sanitize(req.body.brand) || object.brand;
    object.description = sanitize(req.body.description) || object.description;
    object.countInStock = sanitize(req.body.countInStock) || object.countInStock;
    object.newCollection = sanitize(req.body.newCollection);
    object.featured = sanitize(req.body.featured);
    object.published = sanitize(req.body.published);

    const updatedObj = await object.save();
    res.status(201).json(updatedObj);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc Update product data
// @route PATCH /api/product/
// @access Private
export const removeProductImageAdmin = asyncHandler(async (req, res) => {
  const object = await ProductModel.findById(sanitize(req.params.id));
  if (object) {
    object.image = '';
    const updatedObj = await object.save();
    res.status(201).json(updatedObj);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});
// @desc Update product data
// @route PATCH /api/product/
// @access Private
export const removeProductImagesAdmin = asyncHandler(async (req, res) => {
  const index = req.query.index;
  const object = await ProductModel.findById(sanitize(req.params.id));
  if (object) {
    let imageValue = object.images[index];
    object.images = object.images.filter(image => image !== imageValue);
    const updatedObj = await object.save();
    res.status(201).json(updatedObj);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc Update product data
// @route PATCH /api/product/:category?
// @access Private
export const updateProductPublishedByCategory = asyncHandler(async (req, res) => {
  const publish = req.query.publish;
  console.log(publish);
  const products = await ProductModel.find({ category: sanitize(req.params.category) });
  if (products) {
    const filter = { category: req.params.category };
    const data = {
      $set: {
        published: publish,
      }
    }
    const object = await ProductModel.updateMany(filter, data);
    res.status(201).json(`Updated ${object.nModified} documents`);
  } else {
    res.status(404);
    throw new Error(`No Products found for ${req.params.category} category`);
  }
});

// @desc Creates a new reviews
// @route POST /api/product/:id/reviews
// @access Private
export const addReview = asyncHandler(async (req, res) => {
  const object = await ProductModel.findById(sanitize(req.params.id));
  if (object) {
    const alrRev = object.reviews.find(
      (rev) => rev.user.toString() === req.user._id.toString(),
    );
    if (alrRev) {
      res.status(400);
      throw new Error('Already reviewed');
    }

    const objReview = {
      user: req.user._id,
      name: req.user.name,
      title: req.body.title,
      rating: req.body.rating,
      comment: req.body.comment,
    };
    object.reviews.push(objReview);
    object.numReviews = object.reviews.length;
    object.rating =
      object.reviews.reduce((acc, item) => item.rating + acc, 0) /
      object.reviews.length;

    const updatedObj = await object.save();
    res.status(201).json(updatedObj);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

// @desc Get top rated products
// @route POST /api/product/top/:category
// @access Public
export const getTopProducts = asyncHandler(async (req, res) => {
  const limitSize = Number(req.query.pageSize) || 12;
  let queryParams = {};
  if (req.params.category) {
    queryParams = {
      category: sanitize(req.params.category),
      published: true,
    };
  } else {
    queryParams = {
      published: true,
    };
  }
  const products = await ProductModel.find(queryParams)
    .sort({ rating: -1 })
    .limit(limitSize);
  res.json(products);
});

// @desc Get featured products
// @route POST /api/product/featured/:category
// @access Public
export const getFeaturedProducts = asyncHandler(async (req, res) => {
  const limitSize = Number(req.query.pageSize) || 3;
  let queryParams = {
    featured: true,
    published: true,
  };
  if (req.params.category) {
    queryParams = { category: sanitize(req.params.category), featured: true, published: true, };
  }
  const products = await ProductModel.find(queryParams)
    .sort({ rating: -1 })
    .limit(limitSize);
  res.json(products);
});
