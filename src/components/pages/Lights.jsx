import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../FrequentlyUsed/Navbar';
import Footer from '../FrequentlyUsed/Footer';
import Banner from '../Lightning/Banner';
import WhyChooseUs from '../HomePage/WhyChooseUS';
import Testimonials from '../about/Testimonials';
import indoor1 from '../../assets/indoor.webp';
import outdoor2 from '../../assets/outdoor.webp';

const Lights = () => {
  return (
    <>
      <Navbar />
      <Banner />

      {/* Indoor/Outdoor Options */}
      <section className="py-24 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-[#1C80BB]">
              Choose Your Lighting Solution
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Indoor Option */}
            <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={indoor1}
                alt="Indoor Lighting"
                className="w-full h-96 object-cover transform group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500">
                <h3 className="text-4xl font-bold text-white mb-4">
                  Indoor Lighting
                </h3>
                <p className="text-lg text-white/90 mb-6">Illuminate your interiors</p>
                <div className="flex space-x-3">
                  
                  <Link
                    to="/indoor"
                    className="border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-100 hover:text-black transition duration-300"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>

            {/* Outdoor Option */}
            <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={outdoor2}
                alt="Outdoor Lighting"
                className="w-full h-96 object-cover transform group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500">
                <h3 className="text-4xl font-bold text-white mb-4">Outdoor Lighting</h3>
                <p className="text-lg text-white/90 mb-6">Shine bright outside</p>
                <div className="flex space-x-3">
                 
                  <Link
                    to="/outdoor"
                    className="border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <WhyChooseUs />

      {/* Testimonials Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-4">Ready to Brighten Your World?</h2>
          <p className="text-lg mb-8">
            Contact us today for a consultation and let us design the perfect lighting solution for you.
          </p>
          <Link
            to="/contact"
            className="bg-white text-blue-800 px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-100 transition duration-300"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Lights;