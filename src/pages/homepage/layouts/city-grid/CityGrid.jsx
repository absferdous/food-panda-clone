import React from "react";
import "./citygrid.css";
import { cities } from "../../../../utils/data";

const CityGrid = () => {
  return (
    <div className="city-grid-container">
      <h1>Find us in these cities and many more!</h1>
      <div className="city-grid-main">
        {cities.map((city, index) => {
          return (
            <div className="city-grid-child" key={index}>
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
