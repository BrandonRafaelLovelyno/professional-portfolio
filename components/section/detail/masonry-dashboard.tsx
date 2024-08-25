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

  const { width } = useContext(PageTransitionContext);

  const dashboardRef = useRef<HTMLDivElement>(null);

  const [dashboard, setDashboard] = useState({
    height: 1.4 * window.innerHeight,
    factors: 1.2,
  });

  useEffect(() => {
    if (dashboardRef.current?.clientHeight) {
      const height = dashboardRef.current!.clientHeight;
      const factor = height / window.innerHeight;
      setDashboard({
        factors: factor,
        height: dashboardRef.current!.clientHeight,
      });
    }
  }, [dashboardRef.current?.clientHeight, width]);

  return (
    <Parallax
      pages={0.68 + dashboard.factors}
      key={experienceIndex + dashboard.factors}
      className={twMerge(
        "w-full h-full",
        "overflow-y-auto",
        "absolute flex flex-col pt-8"
      )}
    >
      <div className="absolute ml-[5%]">
        <BackArrow
          caption="Works"
          isShow={!isSelectingExperience}
          onClick={() => setIsSelectingExperience(true)}
        />
      </div>
      <ParallaxLayer
        factor={0.75}
        className={twMerge("flex flex-col gap-y-5", "px-5")}
        speed={-1}
        offset={0.1}
      >
        <DashboardHeading imageUrl={heading.imageUrl} title={heading.title} />
      </ParallaxLayer>
      <ParallaxLayer
        offset={0.68}
        factor={dashboard.factors}
        key={experienceIndex + dashboard.factors}
      >
        <div
          ref={dashboardRef}
          className={twMerge(
            "w-full h-fit",
            "flex flex-col gap-y-5 items-center",
            "duration-500 transition-all",
            "pt-5 rounded-t-xl ",
            "bg-slate-900 backdrop-blur-md bg-opacity-50",
            isSelectingExperience ? "translate-y-[20%]" : "translate-y-0"
          )}
        >
          <ScrollIcon />
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid w-full h-full"
            columnClassName="my-masonry-grid_column"
          >
            {...Dashboard}
          </Masonry>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default MasonryDashboard;
