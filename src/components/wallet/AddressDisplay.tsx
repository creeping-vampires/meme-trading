import React from "react";
import { Copy, CheckCheck } from "lucide-react";
import { useState } from "react";

interface AddressDisplayProps {
  address: string;
}

export default function AddressDisplay({ address }: AddressDisplayProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-zinc-900 p-4 rounded-lg flex items-center justify-between">
      <div className="font-mono text-sm text-gray-300 overflow-hidden overflow-ellipsis">
        {address}
      </div>
      <button
        onClick={handleCopy}
        className="ml-2 p-2 hover:bg-zinc-800 rounded-lg transition-colors"
      >
        {copied ? (
          <CheckCheck className="w-5 h-5 text-lime-300" />
        ) : (
          <Copy className="w-5 h-5 text-gray-400" />
        )}
      </button>
    </div>
  );
}
