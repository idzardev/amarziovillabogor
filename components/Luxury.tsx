import Image from "next/image";
import React from "react";

const LuxurySection = () => {
  return (
    <section className="h-full w-full py-16">
      <div className="h-full flex items-center max-w-7xl mx-auto px-4 md:px-0">
        <div className="flex justify-between md:flex-row flex-col gap-4 items-center">
          <div className="hidden md:flex justify-start mt-24">
            <Image
              src="/assets/images/luxury/luxury1.avif"
              alt="luxury"
              width={450}
              height={400}
              className="object-cover"
            />
          </div>
          <div className="space-y-8 w-full text-center">
            <h2 className="text-4xl lg:text-6xl font-ppeditorialnew font-thin tracking-[0.5px] text-[#43392F]">
              <span className="italic">Luxury</span> in Nature
            </h2>
            <p className="font-satoshi text-sm md:text-xl lg:text-base text-[#43392F] text-center max-w-2xl mx-auto z-10 font-medium md:px-4">
              Hidden in the beautiful highlands of Cisarua, Bogor, Amarzio Villa
              is your go-to escape for a mix of cozy comfort and stunning
              mountain views. Just a quick drive from Jakarta, it&apos;s the
              perfect spot to relax, recharge, and enjoy a little luxury in
              nature.
            </p>
          </div>
          <div className="flex gap-3 md:hidden pt-12">
            <Image
              src="/assets/images/luxury/luxury2.avif"
              alt="luxury"
              width={450}
              height={400}
              className="object-cover"
            />
            <Image
              src="/assets/images/luxury/luxury1.avif"
              alt="luxury"
              width={450}
              height={400}
              className="object-cover"
            />
          </div>
          <div className="hidden md:flex justify-end mt-0">
            <Image
              src="/assets/images/luxury/luxury2.avif"
              alt="luxury"
              width={450}
              height={400}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LuxurySection;
