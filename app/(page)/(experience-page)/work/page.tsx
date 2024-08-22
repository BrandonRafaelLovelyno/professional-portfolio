"use client";

import React, { useContext } from "react";
import { twMerge } from "tailwind-merge";
import WORK_EXP_DATA from "@/data/work-data";
import { ExperienceContext } from "@/components/provider/experience-provider";
import DetailSection from "@/components/section/wrapper/detail-section";
import MasonryDashboard from "@/components/section/detail/masonry-dashboard";
import { PageTransitionContext } from "@/components/provider/page-transition-provider";
import DoubleBackArrow from "@/components/trigger/button/double-back-arrow";

const WorkPage: React.FC = () => {
  const { experienceIndex, setIsSelectingExperience, isSelectingExperience } =
    useContext(ExperienceContext);
  const { pushPage } = useContext(PageTransitionContext);

  const works = WORK_EXP_DATA;

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
          <MasonryDashboard
            Dashboard={works[experienceIndex].Dashboard}
            heading={works[experienceIndex].Heading}
          />
        </DetailSection>
      </div>
    </section>
  );
};

export default WorkPage;
