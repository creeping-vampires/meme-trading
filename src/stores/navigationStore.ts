import { create } from "zustand";

type Tab = "market" | "tryluck" | "dashboard";

interface NavigationState {
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
  activeTab: "market",
  setActiveTab: (tab) => set({ activeTab: tab }),
}));
