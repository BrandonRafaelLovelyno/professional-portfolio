import React from "react";
import { inView, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import ReactPlayer from "react-player";

interface CarouselAssetProps {
  img?: string;
  video?: string;
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

const CarouselAsset: React.FC<CarouselAssetProps> = ({
  img,
  evIndex,
  currentIndex,
  video,
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
          "text-2xl flex flex-col justify-center items-center h-full text-black bg-black"
        )}
      >
        {img ? (
          <Image
            alt=""
            src={img}
            fill
            objectFit="cover"
            className="brightness-75"
          />
        ) : (
          <ReactPlayer
            url={video}
            width={"100%"}
            height={"100%"}
            playing={true}
            loop={true}
            controls={false}
            muted={true}
            className="brightness-75"
          />
        )}
      </div>
    </motion.div>
  );
};

export default CarouselAsset;
