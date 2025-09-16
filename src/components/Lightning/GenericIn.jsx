import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { indoorLighting } from '../data/data';
import Navbar from '../FrequentlyUsed/Navbar';
import Footer from '../FrequentlyUsed/Footer';

const GenericIn = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [hoverItem, setHoverItem] = useState(null);

  return (
    <>
      <Navbar />

      {/* Hero Section with Animated Background */}
      <section className="relative py-32 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 animate-pulse"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-yellow-400/20 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-blue-300/30 rounded-full animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-7xl md:text-8xl font-black bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent mb-8 drop-shadow-2xl animate-pulse">
              Illuminate Your Home
            </h1>
            <p className="text-2xl md:text-3xl text-blue-100 font-light mb-8">
              Transform spaces into masterpieces with cutting-edge indoor lighting
            </p>
            <div className="flex justify-center space-x-4">
              <Link
                to="/genericin"
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 hover:rotate-3 shadow-lg hover:shadow-xl"
              >
                Explore Collection
              </Link>
              <Link
                to="/ContactUs"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-110"
              >
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-100 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Homes Illuminated", sub: "Satisfied customers worldwide", color: "bg-blue-500" },
              { value: "80%", label: "Energy Savings", sub: "Reduced energy consumption", color: "bg-green-500" },
              { value: "50+", label: "Design Options", sub: "Wide variety of styles", color: "bg-purple-500" },
              { value: "10Y", label: "Warranty", sub: "Long-lasting durability", color: "bg-orange-500" },
            ].map((stat, i) => (
              <div key={i} className="transform hover:scale-105 transition-all duration-300">
                <div className={`w-20 h-20 ${stat.color} mx-auto mb-4 rounded-full flex items-center justify-center shadow-xl`}>
                  <span className="text-3xl font-bold text-white">{stat.value}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{stat.label}</h3>
                <p className="text-gray-600">{stat.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-28 bg-gradient-to-br from-white via-blue-50 to-purple-50 text-gray-900 relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Our Exclusive Collection
            </h2>
            <p className="text-xl text-gray-700 font-medium">
              Hand-picked premium lighting solutions for discerning homeowners
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-16">
            {indoorLighting.map((item, i) => (
              <Link key={i} className="group">
                <div
                  className="relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white border cursor-pointer transform hover:scale-105"
                  onMouseEnter={() => { setSelectedItem(i); setHoverItem(i); }}
                  onMouseLeave={() => { setSelectedItem(null); setHoverItem(null); }}
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

      {/* Benefits Section (original look restored) */}
      <section className="py-24 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-800/50 to-purple-800/50"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl font-black mb-6">Why Our Indoor Lighting Reigns Supreme</h2>
          <p className="text-xl mb-16 font-medium">Advanced features that transform your living experience</p>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Advanced LED Technology</h3>
              <p className="text-lg font-medium leading-relaxed">
                State-of-the-art LEDs providing 90% energy savings compared to traditional bulbs, with lifespans up to 50,000 hours.
              </p>
            </div>
            <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto mb-6 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.046-6.495A.99.99 0 008.5 12a1 1 0 11-2 0v-.047a4.013 4.013 0 01-1.212-3.032A4.007 4.007 260.46 0 0110 8a4.007 4.007 0 010-8 4.007 4.007 0 013.191 1.459 1 1 0 11-1.732 1.732A2.008 2.008 0 0010 4a2.008 2.008 0 00-2 2v.047a1.99 1.99 0 00.95.95l.023.009V12a.99.99 0 00.977-.504z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Intelligent Dimming</h3>
              <p className="text-lg font-medium leading-relaxed">
                Smart dimming capabilities with voice control integration for perfect ambiance at any time.
              </p>
            </div>
            <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-indigo-600 mx-auto mb-6 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Premium Materials</h3>
              <p className="text-lg font-medium leading-relaxed">
                Crafted from premium materials with elegant finishes, ensuring durability and timeless beauty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-6xl font-black mb-6">Ready to Transform Your Space?</h2>
          <p className="text-2xl mb-10 opacity-90">Let's create the perfect lighting solution for your home</p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/ContactUs"
              className="bg-white text-purple-700 px-10 py-4 rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 shadow-2xl"
            >
              Get Free Consultation
            </Link>
            <Link
              to="/lights"
              className="border-2 border-white text-white px-10 py-4 rounded-full font-bold text-xl hover:bg-white hover:text-purple-700 transition-all duration-300 transform hover:scale-110"
            >
              Explore All Products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GenericIn;