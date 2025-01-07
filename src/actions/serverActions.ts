import axios from "axios";

let apiUrl = `https://meme-trading-backend.onrender.com/api`;

export const getTokensListByCategory = async () => {
  try {
    let url = `${apiUrl}/tokens/tokens-by-category
`;

    let response = await axios.get(url).then((res) => res.data);

    if (response && response) {
      return response;
    } else {
      return null;
    }
  } catch (err) {
    return null;
  }
};
export const getTokenPriceHistory = async (tokenAddress: string) => {
  try {
    let url = `${apiUrl}/tokens/chart/FRhB8L7Y9Qq41qZXYLtC2nw8An1RJfLLxRF2x9RwLLMo`;
    const response = await axios.get(url).then((res) => res.data);
    return response;
  } catch (err) {
    console.error("Error fetching price history:", err);
    return null;
  }
};
