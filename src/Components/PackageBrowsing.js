import React from 'react';
import '../Styles/PackageBrowsing.css'
import { IoIosStar } from "react-icons/io";
import { Link } from 'react-router-dom';

function PackageBrowsing({ packages,filter }) {
  
  const filteredPackages = packages.filter((packageItem) => {

    const destinationMatch = packageItem.itinerary.destination.toLowerCase().includes(filter.destination.toLowerCase());

    const durationMatch = packageItem.itinerary.duration.includes(filter.duration);

    const ratingMatch = !filter.rating || (
      (filter.rating === "5" && packageItem['overall-rating'] > 4.5) ||
      (filter.rating === "4.5" && packageItem['overall-rating'] >= 3.5 && packageItem['overall-rating'] <= 4.5) ||
      (filter.rating === "3.5" && packageItem['overall-rating'] >= 2.5 && packageItem['overall-rating'] < 3.5) ||
      (filter.rating === "2.5" && packageItem['overall-rating'] < 2.5)
    );

    const priceMatch =
      (!filter.priceRange.minPrice || packageItem.price >= parseInt(filter.priceRange.minPrice)) &&
      (!filter.priceRange.maxPrice || packageItem.price < parseInt(filter.priceRange.maxPrice));
    
      console.log('min:', filter.minPrice, 'max:',filter.maxPrice)
      console.log(priceMatch);

    return destinationMatch && durationMatch && ratingMatch && priceMatch;
  });

  return (
    <div>
      <h2>Available Travel Packages</h2>
      <div className='package-grid'>
      {filteredPackages.length === 0 ? (
        <p className='package-null'>Based on your filters, nothing is available.</p> 
        ) : (
          filteredPackages.map((packageItem) => (
            // <link key={packageItem.id} to={`/AllPackage/${packageItem.id}`} className='package-container'>
            // </link>
          <div key={packageItem.id} className='package-container'>
            <img src={packageItem.pic} alt={packageItem.itinerary.destination} className="package-image" />
            
            <div className='package-details-header'>
              <h4 className='package-title'>{packageItem.itinerary.destination}</h4>
              <h4 className='package-rating'><IoIosStar /> {packageItem['overall-rating']}</h4>
            </div>

            <p className='package-details'>Duration: {packageItem.itinerary.duration} days</p>
            {/* <p className='package-details'>Accommodation: {packageItem.itinerary.accommodation}</p> */}
            <p className='package-details'>Tickets Available: {packageItem.tickets}</p>
            <p className='package-price'>${packageItem.price} CAD</p>
            
          </div>
        ))
      )}
      </div>

      
    </div>
  );
};

export default PackageBrowsing;