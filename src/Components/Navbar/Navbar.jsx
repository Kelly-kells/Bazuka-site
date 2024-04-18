import "./navbar.css";
import logo from "../Assets/site-logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { TiShoppingCart } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const closeSidebar = () => {
    setShowSidebar(false);
  };

  // Function to close the sidebar menu after a link is clicked
  const handleLinkClick = () => {
    setShowSidebar(false);
  };

  return (
    <div className="navbar">
      <div className="menu-toggle" onClick={toggleSidebar}>
        <GiHamburgerMenu size={30} />
      </div>

      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>

      <ul className={`nav-menu ${showSidebar ? "show-sidebar" : ""}`}>
        <div className="close-sidebar" onClick={closeSidebar}>
          <IoClose className="close" size={30} />
        </div>
        <li onClick={handleLinkClick}>
          <Link  to="/">
            Home
          </Link>{" "}
        </li>
        <li onClick={handleLinkClick}>
          <Link  to="/shop">
            Shop
          </Link>{" "}
        </li>
        <li onClick={handleLinkClick}>
          {" "}
          <Link  to="/about">
            About
          </Link>{" "}
        </li>
        <li onClick={handleLinkClick}>
          <Link  to="/contact">
            Contact us
          </Link>{" "}
        </li>
      </ul>
      <div className="nav-login">
        <Link to="/loginsignup">
          <button>Log in</button>
        </Link>
        <Link style={{ color: "black" }} to="/cart">
          <TiShoppingCart size={30} />
        </Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};

export default Navbar;
