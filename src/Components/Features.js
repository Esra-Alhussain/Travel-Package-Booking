import React from "react";
import "../Styles/Features.css";

function Features(){

    return(
        <div className="features">
            <div className="package-creation">
               <p className="feature-title"> Create Your Dream Vacation Package </p>
               <img className="feature-img" src="./src/Images/creation.jpg" alt="Feature" />
               <p className="feature-description"> Design a personalized travel experience with our Package Creation feature. Explore destinations, choose accommodations, and select activities that match your preferences. Craft the perfect itinerary for your dream vacation and make every moment memorable.
</p>
               <button className="feature-button">
               Go to Creation Dashboard 
               </button>
            </div>
            
            <div className="package-browsing">
               <p className="feature-title">Discover Exciting Travel Packages</p>
               <img className="feature-img" src="./src/Images/browsing.jpg" alt="Feature" />
               <p className="feature-description"> Embark on a journey of exploration with our Package Browsing feature. Browse through a diverse collection of travel packages curated just for you. Find inspiration for your next adventure, from exotic getaways to cultural experiences. Uncover the world's wonders and choose the perfect package that suits your travel style.</p>
               <button className="feature-button">
               Explore Packages 
               </button>
            </div>
        </div>
    )
}

export default Features;




