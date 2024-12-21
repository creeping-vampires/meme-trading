import React, { useState } from "react";
import SwapForm from "./SwapForm";
import { Token, SwapState } from "../../types/trading";
import { getQuote, getSwapObj } from "../../utils/jupiter";
import { useDynamicContext, useIsLoggedIn } from "@dynamic-labs/sdk-react-core";
import { ISolana, isSolanaWallet } from "@dynamic-labs/solana-core";
import { VersionedTransaction } from "@solana/web3.js";
import FundingOption from "../funding/FundingOption";

// Example tokens - in production, fetch from Jupiter API
const EXAMPLE_TOKENS: Token[] = [
  {
    symbol: "SOL",
    name: "Solana",
    address: "So11111111111111111111111111111111111111112",
    decimals: 9,
    logoURI:
      "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png",
  },
  {
    symbol: "USDC",
    name: "USD Coin",
    address: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
    decimals: 6,
    logoURI:
      "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png",
  },
];

export default function TradePage() {
  const [isLoading, setIsLoading] = useState(false);
  const isLoggedIn = useIsLoggedIn();

  const { primaryWallet, user } = useDynamicContext();

  // const { isSmartWallet, getEOAWallet, getSmartWallet } = useSmartWallets();

  console.log("is logged in ", isLoggedIn);
  console.log("user ", user);
  console.log("primaryWallet ", primaryWallet);
  const handleSwap = async (state: SwapState) => {
    // if (!jupiter || !state.inputToken || !state.outputToken) return;

    console.log("primary wallet ", { primaryWallet, user });
    if (!isSolanaWallet(primaryWallet)) {
      console.log("not solana walletet");
      return;
    }

    // const connection = await primaryWallet.getConnection();

    setIsLoading(true);
    try {
      const quote = await getQuote(
        state.inputToken.address,
        state.outputToken.address,
        parseFloat(state.inputAmount),
        state.slippage
      );
      console.log("Quote:", quote);

      const swapObj = await getSwapObj(primaryWallet.address, quote);

      console.log("swap obj ", swapObj);

      const signer: ISolana = await primaryWallet.getSigner();

      // Serialize the transaction
      const swapTransactionBuf = Buffer.from(swapObj.swapTransaction, "base64");
      const transaction = VersionedTransaction.deserialize(swapTransactionBuf);

      const trx = await signer.signAndSendTransaction(transaction);

      console.log("trx ", trx);

      // Implement actual swap execution here
    } catch (error) {
      console.error("Swap error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Swap Tokens</h1>

      <SwapForm
        tokens={EXAMPLE_TOKENS}
        onSwap={handleSwap}
        isLoading={isLoading}
      />
    </div>
  );
}
