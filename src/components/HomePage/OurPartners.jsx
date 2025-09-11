import React from "react";

// Import partner logos
import P1 from "../../assets/P1.png";
import P2 from "../../assets/P2.png";
import P3 from "../../assets/P3.png";
import P4 from "../../assets/P4.png";
import P5 from "../../assets/P5.png";
import P6 from "../../assets/P6.png";
import P7 from "../../assets/P7.png";
import P8 from "../../assets/P8.png";
import P9 from "../../assets/P9.png";
import P10 from "../../assets/P10.png";
import P11 from "../../assets/P11.png";
import P12 from "../../assets/P12.png";
import P13 from "../../assets/P13.png";
import P14 from "../../assets/P14.png";
import P15 from "../../assets/P15.png";
import P16 from "../../assets/P16.png";
import P17 from "../../assets/P17.png";
import P18 from "../../assets/P18.png";
import P19 from "../../assets/P19.png";
import P20 from "../../assets/P20.png";

export default function OurPartners() {
  const logos = [
    P1, P2, P3, P4, P5, P6, P7,
    P8, P9, P10, P11, P12, P13,
    P14, P15, P16, P17, P18, P19,
    P20,
  ];

  return (
    <section className="w-full bg-white py-28 overflow-hidden">
      <h2 className="text-center text-4xl md:text-5xl font-bold text-blue-900 mb-20">
        Our Partners
      </h2>

      {/* ✅ Marquee wrapper */}
      <div className="overflow-hidden relative w-full">
        <div className="flex animate-marquee">
          {[...logos, ...logos].map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center px-12 shrink-0 overflow-hidden h-36 md:h-44"
            >
              <img
                src={logo}
                alt={`Partner ${idx + 1}`}
                className="h-26 md:h-34 object-contain transition-transform duration-300 hover:scale-110 origin-center"
                draggable={false}
                onError={(e) => (e.currentTarget.style.display = 'none')}
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
          animation: marquee 60s linear infinite;
        }
      `}</style>
    </section>
  );
}
