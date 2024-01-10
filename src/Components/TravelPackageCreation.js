import React from "react";
import { useState } from "react";
import "../Styles/TravelPackageCreation.css";


function TravelPackageCreation({ Packages, setPackages }) {
  // how  the data should look like when posting 
  const initialPackageState = {
    itinerary: {
      destination: "",
      duration: "",
      season: "",
      accommodation: "",
    },
    tickets: "",
    price: "",
    pic: "",
    description:"",
    reviews: [
      {
        name: "",
        comment: "",
        rating: "",
      },
    ],
    overallrating: "",
  };

  const [NewPackages, setCreatePackages] = useState(initialPackageState);

  // to handle the change in itinerary ONLY
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setCreatePackages((Packages) => ({
      ...Packages,
      itinerary: {
        ...Packages.itinerary,
        [name]: value,
      },
    }));
  };
  // to handle the change in the rest of the object
  const handleInputChangetwo = (event) => {
    const { name, value } = event.target;
    setCreatePackages((Packages) => ({
      ...Packages,
      [name]: value,
      
    }));
  };

  const handleAddPackage = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://656ac402dac3630cf7274730.mockapi.io/Travel/packages",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(NewPackages),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      // Update the state with the response data
      setPackages([...Packages, data]);

      // Reset the form fields to the initial state
      setCreatePackages(initialPackageState);

    //  show the user that the package has been created 
      alert("the package has been created succesfully");
      
      // Log the entire response to the console
      console.log("Server response:", data);
    } catch (error) {
      // Handle errors if the POST request fails
      console.error("Error submitting travel package:", error);
    }
  };

  return (
    <div class="container">
      <h1>
        <span>Create Your</span> Traveler’s Experiences
      </h1>
      <div className="form">
        <form onSubmit={handleAddPackage}>
          {/* Itinerary Section */}
          <label class='labelTravelCreation' htmlFor="destination">Destination</label>
          <input
            type="text"
            id="destination"
            name="destination"
            placeholder="City, Country"
            value={NewPackages.itinerary.destination}
            onChange={handleInputChange}
            required
          />

          <label class='labelTravelCreation' htmlFor="duration">Duration</label>
          <input
            type="number"
            min="0"
            id="duration"
            name="duration"
            placeholder="Days"
            value={NewPackages.itinerary.duration}
            onChange={handleInputChange}
            required
          />

          <label class='labelTravelCreation' htmlFor="seasons">Season</label>
          <select
            id="seasons"
            name="season"
            value={NewPackages.itinerary.season}
            onChange={handleInputChange}
            required
          >
            <option value="Winter">Winter</option>
            <option value="Spring">Spring</option>
            <option value="Summer">Summer</option>
            <option value="Autumn">Autumn</option>
          </select>

          <label class='labelTravelCreation' htmlFor="accommodation">Accommodation</label>
          <input
            type="text"
            id="accommodation"
            name="accommodation"
            placeholder="Hotels Or Airbnb"
            value={NewPackages.itinerary.accommodation}
            onChange={handleInputChange}
            required
          />

          {/* Tickets Section */}
          <label class='labelTravelCreation' htmlFor="tickets">Tickets</label>
          <input
            type="number"
            min="0"
            id="tickets"
            name="tickets"
            placeholder="Number of Tickets avalible"
            value={NewPackages.tickets}
            onChange={handleInputChangetwo}
            required
          />

          {/* Price Section */}
          <label class='labelTravelCreation' htmlFor="price">Price</label>
          <input
            type="number"
            min="0"
            id="price"
            name="price"
            placeholder="Price only in dollar "
            value={NewPackages.price}
            onChange={handleInputChangetwo}
            required
          />

          {/* Picture Section */}
          <label class='labelTravelCreation' htmlFor="pic">Picture</label>
          <input
            type="url"
            id="pic"
            name="pic"
            placeholder="Url of the photo"
            value={NewPackages.pic}
            onChange={handleInputChangetwo}
            required
          />
          {/* description Section */}
          <label class='labelTravelCreation' htmlFor="description">Description</label>
          <textarea id="description" 
          name="description" 
          rows="4" 
          cols="50"
          placeholder="Write short description with maximum 150 letter"
          value={NewPackages.description}
          onChange={handleInputChangetwo}></textarea>
          

          <button type="submit">Add Package</button>
        </form>
      </div>
    </div>
  );
}

export default TravelPackageCreation;
