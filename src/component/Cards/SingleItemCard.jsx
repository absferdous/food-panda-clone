import { FaArrowRight } from "react-icons/fa";
import { cartContext } from "../../context/CartContext";
import { RoundBtnWithSymbol } from "../buttons/buttons";
import "./single-item-card.css";
import React, { useContext, useRef } from "react";
import { GoPlus } from "react-icons/go";
import { RxPinLeft } from "react-icons/rx";
const SingleItemCard = () => {
  const { cuisineContext, setCuisineContext } = useContext(cartContext);
  const popularMenus =
    cuisineContext && cuisineContext.filter((item) => item.tag === "Popular");
  console.log("popularMenus", popularMenus);
  const slideRef = useRef(null);
  const scrollLeft = () => {
    slideRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };
  const handleslideRight = () => {
    if (slideRef.current) {
      const { scrollLeft, clientWidth, scrollWidth } = slideRef.current;
      if (scrollLeft + clientWidth < scrollWidth) {
        slideRef.current.scrollBy({ left: clientWidth, behavior: "smooth" });
      }
    }
  };
  return (
    <>
      {/* <div className="slider-button">
        <RoundBtnWithSymbol icon={<FaArrowRight />} onClick={scrollLeft} />
      </div> */}
      <div className="single-item-card-slider" ref={slideRef}>
        {popularMenus.map((item) => {
          return (
            <div className="single-item-card-container" key={item.id}>
              <div className="single-item-card-image">
                <img src={item.image} alt="" />
              </div>
              <div className="single-item-card-btn">
                <RoundBtnWithSymbol icon={<GoPlus />} />
              </div>
              <div className="single-item-card-details">
                <p>
                  <strong>Tk{item.price}</strong>
                </p>
                <p>
                  <strong>{item.name}</strong>
                </p>
                <p>{item.detail}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SingleItemCard;
