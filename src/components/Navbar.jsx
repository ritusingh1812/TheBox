import React from 'react'
import './Navbar.css'
import logo from '../assets/brand-logo.png'

const Navbar = () => {
  return (
    <>
      <nav className='main-navbar sticky' style={{zIndex:"9"}}>
        <div className='navbar'>
          
            <div>
            <img src={logo} alt="brand" className='brand-logo' width={"200px"}/>
            </div>
            
            <div className='second-col'>
              
            <a className="nav-item nav-btn"href='/'>Home</a>  
            <a className="nav-item nav-btn"href='/About'>About us</a>  
            <a className="nav-item nav-btn"href='/Projects'>Projects</a>  
            <a className="nav-item nav-btn"href='/Services'>Services</a>  
            <a className="nav-item nav-btn"href='/Contact' style={{color:"rgba(249, 153, 93, 1)"}}>Contact us</a>  
            
            </div>
          
          
        </div>
      </nav>
    </>
  )
}

export default Navbar
