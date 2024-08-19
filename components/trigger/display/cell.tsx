import { Variants } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

interface Props {
  imageUrl: string;
  title: string;
  onClick?: () => void;
}

const OVERVIEW_VARIANT: Variants = {
  show: {
    opacity: 1,
    translateY: 0,
  },
  hidden: {
    opacity: 0,
    translateY: 5,
  },
};

const Cell: React.FC<Props> = ({ imageUrl, title, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={twMerge("relative", "w-full h-full", "cursor-pointer")}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
      onClick={onClick}
    >
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="absolute z-[-10]"
        objectFit="cover"
      />
      <motion.div
        className={twMerge(
          "absolute bottom-2 right-2",
          "flex flex-col gap-y-2 items-end"
        )}
        variants={OVERVIEW_VARIANT}
        initial="hidden"
        animate={isHovered ? "show" : "hidden"}
      >
        <h4 className={twMerge("font-bold text-xs")}>{title}</h4>
        <button className={twMerge("w-fit px-2", "bg-white")} onClick={onClick}>
          <p className={twMerge("text-black font-bold text-xs")}>view</p>
        </button>
      </motion.div>
    </div>
  );
};
export default Cell;
