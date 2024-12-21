export interface PortfolioStats {
  username: string;
  totalBalance: number;
  percentageChange: number;
  timeframe: "All time" | "24h" | "7d" | "30d";
}

export interface ActionButton {
  label: string;
  icon: string;
  onClick: () => void;
}
