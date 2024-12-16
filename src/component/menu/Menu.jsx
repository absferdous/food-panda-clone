import React from "react";
import "./menu.css";
import { ItemProfileCard } from "../Cards/Cards";
import { useContext, useState } from "react";
import { cartContext } from "../../context/CartContext";
import { ProductDetails } from "../pop-ups/pop_ups";
import { toggler } from "../../myFunc/myfunc";
const Menu = ({ cuisine }) => {
  const { product, setproduct, productList, setProductList } =
    useContext(cartContext);
  const [show, setshow] = useState(false);
  const uniqueTags = new Set(cuisine.map((item) => item.tag));
  console.log("unique tagse", uniqueTags);
  const handleClick = (e, item) => {
    e.stopPropagation();
    setproduct(item);
    setshow(true);
    {
      console.log("item from menu", product);
    }
  };
  return (
    <>
      {[...uniqueTags].map((tag) => (
        <div key={tag} className="menu-container">
          <h2>{tag}</h2>
          {cuisine
            .filter((item) => item.tag === tag)
            .map((item) => (
              <div
                className="menu-item"
                key={item.tag}
                onClick={(e) => handleClick(e, item)}
              >
                <ItemProfileCard {...item} />
              </div>
            ))}
        </div>
      ))}

      {/* show single-product */}
      {show && (
        <div className="single-product-detail">
          <ProductDetails product={product} onClick={() => toggler(setshow)} />
        </div>
      )}
    </>
  );
};

export default Menu;
