import React , {useState} from 'react'
import upload_image from "../../assets/upload_area.svg";
import axios from 'axios'

const AddProduct = () => {
    const [image , setImage] = useState(false);
    const [productDetails, setProductDetails] = useState({
        name:"",
        description:"",
        image:"",
        category:"women",
        new_price:"",
        old_price:""
    })

    const imageHandler= (e)=> {
        setImage(e.target.files[0])
    }

    const changeHandler = (e)=> {
        setProductDetails({...productDetails, [e.target.name]:e.target.value})
    }

    const addProduct = async () => {
        console.log(productDetails);
        try {
            let responseData;
            let product = { ...productDetails }; 

            let formData = new FormData();
            formData.append('product', image);

            const response = await axios.post('http://localhost:4000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            responseData = response.data;

            if (responseData.success) {
                product.image = responseData.image_url;
                // console.log(product);
            }
        } catch (error) {
            console.error('Error while adding product:', error.message);
            console.error('Full error object:', error);
        }
    };


    return (
        <div className='add-product'>
            <div className="addproduct-itemfield">
                <p>Product Title</p>
                <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='type here' />
            </div>
            <div className="addproduct-itemfield ">
                <p>Product Description</p>
                <input value={productDetails.description} onChange={changeHandler} type="text" name='description' placeholder='type here' />
            </div>
            <div className='add-product-price'>
                <div className="addproduct-itemfield">
                    <p>Price</p>
                    <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='type here' />
                </div>
                <div className="addproduct-itemfield">
                    <p>Offer Price</p>
                    <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='type here' />
                </div>
                
            </div>

                <div className="addproduct-itemfield">
                    <p> Category</p>
                    <select value={productDetails.category} onChange={changeHandler} name="category" className='add-product-selector' id="">
                        <option value="">Women</option>
                        <option value="">men</option>
                        <option value="">kid</option>
                    </select>

                </div>
                <div className="addproduct-itemfield">
                    <label htmlFor="file-input">
                        <img src={image?URL.createObjectURL(image) :upload_image} className='upload-icon' alt="Upload" />
                    </label>
                    <input  onChange={imageHandler} type="file" name="image" id='file-input' hidden />
                </div>
                <button onClick={addProduct} className='addproduct-btn'>Add</button>


        </div>
    )
}

export default AddProduct