import { create } from "zustand";
import { TokensState } from "../types/token";

export const useTokensStore = create<TokensState>((set) => ({
  data: null,
  loading: true,
  error: null,
  setTokens: (data: TokensState["data"]) => set({ data, loading: false }),
  setError: (error: string) => set({ error, loading: false }),
  setLoading: (loading: boolean) => set({ loading }),
}));
