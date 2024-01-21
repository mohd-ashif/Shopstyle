import React from 'react';
import CartItems from '../components/CartItems/CartItems';
const Cart = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div style={{ flex: 1 }}>
        <CartItems />
      </div>
    </div>
  );
}

export default Cart;
