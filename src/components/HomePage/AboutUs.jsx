import React from "react";
import { motion } from "framer-motion";
import About from "../../assets/About.webp";

export default function AboutUs() {
  return (
    <section
      className="relative w-full min-h-screen bg-fixed bg-center bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url(${About})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <motion.div
        className="relative z-10 max-w-4xl text-center text-white px-6 py-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 tracking-widest text-blue-400 drop-shadow-lg uppercase"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          About Us
        </motion.h2>

        <motion.p
          className="text-base sm:text-lg md:text-xl leading-relaxed mb-6 text-gray-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <span className="text-blue-400 font-semibold">TAMSCO</span>, registered in{" "}
          <span className="font-semibold">2007</span> in{" "}
          <span className="font-semibold">Islamabad, Pakistan</span>, 
          has grown into a trusted name across diverse domains. From{" "}
          <span className="font-semibold">innovative lighting solutions</span> — indoor, outdoor, solar, and smart automated systems — to{" "}
          <span className="font-semibold">general trading and supplies</span>, 
          we serve both private and government organizations with reliability and expertise.
        </motion.p>

        <motion.p
          className="text-base sm:text-lg md:text-xl leading-relaxed mb-8 text-gray-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          Over the years, we’ve built a strong nationwide clientele, particularly in{" "}
          <span className="font-semibold">energy-efficient lighting</span>. 
          At our core, <span className="text-blue-400 font-bold">TAMSCO</span> is driven by a simple mission:{" "}
          <span className="italic font-semibold">“We share to strengthen”</span>, 
          reflecting our belief in building lasting partnerships by sharing{" "}
          <span className="font-semibold">knowledge, technology, and solutions</span> 
          that empower communities and organizations to grow stronger together.
        </motion.p>

        <motion.button
          className="px-8 py-3 bg-green-600 hover:bg-green-700 active:scale-95 rounded-full text-lg font-semibold transition transform hover:scale-105 shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Learn More
        </motion.button>
      </motion.div>
    </section>
  );
}
