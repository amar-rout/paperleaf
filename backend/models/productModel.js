import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    name: { type: String, required: true },
    title: { type: String, required: true },
    rating: { type: Number, required: true, default: 1 },
    comment: { type: String, required: true },
  },
  { timestamps: true },
);

const productModel = mongoose.Schema(
  {
    // user: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   required: true,
    //   ref: 'User',
    // },
    name: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    // images:[
    //   {
    //     image: { type: String },
    //   }
    // ],
    images:[],
    variant:[
      {
        size: { type: String, required: true },
        color: { type: String, required: true },
        countInStock: { type: Number, required: true, default: 0 },
        inStock: { type: Boolean, required: true, default: true }
      }
    ],
    brand: { type: String, required: true },
    category: { type: String, required: true },
    newCollection: {type: Boolean, required: true, default: false},
    description: { type: String, required: true },
    reviews: [reviewSchema],
    rating: { type: Number, required: true, default: 0 },
    numReviews: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    salePrice: { type: Number, required:true, default:0 },
    countInStock: { type: Number, required: true, default: 0 },
    featured: { type: Boolean, required: true, default: false },
    published: { type: Boolean, required: false, default: false},
    // bgColor: { type: String, required: true, default: 'f5f5f5' },
    // nameColor: { type: String, required: true, default: '000' },
    // btnColor: { type: String, required: true, default: 'fe696a' },
    // btnColorHover: { type: String, required: true, default: 'fe3638' },
  },
  {
    timestamps: true,
  },
);

const Product = mongoose.model('Product', productModel);

export default Product;
