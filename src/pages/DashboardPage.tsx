import { ActionButtons } from "../components/DashboardComponents/ActionButtons";
import { EmptyState } from "../components/DashboardComponents//EmptyState";
import PortfolioBalance from "../components/DashboardComponents//PortfolioBalance";
import WalletDynamic from "../components/WalletComponent/WalletDynamic";
import { useDynamicContext, useIsLoggedIn } from "@dynamic-labs/sdk-react-core";

export default function DashboardPage() {
  const isLoggedIn = useIsLoggedIn();

  const { user, primaryWallet, handleLogOut } = useDynamicContext();

  const walletStats = {
    username: "@tahirahmad.in",
    totalBalance: 32435,
    percentageChange: 124,
    timeframe: "All time" as const,
  };

  return (
    <div>
      {!isLoggedIn && <WalletDynamic />}
      {isLoggedIn && (
        <div>
          <PortfolioBalance stats={walletStats} />
          <ActionButtons />
          <EmptyState />

          <div>
            {!!user && (
              <>
                <div className="text-gray-300">User </div>
                <div style={{ fontSize: 12 }} className="text-gray-300">
                  {primaryWallet?.address}
                </div>
                <button
                  onClick={handleLogOut}
                  className="w-32 h-10 rounded-full bg-lime-300 text-black flex items-center justify-center mt-2"
                >
                  logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
