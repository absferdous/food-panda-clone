import React from "react";
import { CiUser } from "react-icons/ci";
// import { PiShoppingBagOpen } from "react-icons/pi";
import { FaChevronDown } from "react-icons/fa";
import { IoBagRemoveOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import "./navbar.css";
import { IconBtn, LanguageBtn, LogoBtn, PrimaryBtn } from "../buttons/buttons";
import { useState } from "react";
import { SignUpForm } from "../forms/forms";
import { Outlet, useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  const [showSignup, setShowSignup] = useState(false);
  const handleSignUp = () => {
    setShowSignup(!showSignup);
    // alert("testing");
  };
  return (
    <div className="navbar-container">
      <Outlet />
      <div className="navbar">
        {showSignup && <SignUpForm onClick={handleSignUp} />}
        <div className="navbar-left">
          <IconBtn icon={<CiUser />} id={"usericon"} onClick={handleSignUp} />
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
    </div>
  );
};

export default Navbar;
