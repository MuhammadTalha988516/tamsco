import React from "react";
import { values } from "../data/data";
import {
  ShieldCheckIcon,
  LightBulbIcon,
  UsersIcon,
  SparklesIcon,
} from "@heroicons/react/24/solid";

const iconMap = {
  Integrity: <ShieldCheckIcon className="w-8 h-8 text-indigo-600 group-hover:scale-125 transition-transform duration-500" />,
  Innovation: <LightBulbIcon className="w-8 h-8 text-yellow-500 group-hover:rotate-12 transition-transform duration-500" />,
  Collaboration: <UsersIcon className="w-8 h-8 text-green-600 group-hover:scale-110 transition-transform duration-500" />,
  Excellence: <SparklesIcon className="w-8 h-8 text-purple-600 group-hover:animate-pulse" />,
};

const Values = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-50 py-20 px-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-indigo-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400/20 rounded-full blur-2xl animate-pulse"></div>

      <div className="max-w-6xl mx-auto text-center mb-14 relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-indigo-700 via-green-700 to-blue-600 bg-clip-text text-transparent drop-shadow">
          Our Core Values
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          These values shape our culture, drive our work, and guide how we
          collaborate with our clients.
        </p>
      </div>

      {/* Values Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto relative z-10">
        {values.map((value, index) => (
          <div
            key={index}
            className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 p-8 text-center border-t-4 border-indigo-500 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-purple-50"
          >
            <div className="flex items-center justify-center mb-5">
              <div className="bg-white p-4 rounded-full shadow-lg border border-indigo-100 group-hover:scale-110 transition-transform duration-500">
                {iconMap[value.title]}
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-700 transition-colors">
              {value.title}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {value.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;