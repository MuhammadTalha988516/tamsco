import React from "react";
import lighting from '../../assets/lighting.jpeg';
import trading from '../../assets/trading.jpeg';
import construction from '../../assets/construction.jpeg';

const blocks = [
  {
    title: "Lighting",
    description: "World-class lighting solutions for modern projects. Our innovative lighting designs brighten every space efficiently and beautifully, creating an unforgettable experience.",
    image: lighting,
  },
  {
    title: "General Trading",
    description: "Cutting-edge trading solutions for any space. We ensure seamless operations and offer exceptional products to meet diverse industry demands.",
    image: trading,
  },
  {
    title: "Construction",
    description: "Innovative construction technology to power your projects. From planning to execution, we provide top-notch expertise and modern solutions.",
    image: construction,
  },
];

export default function Boxes() {
  return (
    <section className="w-full py-16 px-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {blocks.map((block, idx) => (
          <div
            key={idx}
            className="relative h-96 rounded-lg overflow-hidden cursor-pointer group"
          >
            {/* Background image with blur on card hover */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-500 group-hover:blur-sm"
              style={{ backgroundImage: `url(${block.image})` }}
            ></div>

            {/* Overlay for contrast */}
            <div className="absolute inset-0 bg-black/30 bg-opacity-30 transition duration-500 group-hover:bg-opacity-40"></div>

            {/* Title initially centered, moves to top center on hover */}
{/* Title initially centered, moves upward from center on hover */}
<div className="absolute inset-0 flex justify-center items-center">
  <h2 className="text-3xl font-bold text-blue-600 text-center transition-transform duration-700 transform group-hover:-translate-y-28">
    {block.title}
  </h2>
</div>


            {/* Paragraph + Read More button slides in from bottom */}
            <div className="absolute left-6 right-6 top-30 text-white z-10 opacity-0 transform translate-y-6 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
              <p className="text-base mb-4 leading-relaxed">
                {block.description}
              </p>
              <button className="flex items-center gap-2 text-base text-white group">
                <span className="group-hover:underline group-hover:decoration-gray-400">
                  Read More
                </span>
                <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
