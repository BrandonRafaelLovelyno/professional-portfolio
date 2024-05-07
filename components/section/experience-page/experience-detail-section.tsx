"use client";

import { ExperienceContext } from "@/components/provider/experience-provider";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Experience } from "@/data/experience/org-exp/org-exp-data";
import WORK_EXP_DASHBOARD from "@/components/sub-section/experience-page/dashboard/video-production-dashboard";
import { Variants, motion } from "framer-motion";
import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import Masonry from "react-masonry-css";
import { twMerge } from "tailwind-merge";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import ScrollIcon from "@/components/trigger/detail-page/other/scroll-icon";
import ExperienceDetailHeading from "@/components/sub-section/experience-page/experience-detail-heading";

interface ExperienceDetailSectionProps {
  experience: Experience;
}

const BackButtonVariants: Variants = {
  showBackButton: {
    x: 0,
    opacity: 1,
  },
  hideBackButton: {
    x: "-10%",
    opacity: 0,
  },
};

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const ExperienceDetailSection: React.FC<ExperienceDetailSectionProps> = ({
  experience,
}) => {
  const { isSelectingExperience, setIsSelectingExperience, experienceIndex } =
    useContext(ExperienceContext);

  const dashboardRef = useRef<HTMLDivElement>(null);

  const [dashboard, setDashboard] = useState({
    height:
      window.innerWidth > 1024
        ? 1.2 * window.innerHeight
        : 1.4 * window.innerHeight,
    factors: 1.2,
  });

  useEffect(() => {
    if (dashboardRef.current?.clientHeight) {
      setDashboard((prev) => ({
        ...prev,
        height: dashboardRef.current!.clientHeight,
      }));
    }
  }, [dashboardRef.current?.clientHeight, experienceIndex]);

  useEffect(() => {
    const dashboardFactor = dashboard.height / window.innerHeight;
    setDashboard((prev) => ({
      ...prev,
      factors: dashboardFactor,
    }));
  }, [dashboard.height]);

  const Dashboard = useMemo(() => {
    if (!experience.Dashboard) return WORK_EXP_DASHBOARD;
    return experience.Dashboard;
  }, [experience.Dashboard]);

  return (
    <Parallax
      pages={0.75 + 0.05 + dashboard.factors}
      key={`${0.75 + 0.05 + dashboard.factors}`}
      className={twMerge(
        "w-full h-full",
        "overflow-y-auto",
        "absolute flex flex-col pt-8",
        isSelectingExperience ? "z-0" : "z-20",
        "no-scrollbar"
      )}
    >
      <ParallaxLayer factor={0.05} className="px-5" speed={1}>
        <motion.div
          variants={BackButtonVariants}
          initial="hideBackButton"
          animate={isSelectingExperience ? "hideBackButton" : "showBackButton"}
          className={twMerge(
            "flex flex-row gap-x-3 items-center cursor-pointer"
          )}
          transition={{ duration: 0.2, delay: 0.5 }}
          onClick={() => {
            setIsSelectingExperience(true);
          }}
        >
          <IoMdArrowRoundBack size={20} />
          <p className="text-xl">{experience.position}</p>
        </motion.div>
      </ParallaxLayer>
      <ParallaxLayer
        factor={0.75}
        className={twMerge("flex flex-col gap-y-5", "px-5")}
        speed={-1}
        offset={0.1}
      >
        <div
          className={twMerge(
            "w-full h-full",
            isSelectingExperience
              ? "translate-y-10 opacity-0"
              : "translate-y-0 opacity-100",
            "transition-all duration-500 delay-200"
          )}
        >
          <ExperienceDetailHeading
            imageUrl={experience.heading.imageUrl}
            title={experience.heading.title}
          />
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={0.8}
        factor={dashboard.factors}
        key={dashboard.factors}
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

export default ExperienceDetailSection;
