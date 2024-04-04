import { Experience } from "@/data/org-exp-section-data";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { Variants, motion } from "framer-motion";

interface ExperienceCardProps {
  experience: Experience;
  experienceIndex: number;
  selfIndex: number;
  onClick: () => void;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  experienceIndex,
  selfIndex,
  onClick,
}) => {
  const experienceCardVariants: Variants = {
    onLeft: {
      x: "-100%",
      scale: 0.8,
    },
    onView: {
      x: 0,
    },
    onRight: {
      x: ((selfIndex - experienceIndex) * 100).toString() + "%",
      scale: 0.9,
    },
  };
  return (
    <motion.div
      className={twMerge("w-[220px] h-[360px]", "absolute", "cursor-pointer")}
      initial={
        experienceIndex > selfIndex
          ? "onLeft"
          : experienceIndex < selfIndex
          ? "onRight"
          : "onView"
      }
      animate={
        experienceIndex > selfIndex
          ? "onLeft"
          : experienceIndex < selfIndex
          ? "onRight"
          : "onView"
      }
      variants={experienceCardVariants}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      onClick={onClick}
    >
      <div className="relative w-full h-full">
        <Image
          src={experience.cardImage}
          alt={experience.position}
          fill
          objectFit="cover"
        />
        <div
          className={twMerge(
            "absolute left-3 bottom-3",
            "flex flex-col gap-y-1"
          )}
        >
          <p className="font-extrabold text-sm">{experience.position}</p>
          <p className="font-thin text-xs">lorem ipsum</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
