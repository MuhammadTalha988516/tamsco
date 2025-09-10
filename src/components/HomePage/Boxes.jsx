import React from "react";
import { Lightbulb, ShoppingBag, Building2 } from "lucide-react"; // icons

const blocks = [
  {
    title: "Lighting",
    description:
      "World-class lighting solutions for modern projects. Our innovative lighting designs brighten every space efficiently and beautifully.",
    icon: <Lightbulb className="w-16 h-16 text-blue-500 group-hover:text-blue-700 transition-colors duration-500" />,
  },
  {
    title: "General Trading",
    description:
      "Cutting-edge trading solutions for any space. We ensure seamless operations and offer exceptional products to meet diverse industry demands.",
    icon: <ShoppingBag className="w-16 h-16 text-green-500 group-hover:text-green-700 transition-colors duration-500" />,
  },
  {
    title: "Construction",
    description:
      "Innovative construction technology to power your projects. From planning to execution, we provide top-notch expertise and modern solutions.",
    icon: <Building2 className="w-16 h-16 text-orange-500 group-hover:text-orange-700 transition-colors duration-500" />,
  },
];

export default function Boxes() {
  return (
    <section className="w-full py-16 mt-20 px-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blocks.map((block, idx) => (
          <div
            key={idx}
            className="relative flex flex-col items-center justify-center p-8 h-96 rounded-2xl bg-gray-900 text-white cursor-pointer group shadow-lg overflow-hidden transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Icon */}
            <div className="mb-6 transform transition-transform duration-700 group-hover:scale-110">
              {block.icon}
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold mb-4 text-center transition-colors duration-500 group-hover:text-blue-400">
              {block.title}
            </h2>

            {/* Description */}
            <p className="text-base text-gray-300 text-center opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700">
              {block.description}
            </p>

            {/* Read More button */}
            <button className="mt-6 flex items-center gap-2 text-base text-blue-400 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700">
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
