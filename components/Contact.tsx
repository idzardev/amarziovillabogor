import Image from "next/image";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import Link from "next/link";
import { ContactLinks } from "@/constants/ContactData";

const ContactSection = () => {
  return (
    <section className="bg-[#FBF9EC] h-full w-full py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 h-full items-center max-w-7xl mx-auto px-0">
        <div className="flex flex-col justify-center items-center w-full gap-8">
          <h2 className="font-ppeditorialnew text-4xl lg:text-6xl text-[#43392F] font-thin tracking-[0.5px]">
            Contact Us
          </h2>
          <div className="flex flex-col items-center gap-2 px-8">
            {ContactLinks.map((link) => (
              <div key={link.name} className="flex items-center gap-4 w-full">
                <Link
                  href={link.link}
                  key={link.name}
                  className="flex items-center gap-3 font-satoshi text-lg font-light tracking-wider text-[#43392F]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={link.icon}
                    alt={link.name}
                    width={24}
                    height={24}
                    className="flex-shrink-0 text-[#43392F]"
                  />
                  {link.title}
                </Link>
              </div>
            ))}
          </div>
          <div>
            <Dialog>
              <DialogTrigger>
                <Image
                  src={"/assets/images/contact/map.avif"}
                  alt="Map"
                  width={1920}
                  height={1080}
                  className="object-cover rounded-none"
                />
              </DialogTrigger>
              <DialogContent className="w-80">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-1 justify-center">
                    <Image
                      src="/location.svg"
                      alt="Location"
                      width={24}
                      height={24}
                    />
                    <span className="text-[#43392F] font-satoshi text-lg">
                      Amarziovillabogor
                    </span>
                  </DialogTitle>
                </DialogHeader>
                <DialogDescription>
                  <Button
                    asChild
                    className="w-full bg-[#183621] text-[#EFF0DE] rounded-none py-2 px-4 hover:bg-[#1A4731] transition duration-300 ease-in-out"
                  >
                    <Link href="https://www.google.com/maps/place/Villa+Amarzio/@-6.6763246,106.934306,17z/data=!3m1!4b1!4m6!3m5!1s0x2e69b70072b8e4d7:0xa097195aa83bb4d4!8m2!3d-6.6763246!4d106.9368809!16s%2Fg%2F11vzb6y86l?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D">
                      Tampilkan Peta
                    </Link>
                  </Button>
                </DialogDescription>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
