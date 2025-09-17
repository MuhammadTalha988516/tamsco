import React from "react";
import logo from "../../assets/logo.webp";
import { motion } from "framer-motion";

export default function Footer() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Lights", path: "/lights" },
    { name: "Construction", path: "/construction" },
    { name: "General Trading", path: "/GeneralTrading" },
    { name: "Contact", path: "/ContactUs" },
  ];

  return (
    <footer className="bg-blue-800 text-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20 py-12 md:py-16 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-14">
        
        {/* Logo + Short About */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <img
            src={logo}
            alt="TAMSCO Logo"
            className="w-28 sm:w-32 md:w-36 mb-6 mx-auto md:mx-0 rounded-lg shadow-md"
          />
          <p className="text-sm md:text-base leading-relaxed opacity-90">
            Trusted in delivering quality across multiple sectors — from
            construction to technology. Have any query? Contact us, we are here
            for you.
          </p>
        </motion.div>

        {/* Get in Touch */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h3 className="text-lg font-semibold mb-6 border-b border-gray-500/30 pb-2">
            Get In Touch
          </h3>
          <p className="text-sm md:text-base mb-4">
            <span className="font-medium">Address:</span><br />
            79/80, 4th Floor, Executive Block,<br />
            Gulberg Greens, Islamabad (44022)
          </p>
          <p className="text-sm md:text-base mb-4">
            <span className="font-medium">Contact:</span><br />
            PIBX: +92 51 5155900 <br />
            Fax: +92 51 5155955
          </p>
          <p className="text-sm md:text-base">
            <span className="font-medium">Email:</span><br />
            <a href="mailto:tamsco.pk@gmail.com" className="hover:underline">
              tamsco.pk@gmail.com
            </a><br />
            <a href="mailto:info@tamscoworld.com" className="hover:underline">
              info@tamscoworld.com
            </a>
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h3 className="text-lg font-semibold mb-6 border-b border-gray-500/30 pb-2">
            Quick Links
          </h3>
          <ul className="grid grid-cols-2 gap-y-3 justify-center md:justify-start">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.path}
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href = link.path;
                  }}
                  className="text-sm md:text-base opacity-90 hover:opacity-100 relative group"
                >
                  {link.name}
                  <span className="absolute left-0 -bottom-0.5 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-blue-900 py-4 md:py-5 text-center text-gray-400 text-xs sm:text-sm border-t border-gray-700/40">
        © {new Date().getFullYear()} TAMSCO. All Rights Reserved.
      </div>
    </footer>
  );
}
