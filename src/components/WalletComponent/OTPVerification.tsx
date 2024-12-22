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
        <label
          htmlFor="otp"
          className="block text-sm font-medium text-neutral-700"
        >
          Verification Code
        </label>
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
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Verifying..." : "Verify Code"}
        </Button>
        <Button
          type="button"
          variant="secondary"
          onClick={onResend}
          disabled={isLoading}
        >
          Resend Code
        </Button>
      </div>
    </form>
  );
}
