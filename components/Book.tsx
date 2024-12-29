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
      <div className="h-full flex items-center max-w-7xl mx-auto px-4 lg:px-0 py-16">
        <div className="flex flex-col justify-center items-center w-full gap-8">
          <h2 className="font-ppeditorialnew text-4xl lg:text-6xl text-[#43392F] font-thin tracking-[0.5px] z-10">
            Book Your Date Now
          </h2>
          <div className="bg-[#183621] flex flex-col items-center justify-center rounded-none z-10 py-12 gap-8 px-4 lg:px-8 shadow-lg">
            <div className="flex flex-col items-center gap-4 text-center">
              <h6 className="font-ppeditorialnew text-2xl lg:text-4xl text-[#EFF0DE]">
                Ready to escape to paradise?
              </h6>
              <p className="text-[#EFF0DE] font-satoshi text-sm lg:text-base">
                our whatsapp booking service makes it easy to inquire, book, and
                manage your villa stay.
              </p>
            </div>
            <div className="w-full flex justify-center items-center">
              <Image
                src={"/assets/images/book/qrcode.avif"}
                width={225}
                height={225}
                alt="qrcode"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
