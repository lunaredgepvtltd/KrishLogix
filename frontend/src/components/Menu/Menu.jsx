import React from "react";
import logo from "./logo.png";
import { IoIosClose } from "react-icons/io";
import { Link } from "react-router-dom";
const Menu = ({ handleToggleMenu }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-auto bg-slate-100 z-40 lg:hidden  flex flex-col justify-between gap-3 transition-all duration-500 pb-3 rounded-b-lg"
      data-aos="fade-right"
      data-aos-duration="200"
    >
      {/* Mobile menu header */}
      <div className=" w-full h-auto flex justify-between items-center  border-2 border-gray-300">
        <Link to={"/"}>
          <div
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="cursor-pointer"
          >
            <img src={logo} className="h-20 w-20 mix-blend-multiply" />
          </div>
        </Link>

        <hr></hr>

        {/* Close mobile menu */}
        <button className="text-4xl text-[#542EA6] " onClick={handleToggleMenu}>
          <IoIosClose />
        </button>
      </div>

      {/* header-options  */}
      <ul className=" w-full font-normal h-full text-lg lg:flex flex-col justify-start items-center p-[2%]">
        <li className="p-2 border-b">
        <a
            href="#home"
            onClick={(e) =>{
              handleToggleMenu();
               scrollToSection(e, "#home")}}
            className="hover:text-[#F27405] transition-all duration-300"
          >
            Home
          </a>
        </li>

        <li className="p-2 border-b">
        <a
            href="#aboutus"
            onClick={(e) => {
              handleToggleMenu();
              scrollToSection(e, "#aboutus")}}
            className="hover:text-[#F27405] transition-all duration-300"
          >
            About Us{" "}
          </a>
        </li>
        
        <li className="p-2 border-b">
        <a
            href="#careers"
            onClick={(e) => {
              handleToggleMenu();
              scrollToSection(e, "#careers")}}
            className="hover:text-[#F27405] transition-all duration-300"
          >
            Careers
          </a>
        </li>

        <li className="p-2 border-b">
        <a
            href="#services"
            onClick={(e) => {
              handleToggleMenu();
              scrollToSection(e, "#services")}}
            className="hover:text-[#F27405] transition-all duration-300"
          >
            Services
          </a>
        </li>
      </ul>

      {/* contact-us button  */}

      <a href="#contactus">
      <button onClick={handleToggleMenu} className=" w-[40%] ml-2 text-white bg-[#F27405] hover:text-[#F27405] hover:bg-white transition-all duration-300 border border-[#F27405] rounded-full px-4 py-2">
        Contact Us
      </button>
      </a>
    </div>
  );
};

export default Menu;
