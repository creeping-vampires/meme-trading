import React from "react";
import { ChevronRight } from "lucide-react";

interface AssetItemProps {
  name: string;
  icon: string;
  balance: number;
  value: number;
  change: number;
}

export default function TokenCard({
  name,
  icon,
  balance,
  value,
  change,
}: AssetItemProps) {
  const isPositive = change >= 0;

  return (
    <div className="flex items-center justify-between py-4 mb-2  p-4 rounded-3xl bg-white">
      <div className="flex items-center gap-3">
        <img src={icon} alt={name} className="w-8 h-8 rounded-full" />
        <div>
          <div className="font-medium">{name}</div>
          <div className="text-sm text-gray-500">{balance.toFixed(8)}</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <div className="text-right">
          <div>${value.toFixed(2)}</div>
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
