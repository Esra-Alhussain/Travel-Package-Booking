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
  const [loading, setLoading] = useState(true);

  //useEffect takes 2 arguments , 1- The function contains the code i want to run as a side effect.
  useEffect(() => {
    const fetchData = async ()=> {
      // Fetch data from the mock API
      try{
        const response = await fetch(`https://656ac402dac3630cf7274730.mockapi.io/Travel/packages/{$packageId}`);
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
     {loading ? (
      <p>Loading...</p>
     ) :(
      packageData && (
      <div>
      <p>Duration: {packageData.duration}</p>
      <h2>{packageData.destination}</h2>
      <p>Accomodation: {packageData.accommodation}</p>
      <p>Tickets Available: {packageData.ticketsAvailable}</p>
      <p>Tickets Price: {packageData.price}</p>
      <p>Season: {packageData.season}</p>
    </div>
      )
     )}
     </div>
  );
};

export default PackageDetail;
