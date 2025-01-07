import React, { useEffect, useState } from "react";
import {
  ArrowLeft,
  Star,
  Share2,
  TrendingDown,
  TrendingUp,
  DollarSign,
} from "lucide-react";
import { useNavigationStore } from "../stores/navigationStore";
import { getTokenPriceHistory } from "../actions/serverActions";

interface CandleData {
  o: number; // open
  h: number; // high
  l: number; // low
  c: number; // close
  v: number; // volume
  t: number; // timestamp
}

interface ChartData {
  bars: CandleData[];
}

export default function TokenDetailsPage() {
  const { selectedToken, setActiveTab } = useNavigationStore();
  const [priceHistory, setPriceHistory] = useState<CandleData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPriceHistory = async () => {
      if (selectedToken?.tokenAddress) {
        setIsLoading(true);
        const data = await getTokenPriceHistory(selectedToken.tokenAddress);
        if (data && data.bars) {
          setPriceHistory(data.bars);
        }
        setIsLoading(false);
      }
    };

    fetchPriceHistory();
  }, [selectedToken?.tokenAddress]);

  if (!selectedToken) {
    setActiveTab("market");
    return null;
  }

  const { symbol, name, iconUrl, priceInUsd, priceChange } = selectedToken;
  const isPositive = priceChange >= 0;

  const getChartPath = () => {
    if (!priceHistory || priceHistory.length < 2) return "";

    // Use closing prices for the line chart
    const prices = priceHistory.map((d) => d.c);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    const priceRange = maxPrice - minPrice;

    // Normalize values to fit SVG viewport
    const points = priceHistory.map((d, i) => {
      const x = (i / (priceHistory.length - 1)) * 1000;
      const y = 500 - ((d.c - minPrice) / priceRange) * 400;
      return `${x},${y}`;
    });

    return `M ${points.join(" L ")}`;
  };

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
          <div className="text-4xl font-bold mb-2">${priceInUsd}</div>
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
              {priceChange}%
            </span>
            <span className="text-gray-500 ml-2">Past 24h</span>
          </div>
        </div>

        {/* Price Chart */}
        <div className="mb-6">
          <div className="h-[300px] bg-zinc-900 rounded-lg mb-4 p-4 relative overflow-hidden">
            {isLoading ? (
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                Loading chart...
              </div>
            ) : priceHistory.length > 0 ? (
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 1000 500"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="0%"
                      stopColor="rgb(134, 239, 172)"
                      stopOpacity="0.3"
                    />
                    <stop
                      offset="100%"
                      stopColor="rgb(134, 239, 172)"
                      stopOpacity="0"
                    />
                  </linearGradient>
                </defs>
                <path
                  d={getChartPath()}
                  fill="none"
                  stroke="rgb(134, 239, 172)"
                  strokeWidth="2"
                />
                <path
                  d={`${getChartPath()} L 1000,500 L 0,500 Z`}
                  fill="url(#gradient)"
                  opacity="0.2"
                />
              </svg>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                No price data available
              </div>
            )}
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
