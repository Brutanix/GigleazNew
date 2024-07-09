import React from "react";
import footerlogo from "../assets/footerlogo-giglez.svg";
import footer_linnkein from "../assets/footer-linkedin-icon.svg"
import footer_youtube from "../assets/footer-youtube-icon.svg"
import footer_insta from "../assets/footer-instagram-icon.svg"


const Footer = () => {
  return (
    <>
    <div className="footer-bg-container">

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

<div className="icons-footer-bg-container">
<img src={footerlogo} />
<div className="footer-social-icon">
  {}
<img src={footer_insta} />

</div>
<div className="footer-social-icon">
<img src={footer_linnkein} />

</div>
<div className="footer-social-icon">
<img src={footer_youtube} />

</div>
</div>
</div>

<div className="footer-copy-right-bg">
<p>Copyright © 2024 gigleaz Pvt Ltd All rights reserved</p>
</div>
    </>
  );
};

export default Footer;
