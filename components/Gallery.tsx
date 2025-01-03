"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

const GallerySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2500, stopOnInteraction: true }),
  ]);

  React.useEffect(() => {
    if (emblaApi) {
      emblaApi.on("select", () => {
        setActiveIndex(emblaApi.selectedScrollSnap());
      });
    }
  }, [emblaApi]);

  const images = Array.from({ length: 5 }).map((_, index) => ({
    src: `/assets/images/gallery/gallery${index + 1}.avif`,
    alt: `Gallery image ${index + 1}`,
  }));

  return (
    <section className="h-full w-full py-12">
      <div className="h-full flex flex-col items-center max-w-7xl mx-auto px-4 lg:px-0 gap-6">
        <h2 className="font-ppeditorialnew text-4xl md:text-6xl lg:text-5xl text-[#43392F] font-thin tracking-[0.5px] text-center z-10">
          Gallery of <span className="italic">Moments</span>
        </h2>
        <p className="font-satoshi text-sm md:text-xl lg:text-base text-[#43392F] text-center max-w-2xl mx-auto z-10 font-medium">
          Explore our villa, from cozy interiors to stunning outdoor views. Each
          corner is designed to make your stay unforgettable.
        </p>
        <div className="relative w-full max-w-sm md:max-w-lg lg:max-w-xs pt-8 lg:pt-2">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 relative aspect-[1/1]"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => emblaApi && emblaApi.scrollTo(index)}
                className={`size-3 lg:size-2 rounded-full transition-colors duration-300 ${
                  index === activeIndex ? "bg-[#43392F]" : "bg-[#43392F]/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <Link
          href="/gallery"
          className="mt-4 font-satoshi font-medium text-sm bg-[#EFF0DE] text-[#43392F] hover:bg-[#43392F] hover:text-[#EFF0DE] transition-colors duration-300 px-6 py-3 rounded-none flex items-center gap-2 md:text-xl md:px-8 md:py-3 lg:px-6 lg:py-3 lg:text-base"
        >
          See more <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </section>
  );
};

export default GallerySection;
