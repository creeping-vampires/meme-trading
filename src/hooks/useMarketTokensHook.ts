import { useEffect, useState } from "react";
import { getTokensListByCategory } from "../actions/serverActions";

const useMarketTokensHook = (hookInit = false) => {
  const [loaded, setLoaded] = useState(0);
  const [tokensData, setTokensData] = useState(null);
  const [trendingData, setTrendingData] = useState(null);
  const [muradData, setMuradData] = useState(null);

  useEffect(() => {
    async function asyncFn() {
      if (loaded === 0) {
        setLoaded(loaded + 1);

        let res = await getTokensListByCategory();
        setTrendingData(res.Trending);
        setMuradData(res.Murad);
        setTokensData(res);
      }
    }
    asyncFn();
  }, [loaded]);
};

export default useMarketTokensHook;
