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
