import React from "react";

export default function TextMarquee({
  text = "LIGHTING SPACES | BUILDING DREAMS | POWERING TOMORROW",
  repeat = 2,
  speed = 20,
  pauseOnHover = false,
  reverse = false,
  gap = "8rem",
}) {
  const segments = Array.from({ length: repeat }, (_, i) => (
    <span
      key={i}
      className="text-white text-3xl font-bold whitespace-nowrap"
      style={{ marginRight: gap }}
    >
      {text}
    </span>
  ));

  return (
    <div className="group flex overflow-hidden bg-gray-900 py-3 w-full mb-10">
      <div
        className={`flex shrink-0 animate-marquee ${
          pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""
        } ${reverse ? "[animation-direction:reverse]" : ""}`}
        style={{ animationDuration: `${speed}s` }}
      >
        {/* Put two identical strips for seamless effect */}
        {segments}
        {segments}
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }       /* Start exactly at left */
            100% { transform: translateX(-50%); }  /* Scroll entire first half away */
          }
          .animate-marquee {
            display: inline-flex;
            animation: marquee var(--duration, 40s) linear infinite;
          }
        `}
      </style>
    </div>
  );
}
