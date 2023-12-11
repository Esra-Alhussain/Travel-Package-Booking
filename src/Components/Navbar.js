import React from 'react';
import "../Styles/Navbar.css";
import { GrCart } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from 'react';

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <div className='Navbar'>
       <h3 id='navicon' onClick={handleShowNavbar}>
    <RxHamburgerMenu style={{ fontSize: 'larger' }}  />
    </h3>
    <div className={`leftside  ${showNavbar && 'active'}`}>
      
      <Link to="/">Home</Link>
      <Link to="/AllPackages">Package Browsing</Link>
      <Link to="/TravelPackageCreation">Travel Package Creation</Link>
      <Link to="/About">About</Link>
      <Link to="/Contact">Contact Us</Link>
    </div>
   
    
    <h3>
      <GrCart style={{ fontSize: 'larger' }} />
    </h3>
  </div>
    
  )
}
