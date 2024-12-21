import { RoundBtnWithSymbol } from "../buttons/buttons";
import { FaChevronLeft } from "react-icons/fa6";
import { SlMagnifier } from "react-icons/sl";
import { FaAngleRight } from "react-icons/fa6";
import "./bars.css";
export const MenuSearchBar = ({ cuisine, sectionrefs }) => {
  const uniqueCuisine = [...new Set(cuisine.map((item) => item.tag))];
  console.log("uniqcuisine", uniqueCuisine);

  const handleScrollToSection = (tag) => {
    const section = sectionrefs.current[tag];
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
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
            {uniqueCuisine.map((item) => (
              <li key={item}>
                <a href="#" onClick={() => handleScrollToSection(item)}>
                  {item}
                </a>
              </li>
            ))}
          </div>
          <div className="menu-searchbar-right-arrow">
            <RoundBtnWithSymbol icon={<FaAngleRight />} />
          </div>
        </div>
      </div>
    </>
  );
};
