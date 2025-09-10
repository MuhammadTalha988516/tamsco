import React from "react";
import Navbar from "../FrequentlyUsed/Navbar";
import Banner from "../HomePage/Banner";
import Footer from "../FrequentlyUsed/Footer";
import Boxes from "../HomePage/Boxes";
import Ticker from "../HomePage/Ticker";
import AboutUs from "../HomePage/AboutUs";
import OurPartners from "../HomePage/OurPartners";
import Policy from "../HomePage/Policy";
import WhyChooseUs from "../HomePage/WhyChooseUS";
import ContactUs from "../HomePage/ContactUs";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Boxes /> 
      <Ticker />
      <Banner />
      <AboutUs />
      <Policy />
      <OurPartners />
      <WhyChooseUs />
      <ContactUs />
      <Footer />
    </>
  );
}
