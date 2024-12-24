import React from "react";
import { PortfolioStats } from "../../types/portfolio";

interface PortfolioBalanceProps {
  stats: PortfolioStats;
}

export default function PortfolioBalance({ stats }: PortfolioBalanceProps) {
  return (
    <div className="text-center">
      <div className="text-gray-400">Portfolio Balance</div>
      <div className="text-4xl font-bold text-gray-50">
        ${stats.totalBalance.toFixed(2)}
      </div>
      <div className="flex items-center justify-center text-xs text-lime-400">
        <span
          className={`mr-2 ${
            stats.percentageChange >= 0 ? "text-lime-400" : "text-red-500"
          }`}
        >
          {stats.percentageChange}%
        </span>
        <span>{stats.timeframe}</span>
      </div>
    </div>
  );
}
