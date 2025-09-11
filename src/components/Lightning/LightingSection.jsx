import React from 'react';

const LightingSection = ({ data, title, subtitle, bgGradient, color }) => {
  if (!data || data.length === 0) return null;

  const featured = data[0];
  const rest = data.slice(1);

  return (
    <section className={`py-24 ${bgGradient} text-${color || 'gray-900'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-extrabold text-blue-900 mb-3">{title}</h2>
          <p className="text-lg text-gray-600">{subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Featured Item */}
          <div className="md:col-span-2 relative group overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={featured.image}
              alt={featured.title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700"
            />
            <div className="absolute inset-0 bg-blue-900/60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-6">
              <h3 className="text-3xl font-bold text-white mb-2">{featured.title}</h3>
              <p className="text-sm text-white/90">{featured.description}</p>
            </div>
          </div>

          {/* Stack of smaller cards */}
          <div className="grid gap-6">
            {rest.map((item, i) => (
              <div key={i} className="relative group overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-blue-800/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-4">
                  <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
                  <p className="text-xs text-white/80">{item.description.split(' ').slice(0, 8).join(' ')}...</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LightingSection;
