import React, { useState } from 'react';
import PackageBrowsing from '../Components/PackageBrowsing';
import Filter from '../Components/Filter';

function AllPackages({ packages }) {
    const [filter, setFilter] = useState({
        destination: '',
        duration: '',
        rating: '',
        priceRange: {
          minPrice: '',
          maxPrice: '',
        },
      });

  const handleFilterChange = (name, value) => {
    setFilter({ ...filter, [name]: value });
  };

  return (
    <div>
      <Filter onFilterChange={handleFilterChange} />
      <PackageBrowsing packages={packages} filter={filter} />
    </div>
  );
};

export default AllPackages;