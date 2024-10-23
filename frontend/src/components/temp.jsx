import React, { useEffect, useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import landing from './landing.json'; // Import the Lottie JSON file
import { init } from 'aos';
import LandingPage from './LandingPage/LandingPage';
import logo from "../assets/logo.png"

const Temp = () => {
  const [hidden, setHidden] = useState(true); // Initially hidden

  const [initial,setInitial] = useState(true);

  useEffect(() => {
    // Set an interval to toggle hidden every 15 seconds (10s hidden + 5s shown)
    const interval = setInterval(() => {
      setHidden(false);
    },10000); // Hide for 10 seconds, show for 5 seconds

    return () => clearInterval(interval); // Clean up the interval when the component unmounts
  }, []); // Re-run the effect when hidden changes

  useEffect(()=>{
   const otherInterval = setInterval(() => {
    setInitial(false)
   }, 1500);

   return ()=>{clearInterval(otherInterval)}
  },[])

  return (
   <>{hidden ?  <div className='relative w-full h-screen'>
    <Player
      autoplay
      // loop
      src={landing}
      style={{ height: 'full', width: 'full' }} // Adjust the size as needed
    />
    {(!hidden || initial) && ( // Show the h1 only when hidden is false
      // <h1 className=' text-lg lg:text-7xl absolute top-1/2 left-[30%] z-50'>KRISH-LOGISTICS</h1>
      <img src={logo} alt="logo" className=' absolute top-1/2 bottom-1/2  right-[40%]  z-40 h-[500px] w-[500px]' />
    )}
  </div> : <LandingPage/>}</>
  );
};

export default Temp;
