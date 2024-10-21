import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const getSize = () => {
    if (window.innerWidth < 640) {
      return 20;
    } else if (window.innerWidth < 768) {
      return 20;
    }
    return 25;
  };

  const iconSize = getSize();
  return (
    <>
      <div className="bg-gradient-to-r from-[#ffffff] to-[#cdcdcd] h-full w-full ">
        <div className="footer-blk ">
          <div className="flex flex-col md:flex-row justify-between gap-5 p-[2%] ">
            <div>
              <h4 className="font-bold text-2xl  mb-[2%]">Registered Office</h4>
              <h5 className="font-medium text-lg md:text-xl mb-1">KrishLogiX Pvt. Ltd.</h5>
              <p >
                Shelton Sapphire, B-Wing, Office <br /> no. 904, Plot no 18 &
                19, Sector 15,
                <br /> CBD, Belapur, Navi Mumbai,
                <br /> Maharashtra - 400614
              </p>
              Telephone
              <br />
              Email: info@krishlogix.com
            </div>
            <div className="flex justify-between flex-row md:flex-row md:justify-evenly md:gap-16 p-[3%]">
              <div>
                <h5 className="font-bold text-xl md:text-lg">About Us</h5>
                <ul>
                  <li>
                    <a href="#">Downloads</a>
                  </li>
                  <li>
                    <a href="#">Policies</a>
                  </li>
                  {/* <li>
                    <a href="#">Career</a>
                  </li> */}
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-xl md:text-lg">Services</h5>
                <ul>
                  <li>
                    <a href="#">Freight Forwarding</a>
                  </li>
                  <li>
                    <a href="#">Transportation</a>
                  </li>
                  <li>
                    <a href="#">Logistics</a>
                  </li>
                  <li>
                    <a href="#">Warehousing</a>
                  </li>
                  <li>
                    <a href="#">Custom Clearance</a>
                  </li>
                </ul>
                <div className="flex justify-items-end gap-4 mt-6">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-blue-600 hover:text-black"
                >
                  <FaFacebook size={iconSize} />
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-blue-400 hover:text-black"
                >
                  <FaTwitter size={iconSize} />
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="  text-blue-700 hover:text-black"
                >
                  <FaLinkedin size={iconSize} />
                </a>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="  text-pink-600 hover:text-black"
                >
                  <FaInstagram size={iconSize} />
                </a>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cpy-right text-sm pb-[2%] text-center font-medium md:text-lg text-slate-600 ">
          <p>© Copyright 2024. KrishLogiX Pvt. Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
