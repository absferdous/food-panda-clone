import React from "react";
import "./test-cart.css";
import { RoundBtnWithSymbol } from "../buttons/buttons";
import { FaCross } from "react-icons/fa";
import { useState, useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import { cartContext } from "../../context/CartContext";
const CartNavbar = ({ restaurant }) => {
  const {
    product,
    productList,
    singlerestaurantContext,
    setsinglerestaurantContext,
    showCart,
    setshowCart,
  } = useContext(cartContext);
  const [btncolor, setbtncolor] = useState(false);
  const colorChanger = () => {
    setbtncolor(!btncolor);
  };
  const bgColor = btncolor ? "grey" : "white";
  const bgColor2 = btncolor ? "white" : "grey";
  return (
    <>
      <div className="test-cart-container">
        <div className="test-cart-nav">
          <h3>{restaurant}</h3>
          <div className="test-cart-nav-btn">
            <RoundBtnWithSymbol icon={<RxCross1 />} />
          </div>
        </div>
        <div className="test-car-delivery-options">
          <button
            onClick={colorChanger}
            className="pickup"
            style={{ backgroundColor: `${bgColor}` }}
          >
            pickup
          </button>
          <button
            onClick={colorChanger}
            className="delivery"
            style={{ backgroundColor: `${bgColor2}` }}
          >
            delivery
          </button>
        </div>
      </div>
    </>
  );
};

export default CartNavbar;
