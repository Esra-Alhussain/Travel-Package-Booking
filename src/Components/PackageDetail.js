//The PackageDetails component will render the details of a selected travel package. 

import React, { useState } from 'react';

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
    // State to store the package data
  const [packageData, setpackageData] = useState(null);
    // State to handle loading state
  const [loading, setLoading] = useState(true);

 
  return (
    <div>
      <p>Duration: {packageData.duration}</p>
      <h2>{packageData.destination}</h2>
      <p>Accomodation: {packageData.accommodation}</p>
      <p>Tickets Available: {packageData.ticketsAvailable}</p>
      <p>Tickets Price: {packageData.price}</p>
      <p>Season: {packageData.season}</p>
    </div>
  )
};

export default PackageDetail;
