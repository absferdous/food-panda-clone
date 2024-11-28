import React from "react";
import citydata from "../../utils/allRestaurants.json";
import cuisine from "../../utils/cuisines.json";
import "./restaurant-profile.css";
import AddressBar from "../../component/addressbar/AddressBar";
import BreadCrumb from "../../component/breadcrumbs/BreadCrumb";
import {
  DealsCard,
  ItemProfileCard,
  ProfileCard,
} from "../../component/Cards/Cards";
import { MenuSearchBar } from "../../component/bars/Bars";

const RestaurantProfile = () => {
  const sylhet = citydata.filter((item) => {
    item.city === "sylhet";
  });

  return (
    <div className="restaurant-profile-container">
      <AddressBar cityName={"sylhet"} />
      <BreadCrumb cityName={"sylhet"} />
      <div className="restaurant-profile-top">
        <ProfileCard />
      </div>
      <div className="restaurant-profile-deals">
        <DealsCard />
      </div>
      <div className="restaurant-profile-search-bar">
        <MenuSearchBar />
      </div>
      <div className="restaurant-profile-menu">
        <ItemProfileCard />
      </div>
    </div>
  );
};

export default RestaurantProfile;
