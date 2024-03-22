import { Experience } from "@/data/org-exp-section-data";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

interface ExperienceCardProps {
  experience: Experience;
  isSelected: boolean;
  onClick: () => void;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  isSelected,
  onClick,
}) => {
  return (
    <motion.div
      initial={{
        y: "100%",
      }}
      animate={{
        y: "-50%",
        transition: { duration: 1, delay: Math.random() * 1 },
      }}
      className={twMerge(
        "h-52 w-40 rounded-lg overflow-hidden relative shadow-xl",
        "flex flex-col p-3 justify-end items-start cursor-pointer"
      )}
      whileHover={{ y: "-110%", transition: { duration: 0.5, delay: 0 } }}
      onClick={onClick}
    >
      <Image
        src={experience.cardImage}
        fill
        objectFit="cover"
        alt={experience.cardImage}
        priority
        style={{ filter: isSelected ? "none" : "brightness(0.5)" }}
      />
      <p className="z-20 text-sm font-bold tracking-widest">
        {experience.position}
      </p>
    </motion.div>
  );
};

export default ExperienceCard;
