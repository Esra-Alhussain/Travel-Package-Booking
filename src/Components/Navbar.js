import React from 'react';
import "../Styles/Navbar.css";
import { GrCart } from "react-icons/gr";

export default function Navbar() {
  return (
    <div class='Navbar'>
      <div class='leftside'>
      <h3 href='/PackageBrowsing'>
      Travel package creation
      </h3>
      <h3>
      About 
      </h3>
      <h3>
      Packges Browsing
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
