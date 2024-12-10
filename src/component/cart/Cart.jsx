import React, { useContext } from "react";
import "./cart.css";
import { LargeBtn } from "../buttons/buttons";
import { totalCounter } from "../../myFunc/myfunc";
import { cartContext } from "../../context/CartContext";

const Cart = () => {
  const { product, productList } = useContext(cartContext);
  console.log("singleproduct recieved from cart", product);
  console.log("productList recieved from cart", productList);

  return (
    <>
      <div className="cart-container">
        <div className="cart-header">
          <div className="cart-header-delivery-btn">
            <p>delivery</p>
          </div>
          <div className="cart-header-pickup-btn">
            <p>pickup</p>
          </div>
        </div>
        <div className="cart-middle">
          <h3>Hungry?</h3>
          <p>you havent added anything to your cart</p>
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
