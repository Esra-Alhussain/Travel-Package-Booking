import './App.css';
import { useState, useEffect  } from 'react';



import TravelPackageCreation from './Components/TravelPackageCreation';

import PackageBrowsing from './Components/PackageBrowsing';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import { Route, Routes } from "react-router-dom";
import Home from './pages/Home.js';
import AllPackages from './pages/AllPackages.js';
import OnePackage from './pages/OnePackage.js';

function App() {
   // a state variable to store the selected package ID
  const [Packages,setPackages]=useState([]);
  useEffect(() => {
    fetch("https://656ac402dac3630cf7274730.mockapi.io/Travel/packages")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  console.log(Packages);
  return (
    <div>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/AllPackages" element={<AllPackages packages={Packages}/>}/>
      <Route path="/AllPackages/:id" element={<OnePackage />} />
      </Routes>
      
     

    {/* <TravelPackageCreation setPackages={setPackages} Packages={Packages}/> */}
    {/* hello please write your compenent here to test how it looks then 
    delete it when you sure that it is working.. we will put there the nav bar 
    and the routes for the pages.. */}
      


      {/* <PackageBrowsing packages={Packages} /> */}
      


    </div>
  );

}

export default App;
