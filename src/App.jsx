import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/Homepage";
import AboutUs from "./components/pages/AboutUs";
import Lights from "./components/pages/Lights";
import Construction from "./components/pages/Construction";
import GenericC from "./components/construction/GenericC";
import GenericR from "./components/construction/GenericR";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/lights" element={<Lights />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/construction/sports/:id" element={<GenericC />} />
        <Route path="/construction/renovation/:id" element={<GenericR />} />
      </Routes>
    </Router>
  );
}
