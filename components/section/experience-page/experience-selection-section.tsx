import ExperienceSelectionScrollPath from "@/components/trigger/experience-page/experience/experience-selection-scroll-path";
import ExperienceInformation from "@/components/trigger/experience-page/experience/experience-information";
import { Experience } from "@/data/experience/org-exp-data";
import React, { useContext } from "react";
import { twMerge } from "tailwind-merge";
import ExperienceCardDeck from "@/components/sub-section/experience-page/experience-card-deck";
import { Variants, motion } from "framer-motion";
import { ExperienceAndEventContext } from "@/components/provider/experience-and-event-provider";

interface ExperienceSelectionSectionProps {
  experiences: Experience[];
}

const experienceInformationVariants: Variants = {
  isSelecting: {
    x: 0,
    scale: 1,
    transition: { delay: 0.9, duration: 1, ease: [0.6, 0.05, -0.01, 0.9] },
  },
  isNotSelecting: { x: "-230%", scale: 2.3, transition: { duration: 1.2 } },
};

const experienceCardDeckVariants: Variants = {
  isSelecting: {
    x: 0,
    scale: 1,
    transition: { delay: 0.8, duration: 0.9, ease: [0.6, 0.05, -0.01, 0.9] },
  },
  isNotSelecting: { x: "230%", scale: 2.3 },
};

const ExperienceSelectionSection: React.FC<ExperienceSelectionSectionProps> = ({
  experiences,
}) => {
  const { experienceIndex, setExperienceIndex, isSelectingExperience } =
    useContext(ExperienceAndEventContext);
  return (
    <div
      className={twMerge(
        "w-full h-full",
        "flex flex-row",
        "absolute",
        isSelectingExperience ? "z-20" : "z-10"
      )}
    >
      <motion.div
        className={twMerge(
          "flex flex-row gap-x-32 h-full w-[52%] items-center",
          "pl-20 pr-10"
        )}
        initial={{
          x: 0,
        }}
        animate={isSelectingExperience ? "isSelecting" : "isNotSelecting"}
        variants={experienceInformationVariants}
      >
        <ExperienceSelectionScrollPath
          experiences={experiences}
          setExperienceIndex={setExperienceIndex}
          currentExperienceIndex={experienceIndex}
        />

        <ExperienceInformation
          experienceIndex={experienceIndex}
          experiences={experiences}
        />
      </motion.div>
      <motion.div
        variants={experienceCardDeckVariants}
        className={twMerge(
          "flex-1 h-full",
          "flex flex-col gap-y-5 justify-center items-start"
        )}
        initial={{
          x: 0,
        }}
        animate={isSelectingExperience ? "isSelecting" : "isNotSelecting"}
        transition={{ duration: 1.2, ease: [0.6, 0.05, -0.01, 0.9] }}
      >
        <ExperienceCardDeck
          experienceIndex={experienceIndex}
          experiences={experiences}
          setExperienceIndex={setExperienceIndex}
        />
      </motion.div>
    </div>
  );
};

export default ExperienceSelectionSection;
