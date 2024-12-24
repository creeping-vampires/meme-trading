import React from "react";

interface QRCodeProps {
  value: string;
  size?: number;
}

export default function QRCode({ value, size = 200 }: QRCodeProps) {
  // Using QR Code API service
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(
    value
  )}`;

  return (
    <div className="flex justify-center">
      <img src={qrCodeUrl} alt="Wallet QR Code" className="rounded-lg" />
    </div>
  );
}
