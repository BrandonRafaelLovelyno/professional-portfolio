import { ExperienceAndEventContext } from "@/components/provider/experience-and-event-provider";
import React, { useContext } from "react";
import { Variants, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface EventDashboardBoxProps {
  children: React.ReactNode;
  classname?: string;
}

const eventDashboardBoxVariants: Variants = {
  isNotSelectingExperience: {
    y: 0,
    opacity: 1,
  },
  isSelectingExperience: {
    y: "5%",
    opacity: 0,
  },
};

const EventDashboardBox: React.FC<EventDashboardBoxProps> = ({
  children,
  classname,
}) => {
  const { isSelectingExperience } = useContext(ExperienceAndEventContext);
  return (
    <motion.div
      initial="isSelectingExperience"
      animate={
        isSelectingExperience
          ? "isSelectingExperience"
          : "isNotSelectingExperience"
      }
      className={twMerge(
        "bg-stone-800 bg-opacity-60 h-fit w-fit",
        "px-5 py-5",
        "rounded-lg",
        classname
      )}
      variants={eventDashboardBoxVariants}
      transition={{ duration: 0.2, delay: Math.random() * 0.2 + 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default EventDashboardBox;
