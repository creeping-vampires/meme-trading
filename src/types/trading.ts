export interface Token {
  symbol: string;
  name: string;
  address: string;
  decimals: number;
  logoURI?: string;
}

export interface SwapState {
  inputToken?: Token;
  outputToken?: Token;
  inputAmount: string;
  outputAmount: string;
  slippage: number;
  isLoading: boolean;
  error?: string;
}

export interface QuoteResponse {
  inputAmount: string;
  outputAmount: string;
  executionPrice: string;
  priceImpact: string;
  fee: string;
}
