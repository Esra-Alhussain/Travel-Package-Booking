import React from 'react'
import { useParams } from "react-router-dom";
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
    </div>
  )
}

export default OnePackage