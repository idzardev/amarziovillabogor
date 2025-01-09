"use client";

import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { TestimonialData } from "@/constants/TestimonialData";

const TestimonialSection = () => {
  const plugin = React.useRef(
    Autoplay({
      delay: 2500,
      stopOnInteraction: true,
    })
  );

  return (
    <section className="bg-[#EFF0DE] h-full w-full relative">
      <Image
        src={"/assets/images/pattern/pattern.png"}
        alt="Pattern"
        width={1920}
        height={1080}
        className="absolute w-full h-full object-cover z-0 mix-blend-multiply opacity-50"
      />
      <div className="relative h-full flex items-center max-w-7xl mx-auto px-8 lg:px-0 py-16">
        <div className="flex flex-col justify-center items-center w-full gap-8">
          <div className="w-full max-w-md md:max-w-lg lg:max-w-4xl relative">
            <Carousel
              plugins={[plugin.current]}
              className="w-full"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {TestimonialData.map((item) => (
                  <CarouselItem key={item.id}>
                    <div className="flex flex-col items-center gap-8">
                      <p className="font-satoshi text-sm md:text-xl lg:text-base text-[#43392F] text-center max-w-2xl mx-auto z-10 font-medium line-clamp-3">
                        {`"${item.description}"`}
                      </p>
                      <div className="relative size-16 rounded-full overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <p className="text-sm text-center text-[#43392F] font-bold font-satoshi">
                        {item.name}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="flex mt-4 left-12 md:left-36 md:mt-8 lg:left-72 bg-transparent border border-[#43392F] hover:bg-[#43392F] hover:text-[#EFF0DE]" />
              <CarouselNext className="flex mt-4 right-12 md:right-36 md:mt-8 lg:right-72 bg-transparent border border-[#43392F] hover:bg-[#43392F] hover:text-[#EFF0DE]" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
