"use client";

import { useEffect } from "react";

const ScrollChangeBackground = () => {
  useEffect(() => {
    const nav = document.querySelector("nav");
    const handleScroll = () => {
      if (window.scrollY >= 10) {
        nav?.classList.add("bg-[#142C1B]");
        nav?.classList.remove("bg-transparent");
      } else {
        nav?.classList.add("bg-transparent");
        nav?.classList.remove("bg-[#142C1B]");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return null;
};

export default ScrollChangeBackground;
