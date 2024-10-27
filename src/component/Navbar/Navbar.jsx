import React from "react";
import { CiUser } from "react-icons/ci";
import { PiShoppingBagOpen } from "react-icons/pi";
import { FaChevronDown } from "react-icons/fa";
import { IoBagRemoveOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import "./navbar.css";
import { IconBtn, LanguageBtn, LogoBtn, PrimaryBtn } from "../buttons/buttons";
import { useState } from "react";
import { SignUpForm } from "../forms/forms";
const Navbar = () => {
  const [showSignup, setShowSignup] = useState(false);
  const handleSignUp = () => {
    setShowSignup(!showSignup);
  };
  return (
    <div className="navbar">
      {showSignup && <SignUpForm onClick={handleSignUp} />}
      <div className="navbar-left">
        <IconBtn icon={<CiUser />} id={"usericon"} onclick={handleSignUp} />
      </div>
      <div className="navbar-middle">
        <LogoBtn />
      </div>
      <div className="navbar-right">
        <PrimaryBtn text={"Log-in"} id="loginbtn" />
        <PrimaryBtn text={"sign-up"} id="signupbtn" />
        <LanguageBtn
          icon={<TbWorld />}
          text={"ENG"}
          icon2={<FaChevronDown />}
        />
      </div>
      <IconBtn icon={<IoBagRemoveOutline />} />
    </div>
  );
};

export default Navbar;
