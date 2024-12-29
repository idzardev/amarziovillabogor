import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const satoshi = localFont({
  src: [
    {
      path: "../public/fonts/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Light.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/Satoshi-Variable.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});

const ppEditorialNew = localFont({
  src: [
    {
      path: "../public/fonts/PPEditorialNew-Regular-BF644b214ff145f.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/PPEditorialNew-Ultralight-BF644b21500d0c0.otf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-ppeditorial",
});

export const metadata: Metadata = {
  title: "Amarzio Villa Bogor",
  description: "Amarzio Villa Bogor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.variable} ${ppEditorialNew.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
