"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const GalleryPage = () => {
  const [showAll, setShowAll] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const totalImages = 36;
  const initialDisplay = 8;
  const remainingCount = totalImages - initialDisplay;
  const displayedImages = showAll ? totalImages : initialDisplay;

  const minSwipeDistance = 50;

  const handleImageClick = (index: number): void => {
    if (index === initialDisplay - 1 && !showAll) {
      setShowAll(true);
    } else {
      setCurrentImageIndex(index);
      setShowModal(true);
    }
  };

  const handlePrevImage = (): void => {
    setCurrentImageIndex((prev) => (prev === 0 ? totalImages - 1 : prev - 1));
  };

  const handleNextImage = (): void => {
    setCurrentImageIndex((prev) => (prev === totalImages - 1 ? 0 : prev + 1));
  };

  const handleClose = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>): void => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>): void => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = (): void => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNextImage();
    }
    if (isRightSwipe) {
      handlePrevImage();
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (!showModal) return;

      if (e.key === "ArrowLeft") {
        handlePrevImage();
      } else if (e.key === "ArrowRight") {
        handleNextImage();
      } else if (e.key === "Escape") {
        setShowModal(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showModal]);

  return (
    <>
      <div className="w-full h-full pb-16 pt-28 md:pt-32">
        <div className="flex flex-col gap-4 h-full items-center max-w-7xl mx-auto px-4 lg:px-12">
          <div className="flex flex-col justify-center items-center w-full gap-3 text-center">
            <h6 className="font-ppeditorialnew text-lg md:text-2xl text-[#43392F] font-thin tracking-[0.5px]">
              Galleries
            </h6>
            <h1 className="font-ppeditorialnew text-4xl md:text-6xl text-[#43392F] font-thin tracking-[0.5px] px-8 md:px-40 leading-[1.5] md:leading-snug">
              Take a Look Around
            </h1>
            <p className="text-sm md:text-base font-satoshi font-medium text-[#43392F] md:px-12">
              Browse through our gallery and get inspired by the beauty,
              comfort, and elegance of your next getaway destination
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-3 pt-8">
            {Array.from({ length: displayedImages }, (_, index) => (
              <div
                key={index}
                className="w-full h-full relative overflow-hidden cursor-pointer"
                onClick={() => handleImageClick(index)}
              >
                <Image
                  src={`/assets/images/galleriesPage/img${index + 1}.avif`}
                  alt="gallery"
                  width={1000}
                  height={1000}
                  className={`object-cover transition duration-300 ease-in-out
                    ${
                      index !== initialDisplay - 1 || showAll
                        ? "hover:scale-110"
                        : "cursor-pointer"
                    }`}
                />

                {index === initialDisplay - 1 && !showAll && (
                  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex flex-col tracking-[0.5px] font-ppeditorialnew items-center justify-center text-[#EFF0DE] cursor-pointer transition duration-300 hover:bg-black/60">
                    <span className="text-3xl font-bold">
                      {remainingCount}+
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {showModal && (
        <div
          ref={modalRef}
          className="fixed inset-0 bg-black z-50 flex items-center justify-center"
          onClick={handleClose}
        >
          <div
            className="relative w-full h-full flex items-center justify-center lg:max-w-7xl mx-auto"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <Button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-[#EFF0DE] text-2xl z-50 hover:opacity-80 p-3 md:p-4"
            >
              <X />
            </Button>

            <Button
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                handlePrevImage();
              }}
              className="absolute left-4 lg:left-24 xl:left-32 text-[#EFF0DE] text-4xl p-2 md:p-4 z-50"
            >
              <ChevronLeft />
            </Button>

            <Button
              onClick={(e: React.MouseEvent) => {
                e.stopPropagation();
                handleNextImage();
              }}
              className="absolute right-4 lg:right-24 xl:right-32 text-[#EFF0DE] text-4xl p-2 md:p-4 z-50"
            >
              <ChevronRight />
            </Button>

            <div
              className="select-none lg:mt-8"
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <Image
                src={`/assets/images/galleriesPage/img${
                  currentImageIndex + 1
                }.avif`}
                alt={`gallery image ${currentImageIndex + 1}`}
                width={1200}
                height={800}
                className="object-contain max-h-[85vh] w-auto"
                draggable="false"
              />
            </div>

            <div className="absolute top-6 left-1/2 tracking-[0.5px] -translate-x-1/2 text-[#EFF0DE] font-ppeditorialnew text-xl">
              {currentImageIndex + 1}/{totalImages}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryPage;
