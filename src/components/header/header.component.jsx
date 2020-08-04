import React from "react";
import { RiMenu3Line } from "react-icons/ri";
import "./header.css";

const Header = (props) => {
  const { updateMobileMenu, currentSelectedMenu, updateSelectedMenu } = props;

  return (
    <nav className="h-16 navbar-gradient flex items-center justify-center fixed top-0 left-0 w-full z-20">
      <div className="flex w-4/5 justify-between">
        <div>
          <h1 className="navbar-title text-xl text-gray-100 uppercase font-bold tracking-widest">
            Uzair Amer.
          </h1>
        </div>
        <div id="nav-links" className="flex items-center">
          <ul className="text-white font-medium text-md pointer hidden md:flex">
            <li className="mr-6">
              <a
                onClick={() => updateSelectedMenu("Home")}
                className={`${
                  currentSelectedMenu === "Home" ? "navlink-selected" : ""
                }`}
                href=""
              >
                Home
              </a>
            </li>
            <li className="mr-6">
              <a
                onClick={() => updateSelectedMenu("About Me")}
                className={`${
                  currentSelectedMenu === "About Me" ? "navlink-selected" : ""
                }`}
                href="#about-me"
              >
                About Me
              </a>
            </li>
            <li className="mr-6">
              <a
                onClick={() => updateSelectedMenu("Services")}
                className={`${
                  currentSelectedMenu === "Services" ? "navlink-selected" : ""
                }`}
                href="#services"
              >
                Services
              </a>
            </li>
            <li className="mr-6">
              <a
                onClick={() => updateSelectedMenu("Projects")}
                className={`${
                  currentSelectedMenu === "Projects" ? "navlink-selected" : ""
                }`}
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li className="mr-6">
              <a
                onClick={() => updateSelectedMenu("Reviews")}
                className={`${
                  currentSelectedMenu === "Reviews" ? "navlink-selected" : ""
                }`}
                href="#reviews"
              >
                Reviews
              </a>
            </li>
            <li className="">
              <a
                onClick={() => updateSelectedMenu("Contact")}
                className={`${
                  currentSelectedMenu === "Contact" ? "navlink-selected" : ""
                }`}
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="block md:hidden">
          <RiMenu3Line
            className="text-3xl text-yellow-700 cursor-pointer"
            onClick={() => updateMobileMenu()}
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
