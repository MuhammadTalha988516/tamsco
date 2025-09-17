import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // ✅ for navigation

export default function Policy() {
  return (
    <section
      className="relative w-full min-h-screen bg-gradient-to-br from-green-300 via-blue-500 to-teal-600 flex items-center justify-center py-20"
      aria-label="Our Work Policy"
    >
      <motion.div
        className="relative z-10 max-w-4xl text-center text-white px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white">
          HOW WE DO IT
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-100">
          At <span className="font-bold text-green-200">TAMSCO WORLD</span>, we don’t just
          deliver projects, <span className="font-semibold">we deliver trust</span>.
          Whether it is illuminating a{" "}
          <span className="font-semibold">city block</span>, building a{" "}
          <span className="font-semibold">sports complex</span>, or supplying{" "}
          <span className="font-semibold">advanced tech solutions</span>,
          our work is rooted in <span className="font-semibold">quality</span>,{" "}
          <span className="font-semibold">innovation</span>, and{" "}
          <span className="font-semibold">care for deadlines</span>.
          <br />
          With us, you get more than a service provider —{" "}
          <span className="font-bold text-green-200">you get a partner in your success</span>.
        </p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link
            to="/about"
            aria-label="Learn more about our work process"
            className="inline-block px-8 py-3 bg-green-600 hover:bg-green-700 rounded-full text-lg font-semibold text-white transition shadow-lg"
          >
            Learn More
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
