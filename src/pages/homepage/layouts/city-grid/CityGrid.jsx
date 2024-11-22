import React from "react";
import { useNavigate } from "react-router-dom";
import "./citygrid.css";
import { cities } from "../../../../utils/data";
import singleCity from "../../../../utils/allRestaurants.json";

const CityGrid = () => {
  const navigate = useNavigate();
  const handleNavigate = (city) => {
    console.log(city);
    navigate("/city", { state: city });
  };

  return (
    <div className="city-grid-container">
      <h1>Find us in these cities and many more!</h1>
      <div className="city-grid-main">
        {cities.map((city, index) => {
          return (
            <div
              className="city-grid-child"
              key={index}
              onClick={() => handleNavigate(city)}
            >
              <img src={city.image} alt={city.name} />
              <a href="">{city.name}</a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CityGrid;
