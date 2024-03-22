import { Experience } from "@/data/org-exp-section-data";
import Image from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <motion.div
      initial={{
        y: "100%",
      }}
      animate={{ y: 0, transition: { duration: 1, delay: Math.random() * 1 } }}
      className={twMerge(
        "h-52 w-40 rounded-lg overflow-hidden relative shadow-xl"
      )}
      whileHover={{ y: "-30%", transition: { duration: 0.25, delay: 0 } }}
    >
      <Image
        src={experience.cardImage}
        fill
        objectFit="cover"
        alt={experience.cardImage}
        priority
      />
    </motion.div>
  );
};

export default ExperienceCard;
