import React from "react";
import {
  Home,
  ArrowLeftRight,
  Wallet,
  Flame,
  Loader,
  ShipWheel,
  Dices,
} from "lucide-react";
import { useNavigationStore } from "../../stores/navigationStore";

export default function MobileNav() {
  const { activeTab, setActiveTab } = useNavigationStore();

  const tabs = [
    { id: "market", icon: <Flame />, label: "Market" },
    { id: "tryluck", icon: <Dices />, label: "Try luck" },
    { id: "dashboard", icon: <Wallet />, label: "Account" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-900 md:hidden">
      <div className="flex justify-around p-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center ${
              activeTab === tab.id ? "text-lime-300" : "text-neutral-200"
            }`}
          >
            <span className="w-6 h-6">{tab.icon}</span>
            <span className="text-xs mt-1">{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
