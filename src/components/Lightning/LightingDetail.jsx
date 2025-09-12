import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../FrequentlyUsed/Navbar';
import Footer from '../FrequentlyUsed/Footer';
import { indoorLighting, outdoorLighting } from '../data/data';

const LightingDetail = ({ type }) => {
  const { id } = useParams();
  const data = type === 'indoor' ? indoorLighting : outdoorLighting;
  const item = data[id];

  if (!item) {
    return (
      <>
        <Navbar />
        <div className="py-24 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Lighting item not found</h1>
          <p className="text-gray-600">Please go back and choose another item.</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <section className="py-24 bg-gradient-to-b from-white to-blue-50 text-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-extrabold text-blue-900 mb-3">{item.title}</h1>
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-96 object-cover rounded-3xl shadow-2xl mx-auto mb-6 transform hover:scale-105 transition duration-700"
          />
          <p className="text-lg text-gray-600">{item.description}</p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default LightingDetail;
