const Product= require("../model/products");
const express = require("express");

const router = express.Router();

router.post('/', async(req, res)=> {
    const product = new Product ({
        id:req.body.id,
        name:req.body.image,
        image:req.body.image,
        category:req.body.category,
        new_price:req.body.new_price,
        old_price:req.body.old_price
    })
    console.log(product)
    await product.save();
    console.log("saved")
    res.json({
        success:true,
        name:req.body.name
    })
})

module.exports = router;
