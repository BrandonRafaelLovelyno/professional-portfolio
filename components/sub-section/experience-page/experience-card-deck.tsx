import ExperienceCard from "@/components/trigger/experience-page/experience-card";
import { Experience } from "@/data/org-exp-section-data";
import React from "react";
import { twMerge } from "tailwind-merge";

interface ExperienceCardDeckProps {
  experiences: Experience[];
}

const ExperienceCardDeck: React.FC<ExperienceCardDeckProps> = ({
  experiences,
}) => {
  return (
    <div
      className={twMerge(
        "flex flex-row gap-x-3 w-full justify-center relative h-32"
      )}
    >
      {experiences.map((experience, index) => (
        <ExperienceCard experience={experience} key={index} />
      ))}
    </div>
  );
};

export default ExperienceCardDeck;
