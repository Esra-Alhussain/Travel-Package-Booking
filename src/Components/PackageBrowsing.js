import React, { useState } from 'react';
import Filter from './Filter';
import '../Styles/PackageBrowsing.css'
import { IoIosStar } from "react-icons/io";

function PackageBrowsing({ packages }) {
  const [filter, setFilter] = useState({
    destination: '',
    duration: '',
    rating: '',
    minPrice: '',
    maxPrice: '',
    priceRange: {
      minPrice: '',
      maxPrice: '',
    },
  });

  const handleFilterChange = (name, value) => {
    setFilter({ ...filter, [name]: value });
  };
  // const handleFilterChange = (name, { minPrice, maxPrice }) => {
  //   setFilter({
  //     ...filter,
  //     [name]: { minPrice, maxPrice },
  //   });
  // };

  const filteredPackages = packages.filter((packageItem) => {

    const destinationMatch = packageItem.itinerary.destination.toLowerCase().includes(filter.destination.toLowerCase());

    const durationMatch = packageItem.itinerary.duration.includes(filter.duration);

    const ratingMatch = !filter.rating || (
      (filter.rating === "5" && packageItem['overall-rating'] > 4.5) ||
      (filter.rating === "4.5" && packageItem['overall-rating'] >= 3.5 && packageItem['overall-rating'] <= 4.5) ||
      (filter.rating === "3.5" && packageItem['overall-rating'] >= 2.5 && packageItem['overall-rating'] < 3.5) ||
      (filter.rating === "2.5" && packageItem['overall-rating'] < 2.5)
    );

    // const priceMatch =
    //   (!filter.minPrice || packageItem.price >= parseInt(filter.minPrice)) &&
    //   (!filter.maxPrice || packageItem.price < parseInt(filter.maxPrice));

    const priceMatch =
      (!filter.priceRange.minPrice || packageItem.price >= parseInt(filter.priceRange.minPrice)) &&
      (!filter.priceRange.maxPrice || packageItem.price < parseInt(filter.priceRange.maxPrice));
    
      console.log('min:', filter.minPrice, 'max:',filter.maxPrice)
      console.log(priceMatch);

    return destinationMatch && durationMatch && ratingMatch && priceMatch;
  });

  return (
    <div>
      <Filter onFilterChange={handleFilterChange} />

      <h2>Available Travel Packages</h2>

      {filteredPackages.length === 0 ? (
        <p>Based on your filters, nothing is available.</p> 
        ) : (
          
          filteredPackages.map((packageItem) => (
          <div key={packageItem.id} className='package-container'>
            <img src={packageItem.pic} alt={packageItem.itinerary.destination} className="package-image" />
            
            <div className='package-details-header'>
              <h4 className='package-title'>{packageItem.itinerary.destination}</h4>
              <h4 className='package-rating'><IoIosStar /> {packageItem['overall-rating']}</h4>
            </div>

            <p className='package-details'>Duration: {packageItem.itinerary.duration} days</p>
            <p className='package-details'>Accommodation: {packageItem.itinerary.accommodation}</p>
            <p className='package-details'>Tickets Available: {packageItem.tickets}</p>
            <p className='package-price'>${packageItem.price} CAD</p>
            
          </div>
        ))
      )}
    </div>
  );
};

export default PackageBrowsing;