import AssetItem from "../components/MarketComponents/TokenCard";
import { Flame, TrendingUp } from "lucide-react";
import MarketHeader from "../components/MarketComponents/MarketHeader";
import TokenCard from "../components/MarketComponents/TokenCard";
import { BackgroundEffect } from "../components/layout/BackgroundEffect";

const assets = [
  {
    name: "Binance",
    icon: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa/logo.png",
    balance: 0.00324,
    value: 87.25,
    change: 8.51,
  },
  {
    name: "Tether",
    icon: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB/logo.svg",
    balance: 3.27,
    value: 3.27,
    change: -0.02,
  },
  {
    name: "Solana",
    icon: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png",
    balance: 0.421,
    value: 178.45,
    change: 6.12,
  },
];

export default function MarketPage() {
  return (
    <div>
      <BackgroundEffect />
      <MarketHeader />
      <div className="mt-4">
        <div>
          <div className="flex justify-start mb-2">
            <Flame className="text-gray-50" />
            <div className="font-bold text-gray-50">Trending</div>
          </div>

          {assets.map((asset, index) => (
            <div key={index} className="mb-2">
              <TokenCard {...asset} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
