import React, { useState } from "react";
import { createContext } from "react";
export const cartContext = createContext(null);

const CartContextComponent = (props) => {
  const [productContext, setProductContext] = useState([]);
  const [cuisineContext, setCuisineContext] = useState([]);
  const [productList, setProductList] = useState([]);

  const [product, setproduct] = useState([null]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showCart, setshowCart] = useState(false);
  const [singlerestaurantContext, setsinglerestaurantContext] = useState(null);

  const value = {
    productContext,
    setProductContext,
    product,
    setproduct,
    productList,
    setProductList,
    totalPrice,
    setTotalPrice,
    showCart,
    setshowCart,
    singlerestaurantContext,
    setsinglerestaurantContext,
    cuisineContext,
    setCuisineContext,
  };
  return (
    <cartContext.Provider value={value}>{props.children}</cartContext.Provider>
  );
};

export default CartContextComponent;
