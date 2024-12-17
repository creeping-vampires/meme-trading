import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { SolanaWalletConnectors } from "@dynamic-labs/solana";
import { DynamicContextProvider } from "@dynamic-labs/sdk-react-core";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DynamicContextProvider
      settings={{
        // Find your environment id at https://app.dynamic.xyz/dashboard/developer
        environmentId: "24e946bf-1be3-4617-9e9d-bd32a6714a21",
        walletConnectors: [SolanaWalletConnectors],
      }}
    >
      <App />
    </DynamicContextProvider>
  </StrictMode>
);
