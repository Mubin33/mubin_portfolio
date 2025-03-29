import React, { useState } from 'react';
import Home from './Home';
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const App = () => {
  const [time, setTime] = useState(true);
  
    // Hide the Welcome component after 3 seconds
    setTimeout(() => {
      setTime(false);
    }, 1100);
  return (
    <div>
      <div className='container mx-auto'>
        {time ? "": <Navbar/>}
      </div>
      <div className='min-h-screen bg-black'>
      <Outlet/>
      </div>
      <div className=" bg-[#140808] ">
      {time ? "": <Footer/>} 
              </div>
    </div>
  );
};

export default App;