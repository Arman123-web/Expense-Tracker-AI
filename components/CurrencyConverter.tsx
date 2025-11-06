'use client';
import { useState } from 'react';
import { convertCurrency } from '@/app/actions/convertCurrency';

export default function CurrencyConverter() {
  const [amount, setAmount] = useState('');
  const [from, setFrom] = useState('USD');
  const [to, setTo] = useState('INR');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleConvert = async () => {
    if (!amount) return;
    setLoading(true);
    setResult(null);

    const response = await convertCurrency(Number(amount), from, to);

    if (response.result !== undefined) {
      setResult(`${amount} ${from} = ${response.result.toFixed(2)} ${to}`);
    } else {
      setResult(response.error ?? 'Something went wrong');
    }

    setLoading(false);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
      <h3 className="text-lg font-bold mb-4">💱 Currency Converter</h3>
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="flex-1 border rounded-lg px-3 py-2 dark:bg-gray-700 dark:text-white"
        />
        <select
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          className="border rounded-lg px-3 py-2 dark:bg-gray-700 dark:text-white"
        >
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
        <select
          value={to}
          onChange={(e) => setTo(e.target.value)}
          className="border rounded-lg px-3 py-2 dark:bg-gray-700 dark:text-white"
        >
          <option value="USD">USD</option>
          <option value="INR">INR</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
      </div>
      <button
        onClick={handleConvert}
        disabled={loading}
        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition disabled:opacity-50"
      >
        {loading ? 'Converting...' : 'Convert'}
      </button>
      {result && (
        <p className="mt-4 text-gray-700 dark:text-gray-300 font-medium">{result}</p>
      )}
    </div>
  );
}
