import React, { useState, useEffect } from 'react';
import BookingForm from '../Components/BookingForm';
import PackageDetail from '../Components/PackageDetail';  //1- Import the Child Component in the Parent Component 
import { useParams } from "react-router-dom"; //to get the package ID from the URL parameters. 


function OnePackage({packages }) {
  //packageData is a state variable that will store the data fetched from the mockAPI.
  //setPackageData is a function that been provides to update the value of packageData
  //useState(null) initializes packageData with an initial value of null.
  //  const [packageData, setPackageData] = useState();

   const { id } = useParams();
   const selectedPackage  = packages && packages.find((pkg) => pkg.id === id);


   return (
     // compenets and u will pass the data here form this parent to the childerns 
     <div>
      {/* This a ternary conditional expression */}
      {selectedPackage ? ( // Check if packages is available before rendering
       <>
        <PackageDetail packageItem={selectedPackage}
        />
         {/* Render PackageDetail and pass the data as props */}
         {/* pass the necessary props as attributes to the packageDetail component */}
         {/* Receive Props in Child Component */}
       </>
      ) : (
        <p> Loading...</p>
          )}
    </div>
  );
}

export default OnePackage;

