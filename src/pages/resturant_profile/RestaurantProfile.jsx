import React, { useContext, useEffect } from "react";
import citydata from "../../utils/allRestaurants.json";
// import cuisine from "../../utils/cuisines.json";
import "./restaurant-profile.css";
import { FaFire } from "react-icons/fa";
import AddressBar from "../../component/addressbar/AddressBar";
import BreadCrumb from "../../component/breadcrumbs/BreadCrumb";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useMyHooks";
import {
  DealsCard,
  ItemProfileCard,
  ProfileCard,
} from "../../component/Cards/Cards";
import { useState } from "react";
import {
  deleteItems,
  grabData,
  toggler,
  totalCounter,
} from "../../myFunc/myfunc";
import { MenuSearchBar } from "../../component/bars/Bars";
import { ProductDetails } from "../../component/pop-ups/pop_ups";
import Cart from "../../component/cart/Cart";
import { cartContext } from "../../context/CartContext";
import Menu from "../../component/menu/Menu";
// import { useQuery } from "@tanstack/react-query";

const RestaurantProfile = () => {
  const { product, setproduct, productList, setProductList } =
    useContext(cartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  // const [cuisine, setcuisine] = useState(null);
  const [showProductDetail, setshowProductDetail] = useState(false);
  const { rest_id } = useParams();
  //Fetch single-restaurant data
  const {
    data: singlerestaurent,
    isError: singledataerror,
    isLoading: singledataloading,
  } = useFetch({
    key: ["singlerestaurent", rest_id],
    url: `https://restaurant-server-ni4y.onrender.com/api/restaurant/${rest_id}`,
  });
  const cuisineId = singlerestaurent && singlerestaurent[0]?.cuisine;
  //Fetch cusine data

  const {
    data: cuisine,
    isError: cuisinerror,
    isLoading: cuisineloading,
  } = useFetch({
    key: ["cuisine", cuisineId],
    url: cuisineId
      ? `https://restaurant-server-ni4y.onrender.com/api/food-items/${cuisineId}`
      : null,
    enabled: !!cuisineId,
  });

  console.log("single-restaureant", singlerestaurent);
  console.log("cuisine", cuisine);

  const handleProduct = (productData) => {
    setshowProductDetail(true);
    setproduct(productData);

    // console.log("testing product");
  };
  console.log("context", product);
  const handleaddprice = () => {
    console.log("testing handleaddprice");
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
    console.log("testing handle sub price");
    setProductList((prev) => prev.slice(0, -1));
  };
  console.log("singlerestaurant", singlerestaurent);

  console.log("testing cuisine data using query", cuisine);

  useEffect(() => {
    {
      productList && setTotalPrice(totalCounter(productList));
    }
  }, [productList]);

  if (singledataerror || cuisinerror) {
    return <h2>Error loading data. Please try again later.</h2>;
  }

  if (singledataloading || cuisineloading) {
    return <h2>Loading...</h2>;
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
      <div className="restaurant-profile-menu" onClick={() => handleProduct()}>
        {/* main */}
        <Menu cuisine={cuisine} />

        {/* main */}
      </div>
      {/* product-deatil-pop-up */}

      {/* {showProductDetail &&
        product(
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
        )} */}
      {/* product-deatil-pop-up */}
      {/* cart */}
      <div className="restaurant-profile-cart">{product && <Cart />}</div>
      {/* cart */}
    </div>
  );
};

export default RestaurantProfile;
