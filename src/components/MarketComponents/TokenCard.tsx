import { Token } from "../../types/token";
import { useNavigationStore } from "../../stores/navigationStore";

export default function TokenCard({
  name,
  symbol,
  price,
  change,
  iconUrl,
  marketCap,
}: Token) {
  const { setActiveTab, setSelectedToken } = useNavigationStore();
  const isPositive = change >= 0;

  const handleClick = () => {
    let tokenObj = { name, symbol, price, change, iconUrl, marketCap };
    setSelectedToken(tokenObj);
    setActiveTab("tokenDetails");
  };

  return (
    <div
      onClick={handleClick}
      className="flex items-center justify-between py-4 mb-2 p-4 rounded-3xl bg-zinc-900 cursor-pointer hover:bg-zinc-800 transition-colors"
    >
      <div className="flex items-center gap-3">
        <img src={iconUrl} alt={name} className="w-8 h-8 rounded-full" />
        <div>
          <div className="font-medium text-gray-300">{name}</div>
          <div className="text-sm text-gray-500">{marketCap / 1000000}M</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-right">
          <div className="text-gray-300">${price.toFixed(2)}</div>
          <div
            className={`text-sm ${
              isPositive ? "text-green-500" : "text-red-500"
            }`}
          >
            {isPositive ? "+" : ""}
            {change}%
          </div>
        </div>
      </div>
    </div>
  );
}
