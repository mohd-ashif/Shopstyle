const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    new_price: {
        type: Number,
        required: true
    },
    old_price: {
        type: Number,
        required: true
    },
    countInStock: {
        type: Number,
    },
    date: {
        type: Date,
        default: Date.now
    },
   
    available: {
        type: Boolean,
        require: true 
    },

  
});

const Product = mongoose.model('products', ProductSchema);

module.exports = Product;
