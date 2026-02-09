import React from 'react';
import QRCard from './QRCard';

export default function Contact() {
  return (
    <section className="relative z-10 py-16 px-6 bg-gradient-to-r from-blue-100 to-white">
      <h2 className="text-3xl font-bold text-blue-900 text-center mb-10">Contact Us</h2>
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-lg text-blue-800 mb-2">📍 Address: Plot 123, Central Business District, Abuja</p>
        <p className="text-lg text-blue-800 mb-2">📞 Phone: +234 800 123 4567</p>
        <p className="text-lg text-blue-800 mb-6">✉️ Email: info@sparkleclean-abuja.com</p>
        <QRCard />
      </div>
    </section>
  );
}
