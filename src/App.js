
import './App.css';
import { useState, useEffect  } from 'react';

import TravelPackageCreation from './Components/TravelPackageCreation';

import PackageBrowsing from './Components/PackageBrowsing';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';



function App() {
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
      <HeroSection/>

    <TravelPackageCreation setPackages={setPackages} Packages={Packages}/>
    {/* hello please write your compenent here to test how it looks then 
    delete it when you sure that it is working.. we will put there the nav bar 
    and the routes for the pages.. */}

      
      <PackageBrowsing packages={Packages} />
    

    </div>
  );
}

export default App;
