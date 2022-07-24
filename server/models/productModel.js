import mongoose from "mongoose";

const productSchema = mongoose.Schema({

    name:{
        type: String,
        required: true
    },

    category:{
        type: String,
        require: true
    },

    price: {
        type: Number,
        required: true
    },

    image: {
        type: String,
        required: true
    }

},{
    // for date
    timestap: true
});

const Product = mongoose.model('Product', productSchema);
export default Product;