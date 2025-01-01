import Image from "next/image";
import React from "react";

const BookSection = () => {
  return (
    <section className="h-full w-full relative">
      <Image
        src={"/assets/images/book/bg.avif"}
        alt="Pattern"
        width={1920}
        height={1080}
        className="absolute w-full h-full object-cover z-0"
      />
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 z-[5]" />

      <div className="h-full flex items-center max-w-7xl mx-auto px-4 md:px-28 lg:px-0 py-16">
        <div className="flex flex-col justify-center items-center w-full gap-8">
          <h2 className="font-ppeditorialnew text-4xl md:text-5xl lg:text-6xl text-[#EFF0DE] tracking-[0.5px] z-10 pb-4">
            Book Your Date Now
          </h2>
          <div className="bg-[#183621] flex flex-col md:flex-row items-center justify-center rounded-none z-10 py-12 gap-8 px-4 md:px-8 shadow-lg">
            <div className="flex flex-col items-center gap-4 text-center w-full">
              <h6 className="font-ppeditorialnew text-2xl lg:text-4xl text-[#EFF0DE] tracking-[0.5px] md:text-start w-full">
                Ready to escape to paradise?
              </h6>
              <p className="font-satoshi w-full text-sm md:text-base md:text-start text-[#EFF0DE] text-center max-w-2xl md:max-w-3xl mx-auto z-10 font-medium">
                Our whatsapp booking service makes it easy to inquire, book, and
                manage your villa stay.
              </p>
            </div>
            <div className="w-full md:w-fit flex justify-center items-center">
              <Image
                src={"/assets/images/book/qrcode.avif"}
                width={300}
                height={300}
                alt="qrcode"
                className="object-cover md:w-[225px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
