import React, { useState } from "react";
import { KeyRound } from "lucide-react";
import Button from "../layout/Button";

interface OTPVerificationProps {
  onVerify: (code: string) => void;
  onResend: () => void;
  isLoading: boolean;
}

export default function OTPVerification({
  onVerify,
  onResend,
  isLoading,
}: OTPVerificationProps) {
  const [code, setCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onVerify(code);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <div className="mt-1 relative">
          <input
            type="text"
            id="otp"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="block w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900"
            placeholder="Enter 6-digit code"
            maxLength={6}
            required
          />
          <KeyRound
            className="absolute right-3 top-2.5 text-neutral-400"
            size={20}
          />
        </div>
      </div>
      <div className="flex gap-4">
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-lime-300 backdrop-blur-lg text-black py-1 px-6 rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300"
        >
          <span className="text-lg font-medium">
            {isLoading ? "Verifying..." : "Verify Code"}
          </span>
        </button>
      </div>
      <div>
        <button
          type="button"
          onClick={onResend}
          disabled={isLoading}
          className="w-full  backdrop-blur-lg  text-neutral-100 px-3 rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300"
        >
          Did not received code?{" "}
          <span className="text-s font-small pl-1 text-lime-300">
            {" "}
            Send again
          </span>
        </button>
      </div>
    </form>
  );
}
