import React from 'react';
import Slider from 'react-slick'; // Import the react-slick slider
import "slick-carousel/slick/slick.css";  // Import slick-carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick-carousel theme

import approach from "./approach.png";
import experience from "./experience.png";
import global from "./global.png";
import solution from "./solution.png";
import technology from "./technology.png";

// Reusable FeatureCard component
function FeatureCard({ image, title }) {
  return (
    <div className="relative rounded-lg mx-0 md:mx-4  md:mb-8 ">
      <h1 className="absolute text-xl md:text-2xl text-center mt-5 font-bold text-gray-800 mb-4 inset-x-0">
        {title}
      </h1>
      <img src={image} className="rounded-3xl md:w-full border-4 border-[#311c5f] md:h-auto w-[300px] h-[300px] mx-auto" alt={title} />
    </div>
  );
}

function WhyChooseUs() {
  // Slider settings for small devices
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="h-full w-full overflow-hidden pt-[10%] md:pt-[5%]">
      <h2 className="text-3xl md:text-5xl font-semibold text-center mb-10 md:mb-8">Why Choose Us?</h2>

      {/* Slider for small screens */}
      <div className="block md:hidden h-[400px] ">
        <Slider {...settings}>
          <FeatureCard image={experience} title="Experience and Expertise" />
          <FeatureCard image={approach} title="Proven Approach" />
          <FeatureCard image={global} title="Global Reach" />
          <FeatureCard image={solution} title="Tailored Solutions" />
          <FeatureCard image={technology} title="Advanced Technology" />
        </Slider>
      </div>

      {/* Regular layout for larger screens */}
      <div className="hidden md:flex min-h-screen flex-wrap items-center justify-center">
        <FeatureCard image={experience} title="Experience and Expertise" />
        <FeatureCard image={approach} title="Proven Approach" />
        <FeatureCard image={global} title="Global Reach" />
        <FeatureCard image={solution} title="Tailored Solutions" />
        <FeatureCard image={technology} title="Advanced Technology" />
      </div>
    </div>
  );
}

export default WhyChooseUs;
