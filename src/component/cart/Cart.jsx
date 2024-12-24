import React, { useContext } from "react";
import "./cart.css";
import { LargeBtn, RoundBtnWithSymbol } from "../buttons/buttons";
import { RxCross2 } from "react-icons/rx";

import { toggler, totalCounter } from "../../myFunc/myfunc";
import { cartContext } from "../../context/CartContext";
import YourItems from "../Cards/YourItems";
import CartSlider from "../sliders/CartSlider";

const Cart = () => {
  const {
    product,
    productList,
    singlerestaurantContext,
    setsinglerestaurantContext,
    showCart,
    setshowCart,
  } = useContext(cartContext);
  console.log("singleproduct recieved from cart", product);
  console.log("productList recieved from cart", productList);
  const handleCrossBtn = (e) => {
    e.stopPropagation();
    setshowCart(false);
  };
  return (
    <>
      <div className="cart-container">
        <div className="cart-nav">
          <div className="cart-nav-left">
            <h3>{singlerestaurantContext[0].name}</h3>
          </div>
          <div className="cart-nav-right">
            <RoundBtnWithSymbol icon={<RxCross2 />} onClick={handleCrossBtn} />
          </div>
        </div>
        <div className="cart-header">
          <div className="cart-header-delivery-btn">
            <p>delivery</p>
          </div>
          <div className="cart-header-pickup-btn">
            <p>pickup</p>
          </div>
        </div>
        <div className="cart-middle">
          <YourItems />
        </div>
        <div className="cart-slider-container">
          <h1>Cart slider</h1>
          <CartSlider />
        </div>
        <div className="cart-footer">
          <div className="cart-footer-price">
            <div className="cart-footer-price-label">
              <strong>Total</strong>
              <br />
              <p>(incl. fees and taxes)</p>
            </div>
            <div className="cart-footer-price-value">
              <p>Tk.{product?.price}</p>
            </div>
          </div>
          <div className="cart-footer-summary">
            <a href="">See Summary</a>
          </div>
          <div className="cart-footer-payment-btn">
            <LargeBtn text={"Review payment and address"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
