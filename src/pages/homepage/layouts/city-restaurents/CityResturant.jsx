import React from "react";
import "./city-resturants.css";
import { FaStar } from "react-icons/fa";
import { TiHeartOutline } from "react-icons/ti";
import { RiHeart3Line } from "react-icons/ri";
import { RiDiscountPercentFill } from "react-icons/ri";
import { PiSealPercentLight } from "react-icons/pi";
import { CiStar } from "react-icons/ci";
import star from "../../../../assets/icons/star.svg";
import percent from "../../../../assets/icons/percentage.svg";
import Offer from "../../../../component/offers/Offer";

const CityResturant = ({ name, type, ratings, offer, image, reviews }) => {
  //   const background = { background };
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="header-right">
            <TiHeartOutline />
          </div>
          <div className="header-left">
            <Offer offer={offer} />
          </div>
        </div>
        <div className="banner">
          <img src={image} alt="banner" />
        </div>
        <div className="footer">
          <div className="footer-left">
            <h3>{name}</h3>
            <p>{type}</p>
          </div>
          <div className="footer-right">
            <FaStar />
            <strong>{ratings}</strong> <span>{reviews}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default CityResturant;
