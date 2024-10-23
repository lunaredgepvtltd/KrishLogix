import React, { useState } from "react";
import logo from "./logo.png";
import { IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";
import Menu from "../../components/Menu/Menu";
const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const [clickedSection, setClickedSection] = useState("");
  const scrollToSection = (e, section) => {
    e.preventDefault();
    setClickedSection(section);
    const sectionElement = document.querySelector(section);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="fixed  bg-white z-50 w-full h-[85px]  border-y-2 border-gray-300 flex justify-between items-center">
      {/* logo-image  */}
      <div
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="cursor-pointer"
      >
        <img src={logo} className="h-20 w-20" />
      </div>

      {/* header-options  */}
      <ul className="hidden w-[40%] font-normal h-full text-lg lg:flex justify-between items-center">
        <li>
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "#home")}
            className="hover:text-[#F27405] transition-all duration-300"
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#aboutus"
            onClick={(e) => scrollToSection(e, "#aboutus")}
            className="hover:text-[#F27405] transition-all duration-300"
          >
            About Us{" "}
          </a>
        </li>

        <li>
          <a
            href="#services"
            onClick={(e) => scrollToSection(e, "#services")}
            className="hover:text-[#F27405] transition-all duration-300"
          >
            Services
          </a>
        </li>

        <li>
          <a
            href="#careers"
            onClick={(e) => scrollToSection(e, "#careers")}
            className="hover:text-[#F27405] transition-all duration-300"
          >
            Careers
          </a>
        </li>
      </ul>

      {/* contact-us button  */}

      <div className="flex gap-3 items-center mr-2">
        <a href="#contactus">
        <button className="text-white bg-[#F27405] hover:text-[#F27405] hover:bg-white transition-all duration-300 border border-[#F27405] rounded-full px-4 py-2">
          Contact Us
        </button>
        </a>
        <div
          className="lg:hidden"
          onClick={() => {
            setToggleMenu(!toggleMenu);
          }}
        >
          <IoMenu className="text-2xl text-[#542EA6]" />
        </div>
      </div>

      {/* showing menu  */}
      {toggleMenu && <Menu handleToggleMenu={handleToggleMenu} />}
    </div>
  );
};

export default Header;
