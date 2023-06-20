import mongoose from 'mongoose';

const collectionSchema = mongoose.Schema({
    name: { type: String, required: true },
    products: [
        {
            name: { tyoe: String, required: true },
        }
    ],
    coupon: { type: String, required: true, default: '' },
    status: { type: Boolean, required: true, default: true },
    published: { type: Boolean, required: true, default: false }
},
    {
        timestamps: true,
    },
);

const Collection = mongoose.model('Collection', collectionSchema);

export default Collection;