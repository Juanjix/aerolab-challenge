"use client";

import { useState, useEffect } from "react";
import Hero from "@/components/Hero/Hero";
import ProductSection from "@/components/ProductSection";
import WalkthroughSection from "@/components/WalkthroughSection";
import { getProducts } from "./actions";
import { Product } from "@/types";

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
  }, []);

  return (
    <main>
      <Hero />
      <WalkthroughSection />
      {loading && <p>Loading ... </p>}
      {error ? <p>error</p> : ""}
      <ProductSection data={products} />
    </main>
  );
}
