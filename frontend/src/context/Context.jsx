
import React, { createContext, useEffect, useState } from 'react'
import axios from 'axios'
export const ShopContext = createContext(null)

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart())
  const [ all_product, setAll_Products]= useState([])

useEffect(() => {
  axios.get('http://localhost:4000/products/allproducts')
  .then((res)=> setAll_Products(res.data))
  .catch((error)=> {
    console.log("error fetch data", error)
  })
}, [])

const addToCart = (itemId) => {
  setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));

  if (localStorage.getItem('auth-token')) {
    axios.post(
      'http://localhost:4000/products/addtocart',
      {
        itemId: itemId,
      },
      {
        headers: {
          Accept: 'application/json',
          'auth-token': localStorage.getItem('auth-token'),
          'Content-Type': 'application/json',
        },
        
      }
    )
      .then((response) => response.data)
      .then((data) => console.log(data))
      .catch((error) => console.error('Error:', error));
  }
};

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
  }

  const getTotalCartAmount = () => {
    let totalAmount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        totalAmount += itemInfo.new_price * cartItems[item];
        console.log()
      }
    }

    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  };

  const ContextValue = { getTotalCartItems, getTotalCartAmount, all_product, cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={ContextValue} >
      {props.children}

    </ShopContext.Provider>

  )
  
}
export default ShopContextProvider