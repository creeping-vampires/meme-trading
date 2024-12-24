import React from "react";
import {
  ArrowLeft,
  Star,
  Share2,
  TrendingDown,
  TrendingUp,
  DollarSign,
} from "lucide-react";
import { useNavigationStore } from "../stores/navigationStore";

export default function TokenDetailsPage() {
  const { selectedToken, setActiveTab } = useNavigationStore();

  if (!selectedToken) {
    setActiveTab("market");
    return null;
  }

  const { name, symbol, price, change, iconUrl } = selectedToken;
  const isPositive = change >= 0;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4">
        <button
          onClick={() => setActiveTab("market")}
          className="text-gray-300 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <div className="flex gap-4">
          <button className="text-gray-300 hover:text-white transition-colors">
            <Star className="w-6 h-6" />
          </button>
          <button className="text-gray-300 hover:text-white transition-colors">
            <Share2 className="w-6 h-6" />
          </button>
        </div>
      </header>

      <div className="px-4">
        {/* Token Header */}
        <div className="flex items-center gap-3 mb-4">
          <img
            src={iconUrl}
            alt={`${name} logo`}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <div className="text-gray-400">{symbol}</div>
            <div className="text-xl font-bold">{name}</div>
          </div>
        </div>

        {/* Token Price */}
        <div className="mb-6">
          <div className="text-4xl font-bold mb-2">${price.toFixed(6)}</div>
          <div
            className={`flex items-center ${
              isPositive ? "text-green-500" : "text-red-500"
            }`}
          >
            {isPositive ? (
              <TrendingUp className="w-5 h-5 mr-1" />
            ) : (
              <TrendingDown className="w-5 h-5 mr-1" />
            )}
            <span>
              {isPositive ? "+" : ""}
              {change}%
            </span>
            <span className="text-gray-500 ml-2">Past 24h</span>
          </div>
        </div>

        {/* Price Chart */}
        <div className="mb-6">
          <div className="h-[300px] bg-zinc-900 rounded-lg mb-4 p-4">
            <div className="w-full h-full flex items-center justify-center text-gray-500">
              Price chart coming soon
            </div>
          </div>

          <div className="flex justify-between text-sm">
            <button className="text-lime-300">LIVE</button>
            <button className="text-gray-500 hover:text-white transition-colors">
              4H
            </button>
            <button className="text-gray-500 hover:text-white transition-colors">
              1D
            </button>
            <button className="text-gray-500 hover:text-white transition-colors">
              1W
            </button>
            <button className="text-gray-500 hover:text-white transition-colors">
              1M
            </button>
            <button className="text-gray-500 hover:text-white transition-colors">
              MAX
            </button>
          </div>
        </div>

        {/* Buy Button */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-black">
          <button className="w-full bg-lime-300 text-black py-4 rounded-full flex items-center justify-center gap-2 font-semibold hover:bg-lime-400 transition-colors">
            <DollarSign className="w-5 h-5" />
            Buy {symbol}
          </button>
        </div>
      </div>
    </div>
  );
}
