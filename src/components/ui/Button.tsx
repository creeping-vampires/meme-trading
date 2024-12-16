import React from 'react';
import { ButtonProps } from '../../types';

export default function Button({ children, variant = 'primary', onClick, icon }: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded-lg flex items-center justify-center space-x-2 transition-colors";
  const variants = {
    primary: "bg-neutral-900 hover:bg-neutral-800 text-white",
    secondary: "border border-neutral-900 text-neutral-900 hover:bg-neutral-50"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]}`}
      onClick={onClick}
    >
      {icon && <span className="w-5 h-5">{icon}</span>}
      <span>{children}</span>
    </button>
  );
}