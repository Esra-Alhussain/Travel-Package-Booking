import './App.css';
import { useState, useEffect  } from 'react';
import TravelPackageCreation from './Components/TravelPackageCreation';
import Navbar from './Components/Navbar';
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
  

  return (
    <div>
    <Navbar/>
      <Routes>
      <Route path="*" element={<Home/>}/> {/*this route should match any descendant route, allowing nested routes to render properly. */}
      <Route path="/AllPackages" element={<AllPackages packages={Packages} />} />
      <Route path="/OnePackage/:id" element={<OnePackage packages={Packages}/>} />
      <Route path="/TravelPackageCreation" element={<TravelPackageCreation setPackages={setPackages} Packages={Packages} />} />
      </Routes>
      
    </div>
  );

}

export default App;
