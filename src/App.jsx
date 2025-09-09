import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/Homepage";
import AboutUs from "./components/pages/AboutUs";
import Lights from "./components/pages/Lights";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/lights" element={<Lights />} />
      </Routes>
    </Router>
  );
}
