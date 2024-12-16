import React from 'react';
import { TrendingUp, ArrowDownUp } from 'lucide-react';
import Button from '../ui/Button';
import { Coin } from '../../types';

export default function CoinCard({ coin }: { coin: Coin }) {
  return (
    <div className="bg-white border border-neutral-100 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-3">
          <img src={coin.image} alt={coin.name} className="w-10 h-10 rounded-full" />
          <div>
            <h3 className="font-medium">{coin.name}</h3>
            <p className="text-neutral-500 text-sm">${coin.price}</p>
          </div>
        </div>
        <span className={`px-2 py-1 rounded text-sm ${
          coin.change > 0 ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
        }`}>
          {coin.change}%
        </span>
      </div>
      
      <div className="flex gap-2">
        <Button icon={<TrendingUp />}>Buy</Button>
        <Button variant="secondary" icon={<ArrowDownUp />}>Sell</Button>
      </div>
    </div>
  );
}