import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css";

const Header = () => {
  return (
    <div className='navbar'>
      <div className='navbar_title'>Flipkart</div>
      <ul className='navbar_links'>
        <li><Link to="/" className='nav_links'>Home</Link></li>
        <li><Link to="/articles"  className='nav_links'>Articles</Link></li>
      </ul>
    </div>
  )
}

export default Header