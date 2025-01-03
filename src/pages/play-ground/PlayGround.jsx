import React from "react";
import "./play-ground.css";
import {
  AddaddressPopup,
  FindFoodPopup,
  ProductDetails,
} from "../../component/pop-ups/pop_ups";
import Cart from "../../component/cart/Cart";
import TestCart from "../../component/cart/CartNavbar";
import CartNavbar from "../../component/cart/CartNavbar";
const PlayGround = () => {
  return (
    <>
      <h3>PlayGround</h3>
      <div className="play-ground-container">
        <CartNavbar />
        {/* <ProductDetails /> */}
        {/* <FindFoodPopup /> */}
        {/* <AddaddressPopup /> */}
        {/* <Cart /> */}
      </div>
    </>
  );
};

export default PlayGround;
