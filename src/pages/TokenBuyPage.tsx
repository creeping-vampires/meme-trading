import React from "react";
import {
  ArrowLeft,
  Star,
  Share2,
  TrendingDown,
  DollarSign,
} from "lucide-react";

export default function TokenBuyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4">
        <ArrowLeft className="w-6 h-6" />
        <div className="flex gap-4">
          <Star className="w-6 h-6" />
          <Share2 className="w-6 h-6" />
        </div>
      </header>

      <div className="px-4">
        {/* Token Header */}
        <div className="flex items-center gap-3 mb-4">
          <img
            src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263/logo.png"
            alt="Token logo"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <div className="text-gray-600">Fartcoin</div>
            <div className="text-xl font-bold">Fartcoin</div>
          </div>
        </div>

        {/* Token Price */}
        <div className="mb-6">
          <div className="text-4xl font-bold mb-2">$0.803028</div>
          <div className="flex items-center text-red-500">
            <TrendingDown className="w-5 h-5 mr-1" />
            <span>$0.0697 (7.99%)</span>
            <span className="text-gray-500 ml-2">Past day</span>
          </div>
        </div>

        {/* Token Chart */}
        <div className="mb-6">
          <div className="h-[200px] bg-pink-50 rounded-lg mb-4">
            <div className="w-full h-full relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-pink-300">
                Chart Area
              </div>
            </div>
          </div>

          <div className="flex justify-between text-sm">
            <button className="text-pink-600">LIVE</button>
            <button className="text-gray-500">4H</button>
            <button className="text-gray-500">1D</button>
            <button className="text-gray-500">1W</button>
            <button className="text-gray-500">1M</button>
            <button className="text-gray-500">MAX</button>
          </div>
        </div>

        {/* Buy Button */}
        <div className="mb-20">
          <div className="text-gray-400 mb-2">Your balance</div>
          <button className="w-full bg-green-500 text-white py-4 rounded-lg flex items-center justify-center gap-2">
            <DollarSign className="w-5 h-5" />
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
