"use client";

import React, { useState } from "react";
import { Button } from "./ui/button";
import { ArrowUpRight } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

type EmblaCarouselType = import("embla-carousel").EmblaCarouselType;

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [api, setApi] = useState<EmblaCarouselType | undefined>();

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const images = [
    "/assets/images/hero/hero1.avif",
    "/assets/images/hero/hero2.avif",
    "/assets/images/hero/hero3.avif",
    "/assets/images/hero/hero4.avif",
  ];

  const handleSetApi = (api: EmblaCarouselType | undefined) => {
    setApi(api);
  };

  React.useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setActiveIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="w-full min-h-screen bg-[#183621]">
      <Image
        src={"/assets/images/pattern/pattern.png"}
        alt="Pattern"
        width={1920}
        height={1080}
        className="absolute w-full h-screen object-cover z-0 mix-blend-multiply"
      />
      {/* Static Content - Outside Carousel */}
      <div className="absolute inset-0 z-10 pt-40">
        <div className="relative px-8 h-screen flex flex-col justify-center max-w-7xl mx-auto">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-5xl text-center md:text-start font-ppeditorialnew font-thin tracking-[0.5px] text-[#EFF0DE]">
              Welcome to Amarzio Villa
            </h1>
            <p className="text-base font-satoshi text-[#EFF0DE] text-center md:text-start">
              Experience serene comfort and modern elegance in the heart of
              nature.
              <br />
              Your perfect getaway starts here.
            </p>
            {/* Carousel indicators */}
            <div className="z-10 flex space-x-2 justify-center md:justify-start">
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`h-1 w-8 transition-colors duration-300 ${
                    index === activeIndex ? "bg-[#EFF0DE]" : "bg-[#43392F]"
                  }`}
                />
              ))}
            </div>
            <Button className="bg-[#EFF0DE] hover:bg-[#EFF0DE]/90 text-[#43392F] rounded-none px-6 w-full md:w-fit">
              Book Now
              <ArrowUpRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Carousel - Background Images Only */}
      <Carousel
        plugins={[plugin.current]}
        className="h-full w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        setApi={handleSetApi}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="h-screen pl-0">
              <div className="relative h-full w-full">
                {/* Background Image */}
                <Image
                  src={image}
                  alt="Hero Image"
                  width={1920}
                  height={1080}
                  className="absolute inset-0 transition-transform duration-500 ease-in-out mt-20 md:mt-0"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default HeroSection;
