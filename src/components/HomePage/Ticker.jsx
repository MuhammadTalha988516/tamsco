import React from "react";

export default function Ticker({
  text = "Lighting Spaces | Building Dreams | Empowering Tomorrow",
  repeat = 2,
  speed = 20,
  pauseOnHover = false,
  reverse = false,
  gap = "6rem",
}) {
  // Split text into separate phrases (by | separator)
  const phrases = text.split("|").map((t) => t.trim());

  // Build ticker strip
  const strip = (
    <div className="flex">
      {phrases.map((phrase, i) => (
        <span
          key={i}
          className="text-white text-xl sm:text-2xl md:text-3xl font-bold whitespace-nowrap"
          style={{ marginRight: gap }}
        >
          {phrase}
        </span>
      ))}
    </div>
  );

  return (
    <section
      aria-label="Company Slogan Ticker"
      className="group flex overflow-hidden bg-green-500 py-3 w-full mb-10"
    >
      <div
        className={`flex shrink-0 animate-marquee ${
          pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
        } ${reverse ? "[animation-direction:reverse]" : ""}`}
        style={{ "--duration": `${speed}s` }}
      >
        {/* Two strips for seamless infinite scroll */}
        {Array.from({ length: repeat }, (_, i) => (
          <React.Fragment key={i}>{strip}</React.Fragment>
        ))}
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
          }
          .animate-marquee {
            display: inline-flex;
            animation: marquee var(--duration, 40s) linear infinite;
          }
        `}
      </style>
    </section>
  );
}
