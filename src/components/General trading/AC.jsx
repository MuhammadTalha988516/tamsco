import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import UseAnimations from "react-useanimations";

// animations
import activity from "react-useanimations/lib/activity"; // Enterprise Asset Management
import loading from "react-useanimations/lib/loading";   // Managed Services

const consultancy = [
  {
    title: "Enterprise Asset Management",
    desc: "Gain control of your assets with predictive maintenance, centralized monitoring, and lifecycle optimization.",
    points: [
      "Centralized asset visibility",
      "Predictive maintenance",
      "Lifecycle optimization",
    ],
    animation: activity,
  },
  {
    title: "Managed Services",
    desc: "Focus on growth while we provide round-the-clock monitoring, proactive issue resolution, and cost-effective IT operations.",
    points: [
      "24/7 monitoring",
      "Proactive issue resolution",
      "Cost-effective operations",
    ],
    animation: loading,
  },
];

export default function AC() {
  const [index, setIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const prev = () =>
    setIndex((i) => (i - 1 + consultancy.length) % consultancy.length);
  const next = () => setIndex((i) => (i + 1) % consultancy.length);

  // only two visible cards (left + right)
  const visible = [
    consultancy[index],
    consultancy[(index + 1) % consultancy.length],
  ];

  return (
    <div className="relative mt-6 min-h-screen flex flex-col items-center justify-center py-16 px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700 -z-10" />

      {/* Heading */}
      <h2
        className={`text-4xl md:text-5xl font-extrabold text-white mb-3 transition-all duration-1000 text-center ${
          isLoaded
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }`}
      >
        Automation Consultancy
      </h2>
      <p
        className={`text-center text-gray-200 max-w-3xl mx-auto mb-10 transition-all duration-1000 ${
          isLoaded
            ? "translate-y-0 opacity-100"
            : "translate-y-8 opacity-0"
        }`}
      >
        Unlock efficiency with automation-led consultancy tailored to modern
        enterprises.
      </p>

      {/* Carousel */}
      <div
        className={`relative w-full max-w-[1200px] flex items-center justify-center transition-all duration-1000 ${
          isLoaded
            ? "translate-y-0 opacity-100"
            : "translate-y-12 opacity-0"
        }`}
        style={{ perspective: 1600 }}
      >
        {/* Left nav */}
        <button
          onClick={prev}
          className="absolute left-0 z-30 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-110 transition-all duration-300 hover:shadow-lg"
        >
          <ChevronLeft className="w-7 h-7 text-white" />
        </button>

        {/* Two tilted cards */}
        <div className="w-full flex items-center justify-center gap-16">
          {visible.map((item, i) => {
            const style =
              i === 0
                ? { transform: "rotate(-8deg) translateX(-50px) scale(0.97)" }
                : { transform: "rotate(8deg) translateX(50px) scale(0.97)" };

            return (
              <div
                key={item.title}
                className="relative w-[360px] md:w-[400px] group transition-all duration-700"
                style={style}
              >
                <div
                  className="bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 overflow-hidden 
                             transition-all duration-500 hover:scale-105 hover:shadow-3xl hover:border-white/40 
                             hover:bg-white/20 group-hover:-translate-y-2"
                  style={{ height: "460px" }}
                >
                  <div className="p-8 h-full flex flex-col text-white">
                    {/* Icon */}
                    <div className="flex items-center justify-center mb-5">
                      <div className="w-18 h-18 rounded-full bg-white/10 flex items-center justify-center border border-white/20 shadow-sm group-hover:scale-110 group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-300">
                        <UseAnimations
                          animation={item.animation}
                          size={42}
                          autoplay
                          loop
                          strokeColor={"#00ffae"}
                        />
                      </div>
                    </div>

                    <h3 className="text-2xl font-semibold text-white text-center mb-3 group-hover:text-teal-300 transition-all duration-300">
                      {item.title}
                    </h3>
                    <p className="text-base text-gray-200 text-center mb-5 group-hover:text-gray-100 transition-all duration-300">
                      {item.desc}
                    </p>

                    <ul className="space-y-3 text-base text-gray-100 mb-4 flex-grow">
                      {item.points.map((p, idx) => (
                        <li
                          key={idx}
                          className="flex items-start group-hover:translate-x-1 transition-all duration-300"
                          style={{ transitionDelay: `${idx * 50}ms` }}
                        >
                          <span className="mr-2 text-teal-400 group-hover:text-teal-300 transition-colors duration-300">
                            •
                          </span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-400/20 to-cyan-500/20 blur-xl"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right nav */}
        <button
          onClick={next}
          className="absolute right-0 z-30 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-110 transition-all duration-300 hover:shadow-lg"
        >
          <ChevronRight className="w-7 h-7 text-white" />
        </button>
      </div>
    </div>
  );
}
