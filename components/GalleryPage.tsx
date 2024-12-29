import Image from "next/image";
import React from "react";

const GalleryPage = () => {
  return (
    <div className="w-full h-full pb-16 pt-28">
      <div className="flex flex-col gap-4 h-full items-center max-w-7xl mx-auto px-4">
        <div className="flex flex-col justify-center items-center w-full gap-3 text-center">
          <h6 className="font-ppeditorialnew text-lg text-[#43392F] font-thin tracking-[0.5px]">
            Galleries
          </h6>
          <h1 className="font-ppeditorialnew text-4xl lg:text-6xl text-[#43392F] font-thin tracking-[0.5px] px-8">
            Take a Look Around
          </h1>
          <p className="text-sm lg:text-base font-satoshi font-medium text-[#43392F]">
            Browse through our gallery and get inspired by the beauty, comfort,
            and elegance of your next getaway destination
          </p>
        </div>
        <div className="grid grid-cols-2 gap-2 lg:gap-8 pt-8">
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
