import {React,useEffect} from "react";
import "./utils.css";
import { Link} from "react-router-dom";


const Jobcardhome = () => {
    // to scroll the window to top
    const scrollToTop = () => {
      window.scrollTo(0, 0)
  }

  
  return (
    <Link className="link-class-job-card" to="/jobview">
    <div className="home-job-card-bg">
      <div className="home-job-card-layer-1">
        <h1>Job Role 1</h1>
        <div >
          <span>₹20K – ₹30K</span>
          <span className="dot">•</span>
          <span>Full time</span>
          <span className="dot">•</span>
          <span>Remote</span>
        </div>
      </div>

      <div className="home-job-card-layer-2">
        <h1>Minimum Qualifications</h1>
        <ul>
          <li>
            3+ years of experience in product design, with a strong portfolio
            showcasing your work.
          </li>
          <li>
            Proficiency in design tools such as Sketch, Figma, Adobe Creative
            Suite, etc.
          </li>
          <li>
            Ability to create innovative and user-friendly designs that meet
            user needs.
          </li>
          <li>
            Excellent communication and teamwork skills to work effectively with
            cross-functional teams.
          </li>
        </ul>
      </div>

      <div className="home-card-apply-btn-container">
        <button onClick={scrollToTop} className="home-card-apply-btn">
          Apply Now 
         
            <svg className="svgg"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <g clip-path="url(#clip0_1538_26150)">
                <rect
                  y="32"
                  width="32"
                  height="32"
                  rx="12"
                  transform="rotate(-90 0 32)"
                  fill="#29AB87"
                />
                <path
                  d="M13.0017 22L19.0017 16L13.0017 10"
                  stroke="white"
                  stroke-width="2.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1538_26150">
                  <rect
                    y="32"
                    width="32"
                    height="32"
                    rx="12"
                    transform="rotate(-90 0 32)"
                    fill="white"
                  />
                </clipPath>
              </defs>
            </svg>
       
        </button>
      </div>
    </div>
    </Link>

  );
};

export default Jobcardhome;
