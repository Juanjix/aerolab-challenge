"use server";

import { db } from "@/db";
import { products } from "@/db/schema";
import { sql } from "drizzle-orm";

const API_URL = "https://coding-challenge-api.aerolab.co/products";
const API_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk4ODhiNDM3NmIzZjAwMWYwZjY3YmMiLCJpYXQiOjE3MjEyNzI1MDB9.mSgJ0RppbZX8b96Ez6YJTTXo8qNgy38YVps1dXZk0AA";

export async function fetchAndSaveProducts() {
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

  const insertPromises = productsData.map((product: any) =>
    db
      .insert(products)
      .values({
        name: product.name,
        description: product.description || "",
        cost: product.cost,
        category: product.category,
        imgUrl: product.img.url,
        imgHdUrl: product.img.hdUrl,
      })
      .onConflictDoNothing()
  );

  await Promise.all(insertPromises);
  return productsData;
}

export async function getProducts() {
  return await db.select().from(products);
}
