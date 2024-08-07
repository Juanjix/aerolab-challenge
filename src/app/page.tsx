"use client";

// Estados
import { useState, useEffect } from "react";

// Secciones
import Hero from "@/components/Hero/Hero";
import ProductSection from "@/components/ProductsSection";
import WalkthroughSection from "@/components/WalkthroughSection";
import Menu from "@/components/Menu/Menu";

// Acciones
import { getProducts, getUser } from "./actions";

//Types
import { Product } from "@/types";

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState();
  const [points, setPoints] = useState(0);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUser();

      setUser(data);
      setPoints(data.points);
    };

    fetchUser();
  }, []);

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
      <Menu points={points} user={user!} setPoints={setPoints} />
      <Hero />
      <WalkthroughSection />
      <ProductSection
        data={products}
        loading={loading}
        points={points}
        setPoints={setPoints}
      />
    </main>
  );
}
