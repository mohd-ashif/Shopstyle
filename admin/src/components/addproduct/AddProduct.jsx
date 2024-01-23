import React from 'react'
import upload from "../../assets/upload_area.svg"

const AddProduct = () => {
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
                        <img src={upload} className='upload-icon' alt="Upload" />
                    </label>
                    <input type="file" name="image" id='file-input' hidden />
                </div>
                <button className='addproduct-btn'>Add</button>


        </div>
    )
}

export default AddProduct