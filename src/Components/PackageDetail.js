//The PackageDetails component will render the details of a selected travel package. 

import React, { useState, useEffect } from 'react';

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

const PackageDetail = ({packageId}) => {
    // State to  stores the details of the selected travel package
  const [packageData, setpackageData] = useState(null);
    // State to indicates whether the data is still being fetched 
    //loading state can also be useful for handling errors during data fetching
    //enables conditionally render different components based on whether data is still being fetched or if it has been successfully loaded. 
  const [loading, setLoading] = useState(true);

  //useEffect takes 2 arguments , 1- The function contains the code i want to run as a side effect.
  useEffect(() => {
    const fetchData = async ()=> {
      // Fetch data from the mock API
      try{
        // ${packageId}
        const response = await fetch(`https://656ac402dac3630cf7274730.mockapi.io/Travel/packages/1`);
        const data = await response.json();

        //update the state with the fetched data
        setpackageData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally{
        // Set loading to false once data is fetched (or if an error occurs)
        setLoading(false);
      }
    };
        // Call the fetchData function
        fetchData();
        //the second argument of useEffect, is a dependency  array, it consists of packageId variable that useEffect depends on
        //When packageId in the dependency array changes(if the user selects a different travel package),
        // the useEffect will be re-run.
        //the dependency array should not be empty[] because the effect will run once after the initial render
        // Dependency array ensures useEffect runs when packageId changes
  }, [packageId]); 
 
  return (
    <div>
      {/* if the 'loading' =true >>> shows a loading message
      else check 'packageData' = exist >>> it displays detailed information about a travel package */}
     {loading ? (
      <p>Loading...</p>
     ) :(
      // it's checking if packageData is truthy (not null or undefined), it proceeds to render the details inside the <div>.
      //this is the shorthand : {packageData && 
      packageData !== null && packageData !== undefined &&  (
      <div>
      <img src={packageData.pic} alt="Package" />
      <h2>Destination:{packageData.itinerary.destination}</h2>
      <p>Duration: {packageData.itinerary.duration}</p>
      <p>Accomodation: {packageData.itinerary.accommodation}</p>
      <p>Tickets Available: {packageData.tickets}</p>
      <p>Tickets Price: {packageData.price}</p>
      <p>Season: {packageData.itinerary.season}</p>
      <h3>Reviews</h3>
      <ul>
      {/*Map = is used to iterate over the array of reviews (packageData.reviews) and transform each review object into a JSX element */}
        {packageData.reviews.map((review,index) => ( //review: This parameter represents each individual element (each review object) in the array 
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
      )
     )}
     </div>
  );
};

export default PackageDetail;
