import ExperienceCard from "@/components/trigger/experience-page/experience-card";
import { Experience } from "@/data/org-exp-section-data";
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
        "flex flex-row gap-x-3 w-full justify-end relative z-20 h-0 px-32"
      )}
    >
      {experiences.map((experience, index) => (
        <ExperienceCard
          experience={experience}
          key={index}
          isSelected={experienceIndex == index}
          onClick={() => setExperienceIndex(index)}
        />
      ))}
    </div>
  );
};

export default ExperienceCardDeck;
