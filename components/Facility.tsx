"use client";

import React from "react";
import { FacilitiesData } from "@/constants/FacilitiesData";
import Image from "next/image";

const FacilitiesSection = () => {
  return (
    <section className="bg-[#FBF9EC] h-full w-full py-16">
      <div className="h-full flex items-center max-w-7xl mx-auto px-4 lg:px-0">
        <div className="space-y-4 w-full text-center">
          <h2 className="text-4xl lg:text-6xl font-ppeditorialnew font-thin tracking-[0.5px] pt-8">
            Amarzio&apos;s Facilities
          </h2>
          <p className="font-satoshi text-sm md:text-xl lg:text-base text-[#43392F] text-center max-w-2xl mx-auto z-10 font-medium">
            Carefully curated amenities to ensure your stay at Amarzio Villa is
            as comfortable, relaxing, and enjoyable as possible.
          </p>
          <div className="w-full">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:hidden pt-8">
              {FacilitiesData.map((facility, index) => (
                <div
                  key={facility.id}
                  className={`flex flex-col gap-2 bg-[#EFF0DE] text-[#43392F] items-start p-5 
              ${index === 6 ? "md:col-start-2 md:col-span-1" : ""}
            `}
                >
                  <div className="w-full">
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      width={40}
                      height={40}
                    />
                  </div>
                  <h3 className="text-xl font-ppeditorialnew font-thin tracking-[0.5px] pt-4">
                    {facility.title}
                  </h3>
                  <p className="text-base font-satoshi font-medium tracking-[0.5px] text-start">
                    {facility.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Desktop Layout (lg) */}
            <div className="hidden lg:flex flex-wrap justify-center text-start gap-4 pt-8">
              <div className="flex gap-4 w-full justify-center">
                {FacilitiesData.slice(0, 4).map((facility) => (
                  <div
                    key={facility.id}
                    className="flex flex-col gap-2 bg-[#EFF0DE] text-[#43392F] items-start p-5 w-[280px]"
                  >
                    <div className="w-full">
                      <Image
                        src={facility.image}
                        alt={facility.title}
                        width={40}
                        height={40}
                      />
                    </div>
                    <h3 className="text-xl font-ppeditorialnew font-thin tracking-[0.5px] pt-4">
                      {facility.title}
                    </h3>
                    <p className="text-base font-satoshi font-medium tracking-[0.5px]">
                      {facility.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 w-full justify-center">
                {FacilitiesData.slice(4).map((facility) => (
                  <div
                    key={facility.id}
                    className="flex flex-col gap-2 bg-[#EFF0DE] text-[#43392F] items-start p-5 w-[280px]"
                  >
                    <div className="w-full">
                      <Image
                        src={facility.image}
                        alt={facility.title}
                        width={40}
                        height={40}
                      />
                    </div>
                    <h3 className="text-xl font-ppeditorialnew font-thin tracking-[0.5px] pt-4">
                      {facility.title}
                    </h3>
                    <p className="text-base font-satoshi font-medium tracking-[0.5px]">
                      {facility.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
