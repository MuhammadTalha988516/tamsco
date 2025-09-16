import React from "react";
import { motion } from "framer-motion";

export default function Policy() {
  return (
    <section className="relative w-full min-h-screen bg-blue-600 flex items-center justify-center py-20">
      <motion.div
        className="relative z-10 max-w-4xl text-center text-white px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-gray-300">
          HOW WE DO IT
        </h2>

        <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-300">
          At <span className="font-bold text-green-600">TAMSCO WORLD</span>, we don’t just
          deliver projects, <span className="text-gray-300 font-semibold">we deliver trust</span>.
          Whether it is illuminating a{" "}
          <span className="text-gray-300 font-semibold">city block</span>, building a{" "}
          <span className="text-gray-300 font-semibold">sports complex</span>, or supplying{" "}
          <span className="text-gray-300 font-semibold">advanced tech solutions</span>,
          our work is rooted in <span className="text-gray-300 font-semibold">quality</span>,{" "}
          <span className="text-gray-300 font-semibold">innovation</span>, and{" "}
          <span className="text-gray-300 font-semibold">care for deadlines</span>.
          <br />
          With us, you get more than a service provider —{" "}
          <span className="text-gray-300 font-bold">you get a partner in your success</span>.
        </p>

        <button className="px-8 py-3 bg-green-600 hover:bg-green-700 rounded-full text-lg font-semibold transition shadow-lg">
          Learn More
        </button>
      </motion.div>
    </section>
  );
}
