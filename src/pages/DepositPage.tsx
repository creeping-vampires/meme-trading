import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigationStore } from "../stores/navigationStore";
import QRCode from "../components/wallet/QRCode";
import AddressDisplay from "../components/wallet/AddressDisplay";

export default function DepositPage() {
  const { setActiveTab } = useNavigationStore();
  const walletAddress = "8xyt9Rwa4KfQj7sei4qKoMTGMjF4GWEE8qpqUhvLvuKn"; // Example address

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="flex items-center p-4">
        <button
          onClick={() => setActiveTab("dashboard")}
          className="text-gray-300 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="ml-4 text-xl font-bold">Deposit</h1>
      </header>

      <div className="px-4 py-6 space-y-6">
        <div className="text-center mb-8">
          <p className="text-gray-400 mb-2">
            Scan QR code or copy address to deposit
          </p>
        </div>

        <QRCode value={walletAddress} />

        <div className="space-y-2">
          <label className="text-sm text-gray-400">Wallet Address</label>
          <AddressDisplay address={walletAddress} />
        </div>

        <div className="bg-zinc-900 rounded-lg p-4 mt-6">
          <h3 className="text-lime-300 font-medium mb-2">Important</h3>
          <ul className="text-sm text-gray-400 space-y-2">
            <li>• Only send SOL to this address</li>
            <li>• Minimum deposit: 0.01 SOL</li>
            <li>• Deposits will be credited after 32 confirmations</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
