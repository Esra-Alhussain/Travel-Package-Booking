import React from "react";
import "../Styles/Herosection.css";
// import ".TravelPackageCreation";
import { Link } from "react-router-dom";
import "../pages/AllPackages"

function Features(){

    return(
        <div className="features">
            <div className="package-creation">
               <p className="feature-title"> Package Creation </p>
               <img className="feature-img"src=""/>
               <p className="feature-description"> This is the description section</p>
               <Link to="../AllPackages">
               <button className="feature-button">
                All packages
               </button>
               </Link>
            </div>

            <div className="package-browsing">
               <p className="feature-title">Package Browsing</p>
               <img className="feature-img"src=""/>
               <p className="feature-description"> This is the description section</p>
               <Link to="./TravelPackageCreation">
   <button className="feature-button">Create a package</button>
</Link>
            </div>
        </div>
    )
}

export default Features;




