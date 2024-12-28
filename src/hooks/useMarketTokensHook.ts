import { useEffect, useState } from "react";
import { getTokensListByCategory } from "../actions/serverActions";
import { Token } from "../types/token";

interface TokenCategories {
  Trending?: Token[];
  Murad?: Token[];
  AI?: Token[];
}

const useMarketTokensHook = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [tokensData, setTokensData] = useState<TokenCategories | null>(null);

  useEffect(() => {
    const fetchTokens = async () => {
      try {
        const response = await getTokensListByCategory();
        setTokensData(response);
      } catch (err) {
        setError("Failed to fetch tokens");
        console.error("Error fetching tokens:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTokens();
  }, []);

  return { tokensData, loading, error };
};

export default useMarketTokensHook;
