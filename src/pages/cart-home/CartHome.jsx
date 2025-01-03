import React from "react";
import { useContext, useState } from "react";
import { cartContext } from "../../context/CartContext";
import "./cart-home.css";
import { RxCross1, RxCross2 } from "react-icons/rx";
import { LargeBtn, RoundBtnWithSymbol } from "../../component/buttons/buttons";
import { FaCross } from "react-icons/fa";
import YourItems from "../../component/Cards/YourItems";
import CartSlider from "../../component/sliders/CartSlider";

const CartHome = () => {
  const [border, setborder] = useState(false);
  const {
    totalPrice,
    product,
    productList,
    singlerestaurantContext,
    setsinglerestaurantContext,
    showCart,
    setshowCart,
  } = useContext(cartContext);
  console.log("singlerescontext", singlerestaurantContext);
  const handleBorder = () => {
    setborder(!border);
  };
  const pickupborderColor = border ? "red" : "white";
  const deliveryborderColor = border ? "white" : "red";
  return (
    <>
      <div className="cart-home-container">
        <div className="cart-home-nav">
          <div className="cart-home-title">
            <h3>
              {singlerestaurantContext && singlerestaurantContext[0].name}
            </h3>
          </div>
          <div className="cart-home-nav-btn">
            <RoundBtnWithSymbol icon={<RxCross1 />} />
          </div>
        </div>
        <div className="cart-home-delivery-options">
          <button
            onClick={handleBorder}
            className="pickup"
            style={{ border: `1px solid ${pickupborderColor}` }}
          >
            pickup
          </button>
          <button
            onClick={handleBorder}
            className="delivery"
            style={{ border: `1px solid ${deliveryborderColor}` }}
          >
            delivery
          </button>
        </div>
        <div className="cart-home-purchased-items">
          {productList.length > 0 ? (
            <>
              <YourItems />
            </>
          ) : (
            <>
              <div className="cart-home-empty-cart">
                <h3>your cart is empty</h3>
              </div>
            </>
          )}
        </div>
        <div className="cart-home-item-slider">
          <CartSlider />
        </div>
        <div className="cart-home-billing">
          <div className="cart-home-billing-label">
            <strong>Total</strong>
            <br />
            <p>(incl. fees and taxes)</p>
          </div>
          <div className="cart-home-billing-value">
            <p>Tk.{totalPrice}</p>
          </div>
        </div>
        <div className="cart-home-review-btn">
          <LargeBtn text={"Review payment and address"} />
        </div>
      </div>
    </>
  );
};

export default CartHome;
