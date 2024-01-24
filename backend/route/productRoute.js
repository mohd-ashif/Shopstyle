const Product = require("../model/products");
const express = require("express");
const mongoose = require("mongoose")
const router = express.Router();

//get all product

router.get('/allproducts', async (req, res)=> {
    let products = await Product.find({});
    console.log('All Product fetched ')
    res.send(products);


})


//add product
router.post('/', async (req, res) => {

    let products = await Product.find({});
    let id;
    
    if (products.length > 0) {
        
        let sortedProducts = products.slice(-1)
        let lastProduct = sortedProducts[0];
        
       
        id = lastProduct.id + 1;
    } else {
       
        id = 1;
    }
    
    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        description:req.body.description,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price
    });
    
    console.log("product:", product);

    try {
        await product.save();
        console.log("Product saved successfully");
        res.json({
            success: true,
            name: req.body.name 
        });
    } catch (error) {
        console.error("Error saving product:", error);
        res.status(500).json({ success: false, error: "Internal Server Error" });
    }
});

// api for delete Products
router.delete("/remove/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({
                success: false,
                message: 'Product not found',
            });
        }

        console.log('removed');
        res.json({
            success: true,
            name: deletedProduct.name,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
});




module.exports = router;


