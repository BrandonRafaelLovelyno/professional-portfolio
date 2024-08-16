"use client";

import React, { useContext } from "react";
import { twMerge } from "tailwind-merge";
import WORK_EXP_DATA from "@/data/work/work-exp/work-exp-data";
import { ExperienceContext } from "@/components/provider/experience-provider";
import SelectionSection from "@/components/section/wrapper/selection-section";
import DetailSection from "@/components/section/wrapper/detail-section";
import WorkDetail from "@/components/section/detail/masonry-dashboard";
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
    <section
      className={twMerge(
        "relative",
        "flex flex-col",
        "w-full h-full",
        "no-scrollbar"
      )}
    >
      <h1 className={twMerge("text-4xl text-center font-semibold")}>
        I make custom websites for start-ups, the rest are college events
      </h1>
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
        <DetailSection isShow={!isSelectingExperience}>
          <WorkDetail experience={WORK_EXP_DATA[experienceIndex]} />
        </DetailSection>
      </div>
    </section>
  );
};

export default WorkPage;
