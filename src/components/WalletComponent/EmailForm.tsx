import React, { useState } from "react";
import { Mail } from "lucide-react";
import Button from "../layout/Button";

interface EmailFormProps {
  onSubmit: (email: string) => void;
  isLoading: boolean;
}

export default function EmailForm({ onSubmit, isLoading }: EmailFormProps) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <div className="mt-1 relative">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900 "
            placeholder="Enter your email"
            required
          />
          <Mail
            className="absolute right-3 top-2.5 text-neutral-400"
            size={20}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-lime-300 backdrop-blur-lg text-black py-2 px-6 rounded-2xl flex items-center justify-center hover:bg-white/20 transition-all duration-300"
      >
        <span className="text-lg font-medium">
          {isLoading ? "Sending Code..." : "Get Verification Code"}
        </span>
      </button>
    </form>
  );
}
