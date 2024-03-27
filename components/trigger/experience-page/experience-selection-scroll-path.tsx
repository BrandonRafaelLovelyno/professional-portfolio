import { Experience } from "@/data/org-exp-section-data";
import React from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

interface ExperienceSelectionScrollPathProps {
  currentIndex: number;
  experience: Experience;
}

const ExperienceSelectionScrollPath: React.FC = () => {
  return (
    <div className="w-fit h-fit flex flex-col items-center">
      <motion.button
        className={twMerge(
          "rounded-full bg-gray-400 flex justify-center items-center",
          "w-5 h-5 relative"
        )}
      >
        <span className="absolute text-white font-bold">1</span>
      </motion.button>
      <div className="h-20 w-[0.5px] bg-white" />
    </div>
  );
};

export default ExperienceSelectionScrollPath;
