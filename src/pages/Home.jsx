import { StarBackground } from "@/components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import React from 'react'


export default function Home(){
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Background Effects */}
      <StarBackground />

      {/* Main Content */}
      <main>
        <HeroSection />

      </main>

    </div>
  );
};