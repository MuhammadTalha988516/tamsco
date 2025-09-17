import React from "react";
import { Eye } from "lucide-react";
import { vision } from "../data/data";

const Vision = () => {
  return (
    <section className="relative bg-gradient-to-br from-white via-indigo-50 to-purple-50 text-gray-900 py-20 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-300/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/20 rounded-full blur-2xl animate-pulse"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="flex justify-center mb-8">
          <div className="bg-indigo-100 p-6 rounded-full shadow-2xl border border-indigo-200 animate-pulse">
            <Eye className="w-14 h-14 text-indigo-600 drop-shadow-[0_0_12px_rgba(79,70,229,0.7)] animate-bounce" />
          </div>
        </div>

        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-700 via-green-700 to-blue-600 bg-clip-text text-transparent drop-shadow-md">
          {vision.title}
        </h2>

        <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
          {vision.text}
        </p>
      </div>
    </section>
  );
};

export default Vision;
