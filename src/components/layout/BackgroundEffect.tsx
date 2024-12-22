import React from "react";

export function BackgroundEffect() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-pink-500/25 rounded-full blur-3xl" />
    </div>
  );
}
