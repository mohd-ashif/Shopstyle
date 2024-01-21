const config = require('./config');
const PORT = config.PORT;
const DB_URL = config.DB_URL;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt  = require('jsonwebtoken');
const multer = ("multer");
const path = require("path");
const cors = require("cors")

app.use(express.json());
app.use(cors());
const port = PORT;

//db connection  with mongodb atals 
mongoose.connect(DB_URL);

app.get("/", (req, res)=> {
    res.send("express app is running")
})

app.listen(PORT, (error)=> {
    if(!error ){
        console.log("Server Running on"+" " + port)
    }
    else{
        console.log("Error :" + error)
    }

})