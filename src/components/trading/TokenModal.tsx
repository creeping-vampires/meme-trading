import React, { useState } from "react";
import { Search, X } from "lucide-react";
import { Token } from "../../types/trading";

interface TokenModalProps {
  tokens: Token[];
  onSelect: (token: Token) => void;
  onClose: () => void;
}

export default function TokenModal({
  tokens,
  onSelect,
  onClose,
}: TokenModalProps) {
  const [search, setSearch] = useState("");

  const filteredTokens = tokens.filter(
    (token) =>
      token.symbol.toLowerCase().includes(search.toLowerCase()) ||
      token.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl w-full max-w-md">
        <div className="p-4 border-b border-neutral-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">Select Token</h3>
            <button
              onClick={onClose}
              className="text-neutral-400 hover:text-neutral-600"
            >
              <X size={20} />
            </button>
          </div>

          <div className="relative">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name or symbol"
              className="w-full pl-10 pr-4 py-2 border border-neutral-200 rounded-lg"
            />
            <Search
              className="absolute left-3 top-2.5 text-neutral-400"
              size={20}
            />
          </div>
        </div>

        <div className="max-h-96 overflow-y-auto p-2">
          {filteredTokens.map((token) => (
            <button
              key={token.address}
              onClick={() => onSelect(token)}
              className="w-full flex items-center space-x-3 p-3 hover:bg-neutral-50 rounded-lg"
            >
              {token.logoURI && (
                <img
                  src={token.logoURI}
                  alt={token.symbol}
                  className="w-8 h-8 rounded-full"
                />
              )}
              <div className="text-left">
                <div className="font-medium">{token.symbol}</div>
                <div className="text-sm text-neutral-500">{token.name}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
