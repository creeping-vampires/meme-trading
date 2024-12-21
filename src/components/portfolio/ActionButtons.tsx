import React from "react";
import { DollarSign, Send, ArrowDownToLine } from "lucide-react";

export function ActionButtons() {
  const actions = [
    { icon: <DollarSign className="w-6 h-6" />, label: "Deposit" },
    { icon: <Send className="w-6 h-6" />, label: "Send" },
    { icon: <ArrowDownToLine className="w-6 h-6" />, label: "Withdraw" },
  ];

  return (
    <div className="flex justify-around py-8 border-b border-gray-100">
      {actions.map(({ icon, label }) => (
        <button key={label} className="flex flex-col items-center">
          <div className="w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center mb-2">
            {icon}
          </div>
          <span className="text-sm font-medium text-gray-700">{label}</span>
        </button>
      ))}
    </div>
  );
}
