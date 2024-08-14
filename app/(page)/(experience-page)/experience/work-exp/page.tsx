"use client";

import { Experience } from "@/data/experience/org-exp/org-exp-data";
import React, { useContext } from "react";
import { twMerge } from "tailwind-merge";
import WORK_EXP_DATA from "@/data/experience/work-exp/work-exp-data";
import { ExperienceContext } from "@/components/provider/experience-provider";
import AnimatedBackground from "@/components/sub-section/detail-page/detail-page-background";
import CardDeck from "@/components/section/detail-page/detail-selection-section";
import WorkDetail from "@/components/section/experience-page/work-detail-section";
import SelectionSection from "@/components/section/wrapper/selection-section";
import DetailSection from "@/components/section/wrapper/detail-section";

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
      <AnimatedBackground
        currentIndex={experienceIndex}
        isSelecting={isSelectingExperience}
        images={getAllExperienceImage()}
      />
      <div
        className={twMerge(
          "w-full h-full overflow-hidden relative bg-black bg-opacity-70"
        )}
      >
        <SelectionSection isShow={isSelectingExperience}>
          <CardDeck
            currentIndex={experienceIndex}
            cardImages={getAllExperienceCardImages()}
            isSelecting={isSelectingExperience}
            setIndex={setExperienceIndex}
            setIsSelecting={setIsSelectingExperience}
            titles={getAllExperienceTitle()}
          />
        </SelectionSection>
        <DetailSection isShow={!isSelectingExperience}>
          <WorkDetail experience={WORK_EXP_DATA[experienceIndex]} />
        </DetailSection>
      </div>
    </>
  );
};

export default WorkPage;
