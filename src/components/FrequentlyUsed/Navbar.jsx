import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // ✅ install lucide-react if not already
import logo from "../../assets/logo.webp"; // adjust path if needed

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Lights", path: "/lights" },
    { name: "Construction", path: "/construction" },
    { name: "General Trading", path: "/GeneralTrading" },
    { name: "Contact", path: "/ContactUs" },
  ];

  return (
    <nav className="bg-white text-black w-full fixed top-0 left-0 z-50 shadow-lg">
      <div className="w-full flex justify-between items-center px-6 md:px-20 h-20">
        {/* Logo */}
        <div className="relative">
          <Link to="/" className="relative flex items-center">
            <img
              src={logo}
              alt="TAMSCO Logo"
              className="w-40 h-40 md:w-60 md:h-60 object-contain"
              style={{
                filter:
                  "drop-shadow(0 0 5px rgba(255,255,150,0.3)) drop-shadow(0 0 10px rgba(255,255,180,0.2))",
                animation: "tamscoGlow 6s ease-in-out infinite",
              }}
            />
          </Link>
          <style>
            {`
              @keyframes tamscoGlow {
                0%, 100% {
                  filter: drop-shadow(0 0 5px rgba(255,255,100,0.2))
                          drop-shadow(0 0 10px rgba(255,255,120,0.1));
                }
                50% {
                  filter: drop-shadow(0 0 20px rgba(255,255,200,0.8))
                          drop-shadow(0 0 35px rgba(255,255,150,0.6))
                          drop-shadow(0 0 50px rgba(255,255,120,0.4));
                }
              }
            `}
          </style>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10 text-lg font-medium">
          {links.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="transition duration-300 ease-in-out"
              style={{ color: "black" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.textShadow =
                  "0 0 10px rgba(255,255,100,0.6), 0 0 20px rgba(255,255,150,0.4)";
                e.currentTarget.style.color = "#444";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textShadow = "none";
                e.currentTarget.style.color = "black";
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <div className="flex flex-col items-center py-4 space-y-4 text-lg font-medium">
            {links.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="text-black hover:text-gray-600 transition"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
