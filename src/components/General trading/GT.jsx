import React from "react";
import UseAnimations from "react-useanimations";
import settings from "react-useanimations/lib/settings";
import lock from "react-useanimations/lib/lock";
import activity from "react-useanimations/lib/activity";
import infinity from "react-useanimations/lib/infinity";
import star from "react-useanimations/lib/star";
import archive from "react-useanimations/lib/archive";
import { motion } from "framer-motion";

// Front-side summaries
const summaries = [
  "Automation Consultancy: Enterprise Asset Management, Managed Services, Operations Optimization, Reliability Improvement",
  "Security Equipment: UVSS, X-Ray baggage scanners, Explosive detectors, Metal detectors, Thermal Walkthroughs",
  "Testing & Measurement: Oscilloscopes, Multimeters, Clamp meters, DC loads, Visual Fault Locators",
  "RF & Microwave Components: RF cables, Connectors, Filters, Oscillators, Couplers",
  "Solar Solutions: Reliable inverters, Solar batteries, Clean energy, Backup systems",
  "Fabrication & Prototyping: PCB printing, 3D prototyping, Interface cards, Custom design",
];

// Back-side details
const categories = [
  {
    title: "Automation Consultancy",
    animation: settings,
    color: "from-blue-500 to-blue-700",
    details: [
      "Enterprise Asset Management",
      "Managed Services",
      "Operations Optimization",
      "Reliability Improvement",
    ],
  },
  {
    title: "Security Equipment",
    animation: lock,
    color: "from-green-500 to-green-700",
    details: [
      "UVSS (Inspection mirror, Surveillance system, Line Scan UVSS)",
      "X-Ray Baggage Scanner (Double View, Multi Energy, AI Threat Detection)",
      "Explosive/Liquid Detector (Trace detector, Raman spectrometer)",
      "Metal Detector (Walk-through, Handheld, Temperature Detector,)",
    ],
  },
  {
    title: "Testing & Measurement",
    animation: activity,
    color: "from-gray-400 to-gray-600",
    details: [
      "Oscilloscope / Differential Probe",
      "Digital / Bench Multimeter",
      "Clamp Meters (AC/DC)",
      "DC Electronic Load",
      "Visual Fault Locator",
    ],
  },
  {
    title: "RF & Microwave Components",
    animation: infinity,
    color: "from-blue-400 to-blue-600",
    details: [
      "RF Cables, Connectors, Adaptors",
      "RF Power Detector, Frequency Mixer",
      "Filters (Band Pass, Band Stop, Duplexer)",
      "Circulator, Isolator, Limiter HB",
      "Oscillators (VCO, Crystal)",
      "Hybrid Couplers, Signal Processing Cards",
    ],
  },
  {
    title: "Solar Solutions",
    animation: star,
    color: "from-green-400 to-green-600",
    details: ["Solar Batteries", "Solar Inverters", "Backup Systems"],
  },
  {
    title: "Fabrication & Prototyping",
    animation: archive,
    color: "from-gray-500 to-gray-700",
    details: [
      "Interface Card with SMA Connector",
      "PCB Printer",
      "PCB 3D Printer",
      "Custom Fabrication",
    ],
  },
];

export default function GT() {
  return (
    <div className="min-h-screen mt-10 bg-gray-800 py-20 px-6">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto mb-20"
      >
        <div className="py-12 px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg tracking-wide">
            General Trading
          </h1>
        </div>
      </motion.div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto perspective">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            className="relative w-full h-[420px] cursor-pointer preserve-3d group"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.9, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* FRONT */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center rounded-2xl p-10 text-center bg-gradient-to-br ${cat.color} shadow-xl backface-hidden group-hover:rotate-y-180 transition-transform duration-700`}
            >
              <h2 className="text-2xl font-bold text-white mb-4">
                {cat.title}
              </h2>
              <p className="text-white text-lg leading-relaxed">
                {summaries[i]}
              </p>
            </div>

            {/* BACK */}
            <div
              className={`absolute inset-0 rounded-2xl p-10 text-center bg-gradient-to-br ${cat.color} shadow-xl rotate-y-180 backface-hidden group-hover:rotate-y-360 transition-transform duration-700`}
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center items-center bg-black/20 rounded-full p-4">
                <UseAnimations
                  animation={cat.animation}
                  size={56}
                  autoplay
                  loop
                  speed={0.0075}
                  strokeColor="#ffffff"
                />
              </div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-white mb-4">
                {cat.title}
              </h2>

              {/* Details */}
              <ul className="text-gray-100 text-base text-left space-y-2">
                {cat.details.map((point, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-yellow-300 mr-2">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
