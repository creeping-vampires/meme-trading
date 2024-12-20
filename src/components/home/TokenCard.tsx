import React from "react";
import { ExternalLink } from "lucide-react";
import { Token } from "../../types/trading";

interface TokenCardProps {
  token: Token;
}

export default function TokenCard({ token }: TokenCardProps) {
  return (
    <div className="bg-white p-4 rounded-lg border border-neutral-100 flex items-center justify-between">
      <div className="flex items-center space-x-3">
        {token.logoURI && (
          <img
            src={token.logoURI}
            alt={token.name}
            className="w-10 h-10 rounded-full"
          />
        )}
        <div>
          <h3 className="font-medium">{token.symbol}</h3>
          <p className="text-sm text-neutral-500">{token.name}</p>
        </div>
      </div>
      <div>
        <h3 className="font-medium">+13%</h3>
        <p className="text-sm text-neutral-500">45x</p>
      </div>
    </div>
  );
}
