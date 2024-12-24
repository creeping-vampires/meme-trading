import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigationStore } from "../stores/navigationStore";

export default function WithdrawPage() {
  const { setActiveTab } = useNavigationStore();
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle withdrawal logic here
    console.log("Withdraw:", { address, amount });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="flex items-center p-4">
        <button
          onClick={() => setActiveTab("dashboard")}
          className="text-gray-300 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="ml-4 text-xl font-bold">Withdraw</h1>
      </header>

      <form onSubmit={handleSubmit} className="px-4 py-6 space-y-6">
        <div className="space-y-2">
          <label htmlFor="address" className="text-sm text-gray-400">
            Recipient Address
          </label>
          <input
            id="address"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter SOL address"
            className="w-full bg-zinc-900 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-300"
            required
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="amount" className="text-sm text-gray-400">
            Amount (SOL)
          </label>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.0"
            step="0.000001"
            min="0.01"
            className="w-full bg-zinc-900 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-300"
            required
          />
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Available: 1.45 SOL</span>
            <button
              type="button"
              onClick={() => setAmount("1.45")}
              className="text-lime-300 hover:text-lime-400"
            >
              MAX
            </button>
          </div>
        </div>

        <div className="bg-zinc-900 rounded-lg p-4">
          <h3 className="text-lime-300 font-medium mb-2">Withdrawal Info</h3>
          <div className="space-y-2 text-sm text-gray-400">
            <div className="flex justify-between">
              <span>Network Fee</span>
              <span>0.000005 SOL</span>
            </div>
            <div className="flex justify-between">
              <span>Minimum Withdrawal</span>
              <span>0.01 SOL</span>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-lime-300 text-black py-4 rounded-full font-semibold hover:bg-lime-400 transition-colors"
        >
          Withdraw
        </button>
      </form>
    </div>
  );
}
