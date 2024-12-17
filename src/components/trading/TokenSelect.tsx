import React from "react";
import { ChevronDown } from "lucide-react";
import { Token } from "../../types/trading";

interface TokenSelectProps {
  token?: Token;
  onSelect: () => void;
  label: string;
}

export default function TokenSelect({
  token,
  onSelect,
  label,
}: TokenSelectProps) {
  return (
    <button
      onClick={onSelect}
      className="flex items-center space-x-2 bg-neutral-50 hover:bg-neutral-100 rounded-lg px-3 py-2 transition-colors"
    >
      {token ? (
        <>
          {token.logoURI && (
            <img
              src={token.logoURI}
              alt={token.symbol}
              className="w-6 h-6 rounded-full"
            />
          )}
          <span className="font-medium">{token.symbol}</span>
        </>
      ) : (
        <span className="text-neutral-600">{label}</span>
      )}
      <ChevronDown size={16} className="text-neutral-400" />
    </button>
  );
}
