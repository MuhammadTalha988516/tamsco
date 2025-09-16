import React from "react";
import about from "../../assets/about.jpg";

const Banner = () => {
  return (
    <div className="relative w-full h-[90vh] overflow-hidden">
      {/* Background Image */}
      <img
        src={about}
        alt="Banner Background"
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Text */}
      <div className="absolute inset-0 flex items-center justify-center z-20">
        <h1 className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-2xl">
          About Us
        </h1>
      </div>
    </div>
  );
};

export default Banner;