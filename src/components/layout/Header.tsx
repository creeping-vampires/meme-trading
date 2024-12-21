import React from "react";
import { Wallet2 } from "lucide-react";
import Button from "../ui/Button";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-neutral-100 p-4 z-50">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-xl text-neutral-900">MemeShot</span>
        </div>
        .BETA
      </div>
    </header>
  );
}
