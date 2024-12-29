const CarouselDots = () => {
  return (
    <div className="flex justify-center gap-2 mt-4">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          className={`h-2 w-2 rounded-full ${
            index === 0 ? "bg-[#43392F]" : "bg-[#43392F]/30"
          }`}
        />
      ))}
    </div>
  );
};

export default CarouselDots;
