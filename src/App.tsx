import { useNavigationStore } from "./stores/navigationStore";
import MarketPage from "./pages/MarketPage";
import TryLuckPage from "./pages/TryLuckPage";
import DashboardPage from "./pages/DashboardPage";
import TopBar from "./components/layout/TopBar";
import MobileNav from "./components/layout/MobileNav";
import { useEffect } from "react";
import { Telegram } from "./telegram";

function App() {
  const { activeTab } = useNavigationStore();

  useEffect(() => {
    if (Telegram) {
      // Initialize Telegram WebApp
      Telegram.expand();
      Telegram.disableVerticalSwipes();
      Telegram.setHeaderColor("#000000");
      Telegram.setBackgroundColor("#000000");
      console.log("Theme Params: ", Telegram.themeParams);
    }
  }, []);

  return (
    <div className="min-h-screen bg-black ">
      <TopBar />

      <main className="pt-20 px-4 max-w-5xl mx-auto pb-24">
        {activeTab === "market" && <MarketPage />}
        {activeTab === "tryluck" && <TryLuckPage />}
        {activeTab === "dashboard" && <DashboardPage />}
      </main>

      <MobileNav />
    </div>
  );
}

export default App;
