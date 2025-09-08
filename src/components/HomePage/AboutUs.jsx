import React from "react";
import { motion } from "framer-motion";
import About from "../../assets/About.jpeg";

export default function AboutUs() {
  return (
    <section
      className="relative w-full h-screen bg-fixed bg-center bg-cover flex items-center justify-center"
      style={{
        backgroundImage: `url(${About})`,
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/70"></div>

      <motion.div
        className="relative z-10 max-w-4xl text-center text-white px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide text-blue-600 drop-shadow-lg">
          ABOUT US
        </h2>

        <p className="text-lg md:text-xl leading-relaxed mb-6">
          <span className="text-blue-500 font-semibold">TAMSCO</span>, registered in{" "}
          <span className="text-gray-300 font-semibold">2007</span> in{" "}
          <span className="text-gray-300 font-semibold">Islamabad, Pakistan</span>, 
          has grown into a trusted name across diverse domains. From{" "}
          <span className="text-gray-300 font-semibold">innovative lighting solutions</span>
          —indoor, outdoor, solar, and smart automated systems—to{" "}
          <span className="text-gray-300 font-semibold">general trading and supplies</span>, 
          we serve both the private sector and government organizations with reliability and expertise.
        </p>

        <p className="text-lg md:text-xl leading-relaxed mb-8">
          Over the years, we’ve built a strong nationwide clientele, particularly in{" "}
          <span className="text-gray-300 font-semibold">energy-efficient lighting</span>. 
          At our core, <span className="text-blue-500 font-bold">TAMSCO</span> is driven by a simple mission:{" "}
          <span className="italic text-gray-300 font-semibold">“We share to strengthen”</span>, 
          which reflects our belief in building lasting partnerships by sharing{" "}
          <span className="text-gray-300 font-semibold">knowledge, technology, and solutions</span> 
          that empower communities and organizations to grow stronger together.
        </p>

        <button className="px-8 py-3 bg-green-600 hover:bg-green-700 rounded-full text-lg font-semibold transition shadow-lg">
          Learn More
        </button>
      </motion.div>
    </section>
  );
}
