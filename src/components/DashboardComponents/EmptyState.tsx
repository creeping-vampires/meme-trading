import React from "react";
import { Building2 } from "lucide-react";

export function EmptyState() {
  return (
    <div className="text-center py-12">
      <div className="flex justify-center mb-4">
        <Building2 className="w-12 h-12 text-gray-300" />
      </div>
      <h3 className="text-gray-100 text-xl font-semibold mb-2">
        Make your first deposit
      </h3>
      <p className="text-gray-500 mb-6 px-8">
        Deposit cash easily with the payment method of your choice.
      </p>
      <button className="bg-lime-300 text-black px-8 py-3 rounded-full font-medium hover:bg-purple-600 transition-colors">
        Deposit
      </button>
    </div>
  );
}
