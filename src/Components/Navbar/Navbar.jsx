import "./navbar.css";
import logo from "../Assets/site-logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { TiShoppingCart } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };
  const closeSidebar =()=>{
    setShowSidebar(false)
  }

  return (
    <div className="navbar">
        <div className="menu-toggle" onClick={toggleSidebar}>
        <GiHamburgerMenu size={30} />
      </div>
      
      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>
      
      <ul className={`nav-menu ${showSidebar ? "show-sidebar" : "close-sidebar"}`}>
        <div className="close-sidebar" onClick={closeSidebar}><IoClose  size={30} /></div>
        <li onClick={() => setMenu("Home")}>Home {menu === "Home" ? <hr /> : <></>}</li>
        <li onClick={() => setMenu("Shop")}>Shop {menu === "Shop" ? <hr /> : <></>}</li>
        <li onClick={() => setMenu("About")}>About {menu === "About" ? <hr /> : <></>}</li>
        <li onClick={() => setMenu("Contact")}>Contact Us {menu === "Contact" ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login">
        <button>Log in</button>
        <TiShoppingCart size={30} />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
