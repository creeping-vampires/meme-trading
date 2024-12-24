import React from "react";
import { DollarSign, Send, ArrowDownToLine } from "lucide-react";
import { useNavigationStore } from "../../stores/navigationStore";

export function ActionButtons() {
  const { setActiveTab } = useNavigationStore();

  const actions = [
    {
      icon: <DollarSign className="w-6 h-6" />,
      label: "Deposit",
      onClick: () => setActiveTab("deposit"),
    },
    {
      icon: <Send className="w-6 h-6" />,
      label: "Send",
      onClick: () => console.log("Send clicked"),
    },
    {
      icon: <ArrowDownToLine className="w-6 h-6" />,
      label: "Withdraw",
      onClick: () => setActiveTab("withdraw"),
    },
  ];

  return (
    <div className="flex justify-around py-4 border-b border-gray-800">
      {actions.map(({ icon, label, onClick }) => (
        <button
          key={label}
          className="flex flex-col items-center"
          onClick={onClick}
        >
          <div className="w-12 h-12 rounded-full bg-lime-300 text-black flex items-center justify-center mb-2 hover:bg-lime-400 transition-colors">
            {icon}
          </div>
          <span className="text-sm font-medium text-gray-50">{label}</span>
        </button>
      ))}
    </div>
  );
}
