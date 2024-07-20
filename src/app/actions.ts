"use server";

const API_BASE = "https://coding-challenge-api.aerolab.co";

const API_PRODUCT = "https://coding-challenge-api.aerolab.co/product";
const API_USER = "https://coding-challenge-api.aerolab.co/user/me";
const API_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk4ODhiNDM3NmIzZjAwMWYwZjY3YmMiLCJpYXQiOjE3MjEyNzI1MDB9.mSgJ0RppbZX8b96Ez6YJTTXo8qNgy38YVps1dXZk0AA";

// Accion para traer los productos
export async function fetchFromAPI(url: string) {
  const res = await fetch(`${API_BASE}${url}`, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
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

// Accion para traer el usuario
export async function getProducts() {
  const data = await fetchFromAPI("/products");
  return data;
}
