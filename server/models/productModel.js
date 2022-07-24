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

const product = mongoose.model('product', productSchema);
module.exports = product;