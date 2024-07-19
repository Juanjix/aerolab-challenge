/* eslint-disable @next/next/no-async-client-component */
"use client";

// Sections
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <div>
        {/* {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))} */}
      </div>
    </main>
  );
}
