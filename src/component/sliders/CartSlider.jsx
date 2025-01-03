import { FaArrowAltCircleRight } from "react-icons/fa";
import { RoundBtnWithSymbol } from "../buttons/buttons";
import { FaAngleRight } from "react-icons/fa";
import SingleItemCard from "../Cards/SingleItemCard";
import "./cart-slider.css";
import React, { useRef } from "react";
import { FaAnglesRight } from "react-icons/fa6";

const CartSlider = () => {
  const sliderRef = useRef(null);
  const handleSliderRef = (e) => {
    e.stopPropagation();
    if (sliderRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = sliderRef.current;
      if (scrollLeft + clientWidth < scrollWidth) {
        sliderRef.current.scrollBy({ left: clientWidth, behavior: "smooth" });
      }
    }
  };
  return (
    <>
      <div className="cart-slider-container" ref={sliderRef}>
        <div className="cart-slider-top">
          <h3>Popular with your order</h3>
          <p>Based on what other customers bought together</p>
        </div>
        <div className="cart-slider-content">
          <div className="cart-slider-item-wrapper">
            <SingleItemCard />
            {/* Add more SingleItemCard components as needed */}
          </div>
        </div>
        {/* <div className="cart-slider-right-button">
          <RoundBtnWithSymbol
            icon={<FaAnglesRight />}
            onClick={handleSliderRef}
          />
        </div> */}
      </div>
    </>
  );
};

export default CartSlider;
