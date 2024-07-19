/* eslint-disable @next/next/no-async-client-component */
"use client";

// Sections
import Hero from "@/components/Hero/Hero";
import WalkthroughSection from "@/components/WalkthroughSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <WalkthroughSection />
    </main>
  );
}
