import { useNavigationStore } from "./stores/navigationStore";
import MarketPage from "./pages/MarketPage";
import TryLuckPage from "./pages/TryLuckPage";
import DashboardPage from "./pages/DashboardPage";
import TokenDetailsPage from "./pages/TokenDetailsPage";
import DepositPage from "./pages/DepositPage";
import WithdrawPage from "./pages/WithdrawPage";
import TopBar from "./components/layout/TopBar";
import MobileNav from "./components/layout/MobileNav";
import { useEffect } from "react";
import { Telegram } from "./telegram";

export default function App() {
  const { activeTab } = useNavigationStore();

  useEffect(() => {
    if (Telegram) {
      Telegram.expand();
      Telegram.disableVerticalSwipes();
      Telegram.setHeaderColor("#000000");
      Telegram.setBackgroundColor("#000000");
      console.log("Theme Params: ", Telegram.themeParams);
    }
  }, []);

  const hideNavigation = ["tokenDetails", "deposit", "withdraw"].includes(
    activeTab
  );

  return (
    <div className="min-h-screen bg-black">
      {!hideNavigation && <TopBar />}

      <main
        className={`${
          !hideNavigation ? "pt-20 px-4 max-w-5xl mx-auto pb-24" : ""
        }`}
      >
        {activeTab === "market" && <MarketPage />}
        {activeTab === "tryluck" && <TryLuckPage />}
        {activeTab === "dashboard" && <DashboardPage />}
        {activeTab === "tokenDetails" && <TokenDetailsPage />}
        {activeTab === "deposit" && <DepositPage />}
        {activeTab === "withdraw" && <WithdrawPage />}
      </main>

      {!hideNavigation && <MobileNav />}
    </div>
  );
}
