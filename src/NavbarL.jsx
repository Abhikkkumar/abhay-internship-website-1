import React from "react";
import "./navbarL.css";
import Logo from "./img/Byteproc-logo-sub.png";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export default function NavbarL({ handleSidebar }) {
  return (
    <div className="navbar-lg ">
      <div className="nav-logo">
        <img src={Logo} alt="byteproc-logo" />
      </div>

      <div className="nav-options">
        <div>
          <ScrollLink to="home" smooth={true} duration={500}>
            Home
          </ScrollLink>
        </div>
        <div>
          <ScrollLink to='about' smooth={true} duration={500}>About Us</ScrollLink>
        </div>
        <div>
          <ScrollLink to='services' smooth={true} duration={500}>Services</ScrollLink>
        </div>
        <div>
          <ScrollLink to='testimonials' smooth={true} duration={500}>Testimonials</ScrollLink>
        </div>
        <div>
          <ScrollLink to='contact' smooth={true} duration={500}>Contact Us</ScrollLink>
        </div>
      </div>
      <span
        className="material-symbols-outlined hamburger-logo"
        onClick={() => {
          handleSidebar();
        }}
      >
        menu
      </span>
    </div>
  );
}
