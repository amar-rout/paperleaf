import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({
        name: { type: String, required: true },
        status: { type: Boolean, required: true, default: true },
    },
    {
        timestamps: true,
    },
);

const Category = mongoose.model('Category', categorySchema);

export default Category;