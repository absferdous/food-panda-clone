import React from "react";
import "./bread-crumb.css";
// import '../../pages/homepage/layouts/city-grid/'

const BreadCrumb = ({ cityName }) => {
  return (
    <div className="bread-crumb-container">
      <div className="bread-crumb-pagelink">
        <a href="">Homepage</a>
      </div>
      <div className="bread-crumb-city">
        <p>{cityName}</p>
      </div>
    </div>
  );
};

export default BreadCrumb;
