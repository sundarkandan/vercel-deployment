import './App.css'
import Home from './components/home'
import Product from './components/product'
import Contact from './components/contact'
import View from "./components/view"

import {Link, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <div className="container-fluid">
            
          <div className='navbar d-print-none navbar-expand-md'>
            <h1 className='nav-brand ms-2'><img src="https://icon-library.com/images/tech-icon-png/tech-icon-png-13.jpg" width="60px" alt="" /><span className='text-danger'>Tech</span> Shop</h1>
            <button  className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navs"
          aria-controls="navs"
          aria-expanded="false"
          aria-label="Toggle navigation"><img src="https://icon-library.com/images/menu-png-icon/menu-png-icon-21.jpg" width="50px" alt="" /></button>
          <div id='navs' className='collapse navbar-collapse justify-content-end'>
          <ul className="navbar-nav me-3 ms-2">
              <li className='nav-item '><Link to='/' className='nav-link text-dark' data-bs-toggle="collapse" data-bs-target="#navs">Home</Link></li>
              <li className='nav-item'><Link to='/product' className='nav-link text-dark' data-bs-toggle="collapse" data-bs-target="#navs">Products</Link></li>
              <li className='nav-item'><Link to='/contact' className='nav-link text-dark' data-bs-toggle="collapse" data-bs-target="#navs">Contact</Link></li>
          </ul>
          </div>
            
          </div>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/product' element={<Product/>}/>
              <Route path='/view' element={<View/>}/>
              <Route path='/contact' element={<Contact/>}/>  
            </Routes>
            
      </div>
    </>
  )
}

export default App
