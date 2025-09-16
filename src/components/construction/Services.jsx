import React from "react";
import {
  Waves,
  Bike,
  Dumbbell,
  Footprints,
  TreePine,
  Building2,
  Wrench,
  Home,
  Bed,
  SquareStack,
} from "lucide-react";

const services = [
  {
    title: "Padel Court",
    description:
      "High-quality padel court construction with durable flooring and professional finishing for competitive play.",
    icon: Waves,
  },
  {
    title: "Cycling Track",
    description:
      "Safe and smooth cycling track installation designed for endurance, speed, and long-lasting performance.",
    icon: Bike,
  },
  {
    title: "Gym Flooring",
    description:
      "Premium rubber and vinyl gym flooring that provides shock absorption, durability, and safety for athletes.",
    icon: Dumbbell,
  },
  {
    title: "EPDM Jogging Track",
    description:
      "Custom EPDM jogging tracks offering superior comfort, weather resistance, and slip protection.",
    icon: Footprints,
  },
  {
    title: "Synthetic Artificial Grass",
    description:
      "High-grade synthetic turf for sports fields, landscaping, and recreational spaces with a natural look and feel.",
    icon: TreePine,
  },
  {
    title: "Sports Facility Construction",
    description:
      "Comprehensive sports facility construction services from design to build, ensuring top-tier quality and functionality.",
    icon: Building2,
  },
  {
    title: "Renovation & Upgrades",
    description:
      "Expert renovation and upgrade services to modernize and enhance existing sports facilities and flooring.",
    icon: Wrench,
  },
  {
    title: "Outdoor Living Spaces",
    description:
      "Design and construction of stylish outdoor living areas for relaxation, gatherings, and active lifestyles.",
    icon: Home,
  },
  {
    title: "Minimalistic Bedrooms",
    description:
      "Modern minimalistic bedroom designs with functional layouts, premium materials, and aesthetic appeal.",
    icon: Bed,
  },
  {
    title: "Staircase Solutions",
    description:
      "Custom staircase construction with durable materials and elegant designs tailored to your space.",
    icon: SquareStack,
  },
];

export default function Services() {
  return (
    <section className="w-full py-20 px-6 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Our <span className="text-[#1C80BB]">Services</span>
        </h2>
        <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
          Delivering world-class sports infrastructure and flooring solutions —
          engineered for performance, durability, and style.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="group relative flex flex-col items-start p-6 bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-transparent hover:border-[#1C80BB]/40"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#1C80BB]/10 to-[#1C80BB]/5 text-[#1C80BB] mb-4 group-hover:scale-110 transition-transform duration-500">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[#1C80BB] transition-colors">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
