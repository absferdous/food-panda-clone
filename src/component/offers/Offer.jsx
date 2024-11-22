import React from "react";
import "./offer.css";
import { RiDiscountPercentFill } from "react-icons/ri";

const Offer = ({ offer }) => {
  return (
    <div className="offer-container">
      <div className="content-one">
        <RiDiscountPercentFill />

        <p>welcome gift:free delivery</p>
        {/* <p>{offer}</p> */}
      </div>
      <div className="content-two">
        <RiDiscountPercentFill />

        {/* <p>welcome gift:free delivery</p> */}
        <p>{offer}</p>
      </div>
    </div>
  );
};

export default Offer;
