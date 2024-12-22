import React from "react";
import Button from "../layout/Button";

interface FundingOptionProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  actionText: string;
}

export default function FundingOption({
  title,
  description,
  icon,
  actionText,
}: FundingOptionProps) {
  return (
    <div className="bg-white border border-neutral-100 rounded-lg p-4">
      <div className="flex items-center space-x-3 mb-4">
        <div className="p-2 bg-neutral-50 rounded-lg">{icon}</div>
        <h3 className="font-medium">{title}</h3>
      </div>
      <p className="text-neutral-600 text-sm mb-4">{description}</p>
      <Button disabled={false}>{actionText}</Button>
    </div>
  );
}
