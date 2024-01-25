import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cross_icon from "../../assets/cross_icon.png";

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    try {
      const response = await axios.get('http://localhost:4000/products/allproducts');
      const data = response.data;
      setAllProducts(data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };
  
  useEffect(() => {
    fetchInfo();
  }, []);
  

  const removeProduct = async (id) => {
      try {
          await axios.post('http://localhost:4000/products/remove', { id: id }, {
              headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json',
              }
          });
          
          await fetchInfo();
      } catch (error) {
         
          console.error('Error removing product:', error);
      }
  };
  
  
  return (
    <div className='list-product'>
      <h1>All Product List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Description</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category </p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allProducts.map((product, index) => (
        <> <div key={index} className="listproduct-format-main listproduct-format">
            <img src={product.image} alt="" className="listproduct-product-icon" />
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>{product.category}</p>
            <img onClick={() => {removeProduct(product.id)}} className='listproduct-remove-icon' src={cross_icon} alt="" />
          </div>
          <hr key={`hr-${index}`} />
          </> 
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
