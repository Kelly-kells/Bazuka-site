
import "./navbar.css"
import logo from "../Assets/site-logo.png"
import { TiShoppingCart } from "react-icons/ti";
import { useState } from "react"
const Navbar = () => {
  const [menu,setMenu] = useState("shop")

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            
        </div>
        <ul className='nav-menu'>
            <li onClick={()=>{setMenu("Home")}}>Home {menu==="Home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Shop")}}>Shop {menu==="Shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("About")}}>About {menu==="About"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Contact")}}>Contact Us {menu==="Contact"?<hr/>:<></>}</li>

        </ul>
        <div className="nav-login">
            <button>Log in</button>
            <TiShoppingCart size={40} />
            <div className="nav-cart-count">0</div>
        </div>
        </div>
  )
}

export default Navbar