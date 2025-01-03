import { ShipWheel } from "lucide-react";
import { SpinnerPage } from "./SpinnerPage";

export default function TryLuckPage() {
  return (
    <div>
      <div className="flex justify-center mb-2">
        <ShipWheel className="font-bold text-center text-lime-400" />
        <div className="font-bold text-center text-lime-400">
          Try your luck{" "}
        </div>
      </div>
      <SpinnerPage />
    </div>
  );
}
