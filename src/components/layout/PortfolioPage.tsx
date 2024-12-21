import React from "react";

import { ActionButtons } from "../portfolio/ActionButtons";
import { EmptyState } from "../portfolio/EmptyState";
import PortfolioBalance from "../portfolio/PortfolioBalance";
import WalletTab from "../wallet/WalletTab";
import { useDynamicContext, useIsLoggedIn } from "@dynamic-labs/sdk-react-core";

export default function PortfolioPage() {
  const isLoggedIn = useIsLoggedIn();

  const { user, primaryWallet, handleLogOut } = useDynamicContext();

  const walletStats = {
    username: "@tahirahmad.in",
    totalBalance: 32435,
    percentageChange: 14,
    timeframe: "All time" as const,
  };

  return (
    <div className="min-h-screen bg-white">
      {!isLoggedIn && <WalletTab />}
      {isLoggedIn && (
        <div>
          <PortfolioBalance stats={walletStats} />
          <ActionButtons />
          <EmptyState />

          <div>
            {!!user && (
              <>
                <div>User </div>
                <div style={{ fontSize: 12 }}>{primaryWallet?.address}</div>
                <button
                  onClick={handleLogOut}
                  className="w-32 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center mt-2"
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
