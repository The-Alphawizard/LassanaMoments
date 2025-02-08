import React from "react";
import Home from "./miniPages/Home";
import MiniAboutUs from "./miniPages/miniAboutUs";
import PhoneArea from "./miniPages/PhoneArea";
import MiniGallery from "./miniPages/miniGallery";
import MiniPhotographer from "./miniPages/miniPhotographer";
import MiniFindPhotographer from "./miniPages/miniFindPhotographer";
import MiniReview from "./miniPages/miniReview";
import Footer from "../components/Footer";
import UserLoginPage2 from "./user/userLoginPage2";

const LandingPage = () => {
  return (
    <div className="w-full h-auto">
      <Home />
      <PhoneArea />
      <MiniAboutUs />
      <MiniGallery />
      <MiniPhotographer/>
      <MiniFindPhotographer/>
      <MiniReview/>

      <UserLoginPage2/>
      <Footer/>

    </div>
  );
};

export default LandingPage;
