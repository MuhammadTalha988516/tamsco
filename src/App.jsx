import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Main Pages
import HomePage from "./components/pages/Homepage";
import AboutUs from "./components/pages/AboutUs";
import Lights from "./components/pages/Lights";
import ContactUs from "./components/pages/ContactUs";

// General Trading
import GTR from "./components/pages/GTR";

// Construction
import Construction from "./components/pages/Construction";
import GenericC from "./components/construction/Services";
import GenericR from "./components/construction/Renovation";

// Lighting
import GenericIn from "./components/Lightning/GenericIn";
import GenericOut from "./components/Lightning/GenericOut";

// ✅ ScrollToTop replacement
function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTopOnRouteChange />
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/lights" element={<Lights />} />
        <Route path="/ContactUs" element={<ContactUs />} />

        {/* General Trading */}
        <Route path="/GeneralTrading" element={<GTR />} />

        {/* Construction */}
        <Route path="/construction" element={<Construction />} />
        <Route path="/construction/sports/:id" element={<GenericC />} />
        <Route path="/construction/renovation/:id" element={<GenericR />} />

        {/* Lighting */}
        <Route path="/indoor" element={<GenericIn />} />
        <Route path="/outdoor" element={<GenericOut />} />
      </Routes>
    </Router>
  );
}
