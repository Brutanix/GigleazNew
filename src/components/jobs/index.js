import React from "react";
import "./home.css";
import { IoMdSearch } from "react-icons/io";
import Dropdownhome from "../../utils/dropdown-home";
import Jobcardhome from "../../utils/jobcard-home";
import Footer from "../../utils/footer";
import Paginationhome from "../../utils/materialComponent/pagination";

const Home = () => {
  return (
    <div>
      {/* _______________________________section-hero_______________________________________________________ */}

      <div className="hero-container">
        <h1 className="hero-main-heading">Find Your Dream Job with Gigleaz</h1>
        <div className="hero-inputs-holder-container">
          <div className="hero-input-container">
            <IoMdSearch className="input-icon" />
            <input type="text" placeholder="Search Role" />
          </div>

          <div className="hero-input-container">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              color="#646464"
              fill="none"
            >
              <path
                d="M12.9981 6.5H11.0019C8.13196 6.5 6.19701 9.56909 7.32753 12.328C7.48501 12.7124 7.84633 12.9615 8.24612 12.9615H8.9491C9.18605 12.9615 9.39259 13.1302 9.45006 13.3706L10.3551 17.1567C10.5438 17.9462 11.222 18.5 12 18.5C12.778 18.5 13.4562 17.9462 13.6449 17.1567L14.5499 13.3706C14.6074 13.1302 14.814 12.9615 15.0509 12.9615H15.7539C16.1537 12.9615 16.515 12.7124 16.6725 12.328C17.803 9.56909 15.868 6.5 12.9981 6.5Z"
                stroke="currentColor"
                stroke-width="1.5"
              />
              <path
                d="M14.5 4C14.5 5.38071 13.3807 6.5 12 6.5C10.6193 6.5 9.5 5.38071 9.5 4C9.5 2.61929 10.6193 1.5 12 1.5C13.3807 1.5 14.5 2.61929 14.5 4Z"
                stroke="currentColor"
                stroke-width="1.5"
              />
              <path
                d="M7 16.5L6 16.5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 21.5L12 22.5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18 16.5L17 16.5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <input type="text" placeholder="Search Location" />
          </div>

          <div>
            <button className="hero-search-button">Search</button>
          </div>
        </div>
      </div>

      {/* _______________________________section-2_______________________________________________________ */}
      <div className="section-2-bg">
        <h1 className="section2-heading">
          Here are this week's popular job openings.
        </h1>
      </div>

      {/* _______________________________section-jobs_______________________________________________________ */}

      <div className="jobs-bg-container">
        <div className="jobs-left-container">
          <Dropdownhome />
          <Dropdownhome />
          <Dropdownhome />
          <Dropdownhome />
        </div>

        <div className="jobs-right-container">
          <div className="jobs-card-container">
            <h1>Job Type 1</h1>
            <Jobcardhome />
            <Jobcardhome />
            <Jobcardhome />
            <Jobcardhome />
            <Jobcardhome />
          </div>
          <div className="jobs-card-container">
            <h1>Job Type 2</h1>
            <Jobcardhome />
            <Jobcardhome />
            <Jobcardhome />
            <Jobcardhome />
            <Jobcardhome />
          </div>

          <div className="pagination-container">
           <Paginationhome/>
          </div>
        </div>
      </div>

     {/* _________________________________footer section____________________________________________________ */}
     <Footer/>
    </div>
  );
};

export default Home;
