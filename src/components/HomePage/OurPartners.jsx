import React from "react";

// Import partner logos
import P1 from "../../assets/P1.webp";
import P2 from "../../assets/P2.webp";
import P3 from "../../assets/P3.webp";
import P4 from "../../assets/P4.webp";
import P5 from "../../assets/P5.webp";
import P6 from "../../assets/P6.webp";
import P7 from "../../assets/P7.webp";
import P8 from "../../assets/P8.webp";
import P9 from "../../assets/P9.webp";
import P10 from "../../assets/P10.webp";
import P11 from "../../assets/P11.webp";
import P12 from "../../assets/P12.webp";
import P13 from "../../assets/P13.webp";
import P14 from "../../assets/P14.webp";
import P15 from "../../assets/P15.webp";
import P16 from "../../assets/P16.webp";
import P17 from "../../assets/P17.webp";
import P18 from "../../assets/P18.webp";
import P19 from "../../assets/P19.webp";
import P20 from "../../assets/P20.webp";

export default function OurPartners({ duration = 60 }) {
  const logos = [
    P1, P2, P3, P4, P5, P6, P7,
    P8, P9, P10, P11, P12, P13,
    P14, P15, P16, P17, P18, P19, P20,
  ];

  return (
    <section
      className="w-full bg-white py-28 overflow-hidden"
      aria-label="Our Business Partners"
    >
      <h2 className="text-center text-4xl md:text-5xl font-bold text-blue-500 mb-20">
        Our Partners
      </h2>

      {/* ✅ Marquee wrapper */}
      <div className="overflow-hidden relative w-full">
        <div
          className="flex animate-marquee"
          style={{ animationDuration: `${duration}s` }}
        >
          {[...logos, ...logos].map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center px-6 md:px-12 shrink-0 h-28 md:h-36"
            >
              <img
                src={logo}
                alt=""
                className="h-24 md:h-32 object-contain transition-transform duration-300 hover:scale-110 origin-center"
                draggable={false}
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Smooth infinite marquee animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee linear infinite;
        }
      `}</style>
    </section>
  );
}
