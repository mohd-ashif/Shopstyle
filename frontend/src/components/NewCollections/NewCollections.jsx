import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Item from '../items/Item';

const NewCollections = () => {
  const [newcollections, setNewCollections] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/products/newcollections') // Corrected the URL
      .then((res) => setNewCollections(res.data))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className='new_collections'>
      <h1>NEW COLLECTIONS</h1>
      <hr />
      <div className="collections">
        {newcollections.map((item, i) => {
          return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />;
        })}
      </div>
    </div>
  );
}

export default NewCollections;
