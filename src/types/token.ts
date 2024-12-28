export interface Token {
  symbol: string;
  name: string;
  iconUrl: string;
  tokenAddress: string;
  priceInUsd: number;
  priceChange: number;
  marketCap: number;
}

export interface TokenCategories {
  Trending?: Token[];
  Murad?: Token[];
  AI?: Token[];
}

export interface TokensState {
  data: TokenCategories | null;
  loading: boolean;
  error: string | null;
  setTokens: any;
  setError: any;
  setLoading: any;
}
