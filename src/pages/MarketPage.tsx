import { Flame, TrendingUp } from "lucide-react";
import MarketHeader from "../components/MarketComponents/MarketHeader";
import TokenCard from "../components/MarketComponents/TokenCard";
import { BackgroundEffect } from "../components/layout/BackgroundEffect";

const assets = [
  {
    name: "Dogecoin",
    symbol: "DOGE",
    price: 0.34,
    change: 10.0,
    volume: 6606569038,
    marketCap: 45200000000,
    iconUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/74.png",
  },
  {
    name: "Shiba Inu",
    symbol: "SHIB",
    price: 0.000023,
    change: 9.2,
    volume: 1340086086,
    marketCap: 13000000000,
    iconUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/5994.png",
  },
  {
    name: "Pepe",
    symbol: "PEPE",
    price: 0.000019,
    change: 14.9,
    volume: 3395201951,
    marketCap: 8000000000,
    iconUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/24478.png",
  },
  {
    name: "Bonk",
    symbol: "BONK",
    price: 0.000032,
    change: 21,
    volume: 3395201951,
    marketCap: 2400000000,
    iconUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/24478.png",
  },
  {
    name: "Floki",
    symbol: "FLOKI",
    price: 0.000178,
    change: 5.6,
    volume: 271130000,
    marketCap: 1710000000,
    iconUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/1437.png",
  },
  {
    name: "Dogelon Mars",
    symbol: "ELON",
    price: 0.0000003,
    change: 3.2,
    volume: 130000000,
    marketCap: 1500000000,
    iconUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/9436.png",
  },
  {
    name: "Baby Doge Coin",
    symbol: "BabyDoge",
    price: 0.000000001,
    change: 2.1,
    volume: 90000000,
    marketCap: 1200000000,
    iconUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/24478.png",
  },
  {
    name: "Samoyedcoin",
    symbol: "SAMO",
    price: 0.02,
    change: 4.5,
    volume: 50000000,
    marketCap: 800000000,
    iconUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/11860.png",
  },
  {
    name: "Hoge Finance",
    symbol: "HOGE",
    price: 0.0003,
    change: 6.7,
    volume: 30000000,
    marketCap: 600000000,
    iconUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/8438.png",
  },
  {
    name: "Kishu Inu",
    symbol: "KISHU",
    price: 0.00000001,
    change: 8.9,
    volume: 20000000,
    marketCap: 500000000,
    iconUrl: "https://s2.coinmarketcap.com/static/img/coins/64x64/10822.png",
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

          <div>
            {assets.map((asset, index) => (
              <div key={index} className="mb-2">
                <TokenCard {...asset} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
