import React from "react";
import "./city-home.css";
import cityData from "../../utils/allRestaurants.json";
import AddressBar from "../../component/addressbar/AddressBar";
import Hero from "../homepage/layouts/hero/Hero";
import BreadCrumb from "../../component/breadcrumbs/BreadCrumb";

const CityHome = () => {
  return (
    <>
      <div className="city-home-container">
        <div className="city-home-addressbar">
          <AddressBar cityName={"Sylhet"} />
        </div>
        <div className="city-home-hero">
          <Hero
            home={false}
            title={"Food Delivery from Sylhet’s Best Restaurants"}
          />
        </div>
        <BreadCrumb cityName={"sylhet"} />
      </div>
    </>
  );
};

export default CityHome;
