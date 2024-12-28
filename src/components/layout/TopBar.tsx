import React from "react";
import { Eclipse, Grid, Moon, Pyramid, Wallet2 } from "lucide-react";

export default function TopBar() {
  return (
    <header className="fixed top-0 left-0 right-0 p-4 z-50 bg-black">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Pyramid color="white" />
          <span className="font-bold text-xl text-neutral-50">MemeShot</span>
        </div>
        <Moon color="white" />
      </div>
    </header>
  );
}
