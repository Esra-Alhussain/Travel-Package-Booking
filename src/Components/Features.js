import React from "react";
import "../Styles/Herosection.css";

function Features(){

    return(
        <div className="features">
            <div className="package-creation">
               <p className="feature-title"> Package Creation </p>
               <img className="feature-img"src=""/>
               <p className="feature-description"> This is the description section</p>
               <button className="feature-button">
                click Here 
               </button>
            </div>

            <div className="package-browsing">
               <p className="feature-title">Package Browsing</p>
               <img className="feature-img"src=""/>
               <p className="feature-description"> This is the description section</p>
               <button className="feature-button">
                click Here 
               </button>
            </div>
        </div>
    )
}

export default Features;




