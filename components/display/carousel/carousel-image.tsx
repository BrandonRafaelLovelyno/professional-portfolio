import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface CarouselImgProps {
  img: string;
  expIndex: number;
  currentIndex: number;
}

const CarouselImg: React.FC<CarouselImgProps> = ({
  img,
  expIndex,
  currentIndex,
}) => {
  return (
    <motion.div
      className="w-32 h-10 absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2"
      variants={{
        onPrev: {},
        onNext: {},
        onCenter: {},
        onFarPrev: {},
        onFavNext: {},
      }}
    >
      <Image src={img} alt="" fill objectFit={"cover"} />
    </motion.div>
  );
};

export default CarouselImg;
