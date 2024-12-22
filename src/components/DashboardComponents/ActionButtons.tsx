import React from "react";
import { DollarSign, Send, ArrowDownToLine } from "lucide-react";

export function ActionButtons() {
  const actions = [
    { icon: <DollarSign className="w-6 h-6" />, label: "Deposit" },
    { icon: <Send className="w-6 h-6" />, label: "Send" },
    { icon: <ArrowDownToLine className="w-6 h-6" />, label: "Withdraw" },
  ];

  return (
    <div className="flex justify-around py-4 border-b border-gray-800">
      {actions.map(({ icon, label }) => (
        <button key={label} className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-lime-300 text-black flex items-center justify-center mb-2">
            {icon}
          </div>
          <span className="text-sm font-medium text-gray-50">{label}</span>
        </button>
      ))}
    </div>
  );
}
