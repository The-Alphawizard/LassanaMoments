import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToHashElement from "./components/ScrollToHashElement ";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";


//Main pages
import PhotographerMain from "./pages/Main/photographerMain";
import GalleryMain from "./pages/Main/galleryMain/galleryMain";


//entering Login Or Sign Up

import JoinwithUs from "./pages/user/JoinWithUs";

// User side Login
import UserLoginPage1 from "./pages/user/userLoginPage1";
import UserLoginPage2 from "./pages/user/userLoginPage2";
import UserLoginPage3 from "./pages/user/userLoginPage3";
import UserLoginPage4 from "./pages/user/userLoginPage4";
import UserLoginPage5 from "./pages/user/userLoginPage5";

// user SignUp
import UserSignUp1 from "./pages/user/UserSignUp1";
import UserSignUp2 from "./pages/user/UserSignUp2";
import UserSignUp3 from "./pages/user/UserSignUp3";
import UserSignUp4 from "./pages/user/UserSignUp4";

//Photographer
import PhotographerLogin1 from "./pages/photographer/photographerLogin1";

// Import UserContext Provider
import { UserProvider } from "./context/UserContext";

const App = () => {
  return (
    <UserProvider>
      <Router>
        <ScrollToHashElement />
        <div>
          <Background />
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/JoinwithUS" element={<JoinwithUs />} />

            {/* Sign Up pages */}
            <Route path="/UserSignUp1" element={<UserSignUp1 />} />
            <Route path="/UserSignUp2" element={<UserSignUp2 />} />
            <Route path="/UserSignUp3" element={<UserSignUp3 />} />
            <Route path="/UserSignUp4" element={<UserSignUp4 />} />
            {/* Login Pages */}
            <Route path="/UserLoginPage1" element={<UserLoginPage1 />} />
            <Route path="/UserLoginPage2" element={<UserLoginPage2 />} />
            <Route path="/UserLoginPage3" element={<UserLoginPage3 />} />
            <Route path="/UserLoginPage4" element={<UserLoginPage4 />} />
            <Route path="/UserLoginPage5" element={<UserLoginPage5 />} />

            {/* Main Pages within Mini sections */}
            <Route path="/photographers" element={<PhotographerMain />} />
            <Route path="/gallery" element={<GalleryMain />} />

          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
