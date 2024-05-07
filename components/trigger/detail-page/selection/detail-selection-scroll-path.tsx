import { Experience } from "@/data/experience/org-exp/org-exp-data";
import React from "react";
import { twMerge } from "tailwind-merge";
import { Variants, motion } from "framer-motion";

interface DetailSelectionScrollPathProps {
  currentIndex: number;
  setIndex: (index: number) => void;
  array: any[];
}

const variant: Variants = {
  isNotActive: {
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  isActive: {
    scale: 1.5,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const DetailSelectionScrollPath: React.FC<DetailSelectionScrollPathProps> = ({
  currentIndex,
  array,
  setIndex,
}) => {
  return (
    <div className="w-fit h-fit flex flex-col items-center">
      {array.map((_, index) => (
        <>
          <motion.button
            className={twMerge(
              "rounded-full bg-gray-400 flex justify-center items-center",
              "w-4 h-4 relative",
              currentIndex != index && "backdrop-blur-lg bg-opacity-30",
              "transition-all duration-300 ease-in-out"
            )}
            animate={currentIndex === index ? "isActive" : "isNotActive"}
            variants={variant}
            onClick={() => setIndex(index)}
          >
            <span className="absolute text-white font-bold text-xs">
              {index + 1}
            </span>
          </motion.button>
          {index !== array.length - 1 && (
            <div className="h-20 w-[0.5px] bg-white" />
          )}
        </>
      ))}
    </div>
  );
};

export default DetailSelectionScrollPath;
