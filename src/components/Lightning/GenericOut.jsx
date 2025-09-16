import React, { useState } from "react";
import { Link } from "react-router-dom";
import { outdoorLighting } from "../data/data";
import Navbar from "../FrequentlyUsed/Navbar";
import Footer from "../FrequentlyUsed/Footer";

const GenericOut = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [hoverItem, setHoverItem] = useState(null);

  return (
    <>
      <Navbar />

      {/* Hero Section with Animated Elements */}
      <section className="relative py-32 bg-gradient-to-br from-green-700 via-blue-700 to-teal-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-teal-500/20 animate-pulse"></div>
        <div className="absolute top-16 right-12 w-40 h-40 bg-white/10 hexagonal animate-bounce"></div>
        <div className="absolute bottom-16 left-16 w-32 h-32 bg-yellow-400/20 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-blue-400/30 rounded-full animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-white via-green-200 to-teal-200 bg-clip-text text-transparent mb-8 drop-shadow-2xl animate-pulse">
              Illuminate Your Outdoors
            </h1>
            <p className="text-2xl md:text-3xl text-blue-100 font-light mb-8">
              Revolutionize your outdoor spaces with weather-defying lighting
              brilliance
            </p>
            <div className="flex justify-center space-x-6">
              <Link
                to="/lights"
                className="bg-white text-teal-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 hover:rotate-3 shadow-lg hover:shadow-xl"
              >
                Discover Collection
              </Link>
              <Link
                to="/ContactUs"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-teal-600 transition-all duration-300 transform hover:scale-110"
              >
                Get Custom Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-20 bg-gradient-to-r from-teal-50 to-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-110 transition-all duration-300">
              <div className="w-20 h-20 bg-teal-500 mx-auto mb-4 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-3xl font-bold text-white">IP65</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Weather Rating
              </h3>
              <p className="text-gray-600">
                Protected against dust and water ingress
              </p>
            </div>
            <div className="transform hover:scale-110 transition-all duration-300">
              <div className="w-20 h-20 bg-green-500 mx-auto mb-4 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-3xl font-bold text-white">90%</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Energy Efficiency
              </h3>
              <p className="text-gray-600">
                Advanced LED technology for maximum savings
              </p>
            </div>
            <div className="transform hover:scale-110 transition-all duration-300">
              <div className="w-20 h-20 bg-blue-500 mx-auto mb-4 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-3xl font-bold text-white">24/7</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Reliability
              </h3>
              <p className="text-gray-600">
                Continuous operation in harsh conditions
              </p>
            </div>
            <div className="transform hover:scale-110 transition-all duration-300">
              <div className="w-20 h-20 bg-orange-500 mx-auto mb-4 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-3xl font-bold text-white">20Y</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                Warranty
              </h3>
              <p className="text-gray-600">
                Comprehensive protection guaranteed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Outdoor Collection */}
      <section className="py-28 bg-gradient-to-br from-white via-teal-50 to-green-50 text-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-200/20 to-green-200/20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-6xl font-extrabold bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent mb-6">
              Premium Outdoor Solutions
            </h2>
            <p className="text-xl text-gray-700 font-medium">
              Industrial-grade lighting engineered for endurance and elegance
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-16">
            {outdoorLighting.map((item, i) => (
              <Link key={i} className="group">
                <div
                  className="relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border cursor-pointer transform hover:scale-105"
                  onMouseEnter={() => {
                    setSelectedItem(i);
                    setHoverItem(i);
                  }}
                  onMouseLeave={() => {
                    setSelectedItem(null);
                    setHoverItem(null);
                  }}
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-all duration-700"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-10 group-hover:translate-y-0 transition-all duration-500">
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm opacity-90 mb-8">{item.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features Showcase */}
      <section className="py-24 bg-gradient-to-r from-teal-900 via-green-900 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-800/50 to-green-800/50"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl font-black mb-6">
            Built Tough, Designed Beautiful
          </h2>
          <p className="text-xl mb-16 font-medium">
            Unparalleled performance in the harshest environments
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            {/* feature cards remain same */}
            <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto mb-6 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Weatherproof Excellence
              </h3>
              <p className="text-lg font-medium leading-relaxed">
                IP65 rated enclosures withstand extreme weather,
                corrosion-resistant materials ensure longevity in any climate.
              </p>
            </div>
            <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-6 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Motion Sensing</h3>
              <p className="text-lg font-medium leading-relaxed">
                Intelligent sensors detect movement and automatically adjust
                lighting for optimal visibility and security.
              </p>
            </div>
            <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 3.5a1.5 1.5 0 13 0 3 1.5 1.5 0 01-3 0V5a.5.5 0 011 0v2h1V5a.5.5 0 01.5-.5zM7.293 8.707a1 1 0 101.414-1.414 2 2 0 00-2.828 2.828c.2 0 .39-.039.578-.118a1 1 0 11.58-1.92z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Smart Integration</h3>
              <p className="text-lg font-medium leading-relaxed">
                Seamlessly connects with smart home ecosystems for remote
                control, scheduling, and energy optimization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">
              Real-World Performance
            </h2>
            <p className="text-xl text-gray-600">
              See our lighting solutions in action across diverse environments
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Residential Driveway",
                further:
                  "Motion-sensor floodlights providing 300% more visibility",
              },
              {
                title: "Commercial Parking",
                further:
                  "Energy-efficient LED streets lights reducing costs by 75%",
              },
              {
                title: "Garden Pathways",
                further:
                  "Solar-powered lanterns creating beautiful ambient glow",
              },
            ].map((study, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-teal-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-green-500 rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  {study.title}
                </h3>
                <p className="text-gray-600 mb-6">{study.further}</p>
                <div className="flex space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-3 h-3 bg-teal-400 rounded-full animate-pulse"
                      style={{ animationDelay: `${i * 0.1}s` }}
                    ></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ultimate CTA */}
      <section className="py-24 bg-gradient-to-r from-teal-700 via-green-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-green-500/20 to-blue-500/20"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-6xl font-black mb-6 animate-pulse">
            Elevate Your Outdoor Experience
          </h2>
          <p className="text-2xl mb-10 opacity-90">
            Join thousands who've transformed their properties with our superior
            outdoor lighting
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8">
            <Link
              to="/ContactUs"
              className="bg-white text-teal-700 px-12 py-5 rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-green-400/50 animate-bounce"
            >
              Start Your Project Today
            </Link>
            <Link
              to="/lighting"
              className="border-3 border-white text-white px-12 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-teal-700 transition-all duration-300 transform hover:scale-110 hover:shadow-inner"
            >
              Explore All Options
            </Link>
          </div>
          <div className="mt-12 opacity-40 text-lg">
            <p>
              30-Day Satisfaction Guarantee • Professional Installation
              Available • 5-Star Support
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GenericOut;
