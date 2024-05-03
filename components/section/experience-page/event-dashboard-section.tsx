import { ExperienceAndEventContext } from "@/components/provider/experience-and-event-provider";
import { IoMdArrowRoundBack } from "react-icons/io";
import { Experience } from "@/data/experience/org-exp/org-exp-data";
import WORK_EXP_DASHBOARD from "@/components/sub-section/experience-page/dashboard/work-exp-dashboard";
import { Variants, motion } from "framer-motion";
import React, { useContext } from "react";
import Masonry from "react-masonry-css";
import { twMerge } from "tailwind-merge";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import WorkExpHeading from "@/components/sub-section/experience-page/heading/work-exp-heading";

interface EventDashboardSectionProps {
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

const EventDashboardSection: React.FC<EventDashboardSectionProps> = ({
  experience,
}) => {
  const { isSelectingExperience, setIsSelectingExperience, eventIndex } =
    useContext(ExperienceAndEventContext);

  return (
    <Parallax
      pages={2}
      className={twMerge(
        "w-full h-full",
        "overflow-y-auto",
        "absolute flex flex-col pt-8",
        isSelectingExperience ? "z-0" : "z-20"
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
        <WorkExpHeading />
      </ParallaxLayer>
      <ParallaxLayer offset={0.8} factor={1.2}>
        <div
          className={twMerge(
            "w-full h-full",
            "duration-500 transition-all",
            "pt-12 rounded-t-xl bg-neutral-900",
            isSelectingExperience ? "translate-y-[20%]" : "translate-y-0"
          )}
        >
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid w-full h-full"
            columnClassName="my-masonry-grid_column"
          >
            {...WORK_EXP_DASHBOARD}
          </Masonry>
        </div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default EventDashboardSection;
