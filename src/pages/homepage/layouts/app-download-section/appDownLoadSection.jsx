import React from "react";
import "./appDownLoadSection.css";
import { TfiApple } from "react-icons/tfi";
import { TbBrandAppgallery } from "react-icons/tb";
import { PiGooglePlayLogoFill } from "react-icons/pi";
import phonePic from "../../../../assets/image/home-foodpanda-apps.png";
import apple from "../../../../assets/icons/appstore.svg";
import appgallery from "../../../../assets/icons/appgallery.svg";
import google from "../../../../assets/icons/google.svg";
import barcode from "../../../../assets/image/bdhomepageqrcode (1).png";

const AppDownLoadSection = () => {
  return (
    <>
      <div className="appdownload-section-container">
        <div className="appdownload-header-title">
          <h1>Put us in your pocket</h1>
        </div>
        <div className="appdownload-section-content">
          <div className="appdownload-section-left">
            <div className="appdownload-section-left-logo">
              <img src={barcode} alt="" width={100} />
            </div>
            <div className="appdownload-section-title">
              <h3>Download the food and groceries you love</h3>
            </div>
            <div className="appdownload-section-text">
              <p>
                It's all at your fingertips – the restaurants and shops you
                love. Find the right food and groceries to suit your mood, and
                make the first bite last. Go ahead, download us.
              </p>
            </div>
            <div className="appdownload-section-svgs">
              <img src={apple} alt="" />
              <img src={google} alt="" />
              <img src={appgallery} alt="" />
            </div>
          </div>

          <div className="appdownload-section-right">
            <div className="appdownload-section-banner">
              <img src={phonePic} alt="phone pic" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppDownLoadSection;
