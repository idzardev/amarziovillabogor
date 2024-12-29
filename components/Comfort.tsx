"use client";

import Image from "next/image";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const ComfortSection = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: true })
  );
  return (
    <section className="bg-[#183621] min-h-screen w-full">
      <Image
        src={"/assets/images/pattern/pattern.png"}
        alt="Pattern"
        width={1920}
        height={1080}
        className="absolute w-full h-screen object-cover z-0 mix-blend-multiply"
      />
      <div className="container h-screen flex items-center max-w-7xl mx-auto px-8 lg:px-0">
        <div className="flex flex-col justify-center items-center w-full gap-4">
          <h2 className="font-ppeditorialnew text-4xl lg:text-6xl text-[#EFF0DE] font-thin tracking-[0.5px] text-center z-10">
            Comfort with a <span className="italic">View</span>
          </h2>
          <p className="font-satoshi text-sm lg:text-base text-[#EFF0DE] text-center max-w-[500px] mx-auto z-10">
            5 spacious rooms with your choice of double or twin beds, each
            complete with a private bathroom. Enjoy exclusive views right from
            your room: the sparkling blue pool, lush green gardens, and stunning
            mountains. Make every moment unforgettable!
          </p>
          <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-xs pt-10"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                  <div>
                    <Image
                      src={`/assets/images/comfort/comfort${index + 1}.avif`}
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
        </div>
      </div>
    </section>
  );
};

export default ComfortSection;
