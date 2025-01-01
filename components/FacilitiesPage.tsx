import { FacilitiesData } from "@/constants/FacilitiesData";
import Image from "next/image";
import React from "react";

const FacilitiesPage = () => {
  return (
    <div className="w-full h-full pb-16 pt-28 md:pt-32">
      <div className="flex flex-col gap-4 h-full items-center max-w-7xl mx-auto px-4 lg:px-12">
        <div className="flex flex-col justify-center items-center w-full gap-3 text-center">
          <h6 className="font-ppeditorialnew text-lg md:text-2xl text-[#43392F] font-thin tracking-[0.5px]">
            Facilities
          </h6>
          <h1 className="font-ppeditorialnew text-4xl md:text-6xl text-[#43392F] font-thin tracking-[0.5px] px-8 md:px-40 leading-[1.5] md:leading-snug">
            Discover the Comforts of Amarzio
          </h1>
          <p className="text-sm md:text-base font-satoshi font-medium text-[#43392F] md:px-12">
            From relaxing by your private pool to hosting a BBQ with friends,
            our villa is packed with everything you need for for an awesome
            stay. Explore our facilities and start planning your stay!
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-16 py-8">
          {FacilitiesData.map((facility, index) => (
            <div
              key={facility.id}
              className={`flex flex-col gap-2 lg:gap-3 pt-8 ${
                index === 6
                  ? "md:col-span-2 md:max-w-[380px] md:mx-auto lg:col-start-2 lg:col-span-1"
                  : ""
              }`}
            >
              <div className="w-full overflow-hidden">
                <Image
                  src={facility.picture}
                  alt={facility.title}
                  width={1000}
                  height={1000}
                  className="w-full object-cover rounded-none hover:scale-110 transition duration-300 ease-in-out"
                />
              </div>
              <div className="flex flex-col gap-1 text-center px-16 lg:px-8">
                <h3 className="font-ppeditorialnew text-2xl text-[#43392F] font-thin tracking-[0.5px]">
                  {facility.title}
                </h3>
                <p className="text-base font-satoshi font-medium text-[#43392F] tracking-[0.5px]">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacilitiesPage;
