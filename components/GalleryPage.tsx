import Image from "next/image";
import React from "react";

const GalleryPage = () => {
  return (
    <div className="w-full h-full pb-16 pt-28">
      <div className="flex flex-col gap-4 h-full items-center max-w-7xl mx-auto px-8">
        <div className="flex flex-col justify-center items-center w-full gap-2 text-center">
          <h6 className="font-ppeditorialnew text-lg text-[#43392F] font-thin tracking-[0.5px]">
            Galleries
          </h6>
          <h1 className="font-ppeditorialnew text-4xl lg:text-6xl text-[#43392F] font-thin tracking-[0.5px] px-4">
            Take a Look Around
          </h1>
          <p className="text-sm lg:text-base font-satoshi font-medium text-[#43392F]">
            Browse through our gallery and get inspired by the beauty, comfort,
            and elegance of your next getaway destination
          </p>
        </div>
        <div>
          <Image
            src={`/assets/images/${index + 1}.avif`}
            alt="comfort"
            width={1000}
            height={1000}
            className="object-cover rounded-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
