import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo.jpg";

export default function Navbar() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Lighting Solutions", path: "/lights" },
    { name: "Construction & Renovation", path: "/construction" },
    { name: "General Trading", path: "/GeneralTrading" },
    { name: "Contact", path: "/ContactUs" },
  ];

  return (
    <nav className="bg-white text-black w-full fixed top-0 left-0 z-50 shadow-lg">
      <div className="w-full flex justify-between items-center px-20 h-20">
        <div className="relative">
          <Link to="/" className="relative flex items-center">
            <img
              src={logo}
              alt="TAMSCO Logo"
              className="w-60 h-60 object-contain" 
              
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

        {/* Navigation Links */}
        <div className="flex space-x-14 text-lg font-medium">
          {links.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="transition duration-300 ease-in-out"
              style={{ color: "black" }} // changed to black for visibility
              onMouseEnter={(e) => {
                e.currentTarget.style.textShadow =
                  "0 0 10px rgba(255,255,100,0.6), 0 0 20px rgba(255,255,150,0.4)";
                e.currentTarget.style.color = "#444"; // subtle hover color
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
      </div>
    </nav>
  );
}
