import React from "react";
import ComfortSection from "@/components/Comfort";
import HeroSection from "@/components/Hero";
import LuxurySection from "@/components/Luxury";
import FacilitiesSection from "@/components/Facilities";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <LuxurySection />
      <ComfortSection />
      <FacilitiesSection />
    </main>
  );
}
