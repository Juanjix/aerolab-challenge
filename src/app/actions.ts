"use server";

// Accion base
async function fetchFromAPI(url: string) {
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

// Accion para traer el usuario
export async function getUser() {
  const data = await fetchFromAPI("/user/me");
  return data;
}

// Accion para traer los productos
export async function getProducts() {
  const data = await fetchFromAPI("/products");
  return data;
}
