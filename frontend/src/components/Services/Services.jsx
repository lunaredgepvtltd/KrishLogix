import React, { useState, useEffect } from 'react';
import first from './first.png';
import second from './second.png';
import third from './third.png';
import fourth from './fourth.png';
import { useMediaQuery } from "react-responsive";

const Services = () => {
  const SmallDevice = useMediaQuery({ maxWidth: 768 });
  
  // State for the current slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Services images and text
  const services = [
    { name: 'Freight Forwarding', image: first },
    { name: 'Transportation', image: second },
    { name: 'Logistics', image: third },
    { name: 'Custom Clearance', image: fourth }
  ];

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex + 1) % services.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevIndex) => (prevIndex - 1 + services.length) % services.length);
  };

  // Auto scroll effect
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className='w-full h-[80vh] md:h-[80vh] flex flex-col justify-between' id="#services">
      {/* services-heading */}
      <div className='h-[40%] w-full flex justify-center items-center'>
        <h1 className='text-2xl md:text-4xl font-medium text-[#542EA6]'>Services</h1>
      </div>

      {/* service-boxes */}
      <div className='h-[60%] w-full flex justify-center items-center relative'>
        {SmallDevice ? (
          // Custom slider for small devices
          <div className='relative w-[95%] rounded-sm h-full flex items-start justify-center'>
            <div
              className='absolute inset-0 bg-cover bg-center transition-opacity duration-300 rounded-md'
              style={{
                backgroundImage: `url(${services[currentSlide].image})`,
                opacity: 0.6
              }}
            ></div>
            <h2 className='relative text-xl font-bold bg-white text-center w-[50%] text-black rounded-xl p-2 mt-6 z-10'>
              {services[currentSlide].name}
            </h2>
            {/* Navigation buttons */}
            <button
              className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg'
              onClick={prevSlide}
            >
              &lt;
            </button>
            <button
              className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg'
              onClick={nextSlide}
            >
              &gt;
            </button>
          </div>
        ) : (
          // Regular display for larger devices
          services.map((service, index) => (
            <div
              key={index}
              className='relative h-full w-[23%] flex justify-center items-start group'
            >
              {/* Background image with hover effect */}
              <div
                style={{
                  backgroundImage: `url(${service.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                className='absolute top-0 left-0 w-full h-full opacity-60 group-hover:opacity-100 transition-opacity duration-300'
              ></div>

              {/* text-over-service-box */}
              <h2 className='relative text-xl font-bold bg-white text-black group-hover:scale-110 transition-all duration-300 rounded-xl p-2 mt-6 z-10'>
                {service.name}
              </h2>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Services;
