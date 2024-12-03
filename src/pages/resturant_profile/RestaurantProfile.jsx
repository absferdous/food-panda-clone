import React, { useEffect } from "react";
import citydata from "../../utils/allRestaurants.json";
// import cuisine from "../../utils/cuisines.json";
import "./restaurant-profile.css";
import { FaFire } from "react-icons/fa";
import AddressBar from "../../component/addressbar/AddressBar";
import BreadCrumb from "../../component/breadcrumbs/BreadCrumb";
import { useLocation, useNavigate } from "react-router-dom";
import {
  DealsCard,
  ItemProfileCard,
  ProfileCard,
} from "../../component/Cards/Cards";
import { useState } from "react";
import { toggler } from "../../myFunc/myfunc";
import { MenuSearchBar } from "../../component/bars/Bars";
import { ProductDetails } from "../../component/pop-ups/pop_ups";

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
  const [product, setproduct] = useState(null);
  const [loading, setloading] = useState(true);
  const [showProductDetail, setshowProductDetail] = useState(false);

  const handleProduct = (productData) => {
    setshowProductDetail(true);
    setproduct(productData);
    alert("testing product");
  };

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

  console.log("recieved the data");
  console.log(type);
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
                  onClick={() => handleProduct(item)}
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
          {type &&
            type
              .filter((item) => item.cuisine !== "Popular")
              .map((item, index) => {
                return (
                  <div
                    className="restaurant-profile-popular-single-item"
                    key={index}
                  >
                    <h3>{item.tag}</h3>
                    <ItemProfileCard {...item} />
                  </div>
                );
              })}
        </div>
      </div>
      {/* main */}

      {/* product-deatil-pop-up */}

      {showProductDetail && (
        <div className="restaurant-profile-product-detail">
          <ProductDetails
            product={product}
            onClick={() => toggler(setshowProductDetail)}
          />
        </div>
      )}

      {/* product-deatil-pop-up */}
    </div>
  );
};

export default RestaurantProfile;
