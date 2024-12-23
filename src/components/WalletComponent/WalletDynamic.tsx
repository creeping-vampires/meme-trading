import React, { useState } from "react";
import { Wallet, Mail, FileSignature, ArrowRight } from "lucide-react";
import EmailForm from "./EmailForm";
import OTPVerification from "./OTPVerification";
// import SignMessage from "./SignMessage";
// import { signMessage } from "../../utils/wallet";
// import { PublicKey } from "@solana/web3.js";
import {
  useConnectWithOtp,
  useDynamicContext,
  useEmbeddedWallet,
} from "@dynamic-labs/sdk-react-core";
import TradePage from "../trading/TradePage";

export default function WalletDynamic() {
  const { user, primaryWallet, handleLogOut } = useDynamicContext();

  const { connectWithEmail, verifyOneTimePassword } = useConnectWithOtp();

  const [step, setStep] = useState<"email" | "otp" | "wallet">("email");
  const [isLoading, setIsLoading] = useState(false);
  // const [keypair, setKeypair] = useState<{
  //   publicKey: PublicKey | null;
  //   secretKey: Uint8Array | null;
  // }>({
  //   publicKey: null,
  //   secretKey: null,
  // });

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

  // const handleSignMessage = async (message: string): Promise<string> => {
  //   // if (!keypair.secretKey) throw new Error("No keypair available");
  //   return ""  //signMessage(message, keypair.secretKey);
  // };

  return (
    <div className="max-w-md mx-auto">
      <div className="relative flex flex-col justify-start p-4">
        <div className="space-y-2 mb-12">
          <div className="flex justify-center">
            <img
              src="https://cdn3d.iconscout.com/3d/premium/thumb/bitcoin-exchange-3d-icon-download-in-png-blend-fbx-gltf-file-formats--logo-to-ethereum-crypto-transfer-trading-currency-pack-finance-icons-8884928.png"
              alt="Create wallet"
              className="w-36 h-36"
            />
          </div>

          <h1 className="text-2xl font-bold text-white text-center">
            SignUp/Login
          </h1>
          <p className="text-gray-400 text-lg text-center">
            Start investing today and your future will change for the better.
          </p>
        </div>

        <div className="space-y-6">
          {step === "email" && (
            <>
              <EmailForm onSubmit={handleEmailSubmit} isLoading={isLoading} />
            </>
          )}

          {step === "otp" && (
            <>
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
    </div>
  );
}
