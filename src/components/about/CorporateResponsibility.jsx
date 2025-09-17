import React from "react";
import { HeartHandshake, Users, ShieldCheck } from "lucide-react";

export default function CorporateResponsibility() {
  const points = [
    {
      icon: <HeartHandshake className="w-8 h-8 md:w-10 md:h-10 text-pink-400" />,
      title: "Improving Lives",
      text: "We uplift living standards through better infrastructure, safer spaces, and reliable solutions.",
    },
    {
      icon: <Users className="w-8 h-8 md:w-10 md:h-10 text-yellow-400" />,
      title: "People First",
      text: "Respectful, transparent relationships with employees, partners, and clients — ensuring fairness and growth opportunities.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-green-400" />,
      title: "Everyday Integrity",
      text: "CSR is not an activity, but a principle reflected in how we work responsibly and sustainably.",
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-gradient-to-r from-blue-900 via-blue-600 to-indigo-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 md:mb-14">
          Corporate Responsibility
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
          {points.map((item, i) => (
            <div
              key={i}
              className="bg-white/10 border border-white/20 rounded-2xl p-6 md:p-8 shadow-xl hover:scale-105 transition-transform"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">{item.title}</h3>
              <p className="text-sm md:text-base text-white/90 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
