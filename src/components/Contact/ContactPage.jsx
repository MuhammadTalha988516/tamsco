import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  User,
  Building2,
  Home,
  MessageSquare,
} from "lucide-react";
import ContactImg from "../../assets/ContactUs.webp";
import emailjs from "emailjs-com";

export default function ContactUs() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // EmailJS config
  const SERVICE_ID = "service_0nxe2ps";
  const TEMPLATE_ID_CONTACT = "template_c615z4b"; // to company
  const TEMPLATE_ID_REPLY = "template_o9br3t9";   // auto reply to customer
  const PUBLIC_KEY = "L1yoCCy8bGirZileJ";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      organization: formData.get("organization"),
      city: formData.get("city"),
      inquiry: formData.get("inquiry"),
    };

    try {
      // Send to company (admin)
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID_CONTACT,
        {
          from_name: data.name,
          from_email: data.email,
          organization: data.organization || "—",
          city: data.city || "—",
          message: data.inquiry || "—",
        },
        PUBLIC_KEY
      );

      // Send auto-reply to customer
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID_REPLY,
        {
          name: data.name,
          email: data.email,
        },
        PUBLIC_KEY
      );

      setStatus("✅ Message sent successfully! Check your email.");
      e.target.reset();
    } catch (err) {
      console.error(err);
      setStatus("❌ Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 mt-10 min-h-screen py-10 px-4 sm:px-6 lg:px-10">
      <div className="w-full bg-white shadow-lg overflow-hidden rounded-lg">
        <div className="grid md:grid-cols-2 min-h-[600px]">
          {/* Left Image */}
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

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="p-6 sm:p-10 flex flex-col justify-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Send us a message
            </h2>
            <p className="text-gray-600 mb-6 text-sm sm:text-base">
              Your satisfaction is our top priority, and we are committed to
              providing exceptional service and support.
            </p>

            <form className="space-y-4 w-full" onSubmit={handleSubmit}>
              {/* Name */}
              <div className="flex items-center border rounded-lg p-3 gap-2">
                <User className="text-indigo-600 w-5 h-5" />
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter your name"
                  className="w-full outline-none"
                />
              </div>

              {/* Email */}
              <div className="flex items-center border rounded-lg p-3 gap-2">
                <Mail className="text-indigo-600 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full outline-none"
                />
              </div>

              {/* Organization (optional) */}
              <div className="flex items-center border rounded-lg p-3 gap-2">
                <Building2 className="text-indigo-600 w-5 h-5" />
                <input
                  type="text"
                  name="organization"
                  placeholder="Enter your organization"
                  className="w-full outline-none"
                />
              </div>

              {/* City */}
              <div className="flex items-center border rounded-lg p-3 gap-2">
                <Home className="text-indigo-600 w-5 h-5" />
                <input
                  type="text"
                  name="city"
                  required
                  placeholder="Enter your city"
                  className="w-full outline-none"
                />
              </div>

              {/* Inquiry (optional) */}
              <div className="flex items-start border rounded-lg p-3 gap-2">
                <MessageSquare className="text-indigo-600 w-5 h-5 mt-1" />
                <textarea
                  name="inquiry"
                  placeholder="Enter your inquiry"
                  rows="4"
                  className="w-full outline-none"
                ></textarea>
              </div>

              {/* Submit */}
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                type="submit"
                disabled={loading}
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 rounded-lg shadow-md transition text-sm sm:text-base"
              >
                {loading ? "Sending..." : "Send Message"}
              </motion.button>

              {status && (
                <p className="text-center mt-2 text-sm font-medium">{status}</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      {/* Bottom Info Section */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full px-4 sm:px-6">
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex justify-center"
          >
            <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-orange-500" />
          </motion.div>
          <h3 className="font-semibold mt-2 text-base sm:text-lg">Address</h3>
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
            <Phone className="w-8 h-8 sm:w-10 sm:h-10 text-blue-500" />
          </motion.div>
          <h3 className="font-semibold mt-2 text-base sm:text-lg">Contact</h3>
          <p className="text-gray-600 text-sm">PIBX: +92 51 5155900</p>
          <p className="text-gray-600 text-sm">Fax: +92 51 5155955</p>
          <p className="text-gray-600 text-sm">Phone : +92 300 5146422</p>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex justify-center"
          >
            <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-green-500" />
          </motion.div>
          <h3 className="font-semibold mt-2 text-base sm:text-lg">Email</h3>
          <p className="text-gray-600 text-sm">tamsco.pk@gmail.com</p>
          <p className="text-gray-600 text-sm">info@tamscoworld.com</p>
        </div>
      </div>
    </div>
  );
}
