"use client";
import { useState } from "react";
// import { detectFraud } from "@/actions/FraudDetection";
import { detectFraud } from "@/app/actions/fraudDetection";

export default function FraudDetection() {
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [result, setResult] = useState("");

  const handleCheck = async () => {
    const res = await detectFraud(Number(amount), category);
    if (res.suspicious) setResult(`⚠️ Fraud Alert: ${res.reason}`);
    else setResult("✅ Transaction is safe");
  };

  return (
    <div className="p-4 border rounded bg-white dark:bg-gray-800">
      <h2 className="font-bold text-lg mb-2">AI Fraud Detection</h2>
      <input
        type="number"
        placeholder="Transaction Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <input
        type="text"
        placeholder="Category (e.g. luxury)"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <button onClick={handleCheck} className="px-4 py-2 bg-red-600 text-white rounded">
        Check
      </button>
      <p className="mt-2">{result}</p>
    </div>
  );
}
