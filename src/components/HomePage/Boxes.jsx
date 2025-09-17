import React from "react";
import { Lightbulb, ShoppingBag, Building2 } from "lucide-react";

const blocks = [
  {
    title: "Lighting Solutions",
    description:
      "World-class lighting solutions for modern projects. Our innovative lighting designs brighten every space efficiently and beautifully.",
    icon: (
      <Lightbulb className="w-16 h-16 text-yellow-300 group-hover:text-yellow-400 transition-colors duration-500" />
    ),
  },
  {
    title: "General Trading",
    description:
      "Cutting-edge trading solutions for any space. We ensure seamless operations and offer exceptional products to meet diverse industry demands.",
    icon: (
      <ShoppingBag className="w-16 h-16 text-green-400 group-hover:text-green-500 transition-colors duration-500" />
    ),
  },
  {
    title: "Construction & Renovation",
    description:
      "Innovative construction technology to power your projects. From planning to execution, we provide top-notch expertise and modern solutions.",
    icon: (
      <Building2 className="w-16 h-16 text-orange-400 group-hover:text-orange-500 transition-colors duration-500" />
    ),
  },
];

export default function Boxes() {
  return (
    <section className="w-full py-16 mt-20 px-6 md:px-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {blocks.map((block, idx) => (
          <div
            key={idx}
            className="relative flex flex-col items-center justify-center p-8 min-h-[24rem] rounded-2xl bg-gradient-to-br from-green-300 via-blue-500 to-teal-600 cursor-pointer group shadow-lg overflow-hidden transition-transform duration-500 hover:-translate-y-3 hover:scale-[1.02] hover:shadow-2xl"
          >
            {/* Icon */}
            <div className="mb-6 transform transition-transform duration-700 group-hover:scale-110">
              {block.icon}
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold mb-4 text-center transition-colors duration-500 group-hover:text-gray-100">
              {block.title}
            </h2>

            {/* Description */}
            <p className="text-base text-gray-200 text-center opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700">
              {block.description}
            </p>

            {/* Read More button */}
            <button
              aria-label={`Read more about ${block.title}`}
              className="mt-6 flex items-center gap-2 text-base text-white opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700"
            >
              <span className="group-hover:underline">Read More</span>
              <span className="inline-block transform transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
