import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import UseAnimations from "react-useanimations";

// animations
import activity from "react-useanimations/lib/activity";
import alertCircle from "react-useanimations/lib/alertCircle";
import loading from "react-useanimations/lib/loading";
import settings from "react-useanimations/lib/settings";

const fabricationItems = [
  {
    title: "Interface Card (SMA)",
    desc: "Custom interface cards with SMA connectors.",
    points: ["Precision fabrication", "Low loss design", "Durable", "Ready for integration"],
    animation: settings,
  },
  {
    title: "PCB Printer",
    desc: "On-demand PCB prototyping solutions.",
    points: ["Rapid design", "Compact", "Multi-layer", "High accuracy"],
    animation: activity,
  },
  {
    title: "PCB 3D Printer",
    desc: "Advanced 3D printers for PCB prototyping.",
    points: ["Additive manufacturing", "Custom circuits", "Durable builds", "Fast turnaround"],
    animation: loading,
  },
  {
    title: "Hybrid Coupler Fabrication",
    desc: "Precision fabrication of RF hybrid couplers.",
    points: ["Accurate design", "Low insertion loss", "Compact", "Reliable performance"],
    animation: alertCircle,
  },
];

export default function FP() {
  const [index, setIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const prev = () => setIndex((i) => (i - 1 + fabricationItems.length) % fabricationItems.length);
  const next = () => setIndex((i) => (i + 1) % fabricationItems.length);

  const visible = [
    fabricationItems[index],
    fabricationItems[(index + 1) % fabricationItems.length],
    fabricationItems[(index + 2) % fabricationItems.length],
  ];

  const cardBg = ["bg-white/5", "bg-white/15", "bg-white/10"];

  return (
    <div className="relative mt-15 min-h-screen flex flex-col items-center justify-center py-16 px-6">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-700 -z-10" />

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden -z-5">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animationDelay: `${i * 0.5}s`, animationDuration: `${3 + Math.random() * 2}s` }} />
        ))}
      </div>

      {/* Heading */}
      <h2 className={`text-4xl md:text-5xl font-extrabold text-white mb-3 transition-all duration-1000 text-center ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
        Fabrication & Prototyping
      </h2>
      <p className={`text-center text-gray-200 max-w-3xl mx-auto mb-10 transition-all duration-1000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}>
        Advanced prototyping and fabrication services.
      </p>

      {/* Carousel */}
      <div className={`relative w-full max-w-[1200px] flex items-center justify-center transition-all duration-1000 ${isLoaded ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"}`} style={{ perspective: 1600 }}>
        {/* Left nav */}
        <button onClick={prev} className="absolute left-0 z-30 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-110 transition-all duration-300 hover:shadow-lg">
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        {/* Cards */}
        <div className="w-full flex items-center justify-center gap-8">
          {visible.map((item, i) => {
            let style = {};
            if (i === 0) style = { transform: "rotate(-8deg) translateX(-30px) translateZ(-40px) scale(0.96)" };
            if (i === 1) style = { transform: "rotate(0deg) translateZ(80px) scale(1.08)" };
            if (i === 2) style = { transform: "rotate(8deg) translateX(30px) translateZ(-40px) scale(0.96)" };

            return (
              <div key={item.title} className="relative w-[320px] md:w-[360px] group" style={{ ...style, zIndex: i === 1 ? 20 : 5 }}>
                <div className={`${cardBg[i]} backdrop-blur-md rounded-3xl shadow-2xl border border-white/20 overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-3xl hover:border-white/40 hover:bg-white/20 group-hover:-translate-y-2`} style={{ height: "420px" }}>
                  <div className="p-6 h-full flex flex-col text-white">
                    {/* Icon */}
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border border-white/20 shadow-sm group-hover:scale-110 group-hover:bg-white/20 group-hover:border-white/40 transition-all duration-300">
                        <UseAnimations animation={item.animation} size={36} autoplay loop strokeColor={"#9be7ff"} />
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold text-white text-center mb-2 group-hover:text-teal-200 transition-all duration-300">{item.title}</h3>
                    <p className="text-sm text-gray-200 text-center mb-4 group-hover:text-gray-100 transition-all duration-300">{item.desc}</p>

                    <ul className="space-y-2 text-sm text-gray-100 mb-4 flex-grow">
                      {item.points.map((p, idx) => (
                        <li key={idx} className="flex items-start group-hover:translate-x-1 transition-all duration-300" style={{ transitionDelay: `${idx * 50}ms` }}>
                          <span className="mr-2 text-teal-300 group-hover:text-teal-200 transition-colors duration-300">•</span>
                          <span>{p}</span>
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
        <button onClick={next} className="absolute right-0 z-30 p-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:scale-110 transition-all duration-300 hover:shadow-lg">
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex items-center gap-2 mt-8">
        {fabricationItems.map((_, i) => (
          <button key={i} onClick={() => setIndex(i)} className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${i === index ? "bg-white shadow-lg" : "bg-white/40 hover:bg-white/60"}`} />
        ))}
      </div>
    </div>
  );
}
