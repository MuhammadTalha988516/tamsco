import React from 'react';
import Banner from '../about/Banner';
import Mission from '../about/Mission';
import Vision from '../about/Vision';
import Values from '../about/Values';
import Testimonials from '../about/Testimonials';
import Footer from "../FrequentlyUsed/Footer";
import Navbar from "../FrequentlyUsed/Navbar";
import CorporateResponsibility from '../about/CorporateResponsibility';
import CodeOfConduct from '../about/CodeOfConduct';
import History from '../about/History';

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <History />
      <Mission />
      <Vision />
      <Values />
      <CorporateResponsibility />
      <CodeOfConduct />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default AboutUs;