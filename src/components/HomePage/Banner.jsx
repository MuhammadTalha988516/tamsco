import React, { useEffect, useState } from "react";
import homebanner from '../../assets/homebanner.jpeg';

export default function Banner() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // trigger animation after mount
    setLoaded(true);
  }, []);

  return (
    <section className="bg-blue-600 text-white w-full min-h-[90vh] flex items-center"> {/* slightly shorter height */}
      {/* Left Side Text */}
      <div
        className={`w-11/20 transition-all duration-2000 ease-out ${
          loaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
        }`}
      >
        <h1 className="text-6xl max-w-2xl font-bold mb-6 ml-10"> {/* slightly smaller text */}
          Lighting Spaces. Building Dreams. Powering Tomorrow.
        </h1>
        <p className="text-lg mb-6 max-w-xl ml-10">
          From world-class construction and sports facilities to cutting-edge lighting and technology solutions, TAMSCO WORLD is where vision meets reality.
        </p>
      </div>

      {/* Right Side Image */}
      <div
        className={`w-9/20 flex justify-end transition-all duration-2000 ease-out ${
          loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <img
          src={homebanner}
          alt="TAMSCO Banner"
          className="shadow-lg h-[90vh] rounded-lg" // slightly shorter image height
        />
      </div>
    </section>
  );
}
