// import "./App.css";
import { SignUpForm } from "./component/forms/forms";
import Navbar from "./component/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CityHome from "./pages/city_profile/City_home";
import RestaurantProfile from "./pages/resturant_profile/RestaurantProfile";
import PartnerReg from "./pages/homepage/partner-registration/home_partner_reg";
import Footer from "./pages/homepage/layouts/footer/Footer";
import HomePage from "./pages/homepage/HomePage";
import PlayGround from "./pages/play-ground/PlayGround";
// import { FindFoodPopup } from "./component/pop-ups/pop_ups";
// import HomePage from "./pages/homepage/HomePage";
// import Footer from "./pages/homepage/layouts/footer/Footer";
// import PartnerReg from "./pages/homepage/partner-registration/home_partner_reg";
const DefaultLayout = ({ children }) => {
  return (
    <>
      <Navbar />

      {children}

      <Footer />
    </>
  );
};

const MinimalLayout = ({ children }) => {
  return;
  {
    children;
  }
};
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <DefaultLayout>
                <HomePage />
              </DefaultLayout>
            }
          />
          <Route
            path="/city/:city_name"
            element={
              <DefaultLayout>
                <CityHome />
              </DefaultLayout>
            }
          />
          <Route
            path="/rest-profile/:rest_id"
            element={
              <DefaultLayout>
                <RestaurantProfile />
              </DefaultLayout>
            }
          />
          <Route
            path="/partner"
            element={
              <MinimalLayout>
                <PartnerReg />
              </MinimalLayout>
            }
          />
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="play-ground" element={<PlayGround />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
