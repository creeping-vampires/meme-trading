import { Keypair } from '@solana/web3.js';
import * as nacl from 'tweetnacl';
import bs58 from 'bs58';

export const generateKeypair = (): Keypair => {
  return Keypair.generate();
};

export const signMessage = (message: string, secretKey: Uint8Array): string => {
  const messageBytes = new TextEncoder().encode(message);
  const signature = nacl.sign.detached(messageBytes, secretKey);
  return bs58.encode(signature);
};

export const verifySignature = (
  message: string,
  signature: string,
  publicKey: Uint8Array
): boolean => {
  const messageBytes = new TextEncoder().encode(message);
  const signatureBytes = bs58.decode(signature);
  return nacl.sign.detached.verify(messageBytes, signatureBytes, publicKey);
};