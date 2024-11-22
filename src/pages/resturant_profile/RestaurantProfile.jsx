import React from "react";
import citydata from "../../utils/allRestaurants.json";
import cuisine from "../../utils/cuisines.json";
import "./restaurant-profile.css";
import AddressBar from "../../component/addressbar/AddressBar";
import BreadCrumb from "../../component/breadcrumbs/BreadCrumb";
import { ProfileCard } from "../../component/Cards/Cards";

const RestaurantProfile = () => {
  const sylhet = citydata.filter((item) => {
    item.city === "sylhet";
  });

  return (
    <div className="container">
      <AddressBar cityName={"sylhet"} />
      <BreadCrumb cityName={"sylhet"} />
      <div className="top">
        <ProfileCard />
      </div>
    </div>
  );
};

export default RestaurantProfile;
