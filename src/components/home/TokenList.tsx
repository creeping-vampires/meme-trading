import React from "react";
import TokenCard from "./TokenCard";
import { TrendingUp } from "lucide-react";
import { tokens } from "./../../data/tokens";

export default function TokenList() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 mb-6">
        <TrendingUp />
        <h2 className="text-xl font-bold"> Trending</h2>
      </div>
      <div className="grid gap-4">
        {tokens.map((token, index) => (
          <TokenCard key={index} {...token} />
        ))}
      </div>
    </div>
  );
}
