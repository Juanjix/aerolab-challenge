"use server";

import { revalidatePath } from "next/cache";

// Accion base
async function fetchFromAPI(
  url: string,
  p0?: string,
  body?: { amount: number }
) {
  const res = await fetch(`${process.env.API_BASE}${url}`, {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch from API");
  }

  const data = await res.json();

  return data;
}

// Accion base
export async function getUser(p0?: string, body?: { amount: number }) {
  const res = await fetch(`${process.env.API_BASE}/user/me`, {
    headers: {
      Authorization: `Bearer ${process.env.API_TOKEN}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch from API");
  }

  const data = await res.json();

  return data;
}

// // Accion para traer el usuario
// export async function getUser() {
//   const data = await fetchFromAPI("/user/me");
//   return data;
// }

// Accion para traer los productos
export async function getProducts() {
  const data = await fetchFromAPI("/products");
  return data;
}

export async function addPoints(amount: number) {
  const allowedAmount = [1000, 5000, 7500];
  if (!allowedAmount.includes(amount)) {
    throw new Error("Invalid amount. Only 1000, 5000, or 7500 are allowed.");
  }

  const data = await fetch(process.env.API_BASE + "/user/points", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
    body: JSON.stringify({ amount }),
  });

  return data;
}

export async function reedemProduct(productId: string) {
  try {
    const response = await fetch(`${process.env.API_BASE}/redeem`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_TOKEN}`,
      },
      body: JSON.stringify({ productId }),
    });

    if (!response.ok) {
      // Manejar respuestas no exitosas
      const errorData = await response.json();
      throw new Error(errorData.message || "Error redeeming product");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error redeeming product:", error);
    throw error;
  }
}

export async function getRedemptionHistory() {
  const data = await fetchFromAPI("/user/history");
  return data;
}
