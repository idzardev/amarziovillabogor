"use client";

import { NavLinks } from "@/constants/NavData";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { IoCallOutline, IoClose, IoLocationOutline } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { Separator } from "./ui/separator";
import ScrollChangeBackground from "./ScrollChangedBackgroundNavbar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <ScrollChangeBackground />
      <nav className="fixed w-full top-0 left-0 right-0 z-50 px-4 md:px-8 py-6 flex justify-between items-center bg-transparent transition-colors duration-300 ease-in-out">
        <div className="flex gap-4 max-lg:hidden">
          {NavLinks.map((link) => (
            <Link
              href={link.url}
              key={link.label}
              className={`flex px-2 py-2 font-satoshi font-medium text-sm md:text-base uppercase ${
                pathname === link.url
                  ? "text-[#EFF0DE]"
                  : "text-[#BFBFBF] hover:text-[#EFF0DE]"
              }`}
            >
              <div className="flex gap-2 items-center">
                <p>{link.label}</p>
              </div>
            </Link>
          ))}
        </div>
        <Link href="/">
          <span className="text-[#EFF0DE] text-base font-extralight tracking-widest lg:text-4xl font-ppeditorialnew lg:pr-20">
            AMARZIO VILLA
          </span>
        </Link>
        <Link
          href="/"
          className="gap-2 items-center font-satoshi text-[#EFF0DE] hidden lg:flex"
        >
          <span>BOOK NOW</span>
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </Link>

        {/* UI Mobile */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              className="size-8 bg-transparent text-[#EFF0DE] border-none hover:bg-transparent lg:hidden p-1"
              aria-label="Menu"
            >
              {isOpen ? (
                <IoClose className="size-8" />
              ) : (
                <HiMenu className="size-8" />
              )}
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-full bg-[#0B3121] text-[#EFF0DE] border-none p-6"
          >
            <SheetHeader>
              <SheetTitle className="text-[#EFF0DE] sr-only">
                Navigation Menu
              </SheetTitle>
            </SheetHeader>
            <Link href="/">
              <span className="text-[#EFF0DE] text-base font-extralight tracking-widest font-ppeditorialnew">
                AMARZIO VILLA
              </span>
            </Link>
            <div className="flex flex-col gap-8">
              <div className="flex-1 mt-8">
                <div className="space-y-6">
                  {NavLinks.map((link) => (
                    <Link
                      href={link.url}
                      key={link.label}
                      onClick={() => setIsOpen(false)}
                      className={`flex flex-col w-full py-2 font-satoshi tracking-wider text-2xl uppercase ${
                        pathname === link.url
                          ? "text-[#EFF0DE]"
                          : "text-[#BFBFBF] hover:text-[#EFF0DE]"
                      }`}
                    >
                      <div className="flex gap-2 items-center">
                        <p className="pl-4 pb-4">{link.label}</p>
                      </div>
                      <Separator />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="space-y-4 text-sm">
                <h3 className="text-xl font-satoshi mb-4">Contact Us</h3>
                <Link
                  href="tel:+6281936872903"
                  className="flex items-center gap-3 font-satoshi font-light tracking-wider"
                >
                  <IoCallOutline className="text-xl" />
                  +62 819 3687 2903
                </Link>
                <Link
                  href="mailto:amarziovillabogor@gmail.com"
                  className="flex items-center gap-3 font-satoshi font-light tracking-wider"
                >
                  <MdOutlineEmail className="text-xl" />
                  amarziovillabogor@gmail.com
                </Link>
                <Link
                  href="https://instagram.com/amarziovillabogor"
                  className="flex items-center gap-3 font-satoshi font-light tracking-wider"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-xl" />
                  amarziovillabogor
                </Link>
                <div className="flex items-start gap-3">
                  <IoLocationOutline className="text-xl flex-shrink-0 mt-1" />
                  <span>
                    Jalan Siliwangi, Kampung Pasir Madin Kavling, Cisarua,
                    Bogor.
                  </span>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </>
  );
};

export default Navbar;
