import React from "react";
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface CarouselImgProps {
  img: string;
  expIndex: number;
  currentIndex: number;
}

function determineVariant(expIndex: number, currentIndex: number): string {
  if (currentIndex == expIndex) {
    return "onView";
  } else if (expIndex > currentIndex) {
    return "onNext";
  } else {
    return "onPrev";
  }
}

const CarouselImg: React.FC<CarouselImgProps> = ({
  img,
  expIndex,
  currentIndex,
}) => {
  const variant = determineVariant(expIndex, currentIndex);
  return (
    <motion.div
      className={twMerge("w-[55%] h-[60%] absolute top-1/2 left-1/2")}
      variants={{
        onPrev:
          expIndex % 2 == 0
            ? {
                x: "20%",
                y: "-100%",
                rotate: 10 + expIndex * 2 > 20 ? 10 : 10 + expIndex * 2,
                scale: 0.7,
                zIndex: expIndex,
              }
            : {
                x: "-120%",
                y: "0",
                rotate: 10 + expIndex * 2 > 20 ? 10 : 10 + expIndex * 2,
                scale: 0.7,
                zIndex: expIndex,
              },
        onNext:
          expIndex % 2 == 0
            ? { x: "-50%", y: "-50%", rotate: 5 }
            : { x: "-50%", y: "-50%", rotate: -5 },
        onView: { x: "-50%", y: "-50%", zIndex: -10 },
      }}
      transition={{ type: "spring", stiffness: 100 }}
      animate={variant}
    >
      <div
        className={twMerge(
          "text-2xl flex flex-col justify-center items-center h-full  text-black",
          expIndex == 0 && "bg-red-500",
          expIndex == 1 && "bg-yellow-500",
          expIndex == 2 && "bg-green-500",
          expIndex == 3 && "bg-slate-700"
        )}
      >
        <span>{variant}</span>
        {/* <Image alt="" src={img} fill objectFit="cover" /> */}
      </div>
    </motion.div>
  );
};

export default CarouselImg;
