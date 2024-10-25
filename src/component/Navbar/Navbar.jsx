import React from "react";
import { CiUser } from "react-icons/ci";
import { PiShoppingBagOpen } from "react-icons/pi";
import { FaChevronDown } from "react-icons/fa";
import { IoBagRemoveOutline } from "react-icons/io5";
import { TbWorld } from "react-icons/tb";
import "./navbar.css";
import { IconBtn, LanguageBtn, LogoBtn, PrimaryBtn } from "../buttons/buttons";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <IconBtn icon={<CiUser />} id={"usericon"} />
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
