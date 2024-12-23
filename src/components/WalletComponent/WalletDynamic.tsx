import React, { useState } from "react";
import { Wallet } from "lucide-react";
import EmailForm from "./EmailForm";
import OTPVerification from "./OTPVerification";
import {
  useConnectWithOtp,
  useDynamicContext,
  useEmbeddedWallet,
} from "@dynamic-labs/sdk-react-core";

export default function WalletDynamic() {
  const { user, primaryWallet, handleLogOut } = useDynamicContext();

  const { connectWithEmail, verifyOneTimePassword } = useConnectWithOtp();

  const [step, setStep] = useState<"email" | "otp" | "wallet">("email");
  const [isLoading, setIsLoading] = useState(false);

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
      await createEmbeddedWallet();

      setStep("wallet");
    } catch (error) {
      console.error("Error verifying OTP:", error);
    } finally {
      setIsLoading(false);
    }
  };
  const { createEmbeddedWallet } = useEmbeddedWallet();

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-sm border border-neutral-100">
      <div className="space-y-6">
        {step === "email" && (
          <>
            <div className="flex items-center space-x-2 mb-6">
              <Wallet className="text-neutral-900" />
              <h2 className="text-xl font-medium">Create Wallet</h2>
            </div>
            <EmailForm onSubmit={handleEmailSubmit} isLoading={isLoading} />
          </>
        )}

        {step === "otp" && (
          <>
            <div className="flex items-center  space-x-2 mb-6">
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

        <div>
          {!!user && (
            <>
              <div>Authenticated user </div>
              <div>{primaryWallet?.address}</div>
              <button onClick={handleLogOut}>logout</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
