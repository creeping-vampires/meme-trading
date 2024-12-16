import { PublicKey } from '@solana/web3.js';

export interface WalletState {
  publicKey: PublicKey | null;
  email: string;
  isVerified: boolean;
  isConnecting: boolean;
  error: string | null;
}

export interface OTPFormData {
  email: string;
  code: string;
}

export interface SignMessageData {
  message: string;
  signature: string;
}