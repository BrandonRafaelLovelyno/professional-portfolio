import React from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

interface CarouselImgProps {
  img: string;
  expIndex: number;
  currentIndex: number;
  zIndex: number;
}

function determineVariant(expIndex: number, currentIndex: number): string {
  if (currentIndex == expIndex) {
    return "onView";
  } else if (expIndex > currentIndex) {
    if (expIndex == currentIndex + 1) {
      return "onNext";
    } else {
      return "onFarNext";
    }
  } else {
    return "onPrev";
  }
}

const CarouselImg: React.FC<CarouselImgProps> = ({
  img,
  expIndex,
  currentIndex,
  zIndex,
}) => {
  const variant = determineVariant(expIndex, currentIndex);
  const mainControl = useAnimation();
  return (
    <motion.div
      className={twMerge("w-[60%] h-[60%] absolute top-1/2 left-1/2")}
      variants={{
        onPrev:
          expIndex % 2 == 0
            ? { x: "-0%", y: "-50%" }
            : { x: "100%", y: "-50%" },
        onNext:
          expIndex % 2 == 0
            ? { x: "-50%", y: "-40%" }
            : { x: "-40%", y: "-40%" },
        onView: { x: "-50%", y: "-50%" },
        onFarNext: {},
      }}
      animate={variant}
    >
      <div className="text-2xl flex flex-col justify-center items-center h-full">
        <span>{variant}</span>
        {/* <Image alt="" src={img} fill objectFit="cover" /> */}
      </div>
    </motion.div>
  );
};

export default CarouselImg;
