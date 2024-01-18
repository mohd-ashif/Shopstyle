import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../public/Assets/logo.png';
import cart_icon from '../../../public/Assets/cart_icon.png';

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className='navbar'>
      <div className="nav_logo">
        <img src={logo} alt="" />
        <p>Shopstyle</p>
      </div>

      <ul className='nav_menu'>
        <li>Shop <hr /> </li>
        <li>Men</li>
        <li>Women</li>
        <li>Kids</li>
      </ul>

      <form className='search-bar' onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit"> <FontAwesomeIcon icon={faSearch} /></button>
      </form>

      <div className='nav-logo-cart'>
        <button>Login</button>
        <img src={cart_icon} alt="" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
}

export default Navbar;

