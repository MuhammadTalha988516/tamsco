import React from "react";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ Import Link

export default function Contact() {
  return (
    <section className="w-full flex items-center justify-center py-20 px-20 bg-gray-100">
      <motion.div
        className="bg-gray-900 rounded-3xl shadow-lg max-w-5xl w-full text-center px-25 py-14"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-700">
            <Phone className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          TALK TO US
        </h2>

        {/* Description */}
        <p className="text-md md:text-lg text-gray-300 leading-relaxed mb-8">
          Got a project in mind? Or just want to know more about how{" "}
          <span className="text-blue-700 font-semibold">TAMSCO WORLD</span>{" "}
          can help you? Let’s talk. We are always ready to listen, share ideas,
          and create solutions that work for you.
        </p>

        {/* CTA Button → routes to Contact Us */}
        <Link
          to="/ContactUs" // ✅ your route path for Contact Us page
          className="inline-block px-8 py-3 bg-blue-800 hover:bg-blue-900 rounded-full text-lg font-semibold text-white transition"
        >
          Get in Touch
        </Link>
      </motion.div>
    </section>
  );
}
