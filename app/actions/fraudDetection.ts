'use server';

export async function detectFraud(amount: number, category: string) {
  if (amount > 10000) return { suspicious: true, reason: "High transaction amount" };
  if (category === "luxury" && amount > 2000) return { suspicious: true, reason: "Unusual luxury expense" };
  return { suspicious: false };
}
