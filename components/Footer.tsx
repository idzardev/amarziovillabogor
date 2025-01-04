"use client";

import { NavLinks } from "@/constants/NavData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className="bg-[#EFF0DE] h-full w-full py-16 md:pb-3 lg:pb-6">
      <div className="h-full flex items-center max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col justify-center items-center w-full gap-3 lg:flex-row lg:justify-between lg:max-w-7xl lg:mx-auto">
          <div className="flex items-center justify-center gap-4">
            {NavLinks.map((link) => (
              <Link
                href={link.url}
                key={link.label}
                className={`flex flex-col w-full items-center justify-center py-2 font-satoshi font-medium tracking-wider text-sm uppercase ${
                  pathname === link.url
                    ? "text-[#43392F]"
                    : "text-[#BFBFBF] hover:text-[#43392F]"
                }`}
              >
                <p className="md:px-2 lg:px-4">{link.label}</p>
              </Link>
            ))}
          </div>

          <p className="text-xs lg:text-sm font-satoshi font-medium text-[#43392F]">
            2024 AMARZIO VILLA. ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
      <div className="w-full flex justify-center md:pt-4">
        <p className="hidden md:flex md:text-8xl lg:text-[150px] font-satoshi font-medium text-[#FBF9EC]">
          AMARZIO VILLA
        </p>
      </div>
    </footer>
  );
};

export default Footer;
