//The PackageDetails component will render the details of a selected travel package. 
// import React, { useState, useEffect } from 'react';
import '../Styles/PackageBooking.css'
import { BsStars } from "react-icons/bs";
// import BookingForm, { numTravelers, handleNumTravelersChange } from './BookingForm';
import { useState } from 'react';
import useBooking from './BookingHook';


//({ packageData }) is a destructuring assignment, extracting the packageData property from the props object.
// equivalent version using the function keyword
// function PackageDetails(props) {
//   const { packageData } = props;
//   // Component logic here
// }
//The props object contains all the properties that were passed to the component when it was used.
//These properties are specified by the parent component that renders the PackageDetails component.
//packageData as a prop (data for a specific travel package) and manages its internal state using the useState hook
//<PackageDetails packageData={examplePackage} />

const PackageDetail = ({packageItem, onBookNow}) => {
  // setAvailableTickets =>  the previous state of the availableTickets variable.
  const [availableTickets, setAvailableTickets] = useState(packageItem.tickets);
  const { numTravelers, handleNumTravelersChange, handleBookNow } = useBooking();

  console.log(`this is the tickets `,availableTickets)

  //When this function is called (by clicking a button), it updates the state of availableTickets using setAvailableTickets.
  const handleBooking = (numTravelers) => {
    //setAvailableTickets => function to update the state variable availableTickets, when called, it triggers a re-render of the component with the updated state.
    //prevTickets as a parameter, calculate the new state value based on the previous state 
    //React automatically provides the previous state value to the function you pass to setAvailableTickets.
    // Inside this anonymus function, calculate the new value for availableTickets by subtracting numTravelers from the previous value
    setAvailableTickets((prevTickets) => prevTickets - numTravelers);//the result of the functionn is the new state of the availableTickets variable.
  };

  // const handleBookingInPackageDetail = async () => {
  //   // Custom logic in PackageDetail if needed
  //   console.log('Booking initiated in PackageDetail with numTravelers:', numTravelers);
  //   onBookNow(numTravelers);
  // };

  // setAvailableTickets(function(prevTickets) {
  //   return updateAvailableTickets(prevTickets, numTravelers);
  // });

    // State to  stores the details of the selected travel package
  // const [packageData, setpackageData] = useState(null);
    // State to indicates whether the data is still being fetched 
    //loading state can also be useful for handling errors during data fetching
    //enables conditionally render different components based on whether data is still being fetched or if it has been successfully loaded. 
  // const [loading, setLoading] = useState(true);

  // //useEffect takes 2 arguments , 1- The function contains the code i want to run as a side effect.
  // useEffect(() => {
  //   const fetchData = async ()=> {
  //     // Fetch data from the mock API
  //     try{
  //       // ${packageId}
  //       const response = await fetch(`https://656ac402dac3630cf7274730.mockapi.io/Travel/packages/1`);
  //       const data = await response.json();

  //       //update the state with the fetched data
  //       setpackageData(data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     } finally{
  //       // Set loading to false once data is fetched (or if an error occurs)
  //       setLoading(false);
  //     }
  //   };
        // Call the fetchData function
        // fetchData();
        //the second argument of useEffect, is a dependency  array, it consists of packageId variable that useEffect depends on
        //When packageId in the dependency array changes(if the user selects a different travel package),
        // the useEffect will be re-run.
        //the dependency array should not be empty[] because the effect will run once after the initial render
        // Dependency array ensures useEffect runs when packageId changes
  // }, [packageId]); 
 
  return (
      // if the 'selectedPackage' =true >>> shows a loading message
      // else check 'packageData' = exist >>> it displays detailed information about a travel package */}
    
      //  it's checking if packageData is truthy (not null or undefined), it proceeds to render the details inside the
      //this is the shorthand : {packageData &&
      //  packageData !== null && packageData !== undefined &&  ( 
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
        <p className='statement'><b>Tickets Available: </b>{packageItem.tickets}</p>
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

        <div className=' price-section'>
        <div className='split-paragraph'>
        <p className='price-amount'><b>CAD ${packageItem.price}</b></p>
        {/* <BookingForm className='book-btn' onBookNow={handleBooking} /> */}
        <div className='traveler-form'>
            <label>
                Number of Travelers: 
                <input 
                type="number"

           // Set the value of the input to the current value of the numTravelers state.                              
                value={numTravelers} 
          // Attach the handleNumTravelersChange function to the input's onChange event.
                onChange={handleNumTravelersChange} 
                min="1"
                />
            </label>
            {/* <BookingForm onBookNow={handleBooking}/> */}
            <button onClick={handleBookNow}>Book Now</button>
            {/* <BookingForm
              onBookNow={handleBookingInPackageDetail}
              numTravelers={numTravelers}
              handleNumTravelersChange={handleNumTravelersChange}
            />  */}

            {/* <p>Available Tickets: {availableTickets}</p> */}
        </div>
        {/* <button className='book-btn'>Book</button> */}
        </div>
        <div className='split-paragraph'> 
        <p className='charges-statement'> Includes taxes and charges</p>
        </div>

        </div>
        </div>
        <div className='review-section'>
        <h2>Traveler’s Reviews</h2>
        <ul>
      {/*Map = is used to iterate over the array of reviews (packageData.reviews) and transform each review object into a JSX element */}
        {packageItem.reviews.map((review,index) => ( //review: This parameter represents each individual element (each review object) in the array 
          //  The resulting JSX elements are then wrapped in a <ul> (unordered list) to create a list of reviews.
          //index paramete is the index (position) of the current review within the array
          <li key={index}> 
            <p>Name: {review.name}</p>
            <p>Comment: {review.comment}</p>
            <p>Rating: {review.rating}</p>
          </li>
        ))}
      </ul>
         </div>
      </>
  );
};

export default PackageDetail;
