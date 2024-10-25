import React from "react";
import "./food-panda-business.css";
import Vendor from "../vendor/Vendor";
import vendorImage from "../../../../assets/image/home-vendor-bd.webp";
const FoodandaBusiness = () => {
  return (
    <section className="foodpanda-business">
      <Vendor
        imgurl={vendorImage}
        heading={"Take your office out to lunch"}
        subHeading={"foodpanda for business"}
        paragraph={[
          "Order lunch or fuel for work-from-home, late nights in the office, corporate events, client meetings, and much more",
        ]}
      />
    </section>
  );
};

export default FoodandaBusiness;
