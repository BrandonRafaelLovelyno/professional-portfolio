import { ExperienceAndEventContext } from "@/components/provider/experience-and-event-provider";
import EventDashboardBoxPlaceholder from "@/components/trigger/experience-page/event/box/event-dashboard-box-placeholder";
import EventDashboardBoxText from "@/components/trigger/experience-page/event/box/event-dashboard-box-text";
import EventDashboardNavigationDropdown from "@/components/trigger/experience-page/event/navigation/event-dashboard-navigation-dropdown";
import { Experience } from "@/data/experience/org-exp/org-exp-data";
import WORK_EXP_DASHBOARD from "@/data/experience/work-exp/work-exp-dashboard";
import { Variants, motion } from "framer-motion";
import React, { useContext } from "react";
import Masonry from "react-masonry-css";
import { twMerge } from "tailwind-merge";

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
  const { isSelectingExperience, setIsSelectingExperience } = useContext(
    ExperienceAndEventContext
  );

  return (
    <div
      className={twMerge(
        "w-full h-full",
        "flex flex-col gap-y-8",
        "overflow-y-auto",
        "absolute flex flex-col pt-8 px-5",
        isSelectingExperience ? "z-10" : "z-20"
      )}
    >
      <motion.div
        variants={BackButtonVariants}
        initial="hideBackButton"
        animate={isSelectingExperience ? "hideBackButton" : "showBackButton"}
        className={twMerge("text-white text-3xl")}
        transition={{ duration: 0.2, delay: 0.5 }}
        onClick={() => {
          setIsSelectingExperience(true);
        }}
      >
        hai
      </motion.div>
      <div className={twMerge("w-full min-h-full h-ft")}>
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid w-full h-full"
          columnClassName="my-masonry-grid_column"
        >
          {...WORK_EXP_DASHBOARD}
        </Masonry>
      </div>
    </div>
  );
};

export default EventDashboardSection;
