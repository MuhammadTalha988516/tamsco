import React from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section className="w-full flex items-center justify-center py-20 px-6 sm:px-10 lg:px-20 bg-gray-100">
      <motion.div
        className="bg-gradient-to-br from-green-300 via-blue-500 to-teal-600 rounded-3xl shadow-lg max-w-5xl w-full text-center px-6 md:px-12 py-14"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-500 shadow-lg">
            <Phone className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          TALK TO US
        </h2>

        {/* Description */}
        <p className="text-md md:text-lg text-gray-100 leading-relaxed mb-8">
          Got a project in mind? Or just want to know more about how{" "}
          <span className="text-green-300 font-semibold">TAMSCO WORLD</span>{" "}
          can help you? Let’s talk. We are always ready to listen, share ideas,
          and create solutions that work for you.
        </p>

        {/* CTA Button */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            to="/ContactUs"
            className="inline-block px-8 py-3 bg-green-500 hover:bg-green-600 rounded-full text-lg font-semibold text-white transition"
          >
            Get in Touch
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
