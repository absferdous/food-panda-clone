import React from "react";
import "./address.css";
import { CiLocationOn } from "react-icons/ci";
// import { IconBtn } from "../buttons/buttons";

const AddressBar = ({ cityName }) => {
  return (
    <>
      <div className="address-container">
        <div className="address-left">
          <button>
            <CiLocationOn />
          </button>
        </div>
        <div className="tooltip">
          <button>{cityName}</button>
          <span className="tooltiptext">
            Add your address to see restaurants that deliver to you
          </span>
        </div>
      </div>
    </>
  );
};

export default AddressBar;
