import React, { useState, useEffect } from 'react'
import '../Styles/PackageBrowsing.css'
import Filter from './Filter.js'

function PackageBrowsing({ packages }) {
  const [filteredPackages, setFilteredPackages] = useState(packages);

  useEffect(() => {
    setFilteredPackages(packages);
  }, [packages]);

  function applyFilters(filters) {
    console.log('Filters:', filters);
    let filtered = packages;
  
    if (filters.destination) {
      filtered = packages.filter((packageItem) => 
        packageItem.itinerary.destination === filters.destination
      );
    }
  
    console.log(filtered);
    setFilteredPackages(filtered);
  }

  return (
    <div>
      <Filter applyFilters={applyFilters} />
      <h2>Available Travel Packages</h2>
      {filteredPackages.map((packageItem) => (
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