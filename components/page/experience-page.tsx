"use client";

import { Experience } from "@/data/experience/org-exp/org-exp-data";
import React, { useContext } from "react";
import DetailPageBackground from "../sub-section/detail-page/detail-page-background";
import { twMerge } from "tailwind-merge";
import ExperienceSelectionSection from "../section/detail-page/detail-selection-section";
import { ExperienceContext } from "../provider/experience-provider";
import ExperienceDetailSection from "../section/experience-page/experience-detail-section";

interface ExperiencePageProps {
  experiences: Experience[];
}

const getAllExperienceImage = (experiences: Experience[]): string[] => {
  const images = experiences.map((experience) => experience.backgroundImage);
  return images;
};

const getAllExperienceTitle = (experiences: Experience[]): string[] => {
  const titles = experiences.map((experience) => experience.position);
  return titles;
};

const getAllExperienceCardImages = (experiences: Experience[]): string[] => {
  const images = experiences.map((experience) => experience.cardImage);
  return images;
};

const ExperiencePage: React.FC<ExperiencePageProps> = ({ experiences }) => {
  const {
    experienceIndex,
    setIsSelectingExperience,
    setExperienceIndex,
    isSelectingExperience,
  } = useContext(ExperienceContext);
  return (
    <>
      <DetailPageBackground images={getAllExperienceImage(experiences)} />
      <div
        className={twMerge(
          "w-full h-full overflow-hidden relative bg-black bg-opacity-70"
        )}
      >
        <ExperienceSelectionSection
          currentIndex={experienceIndex}
          cardImages={getAllExperienceCardImages(experiences)}
          isSelecting={isSelectingExperience}
          setIndex={setExperienceIndex}
          setIsSelecting={setIsSelectingExperience}
          titles={getAllExperienceTitle(experiences)}
        />
        <ExperienceDetailSection experience={experiences[experienceIndex]} />
      </div>
    </>
  );
};

export default ExperiencePage;
