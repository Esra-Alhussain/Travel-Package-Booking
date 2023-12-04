import React from 'react';
import '../Styles/Filter.css'

const Filter = ({ onFilterChange }) => {
  return (
    <div className='filter-container'>
      <div className='destinations'>
        <label>Filter by Destination:
          <input type="text" name="destination" onChange={(e) => onFilterChange('destination', e.target.value)} />
        </label>
        </div>
      
      <div className='durations'>
        <label>Filter by Duration:
          <input type="text" name="duration" onChange={(e) => onFilterChange('duration', e.target.value)} />
        </label>
        </div>
      
      <div className='ratings'>
        <label>Filter by Rating:</label>
        <select name="rating" onChange={(e) => onFilterChange('rating', e.target.value)}>
          <option value="">All Ratings</option>
          <option value="5">Above 4.5</option>
          <option value="4.5">3.5 - 4.5</option>
          <option value="3.5">2.5 - 3.5</option>
          <option value="2.5">Below 2.5</option> 
        </select>
      </div>
      
      <div className='priceRange'>
        <label>Filter by Price Range:
        <div className="radio-group">
          <label> 
            <input type="radio" name="priceRange" value="all" onChange={() => onFilterChange('minPrice', '', 'maxPrice', '')} />
            All
          </label>
          <label>
            <input type="radio" name="priceRange" value="below 1000" onChange={() => onFilterChange('minPrice', '0', 'maxPrice', '999')} />
            Below $1000
          </label>
          <label>
            <input type="radio" name="priceRange" value="1000-1999" onChange={() => onFilterChange('minPrice', '1000', 'maxPrice', '1999')} />
            $1000 - $1999
          </label>
          <label>
            <input type="radio" name="priceRange" value="2000-3000" onChange={() => onFilterChange('minPrice', '2000', 'maxPrice', '2999')} />
            $2000 - $2999
          </label>
          <label>
            <input type="radio" name="priceRange" value="above 3000" onChange={() => onFilterChange('minPrice', '3000', 'maxPrice', '')} />
            Above $3000
          </label>
          
        </div>
        </label>
      </div>
      
    </div>
  );
};

export default Filter;