import React, { useContext } from "react";
import { twMerge } from "tailwind-merge";
import KnowMoreButton from "../../landing-page/know-more-button";
import { Experience } from "@/data/experience/org-exp/org-exp-data";
import { Variants, motion } from "framer-motion";
import { ExperienceAndEventContext } from "@/components/provider/experience-and-event-provider";

interface ExperienceInformationProps {
  experiences: Experience[];
  experienceIndex: number;
}

const titleVariants: Variants = {
  onUpper: {
    y: "-150%",
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
    y: "150%",
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
    y: "-150%",
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
    y: "150%",
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
  const { setIsSelectingExperience } = useContext(ExperienceAndEventContext);
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
                  "text-4xl font-bold text-white",
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
                initial={
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
            "relative overflow-hidden flex items-center text-clip"
          )}
        >
          {experiences.map((exp, index) => (
            <>
              <motion.p
                className={twMerge(
                  "text-sm text-white",
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
                initial={
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
          onClick={() => {
            setIsSelectingExperience(false);
          }}
          tailwindColor="bg-white"
          tailwindHoverColor="bg-white"
        />
      </div>
    </div>
  );
};

export default ExperienceInformation;
