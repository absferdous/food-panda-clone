import { BrandNameLogo, PandaLogo } from "../../assets/icons/icons";
import heroPanda from "../../assets/image/heropanda.webp";
import "./buttons.css";

export const LogoBtn = () => {
  return (
    <>
      <div className="logobtn">
        <button className="">
          <PandaLogo /> <BrandNameLogo />
        </button>
      </div>
    </>
  );
};

export const IconBtn = ({ icon, text, onclick, id }) => {
  return (
    <div className="iconbtn" id={id}>
      <button>{icon}</button>
    </div>
  );
};

export const PrimaryBtn = ({ icon, text, onclick, id, color }) => {
  return (
    <div
      className="primarybtn"
      // style={}
      id={id}
    >
      <button>{text}</button>
    </div>
  );
};
export const LanguageBtn = ({ icon, text, onclick, id, icon2 }) => {
  return (
    <div className="languagebtn" id={id}>
      <button>{icon}</button>
      <button>{text}</button>
      <button>{icon2}</button>
    </div>
  );
};

export const LargeBtn = ({ icon, text, onClick }) => {
  return (
    <div className="largebtn">
      <button>{text}</button>
    </div>
  );
};

export const LocationBtn = ({ icon1, icon2, text, onClick }) => {
  return (
    <div className="locationbtn">
      <button>{icon1}</button>
      <button>{text}</button>
    </div>
  );
};
