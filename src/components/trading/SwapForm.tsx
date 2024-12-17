import React, { useState } from "react";
import { ArrowDownUp } from "lucide-react";
import { Token, SwapState } from "../../types/trading";
import TokenSelect from "./TokenSelect";
import TokenModal from "./TokenModal";
import Button from "../ui/Button";

interface SwapFormProps {
  tokens: Token[];
  onSwap: (state: SwapState) => Promise<void>;
  isLoading: boolean;
}

export default function SwapForm({ tokens, onSwap, isLoading }: SwapFormProps) {
  const [state, setState] = useState<SwapState>({
    inputAmount: "",
    outputAmount: "",
    slippage: 1,
    isLoading: false,
  });
  const [showTokenModal, setShowTokenModal] = useState<
    "input" | "output" | null
  >(null);

  const handleTokenSelect = (token: Token) => {
    if (showTokenModal === "input") {
      setState((prev) => ({ ...prev, inputToken: token }));
    } else {
      setState((prev) => ({ ...prev, outputToken: token }));
    }
    setShowTokenModal(null);
  };

  const handleSwitch = () => {
    setState((prev) => ({
      ...prev,
      inputToken: prev.outputToken,
      outputToken: prev.inputToken,
      inputAmount: prev.outputAmount,
      outputAmount: prev.inputAmount,
    }));
  };

  return (
    <div className="bg-white border border-neutral-100 rounded-xl p-4 shadow-sm">
      <div className="space-y-4">
        {/* Input Amount */}
        <div className="space-y-2">
          <div className="flex justify-between">
            <label className="text-sm text-neutral-600">You Pay</label>
            <TokenSelect
              token={state.inputToken}
              onSelect={() => setShowTokenModal("input")}
              label="Select token"
            />
          </div>
          <input
            type="number"
            value={state.inputAmount}
            onChange={(e) =>
              setState((prev) => ({ ...prev, inputAmount: e.target.value }))
            }
            placeholder="0.00"
            className="w-full text-2xl bg-transparent focus:outline-none"
          />
        </div>

        {/* Switch Button */}
        <div className="flex justify-center">
          <button
            onClick={handleSwitch}
            className="p-2 rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
          >
            <ArrowDownUp size={20} />
          </button>
        </div>

        {/* Output Amount */}
        <div className="space-y-2">
          <div className="flex justify-between">
            <label className="text-sm text-neutral-600">You Receive</label>
            <TokenSelect
              token={state.outputToken}
              onSelect={() => setShowTokenModal("output")}
              label="Select token"
            />
          </div>
          <input
            type="number"
            value={state.outputAmount}
            readOnly
            placeholder="0.00"
            className="w-full text-2xl bg-transparent"
          />
        </div>

        {/* Slippage Settings */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-neutral-600">Slippage Tolerance</span>
          <span>{state.slippage}%</span>
        </div>

        {/* Swap Button */}
        <Button
          onClick={() => onSwap(state)}
          disabled={
            isLoading ||
            !state.inputToken ||
            !state.outputToken ||
            !state.inputAmount
          }
        >
          {isLoading ? "Loading..." : "Swap"}
        </Button>
      </div>

      {/* Token Selection Modal */}
      {showTokenModal && (
        <TokenModal
          tokens={tokens}
          onSelect={handleTokenSelect}
          onClose={() => setShowTokenModal(null)}
        />
      )}
    </div>
  );
}
