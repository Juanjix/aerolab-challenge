"use server";

const API_URL = "https://coding-challenge-api.aerolab.co/products";
const API_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk4ODhiNDM3NmIzZjAwMWYwZjY3YmMiLCJpYXQiOjE3MjEyNzI1MDB9.mSgJ0RppbZX8b96Ez6YJTTXo8qNgy38YVps1dXZk0AA";

// Action to get Products
export async function getProducts() {
  const res = await fetch(API_URL, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products from API");
  }

  const productsData = await res.json();

  return productsData;
}
