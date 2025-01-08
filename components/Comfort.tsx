"use client";

import Image from "next/image";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselApi,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const ComfortSection = () => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  const plugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: true })
  );

  const images = Array.from({ length: 6 }).map((_, index) => ({
    src: `/assets/images/comfort/comfort${index + 1}.avif`,
    alt: `Comfort image ${index + 1}`,
  }));

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="bg-[#183621] h-screen w-full">
      <Image
        src={"/assets/images/pattern/pattern.png"}
        alt="Pattern"
        width={1920}
        height={1080}
        className="absolute w-full h-screen object-cover z-0 mix-blend-multiply"
      />
      <div className="h-screen flex items-center max-w-7xl mx-auto px-4 lg:px-0">
        <div className="flex flex-col justify-center items-center w-full gap-4 md:gap-6 lg:gap-4">
          <h2 className="font-ppeditorialnew text-4xl md:text-6xl lg:text-5xl text-[#EFF0DE] font-thin tracking-[0.5px] text-center z-10">
            Comfort with a <span className="italic">View</span>
          </h2>
          <p className="font-satoshi text-sm md:text-xl lg:text-base text-[#EFF0DE] text-center max-w-2xl mx-auto z-10 font-medium">
            5 spacious rooms with your choice of double or twin beds, each
            complete with a private bathroom. Enjoy exclusive views right from
            your room: the sparkling blue pool, lush green gardens, and stunning
            mountains. Make every moment unforgettable!
          </p>
          <div className="relative w-full max-w-sm md:max-w-lg lg:max-w-4xl pt-8 lg:pt-8">
            <Carousel
              setApi={setApi}
              plugins={[plugin.current]}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {images.map((image, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-4 basis-full lg:basis-1/3"
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
              <CarouselPrevious className="bg-transparent text-[#FEF9EC] hidden lg:flex lg:-ml-8" />
              <CarouselNext className="bg-transparent text-[#FEF9EC] hidden lg:flex lg:-mr-8" />
            </Carousel>
            <div className="flex justify-center gap-2 mt-8 lg:hidden">
              {images.map((_, index) => (
                <div
                  key={index}
                  onClick={() => api?.scrollTo(index)}
                  className={`size-3 lg:size-2 rounded-full transition-colors duration-300 ${
                    index === current ? "bg-[#FEF9EC]" : "bg-[#FEF9EC]/30"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComfortSection;
