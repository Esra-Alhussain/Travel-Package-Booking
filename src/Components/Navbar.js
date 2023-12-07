import React from 'react';
import "../Styles/Navbar.css";
import { GrCart } from "react-icons/gr";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='Navbar'>
    <div className='leftside'>
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
    // <div class='Navbar'>
    //   <div class='leftside'>
    //   <Link to="/">Home</Link>
    //     <Link to="/">
    //   <h3 to='/PackageBrowsing'>
    //   Travel package creation
    //   </h3>
    //   </Link>
      
    //   <h3>
    //   Packges Browsing
    //   </h3>
    //   <h3>
    //   About 
    //   </h3>
    //   <h3>
    //   Contact Us
    //   </h3>
    //   </div>
    //   <h3>
    //   <GrCart style={{ fontSize: 'larger' }} />
    //   </h3>
      
    // </div>
  )
}
