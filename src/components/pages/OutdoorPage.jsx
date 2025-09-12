import React from 'react';
import { Link } from 'react-router-dom';
import { outdoorLighting } from '../data/data';
import Navbar from '../FrequentlyUsed/Navbar';
import Footer from '../FrequentlyUsed/Footer';

const OutdoorPage = () => {
  return (
    <>
      <Navbar />
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white text-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-6xl font-extrabold text-blue-900 mb-3">Outdoor Lighting Solutions</h1>
            <p className="text-lg text-gray-600">Built to last and shine bright — wherever you need light.</p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {outdoorLighting.map((item, i) => (
              <Link key={i} to={`/outdoor-detail/${i}`}>
                <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-blue-800/60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-sm text-white/90">{item.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default OutdoorPage;
