import React from "react";
import { HeartHandshake, Users, ShieldCheck } from "lucide-react";

export default function CorporateResponsibility() {
  const points = [
    {
      icon: <HeartHandshake className="w-10 h-10 text-pink-400" />,
      title: "Improving Lives",
      text: "We uplift living standards through better infrastructure, safer spaces, and reliable solutions.",
    },
    {
      icon: <Users className="w-10 h-10 text-yellow-400" />,
      title: "People First",
      text: "Respectful, transparent relationships with employees, partners, and clients — ensuring fairness and growth opportunities.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-green-400" />,
      title: "Everyday Integrity",
      text: "CSR is not an activity, but a principle reflected in how we work responsibly and sustainably.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-blue-900 via-blue-600 to-indigo-900 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold mb-14">Corporate Responsibility</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {points.map((item, i) => (
            <div
              key={i}
              className="bg-white/10 border border-white/20 rounded-2xl p-8 shadow-xl hover:scale-105 transition-transform"
            >
              <div className="mb-4 flex justify-center">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-white/90 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}