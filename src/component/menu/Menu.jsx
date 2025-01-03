import React, { useRef } from "react";
import "./menu.css";
import { totalCounter } from "../../myFunc/myfunc";
import { ItemProfileCard } from "../Cards/Cards";
import { useContext, useState, useEffect } from "react";
import { cartContext } from "../../context/CartContext";
import { ProductDetails } from "../pop-ups/pop_ups";
import { toggler } from "../../myFunc/myfunc";
import TempCart from "../cart/TempCart";
const Menu = ({ cuisine, sectionrefs }) => {
  const {
    product,
    setproduct,
    productList,
    setProductList,
    totalPrice,
    setTotalPrice,
  } = useContext(cartContext);

  const [show, setshow] = useState(false);
  const [count, setcount] = useState(0);
  const [showTempCart, setshowTempCart] = useState(false);
  const uniqueTags = new Set(cuisine.map((item) => item.tag));
  console.log("unique tagse", uniqueTags);
  // triggering the product-detail pop up
  const handleClick = (e, item) => {
    e.stopPropagation();
    setproduct(item);
    setshow(true);
    {
      console.log("item from menu", product);
    }
  };
  // sectionrefs

  // add price

  const handleaddprice = () => {
    console.log("testing handleaddprice");

    if (product) {
      if (productList.some((item) => item.item === product.name)) {
        setProductList(
          productList.map((item) =>
            item.item === product.name
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      } else {
        setProductList([
          ...productList,
          {
            item: product.name,
            price: product.price,
            quantity: 1,
            required: product.required,
            image: product.image,
          },
        ]);
      }
    }
    setcount((prev) => prev + 1);
    console.log("productlist:", productList);
    console.log("totalprice:", totalPrice);
  };
  // subtract price
  const handlesubPrice = () => {
    console.log("testing handle sub price");
    setProductList((prev) => prev.slice(0, -1));
    count > 0 && setcount((prev) => prev - 1);
  };

  // set list of the products
  useEffect(() => {
    {
      productList && setTotalPrice(totalCounter(productList));
    }
  }, [productList]);
  // show temp cart

  const handleTempCart = () => {
    setshowTempCart(true);
  };
  return (
    <>
      {[...uniqueTags].map((tag) => (
        <div
          key={tag}
          className="menu-container"
          id={tag}
          ref={(el) => (sectionrefs.current[tag] = el)}
        >
          {/* <div className="menu-cuisine-header" id={tag}>

          </div> */}
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
          <ProductDetails
            onClick={() => toggler(setshow)}
            addPrice={handleaddprice}
            subPrice={handlesubPrice}
            count={count}
            totalPrice={totalPrice}
            productList={productList}
            handleTempCart={handleTempCart}
          />
        </div>
      )}
      {/* show temp -cart */}
      {showTempCart && (
        <div className="temp-price-detail">
          <TempCart />
        </div>
      )}
    </>
  );
};

export default Menu;
