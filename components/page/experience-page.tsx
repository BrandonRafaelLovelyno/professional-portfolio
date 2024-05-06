"use client";

import { Experience } from "@/data/experience/org-exp/org-exp-data";
import React, { useContext } from "react";
import DetailPageBackground from "../sub-section/experience-page-background";
import { twMerge } from "tailwind-merge";
import ExperienceSelectionSection from "../section/detail-page/detail-selection-section";
import { ExperienceAndEventContext } from "../provider/experience-and-event-provider";
import ExperienceDetailSection from "../section/experience-page/experience-detail-section";

interface ExperiencePageProps {
  experiences: Experience[];
}

const getAllExperienceImage = (experiences: Experience[]): string[] => {
  const images = experiences.map((experience) => experience.backgroundImage);
  return images;
};

const ExperiencePage: React.FC<ExperiencePageProps> = ({ experiences }) => {
  const { experienceIndex } = useContext(ExperienceAndEventContext);
  return (
    <>
      <DetailPageBackground images={getAllExperienceImage(experiences)} />
      <div
        className={twMerge(
          "w-full h-full overflow-hidden relative bg-black bg-opacity-70"
        )}
      >
        <ExperienceSelectionSection experiences={experiences} />
        <ExperienceDetailSection experience={experiences[experienceIndex]} />
      </div>
    </>
  );
};

export default ExperiencePage;
