import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToHashElement from "./components/ScrollToHashElement ";
import Background from "./components/Background";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import PhotographerMain from "./pages/Main/photographerMain";

const App = () => {
  return (
    <Router>
      <ScrollToHashElement />
      <div>
        <Background />
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/photographers" element={<PhotographerMain />} />
        </Routes>
      </div>
    </Router>
  );
};
export default App;