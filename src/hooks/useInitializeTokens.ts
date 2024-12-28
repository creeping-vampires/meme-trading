import { useEffect } from "react";
import { getTokensListByCategory } from "../actions/serverActions";
import { useTokensStore } from "../stores/tokensStore";
import { TokenCategories, Token } from "../types/token";

interface RawTokenData {
  [key: string]: {
    baseToken: {
      symbol: string;
      name: string;
      address: string;
    };
    info: {
      imageUrl: string;
    };
    priceUsd: number;
    priceChange: {
      h24: number;
    };
    marketCap: number;
    [key: string]: any;
  }[];
}

export const useInitializeTokens = () => {
  const { setTokens, setError } = useTokensStore();

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const response = (await getTokensListByCategory()) as RawTokenData;

        // Transform the data to only include required fields
        const cleanedData: TokenCategories = Object.entries(response).reduce(
          (acc, [category, tokens]) => ({
            ...acc,
            [category]: tokens.map(
              (token): Token => ({
                symbol: token.baseToken.symbol,
                name: token.baseToken.name,
                iconUrl: token.info.imageUrl,
                tokenAddress: token.baseToken.address,
                priceInUsd: token.priceUsd,
                priceChange: token.priceChange.h24, // Fixed incorrect semicolon
                marketCap: token.marketCap,
              })
            ),
          }),
          {}
        );

        setTokens(cleanedData);
      } catch (err) {
        setError("Failed to fetch tokens");
        console.error("Error fetching tokens:", err);
      }
    };

    fetchTokens();
  }, [setTokens, setError]);
};
