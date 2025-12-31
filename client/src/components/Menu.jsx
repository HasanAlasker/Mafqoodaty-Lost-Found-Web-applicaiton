import React from "react";
import { useState, useEffect } from "react";

function Menu({ isOpen, onClose }) {

  return (
    <div className={`open-menu ${isOpen ? "menu-open" : "menu-closed"}`}>
      <div className="close-ham">
        <i className="ri-close-large-line white x-icon" onClick={onClose}>
          <span className="close-tag">close</span>
        </i>
      </div>

      <a
        href="#home"
        className={activeSection === "home" ? "goldText" : ""}
      >
        Home
      </a>
      <hr className="" />
      <a
        href="#howitworks"
        className={activeSection === "howitworks" ? "goldText" : ""}
      >
        How It Works
      </a>
      <hr className="" />
      <a
        href="#safety"
        className={activeSection === "safety" ? "goldText" : ""}
        onClick={handleLinkClick}
      >
        Safety
      </a>
      <hr className="" />
      <a
        href="#earlyaccess"
        className={activeSection === "earlyaccess" ? "goldText" : ""}
        onClick={handleLinkClick}
      >
        Early Access
      </a>
    </div>
  );
}

export default Menu;
