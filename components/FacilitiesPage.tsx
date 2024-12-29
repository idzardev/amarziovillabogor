import { FacilitiesData } from "@/constants/FacilitiesData";
import Image from "next/image";
import React from "react";

const FacilitiesPage = () => {
  return (
    <div className="w-full h-full pb-16 pt-28">
      <div className="flex flex-col gap-4 h-full items-center max-w-7xl mx-auto px-8">
        <div className="flex flex-col justify-center items-center w-full gap-2 text-center">
          <h6 className="font-ppeditorialnew text-lg text-[#43392F] font-thin tracking-[0.5px]">
            Facilities
          </h6>
          <h1 className="font-ppeditorialnew text-4xl lg:text-6xl text-[#43392F] font-thin tracking-[0.5px] px-4">
            Discover the Comforts of Amarzio
          </h1>
          <p className="text-sm lg:text-base font-satoshi font-medium text-[#43392F]">
            From relaxing by your private pool to hosting a BBQ with friends,
            our villa is packed with everything you need for for an awesome
            stay. Explore our facilities and start planning your stay!
          </p>
        </div>
        <div>
          {FacilitiesData.map((facility) => (
            <div
              key={facility.id}
              className="flex flex-col gap-4 lg:gap-8 py-8"
            >
              <div className="grid grid-cols-1 gap-4 lg:gap-8">
                <div className="flex flex-col gap-4 lg:gap-8">
                  <div className="w-full overflow-hidden">
                    <Image
                      src={facility.picture}
                      alt={facility.title}
                      width={1000}
                      height={1000}
                      className="w-full object-cover rounded-sm hover:scale-110 transition duration-300 ease-in-out"
                    />
                  </div>

                  <div className="flex flex-col gap-4 text-center">
                    <h3 className="font-ppeditorialnew text-xl lg:text-2xl text-[##43392F] font-thin tracking-[S0.5px]">
                      {facility.title}
                    </h3>
                    <p className="text-sm lg:text-base font-satoshi font-medium px-4">
                      {facility.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacilitiesPage;
