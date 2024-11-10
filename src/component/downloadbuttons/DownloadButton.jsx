import React from "react";
import "./download.css";

const DownloadButton = ({ logo, text, title }) => {
  return (
    <>
      <button>{logo}</button>
    </>
  );
};

export const DownloadBar = ({ img1, img2 }) => {
  return (
    <div className="downloadbar-container">
      <button>
        <img src={img1} alt="" />
      </button>
      <button>
        <img src={img2} alt="" />
      </button>
    </div>
  );
};
export default DownloadButton;
