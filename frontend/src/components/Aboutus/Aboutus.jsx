
import React from "react";
import aboutImage from "./aboutImage.png";

const Aboutus = () => {
  return (
    <>
      <div
        className="main-blk bg-cover bg-center h-[100vh] w-full relative" // Keep the relative positioning
        style={{ backgroundImage: `url(${aboutImage})` }}
      id="aboutus">
        {/* Overlay Div for Mobile View Only */}
        <div className="absolute inset-0 bg-black opacity-50 z-10 lg:hidden" /> {/* Overlay only on mobile */}

        <div className="w-[90%] h-full mx-auto flex justify-center md:justify-end items-center px-4 relative z-20">
          {/* Content container */}
          <div className="w-full md:w-[50%] lg:w-[35%] h-[60%] flex flex-col justify-evenly">
            {/* Title */}
            <div className="h-[12%]">
              <h1 className="text-white text-center font-bold text-4xl md:text-4xl">
                ABOUT US
              </h1>
            </div>

            {/* Subheading and content */}
            <div>
              <h3 className="text-white text-center font-semibold text-2xl md:text-2xl mb-4">
                Welcome to KrishLogiX!
              </h3>
              <p className="text-white font-normal md:font-medium text-lg md:text-xl text-justify">
                We're excited to be your trusted partner in Freight Forwarding,
                Transportation, and Logistics.
              </p>
            </div>

            {/* Paragraph content */}
            <div>
              <p className="text-white font-medium text-lg md:text-xl text-justify mt-[5%] md:mt-0">
                Our mission is to deliver seamless, efficient, and reliable
                solutions tailored to your unique supply chain needs. Whether
                you're looking to streamline your shipping processes or optimize
                your logistics operations, we're here to help every step of the
                way. Let's navigate the complexities of the supply chain together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
