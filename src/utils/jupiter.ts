import { Wallet } from "@dynamic-labs/sdk-react-core";
import { createJupiterApiClient, QuoteResponse } from "@jup-ag/api";

// export async function initJupiter(connection: Connection) {
//   const jupiter = await Jupiter.load({
//     connection,
//     cluster: "mainnet-beta",
//     userPublicKey: null, // Will be set when user connects wallet
//   });
//   return jupiter;
// }

const config = {};
const jupiterQuoteApi = createJupiterApiClient(config);

export async function getQuote(
  inputToken: string,
  outputToken: string,
  amount: number,
  slippage: number
) {
  try {
    const quote = await jupiterQuoteApi.quoteGet({
      inputMint: inputToken,
      outputMint: outputToken,
      amount: amount,
      slippageBps: slippage * 100,
    });

    if (!quote) {
      throw new Error("unable to quote");
    }

    return quote;
  } catch (error) {
    console.error("Error getting quote:", error);
    throw error;
  }
}

export async function getSwapObj(account: string, quote: QuoteResponse) {
  // Get serialized transaction
  const swapObj = await jupiterQuoteApi.swapPost({
    swapRequest: {
      quoteResponse: quote,
      userPublicKey: account,
      dynamicComputeUnitLimit: true,
      dynamicSlippage: {
        // This will set an optimized slippage to ensure high success rate
        maxBps: 300, // Make sure to set a reasonable cap here to prevent MEV
      },
      prioritizationFeeLamports: {
        priorityLevelWithMaxLamports: {
          maxLamports: 10000000,
          priorityLevel: "veryHigh", // If you want to land transaction fast, set this to use `veryHigh`. You will pay on average higher priority fee.
        },
      },
    },
  });
  return swapObj;
}

// export async function getQuoteAndSwap(wallet) {
// //   const wallet = new Wallet(
// //     Keypair.fromSecretKey(bs58.decode(process.env.PRIVATE_KEY || ""))
// //   );
// //   console.log("Wallet:", wallet.publicKey.toBase58());

//   const quote = await getQuote();
//   console.dir(quote, { depth: null });
//   const swapObj = await getSwapObj(wallet, quote);
//   console.dir(swapObj, { depth: null });

//   // Serialize the transaction
//   const swapTransactionBuf = Buffer.from(swapObj.swapTransaction, "base64");
//   var transaction = VersionedTransaction.deserialize(swapTransactionBuf);

//   // Sign the transaction
//   transaction.sign([wallet.payer]);
//   const signature = getSignature(transaction);

//   // We first simulate whether the transaction would be successful
//   const { value: simulatedTransactionResponse } =
//     await connection.simulateTransaction(transaction, {
//       replaceRecentBlockhash: true,
//       commitment: "processed",
//     });
//   const { err, logs } = simulatedTransactionResponse;

//   if (err) {
//     // Simulation error, we can check the logs for more details
//     // If you are getting an invalid account error, make sure that you have the input mint account to actually swap from.
//     console.error("Simulation Error:");
//     console.error({ err, logs });
//     return;
//   }

//   const serializedTransaction = Buffer.from(transaction.serialize());
//   const blockhash = transaction.message.recentBlockhash;

//   const transactionResponse = await transactionSenderAndConfirmationWaiter({
//     connection,
//     serializedTransaction,
//     blockhashWithExpiryBlockHeight: {
//       blockhash,
//       lastValidBlockHeight: swapObj.lastValidBlockHeight,
//     },
//   });

//   // If we are not getting a response back, the transaction has not confirmed.
//   if (!transactionResponse) {
//     console.error("Transaction not confirmed");
//     return;
//   }

//   if (transactionResponse.meta?.err) {
//     console.error(transactionResponse.meta?.err);
//   }

//   console.log(`https://solscan.io/tx/${signature}`);
// }
