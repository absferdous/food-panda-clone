import React, { useContext, useEffect } from "react";
import citydata from "../../utils/allRestaurants.json";
// import cuisine from "../../utils/cuisines.json";
import "./restaurant-profile.css";
import { FaFire } from "react-icons/fa";
import AddressBar from "../../component/addressbar/AddressBar";
import BreadCrumb from "../../component/breadcrumbs/BreadCrumb";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  DealsCard,
  ItemProfileCard,
  ProfileCard,
} from "../../component/Cards/Cards";
import { useState } from "react";
import { deleteItems, toggler, totalCounter } from "../../myFunc/myfunc";
import { MenuSearchBar } from "../../component/bars/Bars";
import { ProductDetails } from "../../component/pop-ups/pop_ups";
import Cart from "../../component/cart/Cart";
import { cartContext } from "../../context/CartContext";

const RestaurantProfile = () => {
  const { product, setproduct, productList, setProductList } =
    useContext(cartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [cuisine, setcuisine] = useState(null);
  const [loading, setloading] = useState(true);
  const [showProductDetail, setshowProductDetail] = useState(false);
  const { rest_id } = useParams();
  const [singlerestaurent, setsinglerestaurent] = useState(null);

  useEffect(() => {
    fetch(
      `https://restaurant-server-ni4y.onrender.com/api/restaurant/${rest_id}`
    )
      .then((res) => res.json())
      .then((data) => setsinglerestaurent(data));
  }, []);

  const handleProduct = (productData) => {
    setshowProductDetail(true);
    setproduct(productData);

    alert("testing product");
    console.log("context", product);
  };
  const handleaddprice = () => {
    alert("testing");
    {
      product &&
        setProductList([
          ...productList,
          { item: product?.name, price: product?.price },
        ]);
      // setProductContext(productList);
    }
    console.log("totalprice:", totalPrice);
  };

  const handlesubPrice = () => {
    alert("testing");
    setProductList((prev) => prev.slice(0, -1));
  };
  console.log("singlerestaurant", singlerestaurent);

  useEffect(() => {
    singlerestaurent &&
      fetch(
        `https://restaurant-server-ni4y.onrender.com/api/food-items/${singlerestaurent[0].cuisine}`
      )
        .then((res) => res.json())

        .then((data) => setcuisine(data))
        .catch((error) => console.error("data not found", error))
        .finally(() => setloading(false));
  }, [singlerestaurent]);

  const popularDishes =
    cuisine && cuisine.filter((item) => item.tag === "Popular");

  useEffect(() => {
    {
      productList && setTotalPrice(totalCounter(productList));
    }
  }, [productList]);

  if (!singlerestaurent || !cuisine) {
    return <h2>Loading</h2>;
  }

  return (
    <div className="restaurant-profile-container">
      <AddressBar cityName={"sylhet"} />
      <BreadCrumb cityName={"sylhet"} />
      <div className="restaurant-profile-top">
        <ProfileCard {...singlerestaurent[0]} />
      </div>
      <div className="restaurant-profile-deals">
        <DealsCard />
      </div>
      <div className="restaurant-profile-search-bar">
        <MenuSearchBar />
      </div>
      <div className="restaurant-profile-menu"></div>

      <div className="restaurant-profile-popular-container">
        <div className="restaurant-profile-popular-header">
          <div className="restaurant-profile-popular-header-title">
            <FaFire /> <h3>Popular</h3>
          </div>
          <div className="restaurant-profile-popular-header-description">
            <p>Most trending now</p>
          </div>
        </div>
        <div className="restaurant-profile-popular-items">
          {popularDishes &&
            popularDishes.map((item, index) => {
              return (
                <div
                  className="restaurant-profile-popular-single-item"
                  key={index}
                  onClick={() => handleProduct(item)}
                >
                  <ItemProfileCard {...item} />
                </div>
              );
            })}
        </div>
      </div>
      {/* main */}
      <div className="restaurant-profile-main-dishes-container">
        <div className="restaurant-profile-popular-header">
          <div className="restaurant-profile-popular-header-title">
            <FaFire /> <h3>Main</h3>
          </div>
          <div className="restaurant-profile-popular-header-description">
            <p>Most trending now</p>
          </div>
        </div>
        <div className="restaurant-profile-popular-items">
          {cuisine &&
            cuisine
              .filter((item) => item.cuisine !== "Popular")
              .map((item, index) => {
                return (
                  <div
                    className="restaurant-profile-popular-single-item"
                    key={index}
                  >
                    <h3>{item.tag}</h3>
                    <ItemProfileCard {...item} />
                  </div>
                );
              })}
        </div>
      </div>
      {/* main */}

      {/* product-deatil-pop-up */}

      {showProductDetail && (
        <div className="restaurant-profile-product-detail">
          <ProductDetails
            product={product}
            onClick={() => toggler(setshowProductDetail)}
            addPrice={handleaddprice}
            subPrice={handlesubPrice}
            totalPrice={totalPrice}
            productList={productList}
          />
        </div>
      )}
      {/* product-deatil-pop-up */}
      {/* cart */}
      <div className="restaurant-profile-cart">{product && <Cart />}</div>
      {/* cart */}
    </div>
  );
};

export default RestaurantProfile;
