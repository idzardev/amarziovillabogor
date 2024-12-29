import React from "react";
import ComfortSection from "@/components/Comfort";
import HeroSection from "@/components/Hero";
import LuxurySection from "@/components/Luxury";
import FacilitySection from "@/components/Facility";
import GallerySection from "@/components/Gallery";
import TestimonialSection from "@/components/Testimonial";
import BookSection from "@/components/Book";
import ContactSection from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#FBF9EC]">
      <HeroSection />
      <LuxurySection />
      <ComfortSection />
      <FacilitySection />
      <GallerySection />
      <TestimonialSection />
      <BookSection />
      <ContactSection />
    </main>
  );
}
