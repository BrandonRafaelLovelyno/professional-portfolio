"use client";

import { ExperienceContext } from "@/components/provider/experience-provider";
import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import Masonry from "react-masonry-css";
import { twMerge } from "tailwind-merge";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ScrollIcon from "@/components/trigger/display/scroll-icon";
import { PageTransitionContext } from "@/components/provider/page-transition-provider";
import DashboardHeading from "@/components/sub-section/dashboard-heading";
import BackArrow from "@/components/trigger/button/back-arrow";

interface MasonryDashboardProps {
  Dashboard: React.ReactNode[];
  heading: {
    imageUrl: string;
    title: string;
  };
}

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const MasonryDashboard: React.FC<MasonryDashboardProps> = ({
  Dashboard,
  heading,
}) => {
  const { isSelectingExperience, setIsSelectingExperience, experienceIndex } =
    useContext(ExperienceContext);
  return (
    <section
      className={twMerge(
        "absolute",
        "flex flex-col",
        "w-full h-full",
        "overflow-y-auto",
        "pt-16"
      )}
    >
      <div className="absolute ml-[5%]">
        <BackArrow
          caption="Works"
          isShow={!isSelectingExperience}
          onClick={() => setIsSelectingExperience(true)}
        />
      </div>
      <DashboardHeading imageUrl={heading.imageUrl} title={heading.title} />
      <div
        className={twMerge(
          "w-full",
          "flex flex-col gap-y-5 items-center",
          "duration-500 transition-all",
          "pt-5 rounded-t-xl ",
          "bg-slate-900 backdrop-blur-md bg-opacity-50",
          isSelectingExperience ? "translate-y-[20%]" : "translate-y-0"
        )}
      >
        <ScrollIcon />
        <Masonry
          key={experienceIndex}
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid w-full h-full"
          columnClassName="my-masonry-grid_column"
        >
          {...Dashboard}
        </Masonry>
      </div>
    </section>
  );
};

export default MasonryDashboard;
