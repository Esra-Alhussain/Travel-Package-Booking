//Creating a custom hook => to encapsulate and reuse the logic across different components

import { useState } from "react";

const useBooking = () => {
    const [numTravelers, setNumTravelers] = useState(0);

    const handleNumTravelersChange = (e) => {
        setNumTravelers(e.target.value);
    };

    const handleBookNow = async () => {
        try {
          // Simulate a booking request to the server using fetch with PATCH method
          const response = await fetch(`https://656ac402dac3630cf7274730.mockapi.io/Travel/packages/{$packageId}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ numTravelers }),
          });
    
          if (response.ok) {
            console.log('Booking successful');
          } else {
            console.error('Booking failed');
          }
        } catch (error) {
          console.error('Error booking travel package:', error);
        }
      };
    
      return { numTravelers, handleNumTravelersChange, handleBookNow };
    };
    
    export default useBooking;



