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
            <p className="text-2xl md:text-3xl text-blue-100 font-light mb-8">Transform spaces into masterpieces with cutting-edge indoor lighting</p>
            <div className="flex justify-center space-x-4">
              <Link to="/genericin" className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 hover:rotate-3 shadow-lg hover:shadow-xl">
                Explore Collection
              </Link>
              <Link to="/ContactUs" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-purple-600 transition-all duration-300 transform hover:scale-110">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-gray-100 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="transform hover:scale-110 transition-all duration-300">
              <div className="w-20 h-20 bg-blue-500 mx-auto mb-4 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-3xl font-bold text-white">500+</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Homes Illuminated</h3>
              <p className="text-gray-600">Satisfied customers worldwide</p>
            </div>
            <div className="transform hover:scale-110 transition-all duration-300">
              <div className="w-20 h-20 bg-green-500 mx-auto mb-4 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-3xl font-bold text-white">80%</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Energy Savings</h3>
              <p className="text-gray-600">Reduced energy consumption</p>
            </div>
            <div className="transform hover:scale-110 transition-all duration-300">
              <div className="w-20 h-20 bg-purple-500 mx-auto mb-4 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-3xl font-bold text-white">50+</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Design Options</h3>
              <p className="text-gray-600">Wide variety of styles</p>
            </div>
            <div className="transform hover:scale-110 transition-all duration-300">
              <div className="w-20 h-20 bg-orange-500 mx-auto mb-4 rounded-full flex items-center justify-center shadow-xl">
                <span className="text-3xl font-bold text-white">10Y</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Warranty</h3>
              <p className="text-gray-600">Long-lasting durability</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Product Showcase */}
      <section className="py-28 bg-gradient-to-br from-white via-blue-50 to-purple-50 text-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-200/20 to-purple-200/20"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-6xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              Our Exclusive Collection
            </h2>
            <p className="text-xl text-gray-700 font-medium">Hand-picked premium lighting solutions for discerning homeowners</p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-16">
            {indoorLighting.map((item, i) => (
              <Link key={i} to={`/indoor-detail/${i}`} className="group">
                <div
                  className="relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-4xl transition-all duration-700 bg-white border-2 border-white cursor-pointer transform hover:rotate-2 hover:scale-105 hover:-translate-y-4"
                  onMouseEnter={() => { setSelectedItem(i); setHoverItem(i); }}
                  onMouseLeave={() => { setSelectedItem(null); setHoverItem(null); }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover transform group-hover:scale-125 group-hover:rotate-6 transition-all duration-1000 filter group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  <div className={`absolute inset-0 transition-all duration-700 flex flex-col justify-end p-8 ${hoverItem === i ? 'transform translate-y-0' : 'transform translate-y-4'} group-hover:translate-y-0`}>
                    <div className="bg-white/15 backdrop-blur-xl rounded-2xl p-6 min-h-[180px] flex flex-col justify-between shadow-2xl border border-white/20">
                      <div>
                        <h3 className="text-3xl font-black text-white mb-4 group-hover:text-yellow-300 transition-colors duration-500 drop-shadow-lg">{item.title}</h3>
                        <p className="text-lg text-white/95 leading-relaxed font-medium">{item.description}</p>
                      </div>
                      <div className="flex space-x-3 mt-6">
                        <button className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-gray-900 px-6 py-3 rounded-full font-bold transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl">
                          Learn More
                        </button>
                        <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/30">
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Floating Badge */}
                  <div className="absolute top-6 left-6 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse">
                    NEW
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Enhanced */}
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
              <p className="text-lg font-medium leading-relaxed">State-of-the-art LEDs providing 90% energy savings compared to traditional bulbs, with lifespans up to 50,000 hours.</p>
            </div>
            <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto mb-6 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.046-6.495A.99.99 0 008.5 12a1 1 0 11-2 0v-.047a4.013 4.013 0 01-1.212-3.032A4.007 4.007 260.46 0 0110 8a4.007 4.007 0 010-8 4.007 4.007 0 013.191 1.459 1 1 0 11-1.732 1.732A2.008 2.008 0 0010 4a2.008 2.008 0 00-2 2v.047a1.99 1.99 0 00.95.95l.023.009V12a.99.99 0 00.977-.504z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Intelligent Dimming</h3>
              <p className="text-lg font-medium leading-relaxed">Smart dimming capabilities with voice control integration for perfect ambiance at any time.</p>
            </div>
            <div className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-r from-indigo-400 to-indigo-600 mx-auto mb-6 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Premium Materials</h3>
              <p className="text-lg font-medium leading-relaxed">Crafted from premium materials with elegant finishes, ensuring durability and timeless beauty.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Inspiration Gallery</h2>
            <p className="text-xl text-gray-600">See our lighting in real home environments</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[1,2,3,4].map((i) => (
              <div key={i} className="group overflow-hidden rounded-2xl cursor-pointer transform hover:scale-105 transition-all duration-500">
                <img
                  src={`https://images.unsplash.com/photo-15${i}030001901-612fb${i}?w=500&h=600&fit=crop`}
                  alt={`Gallery ${i}`}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="bg-white p-4">
                  <h4 className="font-bold text-gray-800">Modern Living Room</h4>
                  <p className="text-gray-600">Ceiling lights with profile accent lighting</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-6xl font-black mb-6">Ready to Transform Your Space?</h2>
          <p className="text-2xl mb-10 opacity-90">Let's create the perfect lighting solution for your home</p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Link
              to="/ContactUs"
              className="bg-white text-purple-700 px-10 py-4 rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-yellow-400/50"
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
