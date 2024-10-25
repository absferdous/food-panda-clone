import React from "react";
import "./footer.css";
import {
  footerSeoBlock,
  footerContactLink,
  footerCities,
} from "./footer_utils/footer_data";
import deliveryHero from "../../../../assets/icons/deliveryhero.svg";
import instagram from "../../../../assets/icons/instragram.svg";
import facebook from "../../../../assets/icons/facebook.svg";
import { IconBtn, LogoBtn } from "../../../../component/buttons/buttons";
const Footer = () => {
  return (
    <section className="footer-container">
      <div className="footer-seoblock">
        {footerSeoBlock.map((i, index) => {
          return (
            <div className="footer-seoblock-list">
              <li key={index}>
                <a>{i}</a>
              </li>
            </div>
          );
        })}
      </div>
      <div className="footer-language-button">
        {/* <h1>language-button</h1> */}
        <button className="normal-button footer-lang-btn">বাংলা</button>
      </div>
      <div className="footer-contact-list">
        {/* <h1>contact-list</h1> */}
        {footerContactLink.map((item, index) => {
          return (
            <div className="footer-contact-list-child">
              <li key={index}>
                <a href="">{item}</a>
              </li>
            </div>
          );
        })}
        {footerCities.map((city, i) => {
          return (
            <div className="footer-contact-list-child">
              <li key={i}>
                <a href="">{city}</a>
              </li>
            </div>
          );
        })}
      </div>
      <div className="footer-branding-logos">
        <div className="footer-branding-foodpandalogo">
          <LogoBtn />
        </div>
        <div className="footer-branding-sociallinks">
          <div className="footer-branding-sociallinks-logos">
            <img src={instagram} alt="" />
          </div>
          <div className="footer-branding-sociallinks-logos">
            <img src={facebook} alt="" />
          </div>
        </div>
        <div className="footer-branding-deliveryhero">
          <img src={deliveryHero} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Footer;
