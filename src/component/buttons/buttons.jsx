import { useNavigate } from "react-router-dom";
import { BrandNameLogo, PandaLogo } from "../../assets/icons/icons";
import heroPanda from "../../assets/image/heropanda.webp";
import "./buttons.css";
import { useNavigateWithScroll } from "../../hooks/useMyHooks";

export const LogoBtn = () => {
  const navigateWithScroll = useNavigateWithScroll();
  const handleNavigate = () => {
    navigateWithScroll("/");
  };
  return (
    <>
      <div className="logobtn">
        <button className="" onClick={handleNavigate}>
          <PandaLogo /> <BrandNameLogo />
        </button>
      </div>
    </>
  );
};

export const IconBtn = ({ icon, text, onClick, id, color }) => {
  return (
    <div className="iconbtn" id={id} style={{ color: color }}>
      <button onClick={onClick}>{icon}</button>
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

// export const SignupBtn=({logo,imgurl,title,text})=>{
//   return(
//     <>
//     <div className="signup-btn-container">
//       <button className="signup-btn">
//         {imgurl && }

//         <div className="signpup-btn-logo">{logo}</div>

//       </button>
//     </div>
//     </>
//   )
// }
export const RoundBtnWithSymbol = ({ icon, onClick, size = "35" }) => {
  return (
    <div
      className="round-btn-container"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <button onClick={onClick}>{icon}</button>
    </div>
  );
};
