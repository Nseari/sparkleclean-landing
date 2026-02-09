import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

// Glassmorphism QR card with auto-generated QR code
export default function QRCard() {
  return (
    <div className="relative z-10 flex justify-center mt-10">
      <div className="bg-white/30 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20">
        <h3 className="text-lg font-semibold text-blue-900 mb-2 text-center">
          Scan to visit us
        </h3>

        {/* Generate QR code dynamically */}
        <a href="https://sparkleclean-abuja.com" target="_blank" rel="noopener noreferrer">
          <QRCodeCanvas
            value="https://sparkleclean-abuja.com"   // Replace with your website or contact link
            size={160}                              // QR code size
            bgColor="transparent"                   // Background color
            fgColor="#3F00FF"                       // Marian blue foreground
            level="H"                               // Error correction level
            includeMargin={true}                    // Adds margin around QR
          />
        </a>
      </div>
    </div>
  );
}
