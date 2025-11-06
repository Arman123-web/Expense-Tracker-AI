"use client";
import { useState } from "react";
// import { getBudgetAdvice } from "@/actions/BudgetAdvisor";
import { getBudgetAdvice } from "@/app/actions/budgetAdvisor";
export default function BudgetAdvisor() {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");
  const [advice, setAdvice] = useState("");

  const handleCheck = async () => {
    const res = await getBudgetAdvice(Number(income), Number(expenses));
    setAdvice(res.advice);
  };

  return (
    <div className="p-4 border rounded bg-white dark:bg-gray-800">
      <h2 className="font-bold text-lg mb-2">AI Smart Budget Advisor</h2>
      <input
        type="number"
        placeholder="Monthly Income"
        value={income}
        onChange={(e) => setIncome(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <input
        type="number"
        placeholder="Monthly Expenses"
        value={expenses}
        onChange={(e) => setExpenses(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <button onClick={handleCheck} className="px-4 py-2 bg-purple-600 text-white rounded">
        Get Advice
      </button>
      <p className="mt-2">{advice}</p>
    </div>
  );
}
