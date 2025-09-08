import React from 'react';
import { LightBulbIcon } from '@heroicons/react/24/solid';
import { mission } from '../data/Data';

const Mission = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-white bg-opacity-10 p-4 rounded-full shadow-lg">
            <LightBulbIcon className="w-12 h-12 text-white" />
          </div>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">{mission.title}</h2>
        <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
          {mission.text}
        </p>
      </div>
    </section>
  );
};

export default Mission;
