import React from 'react';

const services = [
  { title: "Residential Cleaning", desc: "Spotless homes with eco-friendly care." },
  { title: "Office Cleaning", desc: "Professional spaces maintained daily." },
  { title: "Deep Cleaning", desc: "Thorough sanitization for health & safety." }
];

export default function Services() {
  return (
    <section className="relative z-10 py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {services.map((s, i) => (
          <div key={i} className="bg-blue-50 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">{s.title}</h3>
            <p className="text-blue-700">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
