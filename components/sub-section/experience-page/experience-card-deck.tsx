import ExperienceCard from "@/components/trigger/experience-page/selection/experience-card";
import { Experience } from "@/data/experience/org-exp/org-exp-data";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

interface ExperienceCardDeckProps {
  experiences: Experience[];
  experienceIndex: number;
  setExperienceIndex: (index: number) => void;
}

const ExperienceCardDeck: React.FC<ExperienceCardDeckProps> = ({
  experiences,
  experienceIndex,
  setExperienceIndex,
}) => {
  return (
    <div
      className={twMerge(
        "flex flex-row gap-x-5 justify-start",
        "relative w-full h-[420px] overflow-hidden items-center pl-10"
      )}
    >
      {experiences.map((experience, index) => (
        <ExperienceCard
          experience={experience}
          experienceIndex={experienceIndex}
          selfIndex={index}
          onClick={() => setExperienceIndex(index)}
          key={index}
        />
      ))}
    </div>
  );
};

export default ExperienceCardDeck;
