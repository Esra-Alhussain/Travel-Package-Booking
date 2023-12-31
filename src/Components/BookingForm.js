import React from 'react';
import { useState } from 'react';
import axios from "axios"; // Import Axios

// This component responsibility is to Handle the booking functionality for a travel package by Allows users to input the number of travelers and book the selected package
// PackageItem = An object representing the details of the selected travel package. It's passed down from the parent (PackageDetails)
const BookingForm = ({ packageItem, availableTickets,setAvailableTickets, handleUpdateTickets }) => {
    console.log('Props in BookingForm:', packageItem, availableTickets, handleUpdateTickets);
    console.log('packageItem:', packageItem );
    console.log('This is the availableTickets', availableTickets)

    //I use the useState hook to manage the state of numTravelers and it change over time (as users interact with the input).
    // numTravelers: This variable holds the current state value.
    // setNumTravelers: This function is used to update the state. When call     
    // Initialize numTravelers state with a default value of 1.
    const [numTravelers, setNumTravelers] = useState(1);

    // This function will be called when the user changes the value in the number input.
    //This function is responsible for updating the numTravelers state in the input field
    // const handleNumTravelersChange =(e) => {
    //     // Update the numTravelers state with the new value entered by the user in the number input.
    //     //e.target.value: Retrieves the current value of the input field.
    //     // Parse the initial string input value to an integer and update the state.
    //     // include the radix (base) as 10 to indicates decimal representation
    //     setNumTravelers(parseInt(e.target.value, 10));
    //     console.log('Num Travelers:', numTravelers);
    //    };
    

    //This function will be called when the "Book Now" button is clicked.
    // send a booking request to the server with the number of travelers.
    // Update available tickets on successful booking.
    // sending a PATCH request to the server with the numTravelers.
    //If the server responds with success (status code 200-299), it updates the local state to reflect the reduced number of available tickets. If there is an error during this process, it logs an error message.
    const handleBookNow = async () => {  //async keyword indicates that this function can perform asynchronous operations.
     //Checks if the packageItem and its required properties are defined. If not, it logs an error and returns a loading message.
     if (!packageItem || !packageItem.itinerary || !packageItem.tickets) {
        console.error('Error: Package item is undefined');
        return <p>Loading...</p>;
      }
        
    try{
         //Checks if the selected number of travelers is greater than the available tickets. If so, it displays an error alert and does not proceed with the booking
         if (numTravelers > availableTickets){
            //Display an error alert if there are not enough ticket 
            alert("Error: Insufficient tickets available. Please choose a smaller quantity")
            return; //Do not proceed with booking
           }
           // Send booking request to the mockApi with numTravelers
           // Update available tickets on successful booking
           const data = {
            ...packageItem,
            tickets: packageItem.tickets - numTravelers
           }
        // Simulate a booking request to the server using fetch with PATCH method
        //await waits for that Promise to resolve
        const response = await axios.put(`https://656ac402dac3630cf7274730.mockapi.io/Travel/packages/${packageItem.id}`, data, {
            headers: {
                'Content-Type': 'application/json', // Set the content type to JSON
            },
        });
        // Check if the booking was successful
        // if (response.status >= 200 && response.status < 300) {
        //     //Update available tickets in the parent component
        //     handleUpdateTickets(numTravelers);
        //     console.log('Booking successful');

        //    handleUpdateTickets(numTravelers);

            // Display a confirmation window with booking details.
            const newTickets = Number(availableTickets - numTravelers) 
            console.log('This is the availableTickets', availableTickets)
            console.log('This is the numTravelers', numTravelers)

                const confirmBooking = window.confirm(
                `Booking successful for ${numTravelers} travelers. Available tickets: ${newTickets}`);
            
            //If the user confirms the booking, proceed with updating available tickets.
            if (confirmBooking) {
                // Update available tickets in the parent component
                // setAvailableTickets((prevTickets) => prevTickets + numTravelers);
                handleUpdateTickets(numTravelers);
                console.log('Booking successful');
            } else {
                // If the user cancels the confirmation, revert the available tickets.
                console.log("this is a setAvilableTickets", setAvailableTickets);
                const cancelConfirmed = window.confirm('Are you sure you want to cancel this booking?');

            if (cancelConfirmed) {
                // Call the cancellation function
                handleCancellation();
            }
          }
        }
        catch(error){ //catch the error
         // Handle errors that might occur during the booking process
         console.error('Error booking travel packagr:',error);
        }
    }

      // This function will be called when the user changes the value in the number input.
    // const handleNumTravelersChange = (e) => {
    //     setAvailableTickets(parseInt(e.target.value, 10));
    //     };
        

    //this function ensures that the state is updated appropriately when the user changes the number of travelers in the input field, and it is a crucial part of keeping your component's state and the UI in sync
    //onChange={(e) => setNumTravelers(parseInt(e.target.value, 10))}

    const handleCancellation = async () => {
        try {
        const data ={
            ...packageItem,
            tickets: packageItem.tickets + numTravelers,
        };

        const response = await axios.put(
            `https://656ac402dac3630cf7274730.mockapi.io/Travel/packages/${packageItem.id}`,
        data,
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }
        );
        //check if the cancellation was successful 
        if (response.status >= 200 && response.status < 300){
           //update available tickets in the parent component 
           handleUpdateTickets(-numTravelers); //the negative sign to increase the available tickets
           console.log('Cancellation successful');
        }else{
            console.error('Error cancelling booking:', response.statusText);
        }
        } catch (error) {
            console.error('Error cancelling booking:', error);
        }
      };

    return(
        <div>
            {/* JSX for the booking form */}
            <label htmlFor="travelers">Number of Travelers:</label>
            <input
                type="number"
                id="travelers"
                name="travelers"
                value={numTravelers}
                onChange={(e) => setNumTravelers(parseInt(e.target.value, 10))}
                />
            <button className='book-btn' onClick={handleBookNow}>Book Now</button>
        </div>
    )
 };
 export default BookingForm;

