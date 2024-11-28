import { RoundBtnWithSymbol } from "../buttons/buttons";
import { FaChevronLeft } from "react-icons/fa6";
import { SlMagnifier } from "react-icons/sl";
import "./bars.css";
export const MenuSearchBar = () => {
  return (
    <>
      <div className="menu-searchbar-container">
        <div className="menu-searchbar-main-search-btn">
          <RoundBtnWithSymbol icon={<SlMagnifier />} size="50" />
        </div>
        <div className="menu-searchbar-list">
          <div className="menu-searchbar-left-arrow">
            <RoundBtnWithSymbol icon={<FaChevronLeft />} />
          </div>
          <div className="menu-searchbar-catagories">
            <li>
              <a href="">Popular(6)</a>
            </li>
            <li>
              <a href="">Special Combos(2)</a>
            </li>
            <li>
              <a href="">Curry(1)</a>
            </li>
            <li>
              <a href="">Kacchi(1)</a>
            </li>
            <li>
              <a href="">Kachhi Plater(2)</a>
            </li>
            <li>
              <a href="">latter(2)</a>
            </li>
            <li>
              <a href="">Sides(2)</a>
            </li>
            <li>
              <a href="">Bevarage(2)</a>
            </li>
          </div>
          <div className="menu-searchbar-right-arrow">
            <RoundBtnWithSymbol />
          </div>
        </div>
      </div>
    </>
  );
};
