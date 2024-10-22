import React from "react";
import BgLandingSm from "./BgLandingSm.png";
import BgLandingPage from "./BgLandingPage.png";

const LandingPage = () => {
  return (
    <div
      className="md:h-full h-auto w-full flex items-center justify-center  "
      id="home"
    >
      <div className="relative flex flex-col justify-between md:pt-0 pt-[22%] h-auto w-full">
        <img
          src={BgLandingPage}
          className=" hidden md:block w-full h-full bg-cover"
        />
        <img
          src={BgLandingPage}
          className="md:hidden block w-full h-[300px] md:h-full bg-cover"
        />
      </div>
      <div className="absolute  flex flex-col h-full w-full pt-[33%] md:pt-[16%] lg:gap-56 gap-[135px] items-center justify-center px-8 text-sm md:text-3xl lg:text-4xl font-semibold text-black">
        <div className="bg-white rounded-3xl p-2 md:p-4 bg-opacity-65"><h1 className="lg:text-5xl font-bold">Driving excellence in Dynamic World</h1></div>
        <div className="bg-white rounded-3xl p-2 md:p-4 bg-opacity-65"><h1 className="text-center">Your trusted partner in freight forwarding
       transportation and logistics.</h1></div>
      </div>
    </div>
  );
};

export default LandingPage;
