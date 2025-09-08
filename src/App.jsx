import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/FrequentlyUsed/Navbar";
import Banner from "./components/HomePage/Banner";
import Footer from "./components/FrequentlyUsed/Footer";
import Boxes from "./components/HomePage/Boxes";
import Ticker from "./components/HomePage/ticker";
import AboutUs from "./components/HomePage/aboutus";
import OurPartners from "./components/HomePage/OurPartners";
import Policy from "./components/HomePage/Policy";
import WhyChooseUs from "./components/HomePage/WhyChooseUS";
import ContactUs from "./components/HomePage/ContactUs";


export default function App() {
  return (
    <Router>
      
        <Navbar />
        <Banner/>
        <Boxes/>
        <Ticker/>
        <AboutUs/>
         <Policy/>
        <OurPartners/>
        <WhyChooseUs/>
        <ContactUs/>
        <Footer/>
      
    </Router>
  );
}
