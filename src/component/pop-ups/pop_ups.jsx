import React, { useState } from "react";
import "./pop-ups.css";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { LargeBtn, RoundBtnWithSymbol } from "../buttons/buttons";
import { RxCross1 } from "react-icons/rx";
import { totalCounter } from "../../myFunc/myfunc";
import { cartContext } from "../../context/CartContext";
import { useContext } from "react";

export const FindFoodPopup = ({ onClick }) => {
  return (
    <>
      <div className="popup-container">
        <div className="popup-header">
          <div className="popup-header-top">
            <div className="popup-header-top-left">logo1</div>
            <div className="popup-header-top-middle">
              <h3>Whats your exact location?</h3>
            </div>
            <div className="popup-header-top-right">logo2</div>
          </div>
          <div className="popup-header-bottom">
            <p>
              Providing your location enables more accurate search and delivery
              ETA ,seamless order tracking and personalized...
            </p>
          </div>
        </div>
        <div className="popup-searchbox">
          <div className="popup-searchbox-input">
            your street and street number
          </div>
          <div className="popup-searchbox-button">locate me button</div>
        </div>
        <div className="popup-content">MAP</div>
        <div className="popup-footer">footerbutton</div>
      </div>
    </>
  );
};

export const AddaddressPopup = () => {
  return (
    <>
      <div className="add-address-popup-container">
        <div className="add-address-popup-header">
          <div className="add-address-popup-left">
            <h3>Whats your address?</h3>
          </div>
          <div className="add-address-popup-right">
            <RoundBtnWithSymbol icon={<RxCross1 />} />
          </div>
        </div>
        <div className="add-address-popup-middle">
          <p>We'll check if juice Plus delivers to your area</p>
        </div>
        <div className="add-address-popup-footer">
          <p>Add an address</p>
        </div>
      </div>
    </>
  );
};

export const ProductDetails = ({
  onClick,
  addPrice,
  subPrice,
  totalPrice,
  productList,
  handleTempCart,
}) => {
  console.log("totalPrice", totalPrice);
  const { product, setproduct } = useContext(cartContext);
  // console.log("product from product detail", product);
  return (
    <>
      <div className="product-detail-container">
        <div className="product-detail-banner">
          <div className="product-detail-banner-button">
            <RoundBtnWithSymbol icon={<RxCross1 />} onClick={onClick} />
          </div>
          <img src={product?.image} alt="image not available" />
        </div>
        <div className="product-detail-content">
          <div className="product-detail-title">
            <h3>{product?.name}</h3>
          </div>
          <div className="product-detail-price">{product.price_desc}</div>
          <div className="product-detail-description">
            <p>{product?.detail}</p>
          </div>
          <div className="product-detail-instructions">
            <div className="product-detail-instructions-title">
              <h3>Special instructions </h3>
            </div>
            <div className="product-detail-instructions-content">
              <p>
                Special requests are subject to the restaurant's approval. Tell
                us here!{" "}
              </p>
            </div>
            <div className="product-detail-instructions-input">
              <input placeholder="e.g No mayo" />
            </div>
          </div>
          <div className="product-detail-item-not-available">
            <h3>If the item is not available</h3>

            <div className="product-detail-item-not-available-option">
              <details>
                <summary>remove it from my order</summary>
                <div className="summary-options">
                  <button>remove it from my order</button>
                  <button>
                    call <menu type="toolbar"></menu>
                  </button>
                </div>
              </details>
            </div>
          </div>
          <div className="product-detail-footer">
            <div className="product-detail-footer-left">
              <RoundBtnWithSymbol icon={<FaPlus />} onClick={addPrice} />
              {productList?.length}
              <RoundBtnWithSymbol icon={<FaMinus />} onClick={subPrice} />
            </div>
            <div className="product-detail-footer-right">
              <LargeBtn text={"Add to cart"} onClick={handleTempCart} />
            </div>
          </div>
        </div>
      </div>
      {/* <h2>Product details</h2> */}
    </>
  );
};
