import React from "react";

import "./hero.css";
import { TbCurrentLocation } from "react-icons/tb";
import { FaLocationCrosshairs } from "react-icons/fa6";
import pandapic from "../../../../assets/image/heropanda.webp";

import {
  FaChevronCircleLeft,
  FaLocationArrow,
  FaSearchLocation,
} from "react-icons/fa";
import { CiLocationArrow1, CiLocationOn, CiMedicalCross } from "react-icons/ci";
import { Input } from "../../../../component/inputs/inputs";
import { LargeBtn, LocationBtn } from "../../../../component/buttons/buttons";

const Hero = ({ id, home = true, title }) => {
  return (
    <div>
      <div className="hero-main">
        <div className="hero-left">
          <h1>{title}</h1>
        </div>

        <div className="hero-right">
          <img src={pandapic} alt="pandapic" />
        </div>
        {home && (
          <div className="hero-bottom" id={id}>
            <div className="hero-bottom-left">
              <Input />
              <div className="hero-bottom-left-child">
                <LocationBtn text={"Locate me"} icon1={<TbCurrentLocation />} />
              </div>
            </div>
            <div className="hero-bottom-right">
              <LargeBtn text={"Find food"} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Hero;
