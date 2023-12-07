import React from 'react';
import "../Styles/Navbar.css";
import { GrCart } from "react-icons/gr";
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div class='Navbar'>
      <div class='leftside'>
        <Link to="/">
      <h3 href='/PackageBrowsing'>
      Travel package creation
      </h3>
      </Link>
      
      <h3>
      Packges Browsing
      </h3>
      <h3>
      About 
      </h3>
      <h3>
      Contact Us
      </h3>
      </div>
      <h3>
      <GrCart style={{ fontSize: 'larger' }} />
      </h3>
      
    </div>
  )
}
