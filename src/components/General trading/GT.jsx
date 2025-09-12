import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import UseAnimations from "react-useanimations";

// Animated icons
import settings from "react-useanimations/lib/settings"; // automation
import lock from "react-useanimations/lib/lock"; // security
import activity from "react-useanimations/lib/activity"; // testing
import infinity from "react-useanimations/lib/infinity"; // RF/microwave
import star from "react-useanimations/lib/star"; // solar
import archive from "react-useanimations/lib/archive"; // fabrication

const categories = [
  {
    title: "Automation Consultancy",
    desc: "Enterprise asset management and managed services that optimize operations, reduce downtime, and unlock efficiency through automation.",
    path: "/GeneralTrading/Automation-Consultancy",
    animation: settings,
    color: "from-blue-500 to-blue-700",
  },
  {
    title: "Security Equipment",
    desc: "UVSS, X-Ray baggage scanners, explosive detectors, metal detectors, and thermal walkthrough systems for advanced protection.",
    path: "/GeneralTrading/Security-Equipment",
    animation: lock,
    color: "from-green-500 to-green-700",
  },
  {
    title: "Testing & Measurement",
    desc: "Oscilloscopes, multi-meters, clamp meters, and DC electronic loads for engineers and researchers.",
    path: "/GeneralTrading/Testing-Measurement",
    animation: activity,
    color: "from-gray-400 to-gray-600",
  },
  {
    title: "RF & Microwave Components",
    desc: "RF cables, connectors, filters, oscillators, couplers, and more — powering communication, defense, and aerospace sectors.",
    path: "/GeneralTrading/RF-Microwave",
    animation: infinity,
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "Solar Solutions",
    desc: "Reliable inverters and batteries designed to deliver sustainable, clean, and long-lasting solar power.",
    path: "/GeneralTrading/Solar-Solutions",
    animation: star,
    color: "from-green-400 to-green-600",
  },
  {
    title: "Fabrication & Prototyping",
    desc: "PCB printing, 3D prototyping, and custom interface card fabrication to accelerate your product development journey.",
    path: "/GeneralTrading/Fabrication-Prototyping",
    animation: archive,
    color: "from-gray-500 to-gray-700",
  },
];

export default function GT() {
  return (
    <div className="min-h-screen mt-10 bg-gray-800 py-20 px-6">
      {/* Page Title */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-extrabold text-center text-white mb-16"
      >
        General Trading
      </motion.h1>

      {/* Categories Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {categories.map((cat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              rotate: 1,
              boxShadow: "0px 12px 40px rgba(59,130,246,0.3)",
            }}
          >
            <Link
              to={cat.path}
              className={`relative group rounded-2xl p-8 flex flex-col items-center text-center h-full min-h-[320px] bg-gradient-to-br ${cat.color} shadow-lg transition duration-500`}
            >
              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="mb-6 flex justify-center items-center bg-black/20 rounded-full p-4"
              >
                <UseAnimations
                  animation={cat.animation}
                  size={56}
                  autoplay
                  loop
                  speed={0.2} // 🔹 Slowed down animation
                  strokeColor="#ffffff"
                />
              </motion.div>

              {/* Title */}
              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-300 transition">
                {cat.title}
              </h2>

              {/* Description */}
              <p className="text-gray-100 text-sm leading-relaxed group-hover:text-gray-200 transition">
                {cat.desc}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
