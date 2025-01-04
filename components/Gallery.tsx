"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const GallerySection = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: true })
  );

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const images = Array.from({ length: 10 }).map((_, index) => ({
    src: `/assets/images/gallery/gallery${index + 1}.avif`,
    alt: `Gallery image ${index + 1}`,
  }));

  return (
    <section className="h-full w-full py-12">
      <div className="h-full flex flex-col items-center max-w-7xl mx-auto px-4 lg:px-0 gap-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <h2 className="font-ppeditorialnew text-4xl md:text-6xl lg:text-5xl text-[#43392F] font-thin tracking-[0.5px] text-center z-10">
            Gallery of <span className="italic">Moments</span>
          </h2>
          <div className="flex flex-col">
            <p className="font-satoshi text-sm md:text-xl lg:text-base text-[#43392F] text-center max-w-2xl mx-auto z-10 font-medium lg:text-start">
              Explore our villa, from cozy interiors to stunning outdoor views.
              Each corner is designed to make your stay unforgettable.
            </p>
            <Link
              href="/gallery"
              className="hidden mt-4 font-satoshi font-medium text-sm bg-[#EFF0DE] text-[#43392F] hover:bg-[#43392F] hover:text-[#EFF0DE] transition-colors duration-300 rounded-none items-center gap-2 lg:px-6 lg:py-3 lg:text-base lg:flex lg:w-fit"
            >
              See more <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>

        <div className="relative w-full max-w-sm md:max-w-lg lg:max-w-7xl lg:pt-8">
          <Carousel
            setApi={setApi}
            plugins={[plugin.current]}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {images.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 basis-full lg:basis-1/4"
                >
                  <div className="relative aspect-[1/1]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={1000}
                      height={1000}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="flex justify-center gap-2 mt-8 lg:hidden">
            {images.map((_, index) => (
              <div
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`size-3 lg:size-2 rounded-full transition-colors duration-300 ${
                  index === current ? "bg-[#43392F]" : "bg-[#43392F]/30"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <Link
          href="/gallery"
          className="mt-4 font-satoshi font-medium text-sm bg-[#EFF0DE] text-[#43392F] hover:bg-[#43392F] hover:text-[#EFF0DE] transition-colors duration-300 px-6 py-3 rounded-none flex items-center gap-2 md:text-xl md:px-8 md:py-3 lg:px-6 lg:py-3 lg:text-base lg:hidden"
        >
          See more <ArrowUpRight className="size-4" />
        </Link>
      </div>
    </section>
  );
};

export default GallerySection;
