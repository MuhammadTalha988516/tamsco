import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid';
import { vision } from '../data/Data';

const Vision = () => {
  return (
    <section className="relative bg-white text-gray-900 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-indigo-100 p-4 rounded-full shadow-md">
            <EyeIcon className="w-12 h-12 text-indigo-600" />
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">{vision.title}</h2>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          {vision.text}
        </p>
      </div>
    </section>
  );
};

export default Vision;
