import { Experience } from "@/data/org-exp-section-data";
import React from "react";
import { twMerge } from "tailwind-merge";
import { Variants, motion } from "framer-motion";

interface ExperienceSelectionScrollPathProps {
  currentExperienceIndex: number;
  setExperienceIndex: (index: number) => void;
  experiences: Experience[];
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

const ExperienceSelectionScrollPath: React.FC<
  ExperienceSelectionScrollPathProps
> = ({ currentExperienceIndex, experiences, setExperienceIndex }) => {
  return (
    <div className="w-fit h-fit flex flex-col items-center">
      {experiences.map((experience, index) => (
        <>
          <motion.button
            className={twMerge(
              "rounded-full bg-gray-400 flex justify-center items-center",
              "w-4 h-4 relative",
              currentExperienceIndex != index &&
                "backdrop-blur-lg bg-opacity-30",
              "transition-all duration-300 ease-in-out"
            )}
            animate={
              currentExperienceIndex === index ? "isActive" : "isNotActive"
            }
            variants={variant}
            onClick={() => setExperienceIndex(index)}
          >
            <span className="absolute text-white font-bold text-xs">
              {index + 1}
            </span>
          </motion.button>
          {index !== experiences.length - 1 && (
            <div className="h-20 w-[0.5px] bg-white" />
          )}
        </>
      ))}
    </div>
  );
};

export default ExperienceSelectionScrollPath;
