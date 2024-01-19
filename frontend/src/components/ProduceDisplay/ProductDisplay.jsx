import React from 'react'
import star_icon from "../../../public/Assets/star_icon.png"
import star_dull from "../../../public/Assets/star_dull_icon.png"


const ProductDisplay = (props) => {
  const {product} = props;
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">

     
      <div className="productdisplay-img-list">
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />
        <img src={product.image} alt="" />

      </div>
      <div className="productdisplay-img">
      <img className='productdisplay-main-img' src={product.image} alt="" />
      </div>
       </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull} alt="" />
          <p>(132)</p>
        </div>

        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-prices-old">${product.old_price} </div>
          <div className="productdisplay-right-prices-new">${product.new_price} </div>
        </div>
        <div className="productdisplay-right-description">
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit culpa eligendi hic repellat nihil doloribus possimus sed minus aperiam velit!
        </div>
        <div className="productdisplay-right-size1"> 
          <h1>Select size</h1>
          <div className="productdisplay-right-size">
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL </div>
            <div>XXL</div>
          </div>
        </div>
      <button>ADD TO CART</button>
      <p className='productdisplay-right-category'> <span>Category : </span> {product.category} </p>
      <p className='productdisplay-right-category'> <span>Tags : </span> {product.name}</p>

      </div>
    </div>
  )
}

export default ProductDisplay