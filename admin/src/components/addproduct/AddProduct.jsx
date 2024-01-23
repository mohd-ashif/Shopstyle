import React , {useState} from 'react'
import upload_image from "../../assets/upload_area.svg"

const AddProduct = () => {
    const [image , setImage] = useState(false);

    const imageHandler= (e)=> {
        setImage(e.target.files[0])
    }
    return (
        <div className='add-product'>
            <div className="addproduct-itemfield">
                <p>Product Title</p>
                <input type="text" name='name' placeholder='type here' />
            </div>
            <div className="addproduct-itemfield">
                <p>Product Description</p>
                <input type="text" name='name' placeholder='type here' />
            </div>
            <div className='add-product-price'>
                <div className="addproduct-itemfield">
                    <p>Price</p>
                    <input type="text" name='old_price' placeholder='type here' />
                </div>
                <div className="addproduct-itemfield">
                    <p>Offer Price</p>
                    <input type="text" name='new_price' placeholder='type here' />
                </div>
                
            </div>

                <div className="addproduct-itemfield">
                    <p> Category</p>
                    <select name="category" className='add-product-selector' id="">
                        <option value="">Women</option>
                        <option value="">men</option>
                        <option value="">kid</option>
                    </select>
                </div>
                <div className="addproduct-itemfield">
                    <label htmlFor="file-input">
                        <img src={image?URL.createObjectURL(image) :upload_image} className='upload-icon' alt="Upload" />
                    </label>
                    <input onChange={imageHandler} type="file" name="image" id='file-input' hidden />
                </div>
                <button className='addproduct-btn'>Add</button>


        </div>
    )
}

export default AddProduct