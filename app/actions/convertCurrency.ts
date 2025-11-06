"use server";

export async function convertCurrency(
  amount: number,
  from: string,
  to: string
) {
  try {
    const res = await fetch(
      `https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`
    );

    if (!res.ok) throw new Error("Failed to fetch rates");

    const data = await res.json();
    return { success: true, result: data.result };
  } catch (error) {
    console.error("Currency conversion error:", error);
    return { success: false, error: "Conversion failed" };
  }
}
