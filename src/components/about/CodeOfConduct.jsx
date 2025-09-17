import React from "react";
import { CheckCircle } from "lucide-react";

export default function CodeOfConduct() {
  const points = [
    "We only partner with those who share our values and ethics.",
    "Commitment to a sustainable, transparent supply chain.",
    "Zero tolerance for human rights violations.",
    "Trust-based collaboration with employees, clients, and stakeholders.",
  ];

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-100 via-white to-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center text-gray-900 mb-8 md:mb-10">
          Code of Conduct
        </h2>
        <ul className="space-y-5 md:space-y-6">
          {points.map((point, i) => (
            <li
              key={i}
              className="flex items-start gap-3 md:gap-4 bg-white shadow-md rounded-xl p-4 md:p-5 hover:shadow-lg transition-shadow"
            >
              <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-600 flex-shrink-0 mt-1" />
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                {point}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
