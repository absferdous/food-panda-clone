import "./cards.css";

import { FaStar } from "react-icons/fa";
import { RiDiscountPercentFill } from "react-icons/ri";
import { SiFoodpanda } from "react-icons/si";
import { CiCircleInfo } from "react-icons/ci";
import { IoMdAdd } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import Offer from "../offers/Offer";
import { RoundBtnWithSymbol } from "../buttons/buttons";
export const ProfileCard = ({ brandlogo, name, ratings }) => {
  return (
    <>
      <div className="profile-card-container">
        <div className="profile-card-header">
          <div className="profile-card-header-left">
            <div className="profile-card-header-left-banner">
              <SiFoodpanda />
            </div>
            {/* <div className="profile-card-header-left-schedule">
              <p>closed untill</p>
              <p>friday 22:06</p>
            </div> */}
            <div className="profile-card-header-left-orderdetail">
              <p>No min .order</p>
            </div>
          </div>
          {/* right */}
          <div className="profile-card-header-right">
            <div className="profile-card-header-right-top">
              <li>
                <a href="">italian</a>
              </li>
              <li>
                <a href="">pizza</a>
              </li>
              <li>
                <a href="">fast food</a>
              </li>
              <li>
                <a href="">Mediterranean</a>
              </li>
              <li>
                <a href="">Rice</a>
              </li>
            </div>
            <div className="profile-card-header-right-title">
              <h3>Q-Bistro-Noyasorok</h3>
            </div>
          </div>
          {/* right */}
        </div>
        {/* profile review */}

        <div className="profile-card-profile-review">
          <div className="ratings">
            <FaStar /> <strong>4.1/5</strong>(2000+)
          </div>
          <div className="see-reviews">
            <a href="">See reviews</a>
          </div>
          <div className="more-info">
            <CiCircleInfo /> <p>More info</p>
          </div>
        </div>
        {/* profile review */}
        {/*add to favourite */}
        <div className="favorite-button">
          <CiHeart /> <p>Add to favourites</p>
        </div>
        {/*add to favourite */}
        {/* footer */}
        <div className="profile-card-footer">
          <p>
            15/A Bihongo, Manikpir Road.Noyasorok (Sylhet Science
            Collage)10199.6 km away{" "}
            <span>
              <a href="">open maps</a>
            </span>
          </p>
        </div>
        {/* footer */}
      </div>
      {/* <h1>Profile Card</h1> */}
    </>
  );
};

export const DealsCard = () => {
  return (
    <>
      <div className="deal-card-container">
        <div className="deal-card-title">
          <h3>Available deals</h3>
        </div>
        <div className="deal-card-content">
          <div className="deal-card-single-offer">
            <div className="deal-card-single-offer-header">
              <RiDiscountPercentFill />
              <p>10% off</p>
            </div>
            <div className="deal-card-single-offer">
              <div className="deal-card-single-offer-details">
                <p>min.order Tk.50. auto-applied. for all items</p>
              </div>
              <div className="deal-card-single-offer-footer-logo">
                <RiDiscountPercentFill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const ItemProfileCard = () => {
  return (
    <div className="item-profile-card-container">
      <div className="item-profile-card-left">
        <div className="item-name">
          <h3>Firni</h3>
        </div>
        <div className="item-price">
          <p>TK 63</p>
        </div>
        <div className="item-description">
          <p>Rich in flavous with right amount of sweetness</p>
        </div>
      </div>
      <div className="item-profile-card-right">
        <div className="item-profile-card-right-image"></div>
      </div>
      <div className="item-profile-card-right-btn">
        <RoundBtnWithSymbol icon={<IoMdAdd />} />
      </div>
    </div>
  );
};
