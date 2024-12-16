import React, { useState } from "react";
import { Wallet, Mail, FileSignature } from "lucide-react";
import EmailForm from "./EmailForm";
import OTPVerification from "./OTPVerification";
import SignMessage from "./SignMessage";
import { generateKeypair, signMessage } from "../../utils/wallet";
import { PublicKey } from "@solana/web3.js";
import {
  useConnectWithOtp,
  useDynamicContext,
} from "@dynamic-labs/sdk-react-core";

export default function WalletTab() {
  const { user } = useDynamicContext();

  const { connectWithEmail, verifyOneTimePassword } = useConnectWithOtp();

  const [step, setStep] = useState<"email" | "otp" | "wallet">("email");
  const [isLoading, setIsLoading] = useState(false);
  const [keypair, setKeypair] = useState<{
    publicKey: PublicKey | null;
    secretKey: Uint8Array | null;
  }>({
    publicKey: null,
    secretKey: null,
  });

  const handleEmailSubmit = async (email: string) => {
    setIsLoading(true);
    try {
      // Simulate API call to send OTP
      await connectWithEmail(email);
      setStep("otp");
    } catch (error) {
      console.error("Error sending OTP:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOTPVerify = async (code: string) => {
    setIsLoading(true);
    try {
      // Simulate API call to verify OTP
      await verifyOneTimePassword(code);

      setStep("wallet");
    } catch (error) {
      console.error("Error verifying OTP:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignMessage = async (message: string): Promise<string> => {
    if (!keypair.secretKey) throw new Error("No keypair available");
    return signMessage(message, keypair.secretKey);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-sm border border-neutral-100">
      <div className="space-y-6">
        {step === "email" && (
          <>
            <div className="flex items-center space-x-2 mb-6">
              <Mail className="text-neutral-900" />
              <h2 className="text-xl font-medium">Create Wallet</h2>
            </div>
            <EmailForm onSubmit={handleEmailSubmit} isLoading={isLoading} />
          </>
        )}

        {step === "otp" && (
          <>
            <div className="flex items-center space-x-2 mb-6">
              <Wallet className="text-neutral-900" />
              <h2 className="text-xl font-medium">Verify Email</h2>
            </div>
            <OTPVerification
              onVerify={handleOTPVerify}
              onResend={() => handleEmailSubmit("")}
              isLoading={isLoading}
            />
          </>
        )}

        {step === "wallet" && keypair.publicKey && (
          <>
            <div className="flex items-center space-x-2 mb-6">
              <FileSignature className="text-neutral-900" />
              <h2 className="text-xl font-medium">Your Wallet</h2>
            </div>
            <div className="mb-6">
              <h3 className="text-sm font-medium text-neutral-700 mb-2">
                Public Key
              </h3>
              <p className="text-xs text-neutral-600 break-all font-mono bg-neutral-50 p-3 rounded">
                {keypair.publicKey.toBase58()}
              </p>
            </div>
            <SignMessage onSign={handleSignMessage} isLoading={isLoading} />
          </>
        )}

        <div>
          {!!user && (
            <>
              <div>Authenticated user </div>
              <div>{JSON.stringify(user, null, 2)}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
