import React from 'react';
import { testimonials } from '../data/Data';

const Testimonials = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Real feedback from real people we've had the pleasure of working with.
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-gray-50 p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 group"
          >
            <div className="flex items-center gap-4 mb-6">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-indigo-500 group-hover:scale-105 transition-transform duration-300"
              />
              <div className="text-left">
                <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                <span className="text-sm text-gray-500">{testimonial.role}</span>
              </div>
            </div>
            <p className="text-gray-700 italic leading-relaxed">"{testimonial.text}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
