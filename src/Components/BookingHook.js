//Creating a custom hook => to encapsulate and reuse the logic across different components

import { useState } from "react";
import axios from "axios"; // Import Axios

const BASE_URL = 'https://656ac402dac3630cf7274730.mockapi.io';
// The custom hook takes an initial number of available tickets as a parameter to make it more flexible and reusable across different packages 
const useBooking = (packageItem) => {
    // State variables to manage the number of travelers and available tickets.
    const [numTravelers, setNumTravelers] = useState(0);
    const [availableTickets, setAvailableTickets] = useState(packageItem.tickets);

    // Function to handle changes in the number of travelers input.
    const handleNumTravelersChange = (e) => {
        // Parse the initial string input value to an integer and update the state.
        // include the radix (base) as 10 to indicates decimal representation
        setNumTravelers(parseInt(e.target.value, 10));
        console.log()
    };

    // Function to handle the booking process.
    //PATCH request is telling the server to update the resource at the specified URL with the new number of travelers provided in the numTravelers variable
    const handleBookNow = async () => {
        try {
        //check if the selected number of travelers is greater than the available tickets
          if (numTravelers > availableTickets){
            //Display an error alert if there are not enough ticket 
            alert("Error: Insufficient tickets available. Please choose a smaller quantity")
            return; //Do not proceed with booking
           }

           const data = {
                 ...packageItem,
                 tickets: packageItem.tickets - numTravelers
           }
          // Simulate a booking request to the server using fetch with PATCH method
          //use get request with the id of the specific package to get the rest of the data 
          const response = await axios.put(`${BASE_URL}/Travel/packages/${packageItem.id}`, data, {
            
            headers: { //indicate that the bodyof the request is in JSON format
              'Content-Type': 'application/json', //convert the JavaScript object { numTravelers } into a JSON-formatted string
            },
            // body: JSON.stringify({ numTravelers }),
          });

          console.log(`this is the response in line 48`,response)

         // Check if the booking request was successful.
          if (response.ok) {
            // Update the available tickets in the state by subtracting the booked quantity.
           setAvailableTickets((prevTickets) => prevTickets - numTravelers)

            // Display a confirmation window with booking details.
            const confirmBooking = window.confirm(`Booking successful for ${numTravelers} travelers. Available tickets: ${availableTickets - numTravelers}`);
          
            // If the user cancels the confirmation, revert the available tickets.
            if (!confirmBooking) {
                setAvailableTickets((prevTickets) => prevTickets + numTravelers);
               }
          } else {
            // Log an error message if the booking request fails.
            console.error('Booking failed');
          }
        } catch (error) {
          console.error('Error booking travel package:', error);
        }
      };

    // Return an object with the state variables and functions for external use.
      return { numTravelers, handleNumTravelersChange, handleBookNow };
    };
    
    export default useBooking;



