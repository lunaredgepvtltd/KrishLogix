import React from "react";
import BgLandingSm from "./BgLandingSm.png"
import BgLandingPage from "./BgLandingPage.png"

const LandingPage = () => {


  return (
    
    <div
      className="md:h-full h-auto w-full flex items-center justify-center  "
    >
      <div className="relative h-auto w-full">
      <img src={BgLandingPage} className=" hidden md:block w-full h-full bg-cover"/>
      <img src={BgLandingSm} className="md:hidden block w-full h-full bg-cover"/>
      </div>
      <div className="absolute flex flex-col h-auto w-full items-end justify-center px-8 text-sm md:text-3xl lg:text-4xl font-semibold text-black">
        <h1 className=" font-bold">Driving excellence in Dynamic World</h1>
        <h1>Your trusted partner in freight forwarding</h1>
        <h1> transportation and logistics.</h1>
      </div>
    </div>
  );
};

export default LandingPage;
