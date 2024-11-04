import React from "react";
import "./home-partner-reg.css";
import applestore from "../../../assets/partner_reg_images/appleStore.svg";
// import bd_flag from "../../../assets/partner_reg_images/BD_flag.svg";
import globe_icon from "../../../assets/partner_reg_images/globe-icon.svg";
import googlePlay from "../../../assets/partner_reg_images/googlePlay.svg";
// import hero from "../../../assets/partner_reg_images/hero_image_desktop.webp";
import linkedin from "../../../assets/partner_reg_images/linkedin.svg";
// import logo_1 from "../../../assets/partner_reg_images/logo(1).svg";
import logo_48 from "../../../assets/partner_reg_images/logo_48.png";
import logo from "../../../assets/partner_reg_images/logo.svg";
import { RegForm } from "../../../component/forms/forms";
import play_icon from "../../../assets/partner_reg_images/playicon.svg";
import process1x from "../../../assets/partner_reg_images/process1x.png";
import process2x from "../../../assets/partner_reg_images/process2x.png";
import process3x from "../../../assets/partner_reg_images/process3x.png";
import process4x from "../../../assets/partner_reg_images/process4x.png";
import reason_3 from "../../../assets/partner_reg_images/reason_3.png";
import reason1x from "../../../assets/partner_reg_images/reason1x.png";
import reason2x from "../../../assets/partner_reg_images/reason2x.png";
import { Opportunities } from "../layouts/oppurtunities/opportunities";

import story_1 from "../../../assets/partner_reg_images/story_1.jpg";
import story_2 from "../../../assets/partner_reg_images/story_2.jpg";
import video_male from "../../../assets/partner_reg_images/video_male_desktop.png";
import youtube_icon from "../../../assets/partner_reg_images/youtube.svg";

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
        <div className="partner-hero-content">
          <div className="hero-big-text">
            <h2>
              Boost your revenue <br />
              with <span>foodpanda!</span>
            </h2>
          </div>
          <div className="partner-small-text">
            <p>
              Sign up now and start earning more <br /> with the leading food
              delivery service foodpanda.
            </p>
          </div>
        </div>

        <div className="partner-form">
          <RegForm />
        </div>
      </div>
      {/* oppprtunities container */}

      <div className="new-opportunities-container">
        <div className="opportunities-title">
          <div className="opportunities-title-one">
            <h3>foodpanda brings</h3>
          </div>
          <div className="opportunities-title-two">
            <h3>new opportunities</h3>
          </div>
        </div>
        <div className="opportunities-features">
          <div className="opportunities-single-feature-one">
            <div className="opportunities-single-feature-banner">
              <img src={reason1x} alt="reason1x" />
            </div>
            <div className="opportunities-single-feature-content">
              <h4>Connect with new customers</h4>
              <p>
                Adding your business to the platform means access to thousands
                of new customers in different neighbourhoods.
              </p>
            </div>
          </div>
          <div className="opportunities-single-feature-two">
            <div className="opportunities-single-feature-banner">
              <img src={reason2x} alt="reason1x" />
            </div>
            <div className="opportunities-single-feature-content">
              <h4>Unlock revenue</h4>
              <p>
                Let customers enjoy your business from anywhere, and capture the
                interest of new ones who haven’t tried it yet
              </p>
            </div>
          </div>
          <div className="opportunities-single-feature-three">
            <div className="opportunities-single-feature-banner">
              <img src={reason_3} alt="reason1x" />
            </div>
            <div className="opportunities-single-feature-content">
              <h4>Focus on your business</h4>
              <p>
                We take care of all the payments and customer support, whilst
                our foodpanda riders take care of the delivery. Leaving you to
                focus on what matters!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* oppprtunities container */}

      {/* video overlay */}
      <div className="video-overlay-container">
        <div className="overlay-video">
          <img src={video_male} alt="video male" />
          {/* <img src={play_icon} alt="icon" /> */}
        </div>
        <div className="video-overlay-text">
          <div className="video-overlay-text-title">
            <h2>Partner with foodpanda today</h2>
          </div>
          <div className="video-overlay-text-footer">
            <p>
              Take your business to the next level by reaching new customers and
              boost your sells
            </p>
          </div>
          <div className="video-overlay-text-icon">
            <img src={play_icon} alt="you" />
          </div>
        </div>
      </div>
      {/* video overlay */}

      {/* foodpanda Process */}
      <div className="food-panda-process-title">
        <div className="opportunities-title">
          <div className="opportunities-title-one">
            <h3>We Make It</h3>
          </div>
          <div className="opportunities-title-two">
            <h3>Simple and Easy</h3>
          </div>
        </div>
      </div>
      <div className="foodpanda-process-container">
        <div className="foodpanda-process-one">
          <Opportunities
            // title1={"We make it"}
            // title2={"simple and easy"}
            logo={process1x}
            heading1={"The Customer Orders"}
            text={"The customer places an order through the foodpanda app"}
          />
        </div>

        <div className="foodpanda-process-two">
          <Opportunities
            logo={process2x}
            heading1={"You Prepare"}
            text={"The customer places an order through the foodpanda app"}
          />
        </div>
        <div className="foodpanda-process-three">
          <Opportunities
            logo={process3x}
            heading1={"we Deliver"}
            text={"The customer places an order through the foodpanda app"}
          />
        </div>
        <div className="foodpanda-process-four">
          <Opportunities
            logo={process4x}
            heading1={"Watch Your Business"}
            text={"The customer places an order through the foodpanda app"}
          />
        </div>
      </div>
      {/* foodpanda Process */}
      {/* stories */}
      <div className="story-container">
        <div className="story-one">
          <div className="story-one-left">
            <img src={story_1} alt="story1" />
          </div>
          <div className="story-one-right">
            <h4>
              Undoubtedly, you can choose Foodpanda as your delivery partner. I
              am personally satisfied with foodpanda service.
            </h4>
            <p>kini ar khai</p>
          </div>
        </div>
        {/* story-1------------------------------ */}
        {/* story-2 */}
        <div className="story-two">
          <div className="story-two-left">
            <img src={story_2} alt="story2" />
          </div>
          <div className="story-two-right">
            <h4>
              My goods have been sold a lot from Foodpanda and I have made a lot
              of profit during Covid-19 Pandemic. Thanks to their relentless
              effort.
            </h4>
            <p>Abdullah Al-Mamun Bhuiyan</p>
            <p>Abdullah Vegetable Store, Dhaka</p>
          </div>
        </div>
        {/* story-2 */}
      </div>
      {/* stories */}
      {/* faq */}
      <div className="faq-container">
        <div className="faq-title">
          <h2>Any Questions?</h2>
        </div>
        <div className="detail-box">
          <details>
            <summary>How do i get started?</summary>
            <div className="answer-list">
              <li>Step 1: Submit your restaurant information here </li>
              <li>Step 2: we will review your application request </li>
              <li>
                Step 3: Upload document such as your ID Card, Menu, Business
                License, Bank Account Statements
              </li>
              <li>
                Step 4: Fill up the contract via the link in the email to
                complete your registration
              </li>
            </div>
          </details>
        </div>
        {/* box-2 */}
        <div className="detail-box">
          <details>
            <summary>Why should my restaurant partner with foodpanda?</summary>
            <div className="answer-list">
              <p>
                As a partner with foodpanda, you will enjoy brand exposure to
                more than 1 million customers via our platform and marketing
                channels, access to our rider fleet, incremental revenue and
                business insights to help track and analyse your restaurant's
                performance!
              </p>
            </div>
          </details>
        </div>
        {/* box-3 */}
        <div className="detail-box">
          <details>
            <summary>How far do you deliver?</summary>
            <div className="answer-list">
              <p>
                Delivery radius is based off a 15-minute delivery time from your
                restaurant's location, which is approximately 2 to 3 km radius
              </p>
            </div>
          </details>
        </div>
        {/* box-4 */}
        <div className="detail-box">
          <details>
            <summary>How does a partnership with foodpanda work?</summary>
            <div className="answer-list">
              <p>
                You simply cook while we do all the rest! Give us your
                delivery-optimized menu, and food images (if you have) and we
                create your online profiles
              </p>
              <br />
              <p>
                Receive orders via a Sunmi device (with data SIM card provided)
                and prepare your food within 15 mins!
              </p>
              <br />
              <p>
                Our reliable and friendly rider will pick up the order from your
                shop and deliver it to the customer. It's that simple!
              </p>
            </div>
          </details>
        </div>
        {/* box-5 */}
        <div className="detail-box">
          <details>
            <summary>Can i stop orders if it gets too busy?</summary>
            <div className="answer-list">
              <p>
                Yes, our partners can pause orders at any time. Using our
                tablet, you can pause your store from collecting orders for a
                specific time period. You can also indicate that your store is
                busy, letting customers know to expect longer prep times.
              </p>
            </div>
          </details>
        </div>
      </div>
      {/* faq */}
      {/* footer */}
      <div className="partner-footer-container">
        <div className="partner-footer-container-header">
          <img src={logo} alt="brandlogo" />
        </div>
        <div className="partner-footer-container-middle">
          <div className="partner-footer-container-col1">
            <a href="">Company</a>

            <a href="">About us</a>

            <a href="">Terms</a>

            <a href="">Privacy policy</a>
          </div>
          <div className="partner-footer-container-col2">
            <a href="">Help</a>

            <a href="">contact</a>
          </div>
        </div>
        <div className="partner-footer-container-download">
          <img src={googlePlay} alt="" />
          <img src={applestore} alt="" />
        </div>
        <div className="partner-footer-container-bottom">
          <div className="copyright">©foodpanda 2024</div>
          <div className="partner-footer-container-bottom-logos">
            <img src={linkedin} alt="" />
            <img src={youtube_icon} alt="" />
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="recaptcha-container">
        <div className="recaptcha-logo">
          <img src={logo_48} alt="" />
        </div>
        <div className="recapctha-content">
          <div className="recpatcha-title">
            <h4>
              protected by <strong>recaptcha</strong>
            </h4>

            <p>privacy-terms</p>
          </div>
          {/* <div className="recpatcha-text"></div> */}
        </div>
      </div>
    </div>
  );
};

export default PartnerReg;
