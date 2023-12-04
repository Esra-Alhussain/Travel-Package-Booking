import React from 'react'
import '../Styles/Filter.css'

function Filter({ applyFilters }) {
  const handleFilterClick = (filterType, value) => {
    
    const filters = { [filterType]: value };
    applyFilters(filters);

  };


  return (
    
    <div className='filter'>
      <div className='destinations'>
        <p>Top Destinations</p>
        <button onClick={() => handleFilterClick('destination', 'Paris')} className='btns'>Paris</button>
        <button onClick={() => handleFilterClick('destination', 'Tokyo')} className='btns'>Tokyo</button>
        <button onClick={() => handleFilterClick('destination', 'New York')} className='btns'>New York</button>
        <button onClick={() => handleFilterClick('destination', 'Rome')} className='btns'>Rome</button>
        <button onClick={() => handleFilterClick('destination', 'Barcelona')} className='btns'>Barcelona</button>
      </div>

      {/* <div className='durations'>
        <p>Durations</p>
        <button className='btns'>1-2</button>
        <button className='btns'>3-4</button>
        <button className='btns'>5-6</button>
        <button className='btns'>7-8</button>
        <button className='btns'>Above 8</button>
      </div>

      <div className='ratings'>
        <p>Ratings</p>
        <button className='btns'>Superb: 4.5+</button>
        <button className='btns'>Good: 3.5+</button>
        <button className='btns'>Pleasant: 3+</button>
      </div>

      <div className='priceRange'>
        <p>Price</p>
        <button className='btns'>Below $1000</button>
        <button className='btns'>$1000 - $2000</button>
        <button className='btns'>$2000 - $3000</button>
        <button className='btns'>Above $3000</button>
      </div> */}
    </div>
  
  )
}

export default Filter;
