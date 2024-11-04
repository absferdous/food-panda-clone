import React from "react";
import "./pop-ups.css";

export const FindFoodPopup = ({ onClick }) => {
  return (
    <>
      <div className="popup-container">
        <div className="popup-header">
          <div className="popup-header-top">
            <div className="popup-header-top-left">logo1</div>
            <div className="popup-header-top-middle">
              <h3>Whats your exact location?</h3>
            </div>
            <div className="popup-header-top-right">logo2</div>
          </div>
          <div className="popup-header-bottom">
            <p>
              Providing your location enables more accurate search and delivery
              ETA ,seamless order tracking and personalized...
            </p>
          </div>
        </div>
        <div className="popup-searchbox">
          <div className="popup-searchbox-input">
            your street and street number
          </div>
          <div className="popup-searchbox-button">locate me button</div>
        </div>
        <div className="popup-content">MAP</div>
        <div className="popup-footer">footerbutton</div>
      </div>
    </>
  );
};
