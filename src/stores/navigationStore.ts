import { create } from "zustand";

type Tab = "home" | "swap" | "wallet";

interface NavigationState {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
  activeTab: "home",
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
