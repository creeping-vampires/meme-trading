import React, { useState } from 'react';
import { Rocket, TrendingUp, Wallet } from 'lucide-react';
import Header from './components/layout/Header';
import CoinCard from './components/trading/CoinCard';
import FundingOption from './components/funding/FundingOption';
import MobileNav from './components/navigation/MobileNav';
import WalletTab from './components/wallet/WalletTab';
import Button from './components/ui/Button';
import { Coin } from './types';

const mockCoins: Coin[] = [
  {
    id: 1,
    name: 'PEPE',
    symbol: 'PEPE',
    price: '0.000001234',
    change: 12.5,
    image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=64&h=64&fit=crop'
  },
  {
    id: 2,
    name: 'DOGE',
    symbol: 'DOGE',
    price: '0.12345',
    change: -2.3,
    image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=64&h=64&fit=crop'
  }
];

function App() {
  const [activeTab, setActiveTab] = useState<'trade' | 'wallet'>('trade');

  return (
    <div className="min-h-screen bg-neutral-50">
      <Header />
      
      <main className="pt-20 px-4 max-w-5xl mx-auto pb-24">
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-neutral-200 p-1 bg-white">
            <button
              onClick={() => setActiveTab('trade')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'trade'
                  ? 'bg-neutral-900 text-white'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Trade
            </button>
            <button
              onClick={() => setActiveTab('wallet')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'wallet'
                  ? 'bg-neutral-900 text-white'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Wallet
            </button>
          </div>
        </div>

        {activeTab === 'trade' ? (
          <>
            <section className="text-center py-12 mb-8">
              <h1 className="text-4xl font-bold mb-4 text-neutral-900">
                Trade Meme Coins
              </h1>
              <p className="text-neutral-600 mb-8">
                Simple. Fast. Secure.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button icon={<Rocket />}>Start Trading</Button>
                <Button variant="secondary" icon={<TrendingUp />}>View Markets</Button>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-medium mb-6">Trending</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {mockCoins.map(coin => (
                  <CoinCard key={coin.id} coin={coin} />
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-xl font-medium mb-6">Funding</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FundingOption
                  title="OnRamp"
                  description="Buy crypto with card or bank transfer"
                  icon={<TrendingUp className="text-neutral-900" />}
                  actionText="Buy Crypto"
                />
                <FundingOption
                  title="Deposit"
                  description="Transfer from another wallet"
                  icon={<Wallet className="text-neutral-900" />}
                  actionText="Deposit Now"
                />
              </div>
            </section>
          </>
        ) : (
          <WalletTab />
        )}
      </main>

      <MobileNav />
    </div>
  );
}

export default App;