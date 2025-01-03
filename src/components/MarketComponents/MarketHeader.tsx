export default function MarketHeader() {
  return (
    <div className="px-2 pb-4">
      <div className="flex justify-start">
        <div className="text-left">
          <div className="text-xs text-gray-400">Total Balance</div>
          <div className="text-3xl font-bold text-gray-100">$1435.40</div>
          <div className="text-xs text-lime-400">
            +$271.13 (+8.51%) for all time
          </div>
        </div>
      </div>
    </div>
  );
}
