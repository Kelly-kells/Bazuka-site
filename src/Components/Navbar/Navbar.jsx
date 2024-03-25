import React from 'react'
import "./navbar.css"
import logo from "../Assets/site-logo.png"
import { TiShoppingCart } from "react-icons/ti";
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            
        </div>
        <ul className='nav-menu'>
            <li>Home</li>
            <li>Shop</li>
            <li>About</li>
            <li>Contact Us</li>

        </ul>
        <div className="nav-login">
            <button>Log in</button>
            <TiShoppingCart />
        </div>
        </div>
  )
}

export default Navbar