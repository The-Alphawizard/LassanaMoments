import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MiniPhotographer from './pages/miniPages/miniPhotographer';
import PhotographerMain from './pages/Main/photographerMain';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MiniPhotographer />} />
        <Route path="/photographers" element={<PhotographerMain />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;