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
          <p className="font-satoshi font-medium text-sm lg:text-base text-[#43392F] text-center max-w-[500px] mx-auto z-10">
            {`"The villa was absolutely stunning! The mountain view from the room
            was breathtaking, and the pool was so refreshing. Perfect for a
            weekend getaway. Can't wait to come back!"`}
          </p>

          <div className="w-full max-w-md relative pt-4">
            <Carousel
              plugins={[plugin.current]}
              className="w-full"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {TestimonialData.map((item) => (
                  <CarouselItem
                    key={item.id}
                    className="pl-2 md:pl-4 md:basis-1/3"
                  >
                    <div className="flex flex-col items-center gap-2">
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
              <CarouselPrevious className="flex left-16 md:-left-12 bg-transparent border border-[#43392F] hover:bg-[#43392F] hover:text-[#EFF0DE]" />
              <CarouselNext className="flex right-16 md:-right-12 bg-transparent border border-[#43392F] hover:bg-[#43392F] hover:text-[#EFF0DE]" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
