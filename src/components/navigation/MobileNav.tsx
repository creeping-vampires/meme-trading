import React from 'react';
import { TrendingUp, Wallet, Rocket } from 'lucide-react';

const navItems = [
  { icon: <TrendingUp />, label: 'Trade' },
  { icon: <Wallet />, label: 'Wallet' },
  { icon: <Rocket />, label: 'Explore' }
];

export default function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-100 md:hidden">
      <div className="flex justify-around p-4">
        {navItems.map((item, index) => (
          <button key={index} className="flex flex-col items-center text-neutral-600">
            <span className="w-6 h-6">{item.icon}</span>
            <span className="text-xs mt-1">{item.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}