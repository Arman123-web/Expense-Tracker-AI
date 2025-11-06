'use server';

let goals: { goal: string; target: number; saved: number }[] = [];

export async function addGoal(goal: string, target: number) {
  goals.push({ goal, target, saved: 0 });
  return { success: true, goals };
}

export async function updateGoal(goal: string, saved: number) {
  const g = goals.find((g) => g.goal === goal);
  if (g) g.saved += saved;
  return { success: true, goals };
}

export async function getGoals() {
  return goals;
}
