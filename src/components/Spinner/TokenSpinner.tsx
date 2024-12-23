import React, { useState, useCallback } from "react";
import { tokens } from "../../data/tokens";
import { Token } from "../../types/token";

export function TokenSpinner() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedToken, setSelectedToken] = useState<Token | null>(null);
  const [spinDegrees, setSpinDegrees] = useState(0);

  const handleSpin = useCallback(() => {
    if (isSpinning) return;

    setIsSpinning(true);
    setSelectedToken(null);

    // Random number of full rotations (3-5) plus random ending position
    const rotations = (Math.floor(Math.random() * 3) + 3) * 360;
    const finalPosition = Math.floor(Math.random() * 360);
    setSpinDegrees(rotations + finalPosition);

    // Select random token after animation
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * tokens.length);
      setSelectedToken(tokens[randomIndex]);
      setIsSpinning(false);
    }, 4000);
  }, [isSpinning]);

  return (
    <div className="flex flex-col items-center ">
      <div className="relative w-64 h-64 mb-12">
        <div
          className={`absolute inset-0 rounded-full border-4 border-purple-500/30 
            ${
              isSpinning
                ? "transition-transform duration-[4000ms] ease-out"
                : "transition-none"
            }`}
          style={{ transform: `rotate(${spinDegrees}deg)` }}
        >
          {tokens.map((token, index) => {
            const angle = (360 / tokens.length) * index;
            return (
              <div
                key={token.symbol}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `rotate(${angle}deg) translateY(-120px) rotate(-${angle}deg)`,
                }}
              >
                <img
                  src={token.iconUrl}
                  alt={token.name}
                  className="w-10 h-10 rounded-full"
                />
              </div>
            );
          })}
        </div>
      </div>

      {selectedToken && (
        <div className="text-center">
          <h3 className="text-xl font-bold text-white mb-1">
            {selectedToken.name}
          </h3>
          <p className="text-gray-400">${selectedToken.price.toFixed(6)}</p>
        </div>
      )}

      <button
        onClick={handleSpin}
        disabled={isSpinning}
        className={`px-8 py-2 rounded-full font-semibold text-white 
          ${
            isSpinning
              ? "bg-gray-600 cursor-not-allowed"
              : "bg-purple-600 hover:bg-purple-700 transition-colors"
          }`}
      >
        {isSpinning ? "Spinning..." : "Spin"}
      </button>
    </div>
  );
}
