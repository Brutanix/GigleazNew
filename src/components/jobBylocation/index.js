import React from "react";
import "./joblocation.css";
import jobexplorecardimage1 from "../../assets/explorejobcareimg-1.png";
import location_job_card_img_2 from "../../assets/job-bylocation-card-img-2.png";
import location_job_card_img_3 from "../../assets/job-bylocation-card-img-3.png";
import Footer from "../../utils/footer";

const Data = [
  {
    country: "singapore",
    image: jobexplorecardimage1,
    openings: "1201 Opening",
  },
  {
    country: "malaysia",
    image: location_job_card_img_2,
    openings: "950 Openings",
  },
  {
    country: "thailand",
    image: location_job_card_img_3,
    openings: "800 Openings",
  },
  {
    country: "indonesia",
    image: jobexplorecardimage1,
    openings: "700 Openings",
  },
  {
    country: "vietnam",
    image: location_job_card_img_2,
    openings: "650 Openings",
  },
  {
    country: "philippines",
    image: location_job_card_img_3,
    openings: "600 Openings",
  },
  {
    country: "myanmar",
    image: jobexplorecardimage1,
    openings: "500 Openings",
  },
  {
    country: "cambodia",
    image: location_job_card_img_2,
    openings: "400 Openings",
  },
  {
    country: "laos",
    image: location_job_card_img_3,
    openings: "300 Openings",
  },
];

const JobbylocationCard = (props) => {
  const { each } = props;
  const { country, image, openings } = each;
  return (
    <div className="jobbylocation-card-container">
      <img src={image} />
      <div className="jobbylocation-card-text-bg">
        <h1>{country}</h1>
        <p>
          {openings}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <g clip-path="url(#clip0_1613_32193)">
              <path
                d="M5 11.9961H19"
                stroke="#646464"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 15.9961L19 11.9961"
                stroke="#646464"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15 7.99609L19 11.9961"
                stroke="#646464"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1613_32193">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </p>
      </div>
    </div>
  );
};

const JobyByLocation = () => {
  return (
    <div className="explore-office-bg">
      <div className="explore-office-top-bg">
        <p>Connecting You to Our Worldwide Network</p>
        <h1>Explore Our Global Offices</h1>
      </div>

      <div className="explore-office-bottom-bg">
        <div className="explore-office-left-bg">
          <div className="custom-checkbox-bg">
            <input id="checkbox-1" type="checkbox" />
            <label for="checkbox-1">Europe</label>
          </div>
          <div className="custom-checkbox-bg">
            <input id="checkbox-2" type="checkbox" />
            <label for="checkbox-2">North America</label>
          </div>
          <div className="custom-checkbox-bg">
            <input id="checkbox-3" type="checkbox" />
            <label for="checkbox-3">South America</label>
          </div>
          <div className="custom-checkbox-bg">
            <input id="checkbox-4" type="checkbox" />
            <label for="checkbox-4">Asia</label>
          </div>
          <div className="custom-checkbox-bg">
            <input id="checkbox-5" type="checkbox" />
            <label for="checkbox-5">Australia</label>
          </div>


        </div>

        <div className="explore-office-right-bg">
          {Data.map((each) => (
            <JobbylocationCard each={each} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default JobyByLocation;
