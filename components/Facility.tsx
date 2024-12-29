"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import Image from "next/image";
import { FacilitiesData } from "@/constants/FacilitiesData";

const FacilitiesSection = () => {
  return (
    <section className="bg-[#FBF9EC] h-full w-full py-16">
      <div className="h-full flex items-center max-w-7xl mx-auto px-8 lg:px-0">
        <div className="space-y-4 w-full text-center">
          <h2 className="text-4xl lg:text-6xl font-ppeditorialnew font-thin tracking-[0.5px] pt-8">
            Amarzio&apos;s Facilities
          </h2>
          <p className="text-sm lg:text-base font-satoshi font-medium text-[#43392F] leading-relaxed max-w-[500px] mx-auto">
            Carefully curated amenities to ensure your stay at Amarzio Villa is
            as comfortable, relaxing, and enjoyable as possible.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 px-4 pt-8">
            {FacilitiesData.map((facility) => (
              <Dialog key={facility.id}>
                <DialogTrigger
                  className={`flex items-center justify-center py-4 bg-[#EFF0DE] text-[#43392F] rounded-none hover:shadow-md transition duration-300 ease-in-out ${
                    facility.id === 7 ? "col-span-2" : "col-span-1"
                  }`}
                >
                  <Image
                    src={facility.image}
                    alt={facility.title}
                    width={40}
                    height={40}
                  />
                </DialogTrigger>
                <DialogContent className="w-80 bg-[#EFF0DE] rounded-none">
                  <DialogHeader className="text-start">
                    <DialogTitle className="text-xl font-ppeditorialnew font-medium text-[#43392F] flex flex-col gap-4">
                      <Image
                        src={facility.image}
                        alt={facility.title}
                        width={40}
                        height={40}
                      />
                      {facility.title}
                    </DialogTitle>
                    <DialogDescription>
                      {facility.description}
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
