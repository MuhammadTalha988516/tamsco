import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Lights", path: "/lights" },
    { name: "Construction", path: "/construction" },
    { name: "General Trading", path: "/trading" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-[#1F1F1F] text-white w-full fixed top-0 left-0 z-50 shadow-lg">
      <div className="w-full flex justify-between items-center px-20 h-20">
        
        {/* Logo with glow effect  */}
        <div className="text-4xl font-bold relative tracking-[0.7em]">
          <Link
            to="/"
            className="relative"
            style={{
              color: '#888888',
              textShadow: '0 0 5px rgba(255,255,150,0.3), 0 0 5px rgba(255,255,180,0.2)',
              animation: 'tamscoGlow 6s ease-in-out infinite'
            }}
          >
            TAMSCO
          </Link>

          <style>
            {`
              @keyframes tamscoGlow {
                0%, 100% {
                  color: #555555;
                  text-shadow: 0 0 5px rgba(255,255,100,0.2), 0 0 10px rgba(255,255,120,0.1);
                }
                50% {
                  color: #fffacd;
                  text-shadow: 0 0 20px rgba(255,255,200,0.8),
                               0 0 35px rgba(255,255,150,0.6),
                               0 0 50px rgba(255,255,120,0.4);
                }
              }
            `}
          </style>
        </div>

        {/* Navigation Links (hover effect untouched) */}
        <div className="flex space-x-14 text-lg font-medium">
          {links.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="transition duration-300 ease-in-out"
              style={{ color: 'white' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.textShadow =
                  '0 0 10px rgba(255,255,200,0.7), 0 0 20px rgba(255,255,150,0.5)';
                e.currentTarget.style.color = '#fffacd';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.textShadow = '0 0 0px rgba(0,0,0,0)';
                e.currentTarget.style.color = 'white';
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
