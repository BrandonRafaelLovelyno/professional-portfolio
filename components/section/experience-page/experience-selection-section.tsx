import ExperienceSelectionScrollPath from "@/components/trigger/experience-page/experience-selection-scroll-path";
import ExperienceInformation from "@/components/trigger/experience-page/experience-information";
import { Experience } from "@/data/org-exp-section-data";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

interface ExperienceSelectionSectionProps {
  experiences: Experience[];
  experienceIndex: number;
  setExperienceIndex: (index: number) => void;
}

const ExperienceSelectionSection: React.FC<ExperienceSelectionSectionProps> = ({
  experiences,
  experienceIndex,
  setExperienceIndex,
}) => {
  return (
    <div className={twMerge("w-full h-full", "flex flex-row justify-between")}>
      <div
        className={twMerge(
          "flex flex-row gap-x-32 h-full w-[46%] items-center",
          "pl-20"
        )}
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
      </div>
    </div>
  );
};

export default ExperienceSelectionSection;
