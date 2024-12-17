import "./temp-cart.css";

import React from "react";
import { GiForkKnifeSpoon } from "react-icons/gi";
import { cartContext } from "../../context/CartContext";
import { useContext } from "react";
const TempCart = ({ onClick }) => {
  const {
    product,
    setproduct,
    productList,
    setProductList,
    totalPrice,
    setTotalPrice,
  } = useContext(cartContext);

  return (
    <>
      {productList && (
        <div className="temp-cart-container">
          <div className="temp-cart-left">
            <GiForkKnifeSpoon />
            <h3>{productList.length}</h3>
          </div>
          <div className="temp-cart-middle">
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
