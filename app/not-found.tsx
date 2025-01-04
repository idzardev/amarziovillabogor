"use client";

import Link from "next/link";
import Image from "next/image";

const NotFound = () => {
  return (
    // Removed any wrapper that might include navbar/footer
    <div className="min-h-screen w-full bg-[#183621] relative">
      {/* Background Pattern */}
      <Image
        src="/assets/images/pattern/pattern.png"
        alt="Pattern"
        width={1920}
        height={1080}
        className="absolute w-full h-full object-cover mix-blend-multiply"
        priority
      />

      {/* Content Container */}
      <div className="absolute inset-0 flex items-center justify-center px-4 lg:pt-12">
        <div className="max-w-2xl w-full text-center relative z-10">
          {/* 404 Text */}
          <h1 className="font-ppeditorialnew text-9xl md:text-7xl text-[#EFF0DE] mb-4">
            404
          </h1>

          {/* Description */}
          <div className="space-y-4 mb-8">
            <h2 className="font-ppeditorialnew text-3xl md:text-4xl text-[#EFF0DE]">
              Page Not Found
            </h2>
            <p className="font-satoshi text-base md:text-lg text-[#EFF0DE]/80">
              Oops! The page you are looking for might have been removed, had
              its name changed, or is temporarily unavailable.
            </p>
          </div>

          {/* Back to Home Button */}
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-3 font-satoshi text-sm md:text-base text-[#183621] bg-[#EFF0DE] hover:bg-[#EFF0DE]/90 transition-colors duration-300"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
