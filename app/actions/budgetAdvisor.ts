'use server';

export async function getBudgetAdvice(income: number, expenses: number) {
  const savings = income - expenses;
  if (savings < 0) return { advice: "⚠️ You're overspending. Cut down on non-essentials." };
  if (savings < income * 0.2) return { advice: "✅ Try saving at least 20% of your income." };
  return { advice: "🎉 Great job! You're saving well." };
}
