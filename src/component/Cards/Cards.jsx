import "./cards.css";

import { FaStar } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
export const ProfileCard = ({ brandlogo, name, ratings }) => {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="header-left">
            <div className="header-left-banner">
              <img src={brandlogo} alt="brandLogo" />
            </div>
            <div className="header-left-schedule">
              <p>closed untill</p>
              <p>friday 22:06</p>
            </div>
            <div className="header-left-orderdetail">
              <p>no min .order</p>
            </div>
          </div>
          {/* right */}
          <div className="header-right">
            <div className="header-right-top">
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
            <div className="header-right-title">
              <h3>Q-Bistro-Noyasorok</h3>
            </div>
          </div>
          {/* right */}
        </div>
        {/* profile review */}

        <div className="profile-review">
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
        <div className="footer">
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
      <h1>Profile Card</h1>
    </>
  );
};
