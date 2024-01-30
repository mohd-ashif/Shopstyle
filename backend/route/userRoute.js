const Users = require("../model/users");
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router();

//signup
router.post('/signup', async (req, res) => {
    try {
        let check = await Users.findOne({ email: req.body.email });
        if (check) {
            return res.status(400).json({ success: false, errors: 'Existing user found with the same email' });
        }

        let cart = {};
        for (let i = 0; i < 300; i++) {
            cart[i] = 0;
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const user = new Users({
            name: req.body.username,
            email: req.body.email,
            password: hashedPassword, 
            cartData: cart,
        });

        await user.save();

        const data = {
            user: {
                id: user.id
            }
        };

        const token = jwt.sign(data, 'secret_ecom');
        res.json({ success: true, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, errors: 'Internal Server Error' });
    }
});

//login 
router.post('/login', async(req,res)=> {
    try {
    let user =  await Users.findOne({email:req.body.email})
    if(user){
        const passCompare = req.body.password === user.password
        if(passCompare){
            const data ={
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data, 'secret_ecom');
            res.json({success:true, token})
        }
        else{
            res.json({success:false,errors:'wrong Password'})
        }
    }
    else{
        res.json({success:fasle, errors:"wrong email id"})
    }
        
    }
     catch (error) {
        
    }
})

module.exports = router;

