import { Token } from "../../types/token";
import { useNavigationStore } from "../../stores/navigationStore";
import { getNumberInFormat } from "../../actions/helperFn";

interface TokenCardProps {
  tokenData: Token;
}

export default function TokenCard({ tokenData }: TokenCardProps) {
  const { setActiveTab, setSelectedToken } = useNavigationStore();

  const handleClick = () => {
    setSelectedToken(tokenData);
    setActiveTab("tokenDetails");
  };

  const isPositive = tokenData.priceChange >= 0; // Determine if the price change is positive
  const priceInUsd = tokenData.priceInUsd; // Format price to 2 decimal places

  return (
    <div
      onClick={handleClick}
      className="flex items-center justify-between py-4 mb-2 p-4 rounded-3xl bg-zinc-900 cursor-pointer hover:bg-zinc-800 transition-colors"
    >
      <div className="flex items-center gap-3">
        <img
          src={tokenData.iconUrl}
          alt={tokenData.name}
          className="w-8 h-8 rounded-full"
        />
        <div>
          <div className="font-medium text-gray-300">{tokenData.name}</div>
          <div className="text-sm text-gray-500">
            {getNumberInFormat(tokenData.marketCap)}
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-right">
          <div className="text-gray-300">${priceInUsd}</div>
          <div
            className={`text-sm ${
              isPositive ? "text-green-500" : "text-red-500"
            }`}
          >
            {isPositive ? "+" : ""}
            {tokenData.priceChange.toFixed(2)}%
          </div>
        </div>
      </div>
    </div>
  );
}
