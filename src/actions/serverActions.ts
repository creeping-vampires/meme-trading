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
