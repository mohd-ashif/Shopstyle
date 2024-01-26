import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import logo from '../../../public/Assets/logo.png';
import cart_icon from '../../../public/Assets/cart_icon.png';
import { ShopContext } from '../../context/Context';

const Navbar = () => {
  const [menu, setMenu] = useState('');
  const { getTotalCartItems } = useContext(ShopContext);
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
        <li onClick={() => setMenu('shop')}>
          <Link to='/' style={{ textDecoration: 'none' }}>Shop</Link>
          {menu === 'shop' ? <hr className="menu_hr" /> : null}
        </li>
        <li onClick={() => setMenu('mens')}>
          <Link to='/mens' style={{ textDecoration: 'none' }}>men</Link>
          {menu === 'mens' ? <hr className="menu_hr" /> : null}
        </li>
        <li onClick={() => setMenu('women')}>
          <Link to='/womens' style={{ textDecoration: 'none' }}>women</Link>
          {menu === 'women' ? <hr className="menu_hr" /> : null}
        </li>
        <li onClick={() => setMenu('kids')}>
          <Link to='/kids' style={{ textDecoration: 'none' }}>Kid</Link>
          {menu === 'kids' ? <hr className="menu_hr" /> : null}
        </li>
      </ul>

      <form className='search-bar' onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>

      <div className='nav-logo-cart'>
        { localStorage.getItem('auth-token') ? 
        <button onClick={()=> {localStorage.removeItem('auth-token'); window.location.replace('/')}} >Log Out </button> : 
        <Link to='/login'> <button>Login</button> </Link>  }
        <Link to='/cart'>
          <img src={cart_icon} alt="" />
        </Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  );
}

export default Navbar;
