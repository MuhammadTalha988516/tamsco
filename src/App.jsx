import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/Homepage";
import AboutUs from "./components/pages/AboutUs";
import Lights from "./components/pages/Lights";
import IndoorPage from "./components/pages/IndoorPage";
import OutdoorPage from "./components/pages/OutdoorPage";
import ContactUs from "./components/pages/ContactUs";
import GTR from "./components/pages/GTR";
import Construction from "./components/pages/Construction";
import GenericC from "./components/construction/GenericC";
import GenericR from "./components/construction/GenericR";
import GenericIn from "./components/Lightning/GenericIn";
import GenericOut from "./components/Lightning/GenericOut";
import LightingDetail from "./components/Lightning/LightingDetail";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/lights" element={<Lights />} />
        <Route path="/indoor" element={<IndoorPage />} />
        <Route path="/outdoor" element={<OutdoorPage />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/GeneralTrading" element={<GTR />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/construction/sports/:id" element={<GenericC />} />
        <Route path="/construction/renovation/:id" element={<GenericR />} />
        <Route path="/genericin" element={<GenericIn />} />
        <Route path="/genericout" element={<GenericOut />} />
        <Route path="/indoor-detail/:id" element={<LightingDetail type="indoor" />} />
        <Route path="/outdoor-detail/:id" element={<LightingDetail type="outdoor" />} />
      </Routes>
    </Router>
  );
}
