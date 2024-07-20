"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/Hero/Hero";
import ProductSection from "@/components/ProductSection";
import WalkthroughSection from "@/components/WalkthroughSection";
import { getProducts } from "./actions";
import { Product } from "@/types";
import { products } from "@/db/schema";
import NotificationToast from "@/components/NotificationToast";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const productsData = await getProducts();
        setProducts(productsData);
      } catch (err) {
        setError("Failed to load products");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []); // El array vacío asegura que esto se ejecute solo una vez después del primer renderizado

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }
  return (
    <main>
      <Hero />
      <WalkthroughSection />
      <ProductSection data={products} />
      <NotificationToast
        message="Product name
redeemed successfully"
        type="error"
      />
      <NotificationToast
        message="There was a problem
with the transaction"
        type="success"
      />
    </main>
  );
}
