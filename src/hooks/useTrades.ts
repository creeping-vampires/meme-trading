// hooks to run transactions and get the transaction status

import { useState } from "react";
import { Token } from "../types/token";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { ISolana, isSolanaWallet } from "@dynamic-labs/solana-core";
import { getQuote, getSwapObj } from "../utils/jupiter";
import { VersionedTransaction } from "@solana/web3.js";

const SLIPPAGE = 1;
const STATUS = {
  PENDING: "pending",
  SUCCESS: "success",
  FAILED: "failed",
};
export const useTrades = () => {
  const [txStatus, setTxStatus] = useState(null); // null | "pending" | "success" | "failed"
  const { primaryWallet, user } = useDynamicContext();

  const handleSwap = async (
    fromToken: Token,
    toToken: Token,
    amount: number
  ) => {
    console.log("primary wallet ", { primaryWallet, user });
    if (!isSolanaWallet(primaryWallet)) {
      console.log("not solana walletet");
      return;
    }

    setTxStatus(STATUS.PENDING);
    try {
      const quote = await getQuote(
        fromToken.tokenAddress,
        toToken.tokenAddress,
        amount,
        SLIPPAGE
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
      setTxStatus(STATUS.SUCCESS);

      // Implement actual swap execution here
    } catch (error) {
      console.error("Swap error:", error);
    } finally {
      setTxStatus(STATUS.FAILED);
    }
  };

  return { txStatus, handleSwap };
};
