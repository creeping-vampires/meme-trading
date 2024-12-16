import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import Button from '../ui/Button';

interface EmailFormProps {
  onSubmit: (email: string) => void;
  isLoading: boolean;
}

export default function EmailForm({ onSubmit, isLoading }: EmailFormProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-700">
          Email Address
        </label>
        <div className="mt-1 relative">
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900"
            placeholder="Enter your email"
            required
          />
          <Mail className="absolute right-3 top-2.5 text-neutral-400" size={20} />
        </div>
      </div>
      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Sending Code...' : 'Get Verification Code'}
      </Button>
    </form>
  );
}