import React, { useEffect, useState } from "react";
import "./city-home.css";
import cityData from "../../utils/allRestaurants.json";
import AddressBar from "../../component/addressbar/AddressBar";
import Hero from "../homepage/layouts/hero/Hero";
import BreadCrumb from "../../component/breadcrumbs/BreadCrumb";
import CityResturant from "../homepage/layouts/city-restaurents/CityResturant";
import TextContent from "../../component/textContent/textContent";
// import Footer from "../homepage/layouts/footer/Footer";
import { DownloadBar } from "../../component/downloadbuttons/DownloadButton";
import googlePlay from "../../assets/partner_reg_images/googlePlay.svg";
import appleStore from "../../assets/partner_reg_images/appleStore.svg";
import Suggesstion from "../homepage/layouts/suggesstions/Suggesstion";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const CityHome = () => {
  const navigate = useNavigate();
  const { city_name } = useParams();
  const [newCityData, setNewCityData] = useState(null);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    fetch(`https://restaurant-server-ni4y.onrender.com/api/city/${city_name}`)
      .then((response) => response.json())
      .then((result) => setNewCityData(result))
      .catch((error) => console.error("error fetching data", error))
      .finally(() => setloading(false));
  }, []);
  console.log("testing api fetching");
  console.log(newCityData);
  // const newFliterdCity = newCityData.filter(
  //   (item) => item.city === city_name.toLowerCase()
  // );

  const handleNavigate = (id) => {
    navigate(`/rest-profile/${id}`);
  };

  // const bengali = cityName.filter((item) => item.cuisine === "Bangladeshi");
  // const fastFood = cityName.filter((item) => item.cuisine === "Fast Food");
  // const indian = cityName.filter((item) => item.cuisine === "Indian");
  // console.log(location.state);
  // console.log("currentCity");
  // console.log(currentCity);
  return (
    <>
      {loading && <h1>Loading.....</h1>}
      {newCityData && (
        <div className="city-home-container">
          <div className="city-home-addressbar">
            <AddressBar cityName={city_name} />
          </div>
          <div className="city-home-hero">
            <Hero
              home={false}
              title={`Food Delivery from ${city_name}’s Best Restaurants`}
            />
          </div>
          <BreadCrumb cityName={city_name} />
          <div className="allrestaurant">
            <div className="allresturant-title">
              <h1>All restuarents</h1>
            </div>
            <div className="allrestaurant-grid">
              {newCityData.restaurants.map((item) => {
                if (item !== null) {
                  return (
                    <div
                      className="city-rest-navigation"
                      onClick={() => handleNavigate(item._id)}
                    >
                      <CityResturant
                        city_name={city_name}
                        type={item.cuisine}
                        ratings={item.ratings}
                        offer={item.offer}
                        image={item.image}
                        reviews={item.reviews}
                        name={item.name}
                      />
                      {/* console.log(item); */}
                    </div>
                  );
                }
              })}
            </div>
            <div className="contents-text">
              <TextContent
                heading={"Fast food delivery in Sylhet"}
                text={
                  "Whether you're a long-time native or new to the city, you've plenty to get excited in Sylhet when it comes to all things food. Sylet is a thriving metropolitan hub, with plenty to offer the discerning diner. From quick and easy street food to more refined restaurant dishes, there's no shortage of options when it comes to quashing an appetite. With foodpanda, you can explore the very best that Sylet has to offer, whether you're looking for no-frills fast food from your favourite chains, light bites for last-minute lunches, or expertly cooked curries spiced to perfection."
                }
              />
              <TextContent
                heading={"Enjoy express food delivery with foodpanda"}
                text={
                  "Ordering food online needn't be a hassle when you do it with foodpanda. It's incredibly straightforward to find takeaway menus with fast restaurants delivery as standard. Simply head to foodpanda, enter your location, then take your pick from all restaurants delivering to you. Once you've found a menu that stirs your appetite, use our user-friendly interface to sift through menus and tap to add items to your basket. Once you've loaded up on your favourites, head to the online checkout to pay. After that, all you need to do is kick back and wait for your food to arrive"
                }
              />
              <TextContent
                heading={
                  "Order food online from the best restaurants in Sylhet"
                }
                text={
                  "If you're tired of second-rate food takeaway menus, foodpanda is on hand to renew your appetite for ordering in. Our team have put together a premier selection of restaurant menus from some of the best eateries in town, with something to cater to every palate and preference. You'll find quality menus stacked with delicious dishes from the likes of Premium Sweets, Just Juice, Cafe Appeliano and many more. Looking for familiar tastes from your favourite fast food restaurants? You're in luck. With foodpanda, you can order food delivery from the likes of Burger King and Nando's."
                }
              />
              <TextContent
                heading={
                  "Take your pick from classic cuisine and takeaway favourites"
                }
                text={
                  "As with the rest of Bangladesh, Sylhet offers an eclectic array of culinary delights. Rice and fish may form the foundation to many a recipe in this part of the world, but there's plenty more besides to sink your teeth into. Looking for something satisfying the next time you order food online in Sylhet? Try delicious dishes like Chingri Malai curry with its succulent prawns and creamy coconut sauce spiced with mustard, or dine on a wide variety of biryani dishes. Those looking for a vegetarian-friendly option are also provided for, with popular vegetarian dishes like Began Bhorta a definite must. Like other places in Bangladesh's northern region, Sylhet is synonymous with sweet dishes and desserts thanks to a range of native fruits that are grown here. Look forward to the tastes of fresh mangoes, sharp pineapple and subtle litchi."
                }
              />
            </div>
          </div>
          <div className="city-restaurents-download">
            <DownloadBar img1={appleStore} img2={googlePlay} />
          </div>
          <div className="city-restaurents-suggestions">
            {/* <div className="single-suggesstions">
              <h4>Bengali food delivery in {cityName}</h4>
              {bengali.map((item, index) => {
                if (index < 6) {
                  return <Suggescity_name=city_name} key={item.id} />;
                }
              })}
            </div>
            <div className="single-suggesstions">
              <h4>Indian food delivery in {cityName}</h4>
              {indian.map((item, index) => {
                if (index < 6) {
                  return <Suggescity_name=city_name} key={item.id} />;
                }
              })}
            </div>
            <div className="single-suggesstions">
              <h4>fast food delivery in {cityName}</h4>
              {fastFood.map((item, index) => {
                if (index < 6) {
                  return <Suggescity_name=city_name} key={item.id} />;
                }
              })}
            </div> */}

            {/* <div className="near-city">
            <h3>Near Sylhet</h3>

            <li>
              <a href="">Resturant in Moulvibazar</a>
            </li>
            <li>
              <a href="">Resturant in Sunamganj</a>
            </li>
            <li>
              <a href="">Resturant in Habiganj</a>
            </li>
            <li>
              <a href="">Resturant in Netrokona</a>
            </li>
            <li>
              <a href="">All cities in Bangladesh</a>
            </li>
          </div> */}
          </div>
          {/* <div className="city-home-footer">
          <Footer />
        </div> */}
        </div>
      )}
    </>
  );
};

export default CityHome;
