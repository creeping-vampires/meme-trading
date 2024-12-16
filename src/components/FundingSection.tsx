import React from 'react';
import { Wallet, ArrowRightLeft, ExternalLink } from 'lucide-react';

export default function FundingSection() {
  return (
    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-6">Funding Options</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-purple-100 rounded-lg">
              <ArrowRightLeft className="text-purple-600" />
            </div>
            <h3 className="font-semibold">OnRamp</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Instantly buy crypto with your credit card or bank transfer
          </p>
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg">
            Buy Crypto
          </button>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-3 mb-4">
            <div className="p-2 bg-indigo-100 rounded-lg">
              <Wallet className="text-indigo-600" />
            </div>
            <h3 className="font-semibold">Deposit</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Transfer crypto from another wallet or exchange
          </p>
          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg">
            Deposit Now
          </button>
        </div>
      </div>
    </div>
  );
}