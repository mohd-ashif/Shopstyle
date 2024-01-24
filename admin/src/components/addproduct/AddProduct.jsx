import React , {useState} from 'react'
import upload_image from "../../assets/upload_area.svg";
import axios from 'axios'

const AddProduct = () => {
    const [image , setImage] = useState(false);
    const [productDetails, setProductDetails] = useState({
        name: "",
        description: "",
        image: "",
        category: "women",
        new_price: "",
        old_price: ""
    });
    

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    }
    

    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
    };
    
    const addProduct = async () => {
        try {
            const product = { ...productDetails };
    
            // Upload image using FormData 
            const formData = new FormData();
            formData.append('product', image);
    
            const responseUpload = await axios.post('http://localhost:4000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
    
            const responseData = responseUpload.data;
    
            if (responseData.success) {
                product.image = responseData.image_url;
    
                console.log('Image uploaded successfully:', product.image);
    
                // Add product 
                const reponseProduct = await axios.post('http://localhost:4000/products', product);
    
                const responseAddProduct = reponseProduct.data;
    
                if (responseAddProduct.success) {
                    alert('Product Added');
                    console.log('Product added successfully:', product);
                } else {
                    console.error('Product addition failed:', responseDataAddProduct.error);
                }
            } else {
                console.error('Image upload failed:', responseData.error);
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