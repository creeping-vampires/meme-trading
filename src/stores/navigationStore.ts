import { create } from "zustand";
import { Token } from "../types/token";

type Tab =
  | "market"
  | "tryluck"
  | "dashboard"
  | "tokenDetails"
  | "deposit"
  | "withdraw";

interface NavigationState {
  activeTab: Tab;
  selectedToken: Token | null;
  setActiveTab: (tab: Tab) => void;
  setSelectedToken: (token: Token | null) => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
  activeTab: "market",
  selectedToken: null,
  setActiveTab: (tab) => set({ activeTab: tab }),
  setSelectedToken: (token) => set({ selectedToken: token }),
}));
