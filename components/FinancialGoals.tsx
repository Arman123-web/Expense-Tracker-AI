"use client";
import { useEffect, useState } from "react";
// import { addGoal, updateGoal, getGoals } from "@/actions/financialGoals";
import { addGoal, getGoals, updateGoal } from "@/app/actions/financialGoals";
export default function FinancialGoals() {
  const [goal, setGoal] = useState("");
  const [target, setTarget] = useState("");
  const [list, setList] = useState<any[]>([]);

  const loadGoals = async () => setList(await getGoals());

  const handleAdd = async () => {
    await addGoal(goal, Number(target));
    loadGoals();
  };

  const handleUpdate = async (goal: string) => {
    await updateGoal(goal, 100); // add $100 saved
    loadGoals();
  };

  useEffect(() => {
    loadGoals();
  }, []);

  return (
    <div className="p-4 border rounded bg-white dark:bg-gray-800">
      <h2 className="font-bold text-lg mb-2">Financial Goals</h2>
      <input
        type="text"
        placeholder="Goal Name"
        value={goal}
        onChange={(e) => setGoal(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <input
        type="number"
        placeholder="Target Amount"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <button onClick={handleAdd} className="px-4 py-2 bg-blue-600 text-white rounded">
        Add Goal
      </button>

      <ul className="mt-4 space-y-2">
        {list.map((g, idx) => (
          <li key={idx} className="flex justify-between items-center border p-2 rounded">
            <span>{g.goal} - Saved ${g.saved} / ${g.target}</span>
            <button
              onClick={() => handleUpdate(g.goal)}
              className="px-2 py-1 bg-green-600 text-white rounded"
            >
              Save +100
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
