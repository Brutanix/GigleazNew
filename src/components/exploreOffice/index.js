import React from "react";
import "./explore.css";

const Exploreoffice = () => {
  return (
    <div className="explore-office-bg">
      <div className="explore-office-top-bg">
        <p>Connecting You to Our Worldwide Network</p>
        <h1>Explore Our Global Offices</h1>
      </div>

      <div className="explore-office-bottom-bg">
        <div className="explore-office-left-bg">
            <div className="explore-country-widget">
              <input id="explore-country-check1" type="checkbox"/>
              <label for="explore-country-check1">Europa</label>
            </div>
            <div className="explore-country-widget">
              <input id="explore-country-check1" type="checkbox"/>
              <label for="explore-country-check1">North America</label>
            </div>
            <div className="explore-country-widget">
              <input id="explore-country-check1" type="checkbox"/>
              <label for="explore-country-check1">South America</label>
            </div>
            <div className="explore-country-widget">
              <input id="explore-country-check1" type="checkbox"/>
              <label for="explore-country-check1">Asia</label>
            </div>
            <div className="explore-country-widget">
              <input id="explore-country-check1" type="checkbox"/>
              <label for="explore-country-check1">Astralia</label>
            </div>

        </div>

        <div className="explore-office-right-bg">
          <div className="explore-card-container">
              <img src=""/>
              <h1>Singapore</h1>
              <p>1201 Opening -</p>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Exploreoffice;
