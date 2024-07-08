import React from "react";
import "./utils.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div>
      <div className="nav-container">
        <div>
          <img className="nav-logo" src={logo} />
        </div>

        <ul className="nav-links-container">
          <li>Assessment</li>
          <li>Jobs</li>
          <li>Life at Gigleaz</li>
          <li>Hiring Tips</li>
          <li>Certifications</li>
        </ul>

        <div>
          <button  className="nav-button-container">Take Assessment  <svg 
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0_1364_24484)">
              <path
                d="M2 11.7188H22"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.2842 17.433L21.9985 11.7188"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.2842 6.00391L21.9985 11.7182"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1364_24484">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg></button>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
