import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { outdoorLighting } from '../data/data';
import Navbar from '../FrequentlyUsed/Navbar';
import Footer from '../FrequentlyUsed/Footer';

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
            <p className="text-2xl md:text-3xl text-blue-100 font-light mb-8">Revolutionize your outdoor spaces with weather-defying lighting brilliance</p>
            <div className="flex justify-center space-x-6">
              <Link to="/genericout" className="bg-white text-teal-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 hover:rotate-3 shadow-lg hover:shadow-xl">
                Discover Collection
              </Link>
              <Link to="/ContactUs" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-teal-600 transition-all duration-300 transform hover:scale-110">
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
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Weather Rating</h3>
              <p className="text-gray-600">Protected against dust and water ingress</p>
            </div>
            <div className="transform hover:scale-110 transition-all duration-300">
              <div className="w-20 h-20 bg-green-500 mx-auto mb-4 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-3xl font-bold text-white">90%</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Energy Efficiency</h3>
              <p className="text-gray-600">Advanced LED technology for maximum savings</p>
            </div>
            <div className="transform hover:scale-110 transition-all duration-300">
              <div className="w-20 h-20 bg-blue-500 mx-auto mb-4 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-3xl font-bold text-white">24/7</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Reliability</h3>
              <p className="text-gray-600">Continuous operation in harsh conditions</p>
            </div>
            <div className="transform hover:scale-110 transition-all duration-300">
              <div className="w-20 h-20 bg-orange-500 mx-auto mb-4 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-3xl font-bold text-white">20Y</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Warranty</h3>
              <p className="text-gray-600">Comprehensive protection guaranteed</p>
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
            <p className="text-xl text-gray-700 font-medium">Industrial-grade lighting engineered for endurance and elegance</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-16">
            {outdoorLighting.map((item, i) => (
              <Link key={i} to={`/outdoor-detail/${i}`} className="group">
                <div
                  className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-4xl transition-all duration-700 bg-white border-2 border-white cursor-pointer transform hover:rotate-2 hover:scale-105 hover:-translate-y-4"
                  onMouseEnter={() => { setSelectedItem(i); setHoverItem(i); }}
                  onMouseLeave={() => { setSelectedItem(null); setHoverItem(null); }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover transform group-hover:scale-125 group-hover:rotate-6 transition-all duration-1000 filter group-hover:brightness-110 group-hover:contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  <div className={`absolute inset-0 transition-all duration-700 flex flex-col justify-end p-8 ${hoverItem === i ? 'transform translate-y-0' : 'transform translate-y-4'} group-hover:translate-y-0`}>
                    <div className="bg-gradient-to-r from-teal-600/15 to-green-600/15 backdrop-blur-xl rounded-2xl p-6 min-h-[180px] flex flex-col justify-between shadow-2xl border border-white/20">
                      <div>
                        <h3 className="text-3xl font-black text-white mb-4 group-hover:text-yellow-300 transition-colors duration-500 drop-shadow-lg">{item.title}</h3>
                        <p className="text-lg text-white/95 leading-relaxed font-medium">{item.description}</p>
                      </div>
                      <div className="flex space-x-3 mt-6">
                        <button className="flex-1 bg-gradient-to-r from-teal-400 to-green-500 hover:from-teal-500 hover:to-green-600 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl">
                          View Details
                        </button>
                        <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/30">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Weather Badge */}
                  <div className="absolute top-6 left-6 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse">
                    WEATHER-PROOF
                  </div>
                  {/* Rating Badge */}
                  <div className="absolute top-6 right-6 bg-yellow-500 text-yellow-900 px-3 py-1 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center space-x-1">
                    <span>4.8</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
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
          <h2 className="text-5xl font-black mb-6">Built Tough, Designed Beautiful</h2>
          <p className="text-xl mb-16 font-medium">Unparalleled performance in the harshest environments</p>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto mb-6 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Weatherproof Excellence</h3>
              <p className="text-lg font-medium leading-relaxed">IP65 rated enclosures withstand extreme weather, corrosion-resistant materials ensure longevity in any climate.</p>
            </div>
            <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-6 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Motion Sensing</h3>
              <p className="text-lg font-medium leading-relaxed">Intelligent sensors detect movement and automatically adjust lighting for optimal visibility and security.</p>
            </div>
            <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto mb-6 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 3.5a1.5 1.5 0 13 0 3 1.5 1.5 0 01-3 0V5a.5.5 0 011 0v2h1V5a.5.5 0 01.5-.5zM7.293 8.707a1 1 0 101.414-1.414 2 2 0 00-2.828 2.828c.2 0 .39-.039.578-.118a1 1 0 11.58-1.92z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Smart Integration</h3>
              <p className="text-lg font-medium leading-relaxed">Seamlessly connects with smart home ecosystems for remote control, scheduling, and energy optimization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Case Studies */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Real-World Performance</h2>
            <p className="text-xl text-gray-600">See our lighting solutions in action across diverse environments</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Residential Driveway", further: "Motion-sensor floodlights providing 300% more visibility" },
              { title: "Commercial Parking", further: "Energy-efficient LED streets lights reducing costs by 75%" },
              { title: "Garden Pathways", further: "Solar-powered lanterns creating beautiful ambient glow" }
            ].map((study, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-teal-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-green-500 rounded-lg mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{index + 1}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{study.title}</h3>
                <p className="text-gray-600 mb-6">{study.further}</p>
                <div className="flex space-x-2">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-3 h-3 bg-teal-400 rounded-full animate-pulse" style={{animationDelay: `${i * 0.1}s`}}></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Showcase */}
      <section className="py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Outdoor Lighting Showcase</h2>
            <p className="text-xl text-gray-600">Stunning installations in various outdoor settings</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[1,2,3,4].map((i) => (
              <div key={i} className="group overflow-hidden rounded-3xl cursor-pointer transform hover:scale-110 hover:rotate-3 transition-all duration-500 shadow-lg hover:shadow-2xl">
                <img
                  src={`https://images.unsplash.com/photo-17${i}040001901-612hc${i}?w=400&h=500&fit=crop`}
                  alt={`Showcase ${i}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="bg-gradient-to-t from-black/80 to-transparent p-4 absolute bottom-0 left-0 right-0 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="font-bold text-white mb-2">Nighttime Elegance</h4>
                  <p className="text-white/80 text-sm">Perfect blend of functionality and aesthetics</p>
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
          <h2 className="text-6xl font-black mb-6 animate-pulse">Elevate Your Outdoor Experience</h2>
          <p className="text-2xl mb-10 opacity-90">Join thousands who've transformed their properties with our superior outdoor lighting</p>
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
          <div className="mt-12 opacity-60 text-lg">
            <p>⚡ 30-Day Satisfaction Guarantee • ✅ Professional Installation Available • 🌟 5-Star Support</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default GenericOut;
