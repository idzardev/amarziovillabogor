"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const GallerySection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: true })
  );
  return (
    <section className="bg-[#FBF9EC] h-full w-full py-8">
      <div className="h-full flex flex-col items-center max-w-7xl mx-auto px-4 lg:px-0 gap-4">
        <h2 className="text-4xl lg:text-6xl font-ppeditorialnew font-thin tracking-[0.5px] text-[#43392F]">
          Gallery of <span className="italic">Moments</span>
        </h2>
        <p className="text-sm lg:text-base font-satoshi font-medium text-[#43392F] leading-relaxed max-w-[500px] mx-auto text-center">
          Explore our villa, from cozy interiors to stunning outdoor views. Each
          corner is designed to make your stay unforgettable.
        </p>
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-xs pt-8 pb-4"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div>
                  <Image
                    src={`/assets/images/gallery/gallery${index + 1}.avif`}
                    alt="comfort"
                    width={1000}
                    height={1000}
                    className="object-cover rounded-sm"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <Link
          href="/gallery"
          className="rounded-none font-satoshi font-medium text-base bg-[#EFF0DE] text-[#43392F] hover:bg-[#43392F] hover:text-[#EFF0DE] transition duration-300 ease-in-out flex items-center gap-2 px-4 py-2"
        >
          See more <ArrowUpRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default GallerySection;
