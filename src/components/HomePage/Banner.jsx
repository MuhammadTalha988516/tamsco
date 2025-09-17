import React, { useEffect, useState } from "react";
import homebanner from "../../assets/homebanner.webp";

export default function Banner() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="bg-gradient-to-br from-green-300 via-blue-500 to-teal-600 text-white w-full min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 w-full">
        {/* Left Side Text */}
        <div
          className={`transition-all duration-[2000ms] ease-out ${
            loaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
          } flex flex-col justify-center`}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-snug">
            Lighting Spaces. <br />
            Building Dreams. <br />
            Powering Tomorrow.
          </h1>
          <p className="text-lg md:text-xl mb-6 max-w-xl">
            From world-class construction and sports facilities to cutting-edge
            lighting and technology solutions, TAMSCO WORLD is where vision
            meets reality.
          </p>
          <button className="px-6 py-3 bg-white text-blue-700 font-semibold rounded-full shadow-md hover:bg-gray-100 transition">
            Get Started
          </button>
        </div>

        {/* Right Side Image */}
        <div
          className={`flex justify-center md:justify-end transition-all duration-[2000ms] ease-out ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <img
            src={homebanner}
            alt="TAMSCO Banner showcasing lighting and construction projects"
            className="shadow-xl h-[70vh] md:h-[90vh] rounded-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
