import { Route, Routes } from "react-router-dom";
import Navbar from '../Components/Navbar';
import HeroSection from '../Components/HeroSection';
import TravelPackageCreation from '../Components/TravelPackageCreation';// define a nested route for the TravelPackageCreation component. 

function Home() {
  return (
    <div>
        {/* <Navbar/> */}
        <HeroSection/>
        <TravelPackageCreation/>
        {/* <Routes>
        <Route path="/TravelPackageCreation" element={<TravelPackageCreation />} />
      </Routes> */}

    </div>
  )
}

export default Home