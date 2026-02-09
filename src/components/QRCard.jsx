import React from 'react';
import { QRCodeCanvas } from 'qrcode.react';

export default function QRCard() {
  return (
    <div className="relative z-10 flex justify-center mt-10">
      <div className="bg-white/30 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20">
        <h3 className="text-lg font-semibold text-blue-900 mb-2 text-center">
          Scan to visit us
        </h3>

        <a
          href="https://nseari.github.io/sparkleclean-landing/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <QRCodeCanvas
            value="https://nseari.github.io/sparkleclean-landing/"
            size={160}
            bgColor="transparent"
            fgColor="#3F00FF"
            level="H"
            includeMargin={true}
          />
        </a>
      </div>
    </div>
  );
}
