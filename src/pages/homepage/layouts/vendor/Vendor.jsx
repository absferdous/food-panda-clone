import React from "react";
import "./vendor.css";

import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { useNavigateWithScroll } from "../../../../hooks/MyHooks";

const Vendor = ({ heading, imgurl, subHeading, paragraph = [] }) => {
  const navigate = useNavigateWithScroll();

  const handleNavigate = () => {
    navigate("/partner");
  };

  return (
    <section>
      <div className="vendor-main">
        <div className="vendor-top">
          <h1>{heading}</h1>
        </div>
        <div className="vendor-middle">
          <img src={imgurl} alt="" />
        </div>
        <div className="vendor-bottom">
          <h3>{subHeading}</h3>
          {paragraph.map((para, index) => {
            return (
              <>
                <div className="vendor-bottom-p" key={uuidv4()}>
                  <p>{para}</p>
                </div>
              </>
            );
          })}

          <button onClick={handleNavigate}>Get started</button>
        </div>
      </div>
    </section>
  );
};

export default Vendor;
