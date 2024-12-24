import React from "react";
import "./your-items.css";
import { MdDeleteOutline } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { useContext } from "react";
import { cartContext } from "../../context/CartContext";
const YourItems = () => {
  const {
    product,
    productList,
    singlerestaurantContext,
    setsinglerestaurantContext,
    showCart,
    setshowCart,
  } = useContext(cartContext);

  return (
    <>
      <div className="your-items-container">
        <div className="your-items-title">
          <h3>Your Items</h3>
        </div>
        <div className="your-items-content">
          <div className="your-items-content-left">
            <div className="your-items-content-image">
              <img src={product.image} alt="productImage" />
            </div>
            <div className="your-items-name">
              <h4>{product.name}</h4>
              <p>{product.price}</p>
            </div>
          </div>
          <div className="your-items-content-right">
            <div className="your-items-btn">
              <div className="your-items-left-btn">
                <button>
                  <GoPlus />
                </button>
              </div>
              <div className="your-items-quantity">
                <p>1</p>
              </div>
              <div className="your-items-right-btn">
                <button>
                  <MdDeleteOutline />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default YourItems;
