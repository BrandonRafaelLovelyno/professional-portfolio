import React from "react";
import { twMerge } from "tailwind-merge";
import KnowMoreButton from "../landing-page/know-more-button";
import { Experience } from "@/data/org-exp-section-data";
import { Variants, motion } from "framer-motion";

interface ExperienceInformationProps {
  experiences: Experience[];
  experienceIndex: number;
}

const titleVariants: Variants = {
  onUpper: {
    y: "-100%",
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
  onView: {
    y: 0,
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
  onLower: {
    y: "100%",
    transition: {
      duration: 0.5,
      type: "spring",
      damping: 15,
      stiffness: 100,
    },
  },
};

const descriptionVariants = {
  onUpper: {
    y: "-100%",
    transition: {
      duration: 0.4,
      delay: 0.3,
    },
  },
  onView: {
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.3,
    },
  },
  onLower: {
    y: "100%",
    transition: {
      duration: 0.4,
      delay: 0.3,
    },
  },
};

const ExperienceInformation: React.FC<ExperienceInformationProps> = ({
  experiences,
  experienceIndex,
}) => {
  return (
    <div className={twMerge("flex flex-col gap-y-10 w-full")}>
      <div className={twMerge("flex flex-col gap-y-5")}>
        <div
          className={twMerge(
            "h-[50px] w-full flex items-center",
            "relative overflow-hidden"
          )}
        >
          {experiences.map((exp, index) => (
            <>
              <motion.h3
                className={twMerge(
                  "text-4xl font-extrabold text-white",
                  "absolute top-0 left-0 w-full h-full"
                )}
                variants={titleVariants}
                animate={
                  experienceIndex > index
                    ? "onUpper"
                    : experienceIndex === index
                    ? "onView"
                    : "onLower"
                }
              >
                {exp.position}
              </motion.h3>
            </>
          ))}
        </div>
        <div
          className={twMerge(
            "h-[100px] w-full",
            "relative overflow-hidden flex items-center"
          )}
        >
          {experiences.map((exp, index) => (
            <>
              <motion.p
                className={twMerge(
                  "text-xs font-extrabold text-white",
                  "absolute top-0 left-0 w-full h-full"
                )}
                variants={descriptionVariants}
                animate={
                  experienceIndex > index
                    ? "onUpper"
                    : experienceIndex === index
                    ? "onView"
                    : "onLower"
                }
              >
                lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </motion.p>
            </>
          ))}
        </div>
      </div>
      <div className={twMerge("w-[80%]")}>
        <KnowMoreButton
          text="see events"
          onClick={() => {}}
          tailwindColor="bg-white"
          tailwindHoverColor="bg-white"
        />
      </div>
    </div>
  );
};

export default ExperienceInformation;
