import Image from "next/image";
import React, { useContext } from "react";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { ExperienceAndEventContext } from "@/components/provider/experience-and-event-provider";

interface ExperiencePageBackgroundProps {
  images: string[];
}

const experienceBackgroundVariants: Variants = {
  onLower: {
    opacity: 0,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  onView: {
    opacity: 1,
    scale: 1.1,
    transition: {
      duration: 0.5,
    },
  },
  onUpper: {
    opacity: 0,
    scale: 1.2,
    transition: {
      duration: 0.5,
    },
  },
  isNotSelectingExperience: {
    opacity: 0,
    scale: 1.2,
    transition: {
      duration: 0.5,
    },
  },
};

const ExperiencePageBackground: React.FC<ExperiencePageBackgroundProps> = ({
  images,
}) => {
  const { experienceIndex, isSelectingExperience } = useContext(
    ExperienceAndEventContext
  );
  return (
    <>
      {images.map((image, index) => (
        <div
          className={twMerge("absolute overflow-hidden", "w-full h-full z-[1]")}
          key={index}
        >
          <motion.div
            className={twMerge("h-full w-full", "relative")}
            key={index}
            variants={experienceBackgroundVariants}
            animate={
              isSelectingExperience
                ? experienceIndex > index
                  ? "onLower"
                  : experienceIndex < index
                  ? "onUpper"
                  : "onView"
                : "isNotSelectingExperience"
            }
          >
            <Image src={image} fill objectFit="cover" alt={`${index}`} />
          </motion.div>
        </div>
      ))}
    </>
  );
};

export default ExperiencePageBackground;
