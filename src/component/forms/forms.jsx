import React from "react";
import "./forms.css";
import { ImCancelCircle } from "react-icons/im";
import { IconBtn } from "../buttons/buttons";
import { FcGoogle } from "react-icons/fc";
import { PiAppleLogo } from "react-icons/pi";
import facebook from "../../assets/icons/facebook.svg";

import apple from "../../assets/icons/apple.svg";

export const SignUpForm = ({ onClick }) => {
  return (
    <div className="form-container">
      <div className="form-header">
        <IconBtn icon={<ImCancelCircle />} onclick={onClick} />
      </div>
      <div className="form-welcome">
        <div className="form-welcome-title">
          <h3>Welcome!</h3>
          <p>Sign up or log in to continue </p>
        </div>
      </div>
      <div className="form-buttons">
        <div className="form-btn-container signup-facebook">
          <div className="form-btn-logo form-facebook-logo">
            <img src={facebook} alt="fb-logo" />
          </div>
          <div className="form-btn-title">Continue with Facebook</div>
        </div>

        <div className="form-btn-container signup-google">
          <div className="form-btn-logo">
            <FcGoogle />
          </div>
          <div className="form-btn-title">Continue with Google</div>
        </div>

        <div className="form-btn-container signup-apple">
          <div className="form-btn-logo form-apple-logo">
            <img src={apple} alt="" />
          </div>
          <div className="form-btn-title">Continue with Apple</div>
        </div>
        <p style={{ color: "dimgrey", fontSize: "small" }}>or</p>

        <div className="form-btn-container form-logIn">
          <div className="form-btn-title ">Log in</div>
        </div>
        <div className="form-btn-container form-signUp">
          <div className="form-btn-title ">Sign-up</div>
        </div>
      </div>
      <div className="form-footer">
        <p>
          By signing up, you agree to our{" "}
          <span style={{ color: "red" }}>
            {" "}
            Terms and Conditions and <br /> Privacy Policy.
          </span>
        </p>
      </div>
    </div>
  );
};
