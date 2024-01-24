const dotenv = require("dotenv")
const connectToDb = require("./config")
const express = require("express");
const app = express();
const jwt  = require('jsonwebtoken');
const multer = require('multer');
const path = require("path");
const cors = require("cors")
const productRoute = require("./route/productRoute");
const Product = require("./model/products");

dotenv.config()
app.use(express.json());
app.use(cors());

const port = process.env.PORT;

//API test
app.get("/", (req, res)=> {
    res.send("express app is running")
})

// route middile ware
app.use('/products', productRoute);

//image  Storage
const storage = multer.diskStorage({
    destination: "./upload/images",
    filename: (req, file, cb) => {
     return    cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({
    storage:storage,
    limits: {
        fileSize: 1024 * 1024 * 5, // 5 MB - upload limit
      },
})

app.post("/upload", upload.single('product'), (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({
                success: 0,
                error: 'No file uploaded',
            });
        }

        res.json({
            success: 1,
            image_url: `http://localhost:${port}/images/${req.file.filename}`
        });
    } catch (error) {
        console.error('Error in upload endpoint:', error);
        res.status(500).json({
            success: 0,
            error: 'Internal server error',
        });
    }
});




app.listen(port, (error)=> {
    if(!error ){
        console.log("Server Running on"+" " + port)
    }
    else{
        console.log("Error :" + error)
    }

})

