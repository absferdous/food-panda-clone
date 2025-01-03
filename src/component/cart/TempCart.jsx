import "./temp-cart.css";

import React from "react";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { cartContext } from "../../context/CartContext";
import { useContext } from "react";
import { toggler } from "../../myFunc/myfunc";
import { useNavigate } from "react-router-dom";
const TempCart = ({ onClick }) => {
  const navTOapage = useNavigate();
  const {
    product,
    setproduct,
    productList,
    setProductList,
    totalPrice,
    setTotalPrice,
    showCart,
    setshowCart,
  } = useContext(cartContext);

  const handleShowCart = () => {
    navTOapage("/cart-home");
  };

  return (
    <>
      {productList && (
        <div className="temp-cart-container">
          <div className="temp-cart-left">
            <GiForkKnifeSpoon />
            <h3>{productList.length}</h3>
          </div>
          <div className="temp-cart-middle" onClick={handleShowCart}>
            <h3>view Cart</h3>
          </div>
          <div className="temp-cart-right">
            <h3>Tk {totalPrice}</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default TempCart;
