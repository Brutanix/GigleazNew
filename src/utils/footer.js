import React from "react";
import footerlogo from "../assets/footerlogo.png";

const Footer = () => {
  return (
    <div className="footer-bg-container">
      <div className="footer-part-1-bg">
        <img src={footerlogo} />
        <p>Copyright © 2024 gigleaz Pvt Ltd All rights reserved</p>
      </div>

      <div className="footer-part-2-bg">
        <div className="footer-part-2-innercontainer">
          <h1>Services</h1>
          <ul>
            <li>Gigleaz Assessments</li>
            <li>GigQuest</li>
            <li>GigNova</li>
            <li>GigInternships</li>
            <li>GigDoctrine</li>
          </ul>
        </div>
        <div className="footer-part-2-innercontainer">
          <h1>Company</h1>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Quest</li>
            <li>Assessment</li>
          </ul>
        </div>
        <div className="footer-part-2-innercontainer">
          <h1>Features</h1>
          <ul>
            <li>We’re Hiring</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>

      <div className="footer-part-3-bg">
        <div className="footer-part-2-innercontainer">
          <h1>Reach us at</h1>
          <ul>
            <li>1800 7767 6662</li>
            <li>email@gigleaz.com</li>
          </ul>
        </div>
        <div className="footer-part-2-innercontainer">
          <h1>Services</h1>
          <ul>
            <li>
              Gigleaz Pvt Ltd 12th Floor, Orbit Building, Hyderabad Knowledge
              City, Raidurg, Hyderabad- 500019
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
