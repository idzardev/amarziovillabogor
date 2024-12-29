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
          <p className="text-sm lg:text-base font-satoshi font-medium text-[#43392F] leading-relaxed max-w-[500px] mx-auto px-4">
            Carefully curated amenities to ensure your stay at Amarzio Villa is
            as comfortable, relaxing, and enjoyable as possible.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 pt-8">
            {FacilitiesData.map((facility) => (
              <div
                key={facility.id}
                className="flex flex-col gap-2 bg-[#EFF0DE] text-[#43392F] items-center p-5 text-start"
              >
                <div className="w-full">
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="text-xl font-ppeditorialnew font-thin tracking-[0.5px] pt-4 w-full">
                  {facility.title}
                </h3>
                <p className="text-base font-satoshi font-medium tracking-[0.5px] w-full">
                  {facility.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
