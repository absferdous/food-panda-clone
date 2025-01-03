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
    setProductList,
    singlerestaurantContext,
    setsinglerestaurantContext,
    showCart,
    setshowCart,
  } = useContext(cartContext);
  // const yourItemFromCart = productList.find((item) => product.id === item.id);
  // console.log("yourItemFromCart recieved from cart", yourItemFromCart);
  const handleAddCartItem = (id) => {
    setProductList(
      productList.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  const handleDeleteCartItem = (id) => {
    const newItemList = productList.filter((item) => item.id !== id);
    setProductList(newItemList);
  };
  return (
    <>
      {productList.length > 0 ? (
        <>
          {productList.map((item) => {
            return (
              <div className="your-items-container">
                <div className="your-items-title">
                  <h3>Your Items</h3>
                </div>
                <div className="your-items-content">
                  <div className="your-items-content-left">
                    <div className="your-items-content-image">
                      <img src={item.image} alt="productImage" />
                    </div>
                    <div className="your-items-name">
                      <h4>{item.item}</h4>
                      <p>{item.price}</p>
                    </div>
                  </div>
                  <div className="your-items-content-right">
                    <div className="your-items-btn">
                      <div className="your-items-left-btn">
                        <button onClick={() => handleAddCartItem(item.id)}>
                          <GoPlus />
                        </button>
                      </div>
                      <div className="your-items-quantity">
                        <p>{item.quantity}</p>
                      </div>
                      <div className="your-items-right-btn">
                        <button onClick={() => handleDeleteCartItem(item.id)}>
                          <MdDeleteOutline />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <div className="hungry-massage">
          <h3>Are you hungry?</h3>
          <p>order something</p>
        </div>
      )}
    </>
  );
};

export default YourItems;
