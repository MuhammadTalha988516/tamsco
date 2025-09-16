import React from "react";
import { motion } from "framer-motion";
import { Building2, Clock, Eye, Cpu, CheckCircle } from "lucide-react";

// Static features list outside component
const features = [
  {
    icon: <Building2 className="w-8 h-8 text-orange-500" aria-hidden="true" />,
    title: "Diverse Expertise",
    desc: "From construction to technology, we cover it all under one trusted name.",
  },
  {
    icon: <Clock className="w-8 h-8 text-blue-500" aria-hidden="true" />,
    title: "Deadline-Driven",
    desc: "Your time matters. We deliver projects when we say we will.",
  },
  {
    icon: <Eye className="w-8 h-8 text-green-500" aria-hidden="true" />,
    title: "Transparent Process",
    desc: "No hidden surprises. Just honest work and clear communication.",
  },
  {
    icon: <Cpu className="w-8 h-8 text-purple-500" aria-hidden="true" />,
    title: "Future-Ready Solutions",
    desc: "Whether it’s robotics, software, or advanced lighting, we bring tomorrow’s solutions today.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-gray-900 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          className="text-center text-4xl md:text-5xl font-bold mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-white mr-3">WHY CHOOSE</span>
          <span className="text-[#1C80BB]">TAMSCO</span>
        </motion.h2>

        {/* Features */}
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {features.map((feature, idx) => (
            <motion.li
              key={idx}
              className="bg-white rounded-2xl shadow-md p-8 text-center flex flex-col items-center justify-between h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 pb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </motion.li>
          ))}
        </ul>

        {/* Extra 5th point (full width) */}
        <motion.div
          className="mt-12 bg-white rounded-2xl shadow-md p-8 text-center flex flex-col items-center justify-between h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" aria-hidden="true" />
          </div>
          <h3 className="text-xl font-semibold text-gray-800">Proven Commitment</h3>
          <p className="text-gray-600">
            Every client, every project, every time — we give our 100%.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
