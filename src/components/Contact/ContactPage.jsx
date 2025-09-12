import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import ContactImg from "../../assets/ContactUs.jpeg"; // ✅ local image

export default function ContactUs() {
  return (
    <div className="bg-gray-50 mt-10 min-h-screen py-10 px-0">
      {/* Full Page Grid */}
      <div className="w-full bg-white shadow-lg overflow-hidden">
        <div className="grid md:grid-cols-2 min-h-screen">
          {/* Left Image with scroll animation */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="hidden md:block"
          >
            <img
              src={ContactImg}
              alt="Contact Us"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right Form with animation */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once
: true }}
            className="p-10 flex flex-col justify-center"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Send us a message
            </h2>
            <p className="text-gray-600 mb-6">
              Your satisfaction is our top priority, and we are committed to
              providing exceptional service and support.
            </p>

            <form className="space-y-4 w-full">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once
: true }}
              >
                <label className="block text-sm font-medium text-gray-700">
                  Your Name *
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once
: true }}
              >
                <label className="block text-sm font-medium text-gray-700">
                  Email *
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once
: true }}
              >
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                viewport={{ once
: true }}
              >
                <label className="block text-sm font-medium text-gray-700">
                  Description *
                </label>
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                ></textarea>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                viewport={{ once
: true }}
                type="button"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md transition"
              >
                Send
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Bottom Info Section */}
      <div className="grid md:grid-cols-3 gap-6 mt-10 w-full px-6">
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex justify-center"
          >
            <MapPin className="w-10 h-10 text-orange-500" />
          </motion.div>
          <h3 className="font-semibold mt-2">Address</h3>
          <p className="text-gray-600 text-sm">
            79/80, 4th Floor, Executive Block, Gulberg Greens, Islamabad (44022)
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex justify-center"
          >
            <Phone className="w-10 h-10 text-blue-500" />
          </motion.div>
          <h3 className="font-semibold mt-2">Contact</h3>
          <p className="text-gray-600 text-sm">PIBX: +92 51 5155900</p>
          <p className="text-gray-600 text-sm">Fax: +92 51 5155955</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex justify-center"
          >
            <Mail className="w-10 h-10 text-green-500" />
          </motion.div>
          <h3 className="font-semibold mt-2">Email</h3>
          <p className="text-gray-600 text-sm">tamsco.pk@gmail.com</p>
          <p className="text-gray-600 text-sm">info@tamscoworld.com</p>
        </div>
      </div>
    </div>
  );
}
