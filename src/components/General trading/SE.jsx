import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import UseAnimations from "react-useanimations";

// animations
import activity from "react-useanimations/lib/activity";     // UVSS
import alertCircle from "react-useanimations/lib/alertCircle"; // Metal + Temp Detector
import alertTriangle from "react-useanimations/lib/alertTriangle"; // Explosive Detector
import loading from "react-useanimations/lib/loading";       // Thermal Walkthrough
import lock from "react-useanimations/lib/lock";             // Metal Detector
import settings from "react-useanimations/lib/settings";     // X-Ray Scanner

const equipment = [
  {
    title: "UVSS",
    desc: "AI-powered under-vehicle inspection system.",
    points: ["Inspection mirrors", "UVBOT integration", "Line Scan UVSS", "ZA-UVSS-II"],
    animation: activity,
  },
  {
    title: "X-Ray Scanner",
    desc: "Smart X-Ray baggage scanners with AI detection.",
    points: ["Dual-view imaging", "Multi-energy detection", "Portable scanners", "Threat recognition"],
    animation: settings,
  },
  {
    title: "Explosive Detector",
    desc: "Fast portable detectors for explosives and liquids.",
    points: ["Trace detection", "Liquid analysis", "Raman spectrometer", "Hazard alerts"],
    animation: alertTriangle,
  },
  {
    title: "Metal Detector",
    desc: "Walkthrough and handheld detectors with precision.",
    points: ["Walkthrough gates", "Handheld units", "Multi-zone detection", "Rugged design"],
    animation: lock,
  },
  {
    title: "Thermal Walkthrough",
    desc: "Detect elevated temperatures with thermal gates.",
    points: ["Thermal cameras", "Body temp check", "Seamless walk-through", "Real-time alerts"],
    animation: loading,
  },
  {
    title: "Metal + Temp Detector",
    desc: "Hybrid detectors for metal and temperature threats.",
    points: ["Dual detection", "Fast scanning", "Compact design", "Compliance ready"],
    animation: alertCircle,
  },
];

export default function SE() {
  const [index, setIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load animation on mount
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + equipment.length) % equipment.length);
  const next = () => setIndex((i) => (i + 1) % equipment.length);

  const visible = [
    equipment[index],
    equipment[(index + 1) % equipment.length],
    equipment[(index + 2) % equipment.length],
  ];

  // Different opacities → left darker, center brighter, right medium
  const cardBg = ["bg-white/5", "bg-white/15", "bg-white/10"];

  return (
    <div className="relative min-h-screen mt-15 flex flex-col items-center justify-center py-16 px-6">
      {/* Full page gradient background (static, no parallax) */}
      <div 
        className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700 -z-10" 
        style={{ opacity: isLoaded ? 1 : 0 }}
      />

      {/* Animated floating particles */}
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

      <h2 
        className={`text-4xl md:text-5xl font-extrabold text-white mb-3 transform transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
        style={{ transitionDelay: '200ms' }}
      >
        Security Equipment
      </h2>
      <p 
        className={`text-center text-gray-200 max-w-3xl mx-auto mb-10 transform transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
        style={{ transitionDelay: '400ms' }}
      >
        Transparent glass-style cards with frosted effect.
      </p>

      <div
        className={`relative w-full max-w-[1200px] flex items-center justify-center transform transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
        style={{ perspective: 1600, transitionDelay: '600ms' }}
      >
        {/* Left nav */}
        <button
          onClick={prev}
          className="absolute left-0 z-30 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-110 transform transition-all duration-300 hover:shadow-lg"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        {/* Cards */}
        <div className="w-full flex items-center justify-center gap-8">
          {visible.map((item, i) => {
            let style = {};
            let z = 10;
            if (i === 0) {
              style = {
                transform:
                  "rotate(-8deg) translateX(-30px) translateZ(-40px) scale(0.96)",
                transition: "transform 450ms",
              };
              z = 5;
            }
            if (i === 1) {
              style = {
                transform: "rotate(0deg) translateZ(80px) scale(1.08)",
                transition: "transform 450ms",
              };
              z = 20;
            }
            if (i === 2) {
              style = {
                transform:
                  "rotate(8deg) translateX(30px) translateZ(-40px) scale(0.96)",
                transition: "transform 450ms",
              };
              z = 5;
            }

            return (
              <div
                key={item.title}
                className="relative w-[320px] md:w-[360px] group"
                style={{ ...style, zIndex: z }}
              >
                <div
                  className={`${cardBg[i]} backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-3xl hover:border-white/40 hover:bg-white/20 group-hover:-translate-y-2`}
                  style={{ height: "420px" }}
                >
                  <div className="p-6 h-full flex flex-col text-white">
                    {/* header */}
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border border-white/20 shadow-sm transform transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20 group-hover:border-white/40">
                        <UseAnimations
                          animation={item.animation}
                          size={36}
                          autoplay
                          loop
                          strokeColor={"#9be7ff"}
                        />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-white text-center mb-2 transform transition-all duration-300 group-hover:text-teal-200">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-200 text-center mb-4 transform transition-all duration-300 group-hover:text-gray-100">
                      {item.desc}
                    </p>

                    <ul className="space-y-2 text-sm text-gray-100 mb-4 flex-grow">
                      {item.points.map((p, idx) => (
                        <li 
                          key={idx} 
                          className="flex items-start transform transition-all duration-300 group-hover:translate-x-1"
                          style={{ transitionDelay: `${idx * 50}ms` }}
                        >
                          <span className="mr-2 text-teal-300 transform transition-colors duration-300 group-hover:text-teal-200">•</span>
                          <span className="leading-tight">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Hover glow effect */}
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
          className="absolute right-0 z-30 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-110 transform transition-all duration-300 hover:shadow-lg"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Dots */}
      <div 
        className={`flex items-center gap-2 mt-8 transform transition-all duration-1000 ${
          isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
        style={{ transitionDelay: '800ms' }}
      >
        {equipment.map((_, i) => (
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
