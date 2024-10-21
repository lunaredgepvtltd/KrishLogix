import React from "react";
import teamBgImage from "./OurTeam.png";

const OurTeam = () => {
  return (
    <div
      className="relative h-[80vh] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${teamBgImage})` }}
    >
      

      <div className="relative flex flex-col justify-center items-center h-full text-black px-4">
        <h1 className="text-4xl  md:text-6xl font-bold mb-8 text-center ">
          OUR TEAM
        </h1>

        <p className="text-sm md:text-xl text-left mb-8 w-[85%]">
          Our team is dedicated to ensuring that your freight forwarding,
          transportation, and logistics needs are met with the utmost precision
          and care. Whether it’s optimizing routes, managing shipments, or
          solving logistical challenges, we’re committed to delivering solutions
          that drive your success. Let’s work together to make your logistics
          experience as smooth and efficient as possible!
        </p>

        <p className="text-sm md:text-xl text-left w-[85%]">
          We specialize in providing seamless, efficient, and reliable solutions
          to meet all your supply chain needs.
        </p>
      </div>
    </div>
  );
};

export default OurTeam;
