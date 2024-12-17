export interface Coin {
  id: number;
  name: string;
  symbol: string;
  price: string;
  change: number;
  image: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  icon?: React.ReactNode;
  disabled: boolean;
}
