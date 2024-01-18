import React from 'react'
import "./Footer.css"
import footer_logo from "../../../public/Assets/logo.png"


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            SHOPSTYLE
        </div>
        <ul>
            <li>Company </li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>

       
        <div className="footer-copyright">
            <hr />
            <p>copyright @ 2024 - All Right Reserved</p>
        </div>

    </div>
  )
}

export default Footer