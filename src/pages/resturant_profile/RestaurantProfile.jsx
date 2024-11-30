import React, { useEffect } from "react";
import citydata from "../../utils/allRestaurants.json";
// import cuisine from "../../utils/cuisines.json";
import "./restaurant-profile.css";
import { FaFire } from "react-icons/fa";
import AddressBar from "../../component/addressbar/AddressBar";
import BreadCrumb from "../../component/breadcrumbs/BreadCrumb";
import { useLocation } from "react-router-dom";
import {
  DealsCard,
  ItemProfileCard,
  ProfileCard,
} from "../../component/Cards/Cards";
import { useState } from "react";
import { MenuSearchBar } from "../../component/bars/Bars";

const RestaurantProfile = () => {
  const { state } = useLocation();
  const {
    no,
    id,
    name,
    image,
    ratings,
    reviews,
    offer,
    city,
    cuisine,
    address,
  } = state;
  const [type, setType] = useState(null);
  const [loading, setloading] = useState(true);
  const restaurantType = state.cuisine;
  useEffect(() => {
    fetch(
      `https://restaurant-server-ni4y.onrender.com/api/food-items/${restaurantType}`
    )
      .then((res) => res.json())

      .then((data) => setType(data))
      .catch((error) => console.error("data not found", error))
      .finally(() => setloading(false));
  }, []);
  const popularDishes = type && type.filter((item) => item.tag === "Popular");

  const signatureItems =
    type && type.filter((item) => item.tag === "Signature Items");

  const appetizers = type && type.filter((item) => item.tag === "Appetizers");
  const mainDishes = type && type.filter((item) => item.tag === "Mains");

  // console.log("recieved the data");
  // console.log(type);
  // console.log("popular");
  // console.log(popularDishes);

  return (
    <div className="restaurant-profile-container">
      <AddressBar cityName={"sylhet"} />
      <BreadCrumb cityName={"sylhet"} />
      <div className="restaurant-profile-top">
        <ProfileCard {...state} />
      </div>
      <div className="restaurant-profile-deals">
        <DealsCard />
      </div>
      <div className="restaurant-profile-search-bar">
        <MenuSearchBar />
      </div>
      <div className="restaurant-profile-menu"></div>

      <div className="restaurant-profile-popular-container">
        <div className="restaurant-profile-popular-header">
          <div className="restaurant-profile-popular-header-title">
            <FaFire /> <h3>Popular</h3>
          </div>
          <div className="restaurant-profile-popular-header-description">
            <p>Most trending now</p>
          </div>
        </div>
        <div className="restaurant-profile-popular-items">
          {popularDishes &&
            popularDishes.map((item, index) => {
              return (
                <div
                  className="restaurant-profile-popular-single-item"
                  key={index}
                >
                  <ItemProfileCard {...item} />
                </div>
              );
            })}
        </div>
      </div>
      {/* main */}
      <div className="restaurant-profile-main-dishes-container">
        <div className="restaurant-profile-popular-header">
          <div className="restaurant-profile-popular-header-title">
            <FaFire /> <h3>Main</h3>
          </div>
          <div className="restaurant-profile-popular-header-description">
            <p>Most trending now</p>
          </div>
        </div>
        <div className="restaurant-profile-popular-items">
          {mainDishes &&
            mainDishes.map((item, index) => {
              return (
                <div
                  className="restaurant-profile-popular-single-item"
                  key={index}
                >
                  <ItemProfileCard {...item} />
                </div>
              );
            })}
        </div>
      </div>
      {/* main */}
    </div>
  );
};

export default RestaurantProfile;
