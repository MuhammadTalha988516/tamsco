import React from 'react';
import lightingBanner from '../../assets/lighting.jpeg';

const Banner = () => (
  <section className="relative h-[350px] md:h-[450px] bg-gradient-to-br bg-black/90 text-white flex items-center justify-center overflow-hidden">
    <img
      src={lightingBanner}
      alt="Lighting Solutions"
      className="absolute inset-0 w-full h-full object-cover opacity-20"
    />
    <div className="relative z-10 text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight drop-shadow-lg">
        Lighting Solutions
      </h1>
      <p className="mt-3 text-lg md:text-xl text-blue-100/80">
        Experience brilliance, indoors and outdoors.
      </p>
    </div>
  </section>
);

export default Banner;