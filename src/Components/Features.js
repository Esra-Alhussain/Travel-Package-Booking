import React from "react";
import "../Styles/Features.css";
import creation from "../Images/creation.jpg";
import browsing from "../Images/browsing.jpg";
import { Link } from "react-router-dom";
<<<<<<< HEAD
=======

>>>>>>> 379046766970a992ddb9ee4186d21c71be6bee5a

function Features(){

    return(
        <div className="features">
      <div className="package-creation">
        <div className="feature-content">
          <img className="feature-img" src={creation} alt="Feature" />
          <div className="feature-details">
            <p className="feature-title">Create Your Dream Vacation Package</p>
            <p className="feature-description">Design a personalized travel experience with our Package Creation feature. Explore destinations, choose accommodations, and select activities that match your preferences. Craft the perfect itinerary for your dream vacation and make every moment memorable.</p>
            <Link to="./TravelPackageCreation">
               <button className="feature-button">
               Go to Creation Dashboard 
               </button>
               </Link>
          </div>
          </div>
        </div>
      <div className="package-browsing">
        <div className="feature-content">
          <img className="feature-img" src={browsing} alt="Feature" />
          <div className="feature-details">
            <p className="feature-title">Discover Exciting Travel Packages</p>
            <p className="feature-description">Embark on a journey of exploration with our Package Browsing feature. Browse through a diverse collection of travel packages curated just for you. Find inspiration for your next adventure, from exotic getaways to cultural experiences. Uncover the world's wonders and choose the perfect package that suits your travel style.</p>
            <Link to="../AllPackages">
               <button className="feature-button">
               Explore Packages 
               </button>
               </Link>
          </div>
        </div>
      </div>
    </div>
    
    )
}

export default Features;



