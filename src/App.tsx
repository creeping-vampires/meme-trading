import React from "react";
import Header from "./components/layout/Header";
import MobileNav from "./components/navigation/MobileNav";
import SwapForm from "./components/trading/SwapForm";
import WalletTab from "./components/wallet/WalletTab";
import { useNavigationStore } from "./stores/navigationStore";
import TokenList from "./components/home/TokenList";
import TradePage from "./components/trading/TradePage";
import PortfolioPage from "./components/layout/PortfolioPage";
import TokenBuyPage from "./pages/TokenBuyPage";

function App() {
  const { activeTab } = useNavigationStore();

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />

      <main className="pt-20 px-4 max-w-5xl mx-auto pb-24">
        {activeTab === "home" && <TokenList />}
        {activeTab === "swap" && (
          <div className="max-w-lg mx-auto">
            {/* <TradePage /> */}
            <TokenBuyPage />
          </div>
        )}
        {activeTab === "wallet" && <PortfolioPage />}
      </main>

      <MobileNav />
    </div>
  );
}

export default App;
