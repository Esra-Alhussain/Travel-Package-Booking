
import './App.css';
import { useState, useEffect  } from 'react';
import AllPackages from './pages/AllPackages'




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
      
      <AllPackages packages={Packages} />
    
    </div>
  );
}

export default App;
