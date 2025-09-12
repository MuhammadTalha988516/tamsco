import React from 'react';
import Navbar from '../FrequentlyUsed/Navbar';
import Banner from '../construction/Banner';
import PreviousProjects from '../construction/PreviousProjects';
import Sports from '../construction/Sports';
import Renovation from '../construction/Renovation';
import Footer from '../FrequentlyUsed/Footer';

const Construction = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <PreviousProjects />
      <Sports />
      <Renovation />
      <Footer />
    </>
  );
};

export default Construction;
