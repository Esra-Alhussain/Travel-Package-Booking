import './App.css';
import { useState, useEffect  } from 'react';
import PackageBrowsing from './Components/PackageBrowsing';
import PackageDetail from './Components/PackageDetail';



function App() {
   // a state variable to store the selected package ID
   const [selectedPackageId, setSelectedPackageId] = useState(null);
  // const [Packages,setPackages]=useState([]);
  // useEffect(() => {
  //   fetch("https://656ac402dac3630cf7274730.mockapi.io/Travel/packages")
  //     .then((res) => res.json())
  //     .then((data) => setPackages(data));
  // }, []);
  // console.log(Packages);
  // return (
  //   <div>
      
  //     <PackageBrowsing packages={Packages} />
    
  //   </div>
  // );
  return(
    <div>
      {/* Responsible for displaying the packeges details */}
       <PackageDetail/>
       {/* handles the booking form */}
       {/* <BookingForm /> */}
    </div>
  );

}

export default App;
