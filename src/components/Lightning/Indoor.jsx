import React from 'react';
import { indoorLighting } from '../data/data';

const Indoor = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50 text-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-blue-900 mb-3">Indoor Lighting</h2>
          <p className="text-lg text-gray-600">Illuminate your interiors with modern elegance and innovation.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Featured Image */}
          <div className="md:col-span-2 relative group overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={indoorLighting[0].image}
              alt={indoorLighting[0].title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-blue-900/60 opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">
              <h3 className="text-3xl font-bold text-white">{indoorLighting[0].title}</h3>
            </div>
          </div>

          {/* Stacked cards on right */}
          <div className="grid gap-6">
            {indoorLighting.slice(1).map((item, i) => (
              <div key={i} className="relative group overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-blue-800/60 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end p-4">
                  <h4 className="text-lg font-semibold text-white">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Indoor;
