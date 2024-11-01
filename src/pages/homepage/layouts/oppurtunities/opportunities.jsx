import React from "react";
import "./opportunities.css";

export const Opportunities = ({
  title1,
  title2,
  heading1,
  heading2,
  logo,
  text,
}) => {
  return (
    <>
      <div className="new-opportunities-container">
        <div className="opportunities-features">
          <div className="opportunities-single-feature-one">
            <div className="opportunities-single-feature-banner">
              <img src={logo} alt="reason1x" />
            </div>
            <div className="opportunities-single-feature-content">
              <h4>{heading1}</h4>
              <p>{text}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
