import React from 'react'
import { useParams } from "react-router-dom";
import BookingForm from '../Components/BookingForm';
import PackageDetail from '../Components/PackageDetail';

// import package details 


function OnePackage() {
    // fetch 
    const { id } = useParams();
    // const package pla pla= packages.id
  return (
    // compenets and u will pass the data here form this parent to the childerns 
    <div>OnePackage
        {/* package detials {packages.id} */}
        {/* book form {package , setpackage } */}
        <PackageDetail/>
         <BookingForm/>
    </div>
  )
}

export default OnePackage