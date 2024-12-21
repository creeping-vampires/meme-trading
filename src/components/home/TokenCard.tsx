import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface TokenCardProps {
  name: string;
  symbol: string;
  price: number;
  change: number;
  volume: number;
  iconUrl: string;
}

export default function TokenCard({
  name,
  symbol,
  price,
  change,
  volume,
  iconUrl,
}: TokenCardProps) {
  const isPositiveChange = change >= 0;

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src={iconUrl}
            alt={`${name} icon`}
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h3 className="font-bold text-lg text-gray-900">{name}</h3>
            <p className="text-gray-500 text-sm">{symbol}</p>
          </div>
        </div>
        <div className="space-x-3">
          <div
            className={`flex items-center ${
              isPositiveChange ? "text-green-500" : "text-red-500"
            }`}
          >
            {isPositiveChange ? (
              <TrendingUp className="w-5 h-5 mr-1" />
            ) : (
              <TrendingDown className="w-5 h-5 mr-1" />
            )}
            <span className="font-semibold">{Math.abs(change)}%</span>
          </div>

          <div>
            {" "}
            <p className="text-gray-800 text-sm">$1.36</p>
          </div>
        </div>
      </div>
    </div>
  );
}
