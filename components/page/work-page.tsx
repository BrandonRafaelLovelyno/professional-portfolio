"use client";

import React, { useContext } from "react";
import DetailPageBackground from "../sub-section/detail-page/detail-page-background";
import { twMerge } from "tailwind-merge";
import CardDeckSelection from "../section/detail-page/detail-selection-section";
import { ExperienceContext } from "../provider/experience-provider";
import WorkDetailSection from "../section/experience-page/work-detail-section";
import WORK_EXP_DATA from "@/data/experience/work-exp/work-exp-data";

const getAllExperienceImage = (): string[] => {
  const images = WORK_EXP_DATA.map((experience) => experience.backgroundImage);
  return images;
};

const getAllExperienceTitle = (): string[] => {
  const titles = WORK_EXP_DATA.map((experience) => experience.position);
  return titles;
};

const getAllExperienceCardImages = (): string[] => {
  const images = WORK_EXP_DATA.map((experience) => experience.cardImage);
  return images;
};

const WorkPage: React.FC = () => {
  const {
    experienceIndex,
    setIsSelectingExperience,
    setExperienceIndex,
    isSelectingExperience,
  } = useContext(ExperienceContext);
  return (
    <>
      <DetailPageBackground
        currentIndex={experienceIndex}
        isSelecting={isSelectingExperience}
        images={getAllExperienceImage()}
      />
      <div
        className={twMerge(
          "w-full h-full overflow-hidden relative bg-black bg-opacity-70"
        )}
      >
        <CardDeckSelection
          currentIndex={experienceIndex}
          cardImages={getAllExperienceCardImages()}
          isSelecting={isSelectingExperience}
          setIndex={setExperienceIndex}
          setIsSelecting={setIsSelectingExperience}
          titles={getAllExperienceTitle()}
        />
        <WorkDetailSection experience={WORK_EXP_DATA[experienceIndex]} />
      </div>
    </>
  );
};

export default WorkPage;
