import React from "react";
import "./mobile-menu.css";

import { MdExitToApp } from "react-icons/md";
import MobileMenuItem from "../mobile-menu-item/mobile-menu-item.component";

const MobileMenu = (props) => {
  const { active, updateMobileMenu } = props;

  return (
    <div
      className={`w-3/6 min-h-screen fixed bg-grey-darkest z-30 ${
        active === true ? "mobile-menu-enter" : "mobile-menu-exit"
      } md:hidden`}
    >
      <div id="cross-icon" className="flex justify-end bg-grey-900">
        <MdExitToApp
          onClick={() => updateMobileMenu()}
          className="text-5xl text-yellow-700 p-2 cursor-pointer"
        />
      </div>
      <div>
        <MobileMenuItem
          className="mb-2 cursor-pointer"
          onClick={() => updateMobileMenu()}
          description="Home"
          href="#"
        />
        <MobileMenuItem
          className="mb-2 cursor-pointer"
          onClick={() => updateMobileMenu()}
          description="About Me"
          href="#about-me"
        />

        <MobileMenuItem
          className="mb-2 cursor-pointer"
          onClick={() => updateMobileMenu()}
          description="Services"
          href="#services"
        />
        <MobileMenuItem
          className="mb-2 cursor-pointer"
          onClick={() => updateMobileMenu()}
          description="Projects"
          href="#projects"
        />
        <MobileMenuItem
          className="mb-2 cursor-pointer"
          onClick={() => updateMobileMenu()}
          description="Reviews"
          href="#reviews"
        />
        <MobileMenuItem
          className="mb-2 cursor-pointer"
          onClick={() => updateMobileMenu()}
          description="Contact"
          href="#contact"
        />
      </div>
    </div>
  );
};

export default MobileMenu;
