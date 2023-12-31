import '../Styles/PackageBooking.css'
import { useState } from 'react';
import { BsStars } from "react-icons/bs";
import BookingForm from './BookingForm';

//Display detailed information about a selected travel package
// 3. Receive Props in Child Component
//pass the selectedPackage object from the parent (OnePackage) as a prop and extract the selectedPackage property value from the props object and declare and assign them to 'selectedPackage' variables to male it available within the function
function PackageDetail({packageItem}){
  // setAvailableTickets =>  the previous state of the availableTickets variable.
  const [availableTickets, setAvailableTickets] = useState(packageItem.tickets);
  // const [bookedTickets, setBookedTickets] = useState(0);
  console.log('This is the availableTickets', availableTickets)

   // Callback function to update available tickets after booking
   const handleUpdateTickets = (numTravelers) => {
    setAvailableTickets((prevTickets) => prevTickets - numTravelers);
    // setBookedTickets((prevBooked) => prevBooked + numTravelers);
  };
  
  return(
     <>
        <div className='first-section'>
           <img src={packageItem.pic} alt="Package" />
           <h2>Destination:{packageItem.itinerary.destination}</h2>
        </div>
        <div className='second-section'>
           <p className='flight-destination'>Your flight to {packageItem.itinerary.destination}</p>
        <div className='split-paragraph'>
           <p className='statement'><b>Duration :</b> {packageItem.itinerary.duration}</p>
           <p className='statement'><b>Accomodation:</b> {packageItem.itinerary.accommodation}</p>
           <p className='statement'><b>Tickets Available: </b>{ availableTickets }</p>
        </div>
        <div className='third-section'>
           <p className='box overall'><b>{packageItem['overall-rating']}</b></p>
         <div className='box'>
           <BsStars className='icon'/>
           <p>Top rating</p>
          </div>
           <div className='box'>
           <BsStars className='icon'/>
           <p>Family friendly</p>
           </div>
          <div className='box'>
           <BsStars className='icon'/>
           <p>Near Park</p>
          </div>
        </div>
        <div className='chesckIn-tips'>
           <p><b>Check-in tips</b></p>
           <ul>
             <li>Booking reference: 6 letters and/or numbers (e.g.: ABC123)</li>
             <li>Aeroplan ID: 9 numbers (e.g.: 123456789)</li>
             <li>Ticket number: 13 numbers (e.g.: 0141234567890)</li>
             <li>AC employee number: 8 letters and/or numbers (e.g.: AC012345)</li>
           </ul>
        </div>
        <div className=' price-section'>
          <div className='split-paragraph'>
          <p className='price-amount'><b>CAD ${packageItem.price}</b></p>
        </div>
          <div className='split-paragraph'> 
          <p className='charges-statement'> Includes taxes and charges</p>
        </div>
        </div>
        <BookingForm
        packageItem={packageItem}
        availableTickets={availableTickets}
        setAvailableTickets={setAvailableTickets}
        handleUpdateTickets={handleUpdateTickets}
       />
        </div>
   </>
  );
};

export default PackageDetail;