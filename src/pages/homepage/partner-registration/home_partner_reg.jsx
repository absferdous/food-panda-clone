import React from "react";
import "./home-partner-reg.css";
// import applestore from "../../../assets/partner_reg_images/applStore.svg";
// import bd_flag from "../../../assets/partner_reg_images/BD_flag.svg";
import globe_icon from "../../../assets/partner_reg_images/globe-icon.svg";
// import googlePlay from "../../../assets/partner_reg_images/googlePlay.svg";
// import hero from "../../../assets/partner_reg_images/hero_image_desktop.webp";
// import linkedin from "../../../assets/partner_reg_images/linkedin.svg";
// import logo_1 from "../../../assets/partner_reg_images/logo(1).svg";
// import logo_48 from "../../../assets/partner_reg_images/logo_48.png";
import logo from "../../../assets/partner_reg_images/logo.svg";
// import play_icon from "../../../assets/partner_reg_images/play - icon.svg;";
// import process1x from "../../../assets/partner_reg_images/process1x.png";
// import process2x from "../../../assets/partner_reg_images/process2x.png";
// import process3x from "../../../assets/partner_reg_images/process3x.png";
// import process4x from "../../../assets/partner_reg_images/process4x.png";
// import reason_3 from "../../../assets/partner_reg_images/reason_3.png";
// import reason1x from "../../../assets/partner_reg_images/reason1x.png";
// import reason2x from "../../../assets/partner_reg_images/reason2x.png";
// import story_2 from "../../../assets/partner_reg_images/story_1.jpg";
// import story_1 from "../../../assets/partner_reg_images/story_2.jpg";
// import video_male from "../../../assets/partner_reg_images/video_male_desktop.png";
// import youtube_icon from "../../../assets/partner_reg_images/youtube.svg";

const PartnerReg = () => {
  return (
    <div className="partner-container">
      <div className="partner-nav">
        <div className="nav-left">
          <div className="nav-logo">
            <img src={logo} alt="brandlogo" />
          </div>
        </div>
        <div className="nav-right">
          <button className="nav-normal-btn">Login</button>
          <div className="nav-round-button">
            <img src={globe_icon} alt="" />
          </div>
        </div>
      </div>
      <div className="partner-hero">
        <div className="hero-big-text">
          <h1>
            Boost your revenue <br />
            with <span>foodpanda!</span>
          </h1>
        </div>
        <div className="partner-small-text">
          <p>
            Sign up now and start earning more <br /> with the leading food
            delivery service foodpanda.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PartnerReg;
