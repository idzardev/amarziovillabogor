import Image from "next/image";
import React from "react";

const GalleryPage = () => {
  return (
    <div className="w-full h-full pb-16 pt-28 md:pt-32">
      <div className="flex flex-col gap-4 h-full items-center max-w-7xl mx-auto px-4 lg:px-12">
        <div className="flex flex-col justify-center items-center w-full gap-3 text-center">
          <h6 className="font-ppeditorialnew text-lg md:text-2xl text-[#43392F] font-thin tracking-[0.5px]">
            Galleries
          </h6>
          <h1 className="font-ppeditorialnew text-4xl md:text-6xl text-[#43392F] font-thin tracking-[0.5px] px-8 md:px-40 leading-[1.5] md:leading-snug">
            Take a Look Around
          </h1>
          <p className="text-sm md:text-base font-satoshi font-medium text-[#43392F] md:px-12">
            Browse through our gallery and get inspired by the beauty, comfort,
            and elegance of your next getaway destination
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-3 pt-8">
          {Array.from({ length: 27 }, (_, index) => (
            <div key={index} className="w-full h-full relative overflow-hidden">
              <Image
                src={`/assets/images/galleriesPage/img${index + 1}.avif`}
                alt="gallery"
                width={1000}
                height={1000}
                className="object-cover hover:scale-110 transition duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
