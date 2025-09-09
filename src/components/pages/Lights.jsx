import React from 'react';
import Banner from '../Lightning/Banner';
import Indoor from '../Lightning/Indoor';
import Outdoor from '../Lightning/Outdoor';
import Footer from "../FrequentlyUsed/Footer";
import Navbar from "../FrequentlyUsed/Navbar";

const Lights = () => {
  return (
    <>
        <Navbar/>
        <Banner />
        <Indoor />
        <Outdoor />
        <Footer/>
    
    </>
  );
};

export default Lights;