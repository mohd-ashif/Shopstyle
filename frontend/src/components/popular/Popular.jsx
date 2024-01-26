import React, { useState, useEffect } from 'react';
import Item from "../items/Item"
import axios from 'axios';

const Popular = () => {
  const [popularInWomen, setPopularInWomen] = useState([]); 

  useEffect(() => {
    axios.get("http://localhost:4000/products/popularinwomen") 
      .then((res) => setPopularInWomen(res.data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [])
  
  return (
    <div className='popular'>
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className='popular-item'>
        {popularInWomen.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
}

export default Popular;
