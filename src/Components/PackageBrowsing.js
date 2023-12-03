import React from 'react'
import '../Styles/PackageBrowsing.css'

function PackageBrowsing({ packages }) {
  return (
    <div>
      <h2>Available Travel Packages</h2>
      {packages.map((packageItem) => (
        <div key={packageItem.id} className="package-container">
          <img src={packageItem.pic} alt={packageItem.itinerary.destination} className="package-image" />
          <h3 className="package-title">{packageItem.itinerary.destination}</h3>
          <p className="package-details">Duration: {packageItem.itinerary.duration} days</p>
          <p className="package-details">Price: ${packageItem.price}</p>
          <p className="package-details">Accommodation: {packageItem.itinerary.accommodation}</p>
          <p className="package-rating">Overall Rating: {packageItem['overall-rating']}</p>
        </div>
      ))}
    </div>
  );
}

export default PackageBrowsing;