const Product = require("../model/products");
const express = require("express");
const jwt = require('jsonwebtoken');
const router = express.Router();
const Users = require("../model/users")

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
router.post('/remove', async (req, res) => {
    try {
        const deletedProduct = await Product.findOneAndDelete({ id: req.body.id });

        if (!deletedProduct) return res.status(404).json({ success: false, message: 'Product not found' });

        console.log("Removed");
        res.json({ success: true, name: deletedProduct.name });
    } catch (error) {
        console.error('Error removing product:', error);
        res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
});

//new collection 
router.get('/newcollections', async (req, res) => {
    try {
      let products = await Product.find({});
      let newcollection = products.slice(1).slice(-8);
      res.send(newcollection);
    } catch (error) {
      console.error("Error fetching new collections:", error);
      
    }
  });
  

//Popular collections
router.get("/popularinwomen", async (req, res) => {
    try {
      let products = await Product.find({ category: "women" });
      let popular_in_women = products.slice(0, 4);
      res.send(popular_in_women);
    } catch (error) {
      console.error("Error fetching popular products in women's category:", error);
     
    }
  });

  
  //middleware to fetch user
  const fetchUser = async (req, res, next) => {
    try {
      const token = req.header('auth-token');
      console.log('Token:', token);
  
      if (!token) {
        return res.status(401).send({ errors: "Please authenticate using a valid token" });
      }
  
      const data = jwt.verify(token, 'secret_ecom');
      // console.log('User data:', data.user);
  
      req.user = data.user;
      next();
    } catch (error) {
      console.error('Error during token verification:', error);
      res.status(401).send({ errors: "Please authenticate with a valid token" });
    }
  };
  


// Adding product to cart data 
router.post("/addtocart", fetchUser, async (req, res) => {
  try {
    console.log("added",req.body.itemId )
    let userData = await Users.findOne({_id: req.user.id});
    
   
    userData.cartData[req.body.itemId] += 1;
    
    await Users.findOneAndUpdate({_id: req.user.id}, {cartData: userData.cartData});
    
    res.send("Added");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

//remove product from cart data
router.post('/removecart', fetchUser, async (req, res)=> {

  try {
    console.log("removed",req.body.itemId )
    let userData = await Users.findOne({_id: req.user.id});
    if(  userData.cartData[req.body.itemId] >0 )
    userData.cartData[req.body.itemId] -= 1;
    
    await Users.findOneAndUpdate({_id: req.user.id}, {cartData: userData.cartData});
    
    res.send("removed");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
    
  }

})
  

module.exports = router;


