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

const FacilitiesSection = () => {
  return (
    <section className="bg-[#FBF9EC] h-full w-full py-16">
      <div className="h-full flex items-center max-w-7xl mx-auto px-4 lg:px-0">
        <div className="space-y-4 w-full text-center">
          <h2 className="text-4xl lg:text-6xl font-ppeditorialnew font-thin tracking-[0.5px]">
            Amarzio&apos;s Facilities
          </h2>
          <p className="text-sm lg:text-base font-satoshi font-medium text-[#43392F] leading-relaxed max-w-[500px] mx-auto">
            Carefully curated amenities to ensure your stay at Amarzio Villa is
            as comfortable, relaxing, and enjoyable as possible.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 px-10 pt-8">
            <Dialog>
              <DialogTrigger className="flex items-center justify-center py-4 bg-[#EFF0DE] text-[#43392F] rounded-sm hover:shadow-sm transition duration-300 ease-in-out">
                <Image
                  src="/assets/icon/facilities/bed.svg"
                  alt="bed"
                  width={40}
                  height={40}
                />
              </DialogTrigger>
              <DialogContent className="w-80 bg-[#EFF0DE] rounded-sm">
                <DialogHeader className="text-start">
                  <DialogTitle className="text-xl font-ppeditorialnew font-medium text-[#43392F] flex flex-col gap-4">
                    <Image
                      src="/assets/icon/facilities/bed.svg"
                      alt="bed"
                      width={40}
                      height={40}
                    />
                    5 Spacious Bedrooms
                  </DialogTitle>
                  <DialogDescription>
                    Cozy and comfortable rooms for a great night&apos;s sleep.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger className="flex items-center justify-center py-4 bg-[#EFF0DE] text-[#43392F] rounded-sm hover:shadow-sm transition duration-300 ease-in-out">
                <Image
                  src="/assets/icon/facilities/shower.svg"
                  alt="shower"
                  width={40}
                  height={40}
                />
              </DialogTrigger>
              <DialogContent className="w-80 bg-[#EFF0DE] rounded-sm">
                <DialogHeader className="text-start">
                  <DialogTitle className="text-xl font-ppeditorialnew font-medium text-[#43392F] flex flex-col gap-4">
                    <Image
                      src="/assets/icon/facilities/shower.svg"
                      alt="shower"
                      width={40}
                      height={40}
                    />
                    6 Bathrooms
                  </DialogTitle>
                  <DialogDescription>
                    Clean and modern bathrooms for your convenience.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger className="flex items-center justify-center py-4 bg-[#EFF0DE] text-[#43392F] rounded-sm hover:shadow-sm transition duration-300 ease-in-out">
                <Image
                  src="/assets/icon/facilities/grill.svg"
                  alt="grill"
                  width={40}
                  height={40}
                />
              </DialogTrigger>
              <DialogContent className="w-80 bg-[#EFF0DE] rounded-sm">
                <DialogHeader className="text-start">
                  <DialogTitle className="text-xl font-ppeditorialnew font-medium text-[#43392F] flex flex-col gap-4">
                    <Image
                      src="/assets/icon/facilities/grill.svg"
                      alt="grill"
                      width={40}
                      height={40}
                    />
                    Outdoor & BBQ Area
                  </DialogTitle>
                  <DialogDescription>
                    Perfect for outdoor meals and barbecues.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger className="flex items-center justify-center py-4 bg-[#EFF0DE] text-[#43392F] rounded-sm hover:shadow-sm transition duration-300 ease-in-out">
                <Image
                  src="/assets/icon/facilities/knifeandfork.svg"
                  alt="knifeandfork"
                  width={40}
                  height={40}
                />
              </DialogTrigger>
              <DialogContent className="w-80 bg-[#EFF0DE] rounded-sm">
                <DialogHeader className="text-start">
                  <DialogTitle className="text-xl font-ppeditorialnew font-medium text-[#43392F] flex flex-col gap-4">
                    <Image
                      src="/assets/icon/facilities/knifeandfork.svg"
                      alt="knifeandfork"
                      width={40}
                      height={40}
                    />
                    Modern Kitchen
                  </DialogTitle>
                  <DialogDescription>
                    Everything you need to cook your favorite meals.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger className="flex items-center justify-center py-4 bg-[#EFF0DE] text-[#43392F] rounded-sm hover:shadow-sm transition duration-300 ease-in-out">
                <Image
                  src="/assets/icon/facilities/billiardball.svg"
                  alt="billiardball"
                  width={40}
                  height={40}
                />
              </DialogTrigger>
              <DialogContent className="w-80 bg-[#EFF0DE] rounded-sm">
                <DialogHeader className="text-start">
                  <DialogTitle className="text-xl font-ppeditorialnew font-medium text-[#43392F] flex flex-col gap-4">
                    <Image
                      src="/assets/icon/facilities/billiardball.svg"
                      alt="billiardball"
                      width={40}
                      height={40}
                    />
                    Billiard Room
                  </DialogTitle>
                  <DialogDescription>
                    Have fun with a game of billiards.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger className="flex items-center justify-center py-4 bg-[#EFF0DE] text-[#43392F] rounded-sm hover:shadow-sm transition duration-300 ease-in-out">
                <Image
                  src="/assets/icon/facilities/pool.svg"
                  alt="pool"
                  width={40}
                  height={40}
                />
              </DialogTrigger>
              <DialogContent className="w-80 bg-[#EFF0DE] rounded-sm">
                <DialogHeader className="text-start">
                  <DialogTitle className="text-xl font-ppeditorialnew font-medium text-[#43392F] flex flex-col gap-4">
                    <Image
                      src="/assets/icon/facilities/pool.svg"
                      alt="pool"
                      width={40}
                      height={40}
                    />
                    Private Swimming Pool
                  </DialogTitle>
                  <DialogDescription>
                    A refreshing pool all to yourself.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger className="flex items-center justify-center py-4 bg-[#EFF0DE] text-[#43392F] rounded-sm hover:shadow-sm transition duration-300 ease-in-out col-span-2">
                <Image
                  src="/assets/icon/facilities/car.svg"
                  alt="car"
                  width={40}
                  height={40}
                />
              </DialogTrigger>
              <DialogContent className="w-80 bg-[#EFF0DE] rounded-sm">
                <DialogHeader className="text-start">
                  <DialogTitle className="text-xl font-ppeditorialnew font-medium text-[#43392F] flex flex-col gap-4">
                    <Image
                      src="/assets/icon/facilities/car.svg"
                      alt="car"
                      width={40}
                      height={40}
                    />
                    Parking Space
                  </DialogTitle>
                  <DialogDescription>
                    Safe and convenient parking for your vehicle.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
