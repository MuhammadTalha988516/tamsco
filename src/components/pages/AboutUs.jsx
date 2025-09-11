import React from 'react';
import Banner from '../about/Banner';
import Mission from '../about/Mission';
import Vision from '../about/Vision';
import Values from '../about/Values';
import Testimonials from '../about/Testimonials';
import Footer from "../FrequentlyUsed/Footer";
import Navbar from "../FrequentlyUsed/Navbar";

const AboutUs = () => {
  return (
    <div>
      <Navbar/>
      <Banner />
      <Mission />
      <Vision />
      <Values />
      <Testimonials />
      <Footer/>
    </div>
  );
};

export default AboutUs;