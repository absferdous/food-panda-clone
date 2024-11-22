// import "./App.css";
import { SignUpForm } from "./component/forms/forms";
import Navbar from "./component/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CityHome from "./pages/city_profile/city_home";
import RestaurantProfile from "./pages/resturant_profile/RestaurantProfile";
import PartnerReg from "./pages/homepage/partner-registration/home_partner_reg";
import Footer from "./pages/homepage/layouts/footer/Footer";
import HomePage from "./pages/homepage/HomePage";
// import { FindFoodPopup } from "./component/pop-ups/pop_ups";
// import HomePage from "./pages/homepage/HomePage";
// import Footer from "./pages/homepage/layouts/footer/Footer";
// import PartnerReg from "./pages/homepage/partner-registration/home_partner_reg";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/city" element={<CityHome />} />
          <Route path="/partner" element={<PartnerReg />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
