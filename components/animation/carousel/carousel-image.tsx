import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import Image from "next/image";

interface CarouselImgProps {
  img: string;
  evIndex: number;
  currentIndex: number;
}

function determineVariant(evIndex: number, currentIndex: number): string {
  if (currentIndex == evIndex) {
    return "onView";
  } else if (evIndex > currentIndex) {
    return "onNext";
  } else {
    return "onPrev";
  }
}

const CarouselImg: React.FC<CarouselImgProps> = ({
  img,
  evIndex,
  currentIndex,
}) => {
  const variant = determineVariant(evIndex, currentIndex);
  return (
    <motion.div
      className={twMerge("w-[55%] h-[60%] absolute top-1/2 left-1/2")}
      variants={{
        onPrev:
          evIndex % 2 == 0
            ? {
                x: "20%",
                y: "-100%",
                rotate: 10 + evIndex * 2 > 20 ? 10 : 10 + evIndex * 2,
                scale: 0.7,
                zIndex: evIndex,
              }
            : {
                x: "-120%",
                y: "0",
                rotate: 10 + evIndex * 2 > 20 ? 10 : 10 + evIndex * 2,
                scale: 0.7,
                zIndex: evIndex,
              },
        onNext:
          evIndex % 2 == 0
            ? { x: "-50%", y: "-50%", rotate: 5 }
            : { x: "-50%", y: "-50%", rotate: -5 },
        onView: { x: "-50%", y: "-50%", zIndex: 0 },
      }}
      transition={{ type: "spring", stiffness: 100 }}
      animate={variant}
    >
      <div
        className={twMerge(
          "text-2xl flex flex-col justify-center items-center h-full  text-black",
          evIndex == 0 && "bg-red-500",
          evIndex == 1 && "bg-yellow-500",
          evIndex == 2 && "bg-green-500",
          evIndex == 3 && "bg-slate-700"
        )}
      >
        <Image alt="" src={img} fill objectFit="cover" />
      </div>
    </motion.div>
  );
};

export default CarouselImg;
