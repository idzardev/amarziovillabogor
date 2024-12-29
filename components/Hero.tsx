"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { HeroData } from "@/constants/HeroData";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [Autoplay({ delay: 2000, stopOnInteraction: true })]
  );

  React.useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", () => {
      setActiveIndex(emblaApi.selectedScrollSnap());
    });

    // Cleanup
    return () => {
      emblaApi.destroy();
    };
  }, [emblaApi]);

  return (
    <section className="w-full h-screen relative">
      {/* Static Content - Outside Carousel */}
      <div className="absolute top-0 left-0 z-20">
        <div className="relative px-6 h-screen flex flex-col justify-center max-w-7xl mx-auto">
          <div className="max-w-2xl space-y-6 flex flex-col w-full">
            <h1 className="text-5xl text-center md:text-start leading-[1.5] font-ppeditorialnew font-thin tracking-[0.5px] text-[#EFF0DE]">
              Welcome to Amarzio Villa
            </h1>
            <p className="text-base font-satoshi text-[#EFF0DE] text-center md:text-start">
              Experience serene comfort and modern elegance in the heart of
              nature. Your perfect getaway starts here.
            </p>
            {/* Carousel indicators */}
            <div className="z-10 flex space-x-2 justify-center md:justify-start">
              {HeroData.map((_, index) => (
                <div
                  key={index}
                  onClick={() => emblaApi?.scrollTo(index)}
                  className={`h-1 w-10 transition-colors duration-300 ${
                    index === activeIndex ? "bg-[#EFF0DE]" : "bg-[#43392F]"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            <div className="w-full flex justify-center md:justify-start pt-8">
              <Link
                href="wa.me/6281936872903"
                className="bg-[#EFF0DE] hover:bg-[#EFF0DE]/90 text-[#43392F] rounded-none flex items-center font-satoshi font-medium text-sm tracking-[0.5px] px-6 py-2"
              >
                Book Now
                <ArrowUpRight className="ml-2 size-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-[5]" />

      {/* Carousel */}
      <div className="overflow-hidden h-screen" ref={emblaRef}>
        <div className="flex h-full">
          {HeroData.map((item, index) => (
            <div
              key={index}
              className="flex-[0_0_100%] min-w-0 relative h-full"
            >
              <Image
                src={item.image}
                alt={`Hero Image ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
