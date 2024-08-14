"use client";

import React, { useContext } from "react";
import { twMerge } from "tailwind-merge";
import WORK_EXP_DATA from "@/data/experience/work-exp/work-exp-data";
import { ExperienceContext } from "@/components/provider/experience-provider";
import SelectionSection from "@/components/section/wrapper/selection-section";
import DetailSection from "@/components/section/wrapper/detail-section";
import AnimatedBackground from "@/components/sub-section/animated-background";
import WorkDetail from "@/components/section/detail/masonry-dashboard";
import CardSelection from "@/components/section/selection/card-selection";
import { PageTransitionContext } from "@/components/provider/page-transition-provider";
import DoubleBackArrow from "@/components/trigger/button/double-back-arrow";

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
  const { pushPage } = useContext(PageTransitionContext);
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
        <DoubleBackArrow
          detail={{
            caption: "Work",
            isShow: !isSelectingExperience,
            onClick: () => setIsSelectingExperience(true),
          }}
          selection={{
            caption: "Home",
            isShow: isSelectingExperience,
            onClick: () => pushPage("/"),
          }}
        />

        <SelectionSection isShow={isSelectingExperience}>
          <CardSelection
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
