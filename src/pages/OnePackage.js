import React, { useState, useEffect } from 'react';
import BookingForm from '../Components/BookingForm';
import PackageDetail from '../Components/PackageDetail';
import { useParams } from "react-router-dom"; //to get the package ID from the URL parameters. 

// import package details 


function OnePackage({packages }) {
  //packageData is a state variable that will store the data fetched from the server API.
  //setPackageData is a function that been provides to update the value of packageData
  //useState(null) initializes packageData with an initial value of null.
   const [packageData, setPackageData] = useState(null);

   const { id } = useParams();
   const selectedPackage  = packages.find((pkg) => pkg.id === id);
   //fetch the travel package data using useEffect hook or side effects in functional components
   useEffect(() =>{
    const fetchPackageData = async () => {
      // try block contains the code that attempts to fetch data. If successful, the data is extracted 
      // using response.json() and then used to update the state variable packageData using setPackageData.
      try{
        const response = await fetch(`https://656ac402dac3630cf7274730.mockapi.io/Travel/packages/${selectedPackage.id}`)
        const data = await response.json(); //extracts the JSON data from the response 
        setPackageData(data); //The extracted data is then used to update the packageData state 
      }catch (error){
        console.error('Error fetching the package data', error)
      }
    };
    // Invoke the fetchPackageData function when the component mounts
    fetchPackageData();
   }, [id]); // The empty dependency array means this effect runs once when the component mounts
  //  When this array is empty, the effect runs only once when the component mounts. 
  //  This is useful for fetching data when the component is initially rendered.

  console.log('Value of packageData:', packageData);

   return (
     // compenets and u will pass the data here form this parent to the childerns 
     <div>
      {/* This a ternary conditional expression */}
      {selectedPackage ? ( // Check if packageData is available before rendering
      <>
         {/* Render PackageDetail and pass the data as props */}
        <PackageDetail packageItem={selectedPackage}/>
         {/* Render BookingForm and pass the data as props */}
         <BookingForm packageItem={selectedPackage}/>
         </>
      ) : (
        <p> Loading...</p>
          )}
    </div>
  );
}

export default OnePackage

    //   // fetch 
  //   const { id } = useParams();
  //   // const package pla pla= packages.id
  //       {/* package detials {packages.id} */}
  //       {/* book form {package , setpackage } */}