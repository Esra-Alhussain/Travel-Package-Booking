import React from 'react';
import { useState } from 'react';

//pass a callback prop (onBookNow) 
const BookingForm = ({onBookNow}) => {
    //I use the useState hook to manage the state of numTravelers and it change over time (as users interact with the input).
    // numTravelers: This variable holds the current state value.
    // setNumTravelers: This function is used to update the state. When call     
      // Initialize numTravelers state with a default value of 1.
    const [numTravelers, setNumTravelers] = useState(1);
    const [availableTickets, setAvailableTickets] = useState(0);

    // This function will be called when the user changes the value in the number input.
    const handelNumTravelersChange =(e) => {
    // Update the numTravelers state with the new value entered by the user in the number input.
    //e.target.value: Retrieves the current value of the input field.
        setNumTravelers(e.target.value);
    };

    //This function will be called when the "Book Now" button is clicked.
    // send a booking request to the server with the number of travelers.
    // Update available tickets on successful booking.
    // sending a PATCH request to the server with the numTravelers.
    //If the server responds with success (status code 200-299), it updates the local state to reflect the reduced number of available tickets. If there is an error during this process, it logs an error message.
    const handleBookNow = async () => {  //async keyword indicates that this function can perform asynchronous operations.
    // Send booking request to the mockApi with numTravelers
    // Update available tickets on successful booking
    try{
        // Simulate a booking request to the server using fetch with PATCH method
        //await waits for that Promise to resolve
        const response = await fetch(`https://656ac402dac3630cf7274730.mockapi.io/Travel/packages/{$packageId}`,{
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json', // Set the content type to JSON
            },
            body: JSON.stringify({ numTravelers }), // send the numTravelers data and convert it to JSON format
        });
        // Check if the booking was successful
        if (response.ok){
        // Update available tickets in the state
        console.log('Booking successful');

        }else{
        // Handle the case where the booking was not successful
        console.error('Booking failed');
        }
        }
        catch(error){ //catch the error
         // Handle errors that might occur during the booking process
         console.error('Error booking travel packagr:',error);
        }
    }
   
    

    return(
        <div >
            <label>
                Number of Travelers: 
                <input 
                type="number"

           // Set the value of the input to the current value of the numTravelers state.                              
                value={numTravelers} 
          // Attach the handleNumTravelersChange function to the input's onChange event.
                onChange={handelNumTravelersChange} 
                min="1"
                />
            </label>
            <button onClick={handleBookNow}>Book Now</button>
            {/* <p>Available Tickets: {availableTickets}</p> */}
        </div>
    )
 };
export default BookingForm;