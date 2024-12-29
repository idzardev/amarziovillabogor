"use client";

import Image from "next/image";
import React, { useState } from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

const ComfortSection = () => {
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
    src: `/assets/images/comfort/comfort${index + 1}.avif`,
    alt: `Comfort image ${index + 1}`,
  }));

  return (
    <section className="bg-[#183621] min-h-screen w-full">
      <Image
        src={"/assets/images/pattern/pattern.png"}
        alt="Pattern"
        width={1920}
        height={1080}
        className="absolute w-full h-screen object-cover z-0 mix-blend-multiply"
      />
      <div className="container h-screen flex items-center max-w-7xl mx-auto px-4 lg:px-0">
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
          <div className="relative w-full max-w-sm pt-8">
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
                  className={`size-3 rounded-full transition-colors duration-300 ${
                    index === activeIndex ? "bg-[#FEF9EC]" : "bg-[#FEF9EC]/30"
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
