import React from 'react';
import lightingBanner from '../../assets/lighting.jpeg';
import indoor1 from '../../assets/P1.png';
import outdoor2 from '../../assets/P7.png';
import Navbar from '../FrequentlyUsed/Navbar';
import Footer from '../FrequentlyUsed/Footer';
import { Link } from 'react-router-dom';
import { testimonials } from '../data/data';

const Lights = () => {
  return (
    <>
      <Navbar />
      <section className="relative h-[450px] md:h-[550px] bg-gradient-to-br from-blue-800 to-indigo-900 text-white flex items-center justify-center overflow-hidden">
        <img
          src={lightingBanner}
          alt="Lighting Solutions"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 text-center">
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg">
            Lighting Solutions
          </h1>
          <p className="mt-3 text-xl md:text-2xl text-blue-100/80">
            Experience brilliance—indoors and out.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-blue-900">Choose Your Lighting Solution</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Indoor Option */}
            <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={indoor1}
                alt="Indoor Lighting"
                className="w-full h-96 object-cover transform group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-blue-900/60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500">
                <h3 className="text-4xl font-bold text-white mb-4">Indoor Lighting</h3>
                <p className="text-lg text-white/90 mb-6">Illuminate your interiors</p>
                <div className="flex space-x-3">
                  <Link to="/indoor" className="bg-white text-blue-900 px-6 py-2 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
                    Standard View
                  </Link>
                  <Link to="/genericin" className="border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-100 hover:text-blue-900 transition duration-300">
                    Premium View
                  </Link>
                </div>
              </div>
            </div>

            {/* Outdoor Option */}
            <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={outdoor2}
                alt="Outdoor Lighting"
                className="w-full h-96 object-cover transform group-hover:scale-105 transition duration-700"
              />
              <div className="absolute inset-0 bg-blue-800/60 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition duration-500">
                <h3 className="text-4xl font-bold text-white mb-4">Outdoor Lighting</h3>
                <p className="text-lg text-white/90 mb-6">Shine bright outside</p>
                <div className="flex space-x-3">
                  <Link to="/outdoor" className="bg-white text-blue-900 px-6 py-2 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
                    Standard View
                  </Link>
                  <Link to="/genericout" className="border-2 border-white text-white px-6 py-2 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition duration-300">
                    Luxury View
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">Why Choose Our Lighting Solutions?</h2>
            <p className="text-xl text-gray-600">Innovation meets reliability in every product</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 mx-auto mb-4 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Energy Efficient</h3>
              <p className="text-gray-600">Save on energy costs with our advanced LED technology</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-100 mx-auto mb-4 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Controls</h3>
              <p className="text-gray-600">Integrate with smart home systems for ultimate control</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-100 mx-auto mb-4 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Durable Quality</h3>
              <p className="text-gray-600">Built to last with premium materials and craftsmanship</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-orange-100 mx-auto mb-4 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 2L1 8v8a2 2 0 002 2h14a2 2 0 002-2V8l-9-6z" clipRule="evenodd"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Comprehensive</h3>
              <p className="text-gray-600">Complete solutions for residential and commercial needs</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Hear from satisfied customers about our lighting solutions</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
                <div className="flex items-center mb-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-extrabold mb-4">Ready to Brighten Your Space?</h2>
          <p className="text-xl mb-8">Contact us today for personalized lighting solutions</p>
          <Link
            to="/ContactUs"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105"
          >
            Get Started Now
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Lights;
