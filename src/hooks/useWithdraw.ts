// hooks to run transactions and get the transaction status

import { useState } from "react";
import { Token } from "../types/token";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
import { isSolanaWallet } from "@dynamic-labs/solana-core";
import {
  Connection,
  PublicKey,
  SystemProgram,
  TransactionMessage,
  VersionedTransaction,
} from "@solana/web3.js";

const STATUS = {
  PENDING: "pending",
  SUCCESS: "success",
  FAILED: "failed",
};
export const useTrades = () => {
  const [txStatus, setTxStatus] = useState(null); // null | "pending" | "success" | "failed"
  const { primaryWallet, user } = useDynamicContext();

  const handleWithdraw = async (
    token: Token,
    amount: number,
    walletAddress: string
  ) => {
    console.log("primary wallet ", { primaryWallet, user });
    if (!isSolanaWallet(primaryWallet)) {
      console.log("not solana walletet");
      return;
    }

    setTxStatus(STATUS.PENDING);
    try {
      // transfer transaction

      if (!primaryWallet || !isSolanaWallet(primaryWallet)) {
        return;
      }

      const connection: Connection = await primaryWallet.getConnection();

      const fromKey = new PublicKey(primaryWallet.address);
      const toKey = new PublicKey(walletAddress);
      const amountInLamports = Number(amount) * 1000000000;

      const instructions = [
        SystemProgram.transfer({
          fromPubkey: fromKey,
          lamports: amountInLamports,
          toPubkey: toKey,
        }),
      ];

      const blockhash = await connection.getLatestBlockhash();

      // create v0 compatible message
      const messageV0 = new TransactionMessage({
        instructions,
        payerKey: fromKey,
        recentBlockhash: blockhash.blockhash,
      }).compileToV0Message();

      const transferTransaction = new VersionedTransaction(messageV0);

      const signer = await primaryWallet.getSigner();

      const trx = await signer.signAndSendTransaction(transferTransaction);

      console.log("trx ", trx);

      setTxStatus(STATUS.SUCCESS);
    } catch (error) {
      console.error("Swap error:", error);
    } finally {
      setTxStatus(STATUS.FAILED);
    }
  };

  return { txStatus, handleWithdraw };
};
