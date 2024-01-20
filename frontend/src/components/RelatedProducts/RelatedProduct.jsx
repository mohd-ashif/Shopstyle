import React from 'react';
import Item from '../items/Item'; // Replace 'path-to-your-Item-component' with the actual path
import data_product from '../../data/data';

const RelatedProduct = () => {
  return (
    <div className='realtedproducts'>
        <h1>Related Products</h1>
        <hr />
        <div className="realtedproducts-item">
           {data_product.map((item, i)=> {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
           })}
        </div>
    </div>
  )
}

export default RelatedProduct;
