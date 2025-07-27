import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
const Navbar= () => {
  return (
    <nav className='navbar'> 
      <div className='navbar-brand'>Pluto</div>
      <ul className='navbar-list'>
        <li className='navbar-item'>
            <Link to="/" className='nav-link'> Home</Link>
        </li>
         <li className='navbar-item'>
            <Link to="/about" className='nav-link'>About Us</Link>
        </li>
         <li className='navbar-item'>
            <Link to="/contact" className='nav-link'>Contact Us</Link>
        </li>

      </ul>

    

    </nav>
  )
}

export default Navbar
