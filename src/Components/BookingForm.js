import React from 'react';
import { useState } from 'react';
import axios from "axios"; // Import Axios

// This component responsibility is to Handle the booking functionality for a travel package by Allows users to input the number of travelers and book the selected package
// PackageItem = An object representing the details of the selected travel package. It's passed down from the parent (PackageDetails)
const BookingForm = ({ packageItem, availableTickets,setAvailableTickets, handleUpdateTickets }) => {
     // Define state variable and its setter function
  // const [isModalOpen, setIsModalOpen] = useState(false);
    //I use the useState hook to manage the state of numTravelers and it change over time (as users interact with the input).
    // numTravelers: This variable holds the current state value.
    // setNumTravelers: This function is used to update the state. When call     
    // Initialize numTravelers state with a default value of 1.
    const [numTravelers, setNumTravelers] = useState(1);
    
    //This function will be called when the "Book Now" button is clicked.
    // send a booking request to the server with the number of travelers.
    // Update available tickets on successful booking.
    // sending a PATCH request to the server with the numTravelers.
    //If the server responds with success (status code 200-299), it updates the local state to reflect the reduced number of available tickets. If there is an error during this process, it logs an error message.
    
    const handleBookNow = async () => {
      if (!packageItem || !packageItem.itinerary || !packageItem.tickets) {
        console.error('Error: Package item is undefined');
        return <p>Loading...</p>;
      }
    
      try {
        if (numTravelers > availableTickets) {
          alert("Error: Insufficient tickets available. Please choose a smaller quantity");
          return;
        }
    
        const newTickets = Number(availableTickets - numTravelers);
    
        // First confirmation
        const firstConfirmation = window.confirm(`Proceed with booking for ${numTravelers} travelers?`);
    
        if (firstConfirmation) {
          // Second confirmation
          const confirmBooking = window.confirm(
            `Booking successful for ${numTravelers} travelers. Available tickets: ${newTickets}. Confirm the booking?`
          );
    
          if (confirmBooking) {
            const data = {
              ...packageItem,
              tickets: packageItem.tickets - numTravelers,
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
    
            if (response.status >= 200 && response.status < 300) {
              // setIsModalOpen(true); // Open the modal
              handleUpdateTickets(numTravelers);
              console.log('Booking successful');
            } else {
              console.error('Error updating server:', response.statusText);
            }
          } else {
            // Revert the changes if the user cancels the second confirmation
            alert('Booking canceled. Tickets reverted.');
          }
        } else {
          // Revert the changes if the user cancels the first confirmation
          alert('Booking canceled. Tickets reverted.');
        }
      } catch (error) {
        console.error('Error booking travel package:', error);
      }
    };
    
    const handleCancellation = async () => {
      const cancelConfirmed = window.confirm('Are you sure you want to cancel this booking?');
    
      if (cancelConfirmed) {
        try {
          const data = {
            ...packageItem,
            tickets: packageItem.tickets + numTravelers,
          };
    
          // Simulate a cancellation request to the server using fetch with PATCH method
          await axios.put(
            `https://656ac402dac3630cf7274730.mockapi.io/Travel/packages/${packageItem.id}`,
            data,
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );
    
          // Update available tickets in the parent component
          handleUpdateTickets(0); // No change in available tickets
          console.log('Cancellation successful');
        } catch (error) {
          console.error('Error cancelling booking:', error);
        } finally {
          // Close the modal after handling cancellation
          // setIsModalOpen(false);
        }
      }
    };
    
    return(
        <>
        <div className='traveler-form'>
            {/* JSX for the booking form */}
            <div  className='traveler-input'>
            <label htmlFor="travelers">Number of Travelers:</label>
               <input className='input'
                type="number"
                id="travelers"
                name="travelers"
                value={numTravelers}
                //this function ensures that the state is updated appropriately when the user changes the number of travelers in the input field, and it is a crucial part of keeping your component's state and the UI in sync
                onChange={(e) => setNumTravelers(parseInt(e.target.value, 10))}
                />
            </div>
            <button className='book-btn' onClick={handleBookNow} disabled={!availableTickets}>Book Now</button>
      </div>
      {!availableTickets && <p className='No-tickets'>No tickets available for booking</p>}
      </>
    )
 };
 export default BookingForm;

