const API_PRODUCT = "https://coding-challenge-api.aerolab.co/products";
const API_USER = "https://coding-challenge-api.aerolab.co/user";
const API_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk4ODhiNDM3NmIzZjAwMWYwZjY3YmMiLCJpYXQiOjE3MjEyNzI1MDB9.mSgJ0RppbZX8b96Ez6YJTTXo8qNgy38YVps1dXZk0AA";

export async function getUser() {
  const res = await fetch(API_USER, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export async function getProducts() {
  const res = await fetch(API_PRODUCT, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch products from API");
  }
}
