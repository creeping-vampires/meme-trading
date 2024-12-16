import React, { useState } from 'react';
import { FileSignature } from 'lucide-react';
import Button from '../ui/Button';

interface SignMessageProps {
  onSign: (message: string) => Promise<string>;
  isLoading: boolean;
}

export default function SignMessage({ onSign, isLoading }: SignMessageProps) {
  const [message, setMessage] = useState('');
  const [signature, setSignature] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const sig = await onSign(message);
      setSignature(sig);
    } catch (error) {
      console.error('Error signing message:', error);
    }
  };

  return (
    <div className="space-y-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-neutral-700">
            Message to Sign
          </label>
          <div className="mt-1">
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="block w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-neutral-900 focus:border-neutral-900"
              rows={4}
              placeholder="Enter your message"
              required
            />
          </div>
        </div>
        <Button type="submit" disabled={isLoading} icon={<FileSignature />}>
          {isLoading ? 'Signing...' : 'Sign Message'}
        </Button>
      </form>

      {signature && (
        <div className="bg-neutral-50 p-4 rounded-lg">
          <h4 className="text-sm font-medium text-neutral-700 mb-2">Signature</h4>
          <p className="text-xs text-neutral-600 break-all font-mono">{signature}</p>
        </div>
      )}
    </div>
  );
}