import React from "react";
import SidebarLogo from "./img/blue-logo.png";
import "./sidebar.css";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

export default function Sidebar({ sidebarClass, handleSidebar }) {
  return (
    <div className={sidebarClass}>
      <div className="sidebar-top">
        <div className="side-logo">
          <img src={SidebarLogo} alt="logo" />
        </div>
        <span
          className="material-symbols-outlined close-icon"
          onClick={() => {
            handleSidebar();
          }}
        >
          close
        </span>
      </div>
      <div className="side-list-container">
        <div className="side-list">
          <ScrollLink to="/" smooth={true} duration={500}>
            Home
          </ScrollLink>
        </div>
        <div className="side-list">
          <ScrollLink to="about" smooth={true} duration={500}>
            About Us
          </ScrollLink>
        </div>
        <div className="side-list">
          <ScrollLink to="services" smooth={true} duration={500}>
            Services
          </ScrollLink>
        </div>
        {/* <div className="side-list">
          <ScrollLink to="/" smooth={true} duration={500}>
            Portfolios
          </ScrollLink>
        </div> */}
        <div className="side-list">
          <ScrollLink to="testimonials" smooth={true} duration={500}>
            Testimonials
          </ScrollLink>
        </div>
        <div className="side-list">
          <ScrollLink to="contact" smooth={true} duration={500}>
            Contact Us
          </ScrollLink>
        </div>
      </div>
    </div>
  );
}
