import React from "react";
import "./play-ground.css";
import {
  AddaddressPopup,
  FindFoodPopup,
  ProductDetails,
} from "../../component/pop-ups/pop_ups";
const PlayGround = () => {
  return (
    <>
      <h3>PlayGround</h3>
      <div className="play-ground-container">
        <ProductDetails />
        {/* <FindFoodPopup /> */}
        {/* <AddaddressPopup /> */}
      </div>
    </>
  );
};

export default PlayGround;
