import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Product from "./Pages/Product"
import Shop from "./Pages/Shop"
import Cart from "./Pages/Cart"
import LoginSignup from "./Pages/LoginSignup"


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes >
          <Route path='/' element={<Shop />} />
          <Route path='/shop' element={<Shop />} category="shop" />
          <Route path='/about' element={<About />} category="about" />
          <Route path='/contact' element={<Contact />} category="contact" />
          <Route path='product' element={<Product />}>

            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/loginsignup' element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App