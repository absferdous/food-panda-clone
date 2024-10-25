import React from "react";
import "./homepage.css";
import Navbar from "../../component/Navbar/Navbar";
import Hero from "./layouts/hero/Hero";
import Vendor from "./layouts/vendor/Vendor";
import CityGrid from "./layouts/city-grid/CityGrid";
import AppDownLoadSection from "./layouts/app-download-section/appDownLoadSection";
import vendorImage from "../../assets/image/home-vendor-bd.webp";
import FoodandaBusiness from "./layouts/food_panda_business/food_panda_business";
import TextContent from "../../component/textContent/textContent";
const HomePage = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <Vendor
        imgurl={vendorImage}
        heading="You prepare the food, we handle the rest"
        subHeading="List your restaurant or shop on foodpanda"
        paragraph={[
          "Would you like millions of new customers to enjoy your amazing food and groceries? So would we!",
          "It's simple: we list your menu and product lists online, help you process orders, pick them up, and deliver them to hungry pandas – in a heartbeat!",
          "Interested? Let's start our partnership today!",
        ]}
      />
      <CityGrid />
      <AppDownLoadSection />
      <FoodandaBusiness />

      <TextContent
        heading={
          "Order food from the best restaurants and shops with foodpanda Bangladesh"
        }
        text={
          "Are you hungry? Did you have a long and stressful day? Interested in getting a cheesy pizza delivered to your office or looking to avoid the weekly shop? Then foodpanda Bangladesh is the right destination for you! foodpanda offers you a long and detailed list of the best restaurants and shops near you to help make your everyday easier. Our online food delivery service has it all, whether you fancy a juicy burger from Takeout, fresh sushi from Samdado or peri peri chicken from Nando's, foodpanda Bangladesh has over 2000 restaurants available from Dhaka to Chittagong through to Sylhet. Did you know you can order your groceries and more from foodpanda, too? Check out foodpanda shops for favourite partners like Unimart, Suborno, Shwapno, Bengal Meat, and much more. Sit back and relax – let foodpanda Bangladesh take the pressure off your shoulders"
        }
      />
    </div>
  );
};

export default HomePage;
