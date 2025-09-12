import React from 'react';
import { values } from '../data/data';
import {
  ShieldCheckIcon,
  LightBulbIcon,
  UsersIcon,
  SparklesIcon,
} from '@heroicons/react/24/solid';

const iconMap = {
  Integrity: <ShieldCheckIcon className="w-8 h-8 text-indigo-600" />,
  Innovation: <LightBulbIcon className="w-8 h-8 text-indigo-600" />,
  Collaboration: <UsersIcon className="w-8 h-8 text-indigo-600" />,
  Excellence: <SparklesIcon className="w-8 h-8 text-indigo-600" />,
};

const Values = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Our Core Values
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          These values shape our culture, drive our work, and guide how we
          collaborate with our clients.
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        {values.map((value, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 text-center border-t-4 border-indigo-600"
          >
            <div className="flex items-center justify-center mb-4">
              <div className="bg-indigo-100 p-3 rounded-full">
                {iconMap[value.title]}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {value.title}
            </h3>
            <p className="text-gray-600 text-sm">{value.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;
