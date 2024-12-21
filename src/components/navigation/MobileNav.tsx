import React from "react";
import { Home, ArrowLeftRight, Wallet } from "lucide-react";
import { useNavigationStore } from "../../stores/navigationStore";

export default function MobileNav() {
  const { activeTab, setActiveTab } = useNavigationStore();

  const tabs = [
    { id: "home", icon: <Home />, label: "Home" },
    { id: "swap", icon: <ArrowLeftRight />, label: "Swap" },
    { id: "wallet", icon: <Wallet />, label: "Wallet" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-neutral-100 md:hidden">
      <div className="flex justify-around p-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center ${
              activeTab === tab.id ? "text-neutral-900" : "text-neutral-600"
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
