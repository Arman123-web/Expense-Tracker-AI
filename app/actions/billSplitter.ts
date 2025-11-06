'use server';

export async function splitBill(total: number, people: number) {
  if (people <= 0) return { error: "People must be > 0" };
  const amount = (total / people).toFixed(2);
  return { perPerson: amount };
}
