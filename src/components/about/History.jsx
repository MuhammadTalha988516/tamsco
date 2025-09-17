import React from "react";

export default function History() {
  return (
    <section className="relative py-16 md:py-20 bg-gradient-to-br from-blue-500 via-green-300 to-blue-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-blue-800 mb-12 md:mb-16">
          Our Journey
        </h2>

        <div className="relative border-l-4 border-blue-500 pl-6 space-y-10">
          {/* 2007 */}
          <div className="relative">
            <div className="absolute w-4 h-4 md:w-6 md:h-6 bg-blue-600 rounded-full -left-[1.15rem] md:-left-[1.35rem] top-1.5"></div>
            <h3 className="text-xl md:text-2xl font-bold text-blue-700">
              2007 – Beginnings
            </h3>
            <p className="text-gray-700 mt-2 leading-relaxed text-sm md:text-base">
              TAMSCO began in <span className="font-semibold">Islamabad</span>,
              focusing on general trading with lighting solutions. Our first
              brand{" "}
              <span className="text-blue-700 font-semibold">EcoTech</span> quickly earned trust with energy-saving LED lights.
            </p>
          </div>

          {/* Expansion */}
          <div className="relative">
            <div className="absolute w-4 h-4 md:w-6 md:h-6 bg-green-600 rounded-full -left-[1.15rem] md:-left-[1.35rem] top-1.5"></div>
            <h3 className="text-xl md:text-2xl font-bold text-green-700">
              Expansion & Diversification
            </h3>
            <p className="text-gray-700 mt-2 leading-relaxed text-sm md:text-base">
              With quality and reliability, we grew into new trading sectors,
              serving top institutions nationwide.
            </p>
          </div>

          {/* 2020 */}
          <div className="relative">
            <div className="absolute w-4 h-4 md:w-6 md:h-6 bg-purple-600 rounded-full -left-[1.15rem] md:-left-[1.35rem] top-1.5"></div>
            <h3 className="text-xl md:text-2xl font-bold text-purple-700">
              2020 – Entering Construction
            </h3>
            <p className="text-gray-700 mt-2 leading-relaxed text-sm md:text-base">
              We stepped into the{" "}
              <span className="font-semibold text-purple-700">
                construction sector
              </span>
              , delivering large-scale projects for both government and private
              clients, cementing our reputation as a trusted partner.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
