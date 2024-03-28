import ExperienceSelectionScrollPath from "@/components/trigger/experience-page/experience-selection-scroll-path";
import { Experience } from "@/data/org-exp-section-data";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

interface ExperienceSelectionSectionProps {
  experiences: Experience[];
}

const ExperienceSelectionSection: React.FC<ExperienceSelectionSectionProps> = ({
  experiences,
}) => {
  const [experienceIndex, setExperienceIndex] = useState(0);
  return (
    <div className={twMerge("w-full h-full", "flex flex-row justify-between ")}>
      <div
        className={twMerge("flex flex-row gap-x-5 h-full w-fit", "pl-32 py-24")}
      >
        <ExperienceSelectionScrollPath
          experiences={experiences}
          setExperienceIndex={setExperienceIndex}
          currentExperienceIndex={experienceIndex}
        />
      </div>
    </div>
  );
};

export default ExperienceSelectionSection;
