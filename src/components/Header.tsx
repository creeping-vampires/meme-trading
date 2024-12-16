import React from 'react';
import { Wallet2, Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gradient-to-r from-purple-900 to-indigo-800 p-4 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=128&h=128&fit=crop" 
               alt="Logo" 
               className="w-8 h-8 rounded-full" />
          <span className="text-white font-bold text-xl">MoonMeme</span>
        </div>
        
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <Wallet2 size={20} />
          <span className="hidden sm:inline">Connect Wallet</span>
        </button>
      </div>
    </header>
  );
}