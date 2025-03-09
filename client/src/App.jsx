import './App.css'
import Home from './components/home'
import Product from './components/product'
import Contact from './components/contact'
import View from "./components/view"
import Admin from "./admin"
import Create from "./Admin/add"
import Update from "./Admin/update"
import Delete from "./Admin/delete"

import {Link, Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <div className="container-fluid">
            
          <div className='navbar d-print-none navbar-expand-md'>
            <h1 className='nav-brand ms-2'><img src="https://icon-library.com/images/tech-icon-png/tech-icon-png-13.jpg" width="60px" alt="" /><span className='text-danger'>Tech</span> Shop</h1>
            <button className='navbar-toggler' data-bs-target="#navs" data-bs-toggle="collapse"><img src="https://icon-library.com/images/menu-png-icon/menu-png-icon-21.jpg" width="50px" alt="" /></button>
          <div id='navs' className='collapse navbar-collapse justify-content-end'>
          <ul className="navbar-nav me-3 ms-2">
              <li className='nav-item '><Link to='/' className='nav-link text-dark'>Home</Link></li>
              <li className='nav-item'><Link to='/product' className='nav-link text-dark'>Products</Link></li>
              <li className='nav-item'><Link to='/contact' className='nav-link text-dark'>Contact</Link></li>
          </ul>
          </div>
            
          </div>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/product' element={<Product/>}/>
              <Route path='/view' element={<View/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/admin' element={<Admin/>}/>
              <Route path='/Add' element={<Create/>}/>
              <Route path='/Update' element={<Update/>}/>
              <Route path='/Delete' element={<Delete/>}/>


              
            </Routes>
            
      </div>
    </>
  )
}

export default App
