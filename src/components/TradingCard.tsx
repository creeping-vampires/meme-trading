import React from 'react';
import { TrendingUp, ArrowUpDown, Rocket } from 'lucide-react';

export default function TradingCard({ coin }: { coin: any }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <img src={coin.image} alt={coin.name} className="w-12 h-12 rounded-full" />
          <div>
            <h3 className="font-bold text-lg">{coin.name}</h3>
            <p className="text-gray-500 text-sm">${coin.price}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm ${
          coin.change > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
        }`}>
          {coin.change}%
        </span>
      </div>
      
      <div className="flex justify-between gap-2">
        <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg flex items-center justify-center space-x-2">
          <TrendingUp size={18} />
          <span>Buy</span>
        </button>
        <button className="flex-1 border border-indigo-600 text-indigo-600 hover:bg-indigo-50 py-2 rounded-lg flex items-center justify-center space-x-2">
          <ArrowUpDown size={18} />
          <span>Sell</span>
        </button>
      </div>
    </div>
  );
}