import React from "react";
import { Lightbulb } from "lucide-react"; // live-style icon
import { mission } from "../data/data";

const Mission = () => {
  return (
    <section className="relative bg-gradient-to-br from-indigo-700 via-green-700 to-blue-600 text-white py-20 px-6 overflow-hidden">
      {/* Glowing background */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-500/30 rounded-full blur-2xl animate-pulse"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        {/* Icon */}
        <div className="flex justify-center mb-8">
          <div className="bg-yellow-400/20 p-6 rounded-full shadow-2xl border border-yellow-300/30">
            <Lightbulb className="w-16 h-16 text-yellow-300 animate-pulse drop-shadow-[0_0_15px_rgba(250,204,21,0.8)]" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-yellow-300 via-white to-yellow-400 bg-clip-text text-transparent drop-shadow-lg">
          {mission.title}
        </h2>

        {/* Text */}
        <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
          {mission.text}
        </p>
      </div>
    </section>
  );
};

export default Mission;
