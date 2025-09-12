import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import UseAnimations from "react-useanimations";

// animations (pick closest ones available in react-useanimations)
import activity from "react-useanimations/lib/activity";
import alertCircle from "react-useanimations/lib/alertCircle";
import loading from "react-useanimations/lib/loading";
import settings from "react-useanimations/lib/settings";
import lock from "react-useanimations/lib/lock";

const rfComponents = [
  {
    title: "RF Cable",
    desc: "High-frequency coaxial cables for RF connectivity.",
    points: ["Low loss", "Shielded design", "Flexible", "High bandwidth"],
    animation: activity,
  },
  {
    title: "RF Connectors",
    desc: "Multiple connector types for RF systems.",
    points: ["SMA", "BNC", "N-Type", "MCX"],
    animation: alertCircle,
  },
  {
    title: "Power Divider",
    desc: "Divides RF signals with low insertion loss.",
    points: ["2-way", "4-way", "Low VSWR", "High isolation"],
    animation: loading,
  },
  {
    title: "Microwave Filters",
    desc: "Custom RF and microwave filtering solutions.",
    points: ["Band pass", "Band stop", "High Q", "Compact design"],
    animation: settings,
  },
  {
    title: "Frequency Mixer",
    desc: "Frequency conversion with high linearity.",
    points: ["Low noise", "Wideband", "Compact", "Stable output"],
    animation: lock,
  },
];

export default function RF() {
  const [index, setIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + rfComponents.length) % rfComponents.length);
  const next = () => setIndex((i) => (i + 1) % rfComponents.length);

  const visible = [
    rfComponents[index],
    rfComponents[(index + 1) % rfComponents.length],
    rfComponents[(index + 2) % rfComponents.length],
  ];

  const cardBg = ["bg-white/5", "bg-white/15", "bg-white/10"];

  return (
    <div className="relative mt-15 min-h-screen flex flex-col items-center justify-center py-16 px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700 -z-10" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden -z-5">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Heading */}
      <h2
        className={`text-4xl md:text-5xl font-extrabold text-white mb-3 transition-all duration-1000 text-center ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        RF & Microwave Components
      </h2>
      <p
        className={`text-center text-gray-200 max-w-3xl mx-auto mb-10 transition-all duration-1000 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        Transparent glass-style cards with frosted glass hover glow effect.
      </p>

      {/* Carousel */}
      <div
        className={`relative w-full max-w-[1200px] flex items-center justify-center transition-all duration-1000 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
        }`}
        style={{ perspective: 1600 }}
      >
        {/* Left nav */}
        <button
          onClick={prev}
          className="absolute left-0 z-30 p-3 rounded-full bg-white/10 backdrop-blur-sm 
          hover:bg-white/20 hover:scale-110 transition-all duration-300 hover:shadow-lg"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        {/* Cards */}
        <div className="w-full flex items-center justify-center gap-8">
          {visible.map((item, i) => {
            let style = {};
            let z = 10;
            if (i === 0) {
              style = { transform: "rotate(-8deg) translateX(-30px) translateZ(-40px) scale(0.96)", transition: "transform 450ms" };
              z = 5;
            }
            if (i === 1) {
              style = { transform: "rotate(0deg) translateZ(80px) scale(1.08)", transition: "transform 450ms" };
              z = 20;
            }
            if (i === 2) {
              style = { transform: "rotate(8deg) translateX(30px) translateZ(-40px) scale(0.96)", transition: "transform 450ms" };
              z = 5;
            }

            return (
              <div key={item.title} className="relative w-[320px] md:w-[360px] group" style={{ ...style, zIndex: z }}>
                <div
                  className={`${cardBg[i]} backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 overflow-hidden 
                  transition-all duration-500 hover:scale-105 hover:shadow-3xl hover:border-white/40 
                  hover:bg-white/20 group-hover:-translate-y-2`}
                  style={{ height: "420px" }}
                >
                  <div className="p-6 h-full flex flex-col text-white">
                    {/* Icon */}
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center 
                      border border-white/20 shadow-sm transition-all duration-300 
                      group-hover:scale-110 group-hover:bg-white/20 group-hover:border-white/40">
                        <UseAnimations animation={item.animation} size={36} autoplay loop strokeColor={"#9be7ff"} />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-white text-center mb-2 transition-all duration-300 group-hover:text-teal-200">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-200 text-center mb-4 transition-all duration-300 group-hover:text-gray-100">
                      {item.desc}
                    </p>

                    <ul className="space-y-2 text-sm text-gray-100 mb-4 flex-grow">
                      {item.points.map((p, idx) => (
                        <li
                          key={idx}
                          className="flex items-start transition-all duration-300 group-hover:translate-x-1"
                          style={{ transitionDelay: `${idx * 50}ms` }}
                        >
                          <span className="mr-2 text-teal-300 transition-colors duration-300 group-hover:text-teal-200">•</span>
                          <span className="leading-tight">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-teal-400/20 to-blue-400/20 blur-xl"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right nav */}
        <button
          onClick={next}
          className="absolute right-0 z-30 p-3 rounded-full bg-white/10 backdrop-blur-sm 
          hover:bg-white/20 hover:scale-110 transition-all duration-300 hover:shadow-lg"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Dots */}
      <div
        className={`flex items-center gap-2 mt-8 transition-all duration-1000 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {rfComponents.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
              i === index ? "bg-white shadow-lg" : "bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`go-to-${i}`}
          />
        ))}
      </div>
    </div>
  );
}
