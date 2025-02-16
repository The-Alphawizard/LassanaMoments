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

//Photographer Sign Up
import PhotographerSignUp1 from "./pages/photographer/PhotographerSignUp1";
import PhotographerSignUp2 from "./pages/photographer/PhotographerSignUp2";
import PhotographerSignUp3 from "./pages/photographer/PhotographerSignUp3";
import PhotographerSignUp4 from "./pages/photographer/PhotographerSignUp4";
import PhotographerSignUp5 from "./pages/photographer/PhotographerSignUp5";

//Photographer Log in

import PhotographerLoginPage1 from "./pages/photographer/PhotographerLoginPage1";
import PhotographerLoginPage2 from "./pages/photographer/PhotographerLoginPage2";
import PhotographerLoginPage3 from "./pages/photographer/PhotographerLoginPage3";
import PhotographerLoginPage4 from "./pages/photographer/PhotographerLoginPage4";
import PhotographerLoginPage5 from "./pages/photographer/PhotographerLoginPage5";

// Import UserContext Provider
import { UserProvider } from "./context/UserContext";

// Dashboard Photographer side

import PhotographerDash from "./pages/Main/Dashboard-photographer side/Dashboard-photographer side";

// Dashboard User side
import UserDash from "./pages/Main/Dashboard-user side/Dashboard-user side";



//model component
import EditProfile from "./pages/models/EditProfile"

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

            {/*User Sign Up pages */}
            <Route path="/UserSignUp1" element={<UserSignUp1 />} />
            <Route path="/UserSignUp2" element={<UserSignUp2 />} />
            <Route path="/UserSignUp3" element={<UserSignUp3 />} />
            <Route path="/UserSignUp4" element={<UserSignUp4 />} />

            {/* Photographer Sign Up */}
            <Route
              path="/PhotographerSignUp1"
              element={<PhotographerSignUp1 />}
            />
            <Route
              path="/PhotographerSignUp2"
              element={<PhotographerSignUp2 />}
            />
            <Route
              path="/PhotographerSignUp3"
              element={<PhotographerSignUp3 />}
            />
            <Route
              path="/PhotographerSignUp4"
              element={<PhotographerSignUp4 />}
            />
            <Route
              path="/PhotographerSignUp5"
              element={<PhotographerSignUp5 />}
            />

            {/* Photographer login */}
            <Route
              path="/PhotographerLoginPage1"
              element={<PhotographerLoginPage1 />}
            />
            <Route
              path="/PhotographerLoginPage2"
              element={<PhotographerLoginPage2 />}
            />
            <Route
              path="/PhotographerLoginPage3"
              element={<PhotographerLoginPage3 />}
            />
            <Route
              path="/PhotographerLoginPage4"
              element={<PhotographerLoginPage4 />}
            />
            <Route
              path="/PhotographerLoginPage5"
              element={<PhotographerLoginPage5 />}
            />

            {/*User Login Pages */}

            <Route path="/UserLoginPage1" element={<UserLoginPage1 />} />
            <Route path="/UserLoginPage2" element={<UserLoginPage2 />} />
            <Route path="/UserLoginPage3" element={<UserLoginPage3 />} />
            <Route path="/UserLoginPage4" element={<UserLoginPage4 />} />
            <Route path="/UserLoginPage5" element={<UserLoginPage5 />} />

            {/* Dashboards  */}
            <Route path="/photographerDash" element={<PhotographerDash />} />
            <Route path="/UserDash" element={<UserDash />} />

            {/* Main Pages within Mini sections */}
            <Route path="/photographers" element={<PhotographerMain />} />
            <Route path="/gallery" element={<GalleryMain />} />

            {/* models */}
            <Route path="/EditProfile" element={<EditProfile />} />


            {/* end of route component */}
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
