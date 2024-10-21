import React from 'react';

const CareerPage = () => {
  return (
    <div id='careers' className="w-full  bg-[#542EA6] h-[500px] p-5 flex flex-col items-center justify-center">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white">Join Our Team</h1>
        <p className="text-2xl text-white mt-4">
          Interested in joining us? Reach out to us with your resume at the email below!
        </p>
      </div>

      {/* Display Email Section */}
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md text-center">
        <p className="text-lg font-medium mb-4">Contact us at:</p>
        <a
          href="mailto:careers@krishlogix.com"
          className="text-[#F27405] text-2xl font-bold hover:underline"
        >
          careers@krishlogix.com
        </a>
      </div>
    </div>
  );
};

export default CareerPage;
