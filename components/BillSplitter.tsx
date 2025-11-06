"use client";
import { useState } from "react";
import { splitBill } from "@/app/actions/billSplitter";

export default function BillSplitter() {
  const [total, setTotal] = useState<string>("");
  const [people, setPeople] = useState<string>("");
  const [result, setResult] = useState<string>("");

  const handleSplit = async () => {
    const res = await splitBill(Number(total), Number(people));
    if (res.perPerson) {
      setResult(`Each pays: $${res.perPerson}`);
    } else {
      setResult(res.error ?? "An unknown error occurred");
    }
  };

  return (
    <div className="p-4 border rounded bg-white dark:bg-gray-800">
      <h2 className="font-bold text-lg mb-2">Smart Bill Splitter</h2>
      <input
        type="number"
        placeholder="Total Amount"
        value={total}
        onChange={(e) => setTotal(e.target.value ?? "")}
        className="border p-2 w-full mb-2"
      />
      <input
        type="number"
        placeholder="Number of People"
        value={people}
        onChange={(e) => setPeople(e.target.value ?? "")}
        className="border p-2 w-full mb-2"
      />
      <button
        onClick={handleSplit}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Split
      </button>
      <p className="mt-2">{result}</p>
    </div>
  );
}
