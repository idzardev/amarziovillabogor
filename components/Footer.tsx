"use client";

import { NavLinks } from "@/constants/NavData";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className="bg-[#EFF0DE] h-full w-full py-16">
      <div className="h-full flex items-center max-w-7xl mx-auto px-4 lg:px-0">
        <div className="flex flex-col justify-center items-center w-full gap-2">
          <div className="flex items-center gap-4">
            {NavLinks.map((link) => (
              <Link
                href={link.url}
                key={link.label}
                className={`flex flex-col w-full py-2 font-satoshi font-medium tracking-wider text-sm uppercase ${
                  pathname === link.url
                    ? "text-[#43392F]"
                    : "text-[#BFBFBF] hover:text-[#43392F]"
                }`}
              >
                <div className="flex gap-2 items-center">
                  <p className="pl-4 pb-4">{link.label}</p>
                </div>
              </Link>
            ))}
          </div>

          <p className="text-xs lg:text-sm font-satoshi font-medium text-[#43392F]">
            2024 AMARZIO VILLA. ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
