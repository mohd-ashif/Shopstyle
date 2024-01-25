const Users = require("../model/users")
const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const router = express.Router();


router.post('/signup', async (req, res)=> {
    let check = await Users.findOne({email:req.body.emsil});
    if(check){
        return res.status(400).json({success:false, errors:'existing user found with same email'})
    }
    let cart ={}
    for(let i =0; i<300; i++){
       cart[i]=0;

    }
    const user = new Users({
        name:req.body.username,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })
    await user.save();

    const data = {
        user:{

        }
    }

    const token = jwt.sign(data,'secret_ecom');
    res.json({succes:true, token})
}) 

module.exports = router;