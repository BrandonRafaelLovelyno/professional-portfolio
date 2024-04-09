import { ExperienceAndEventContext } from "@/components/provider/experience-and-event-provider";
import React, { useContext } from "react";
import { Variants, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface EventDashboardBoxPlaceholderProps {
  children: React.ReactNode;
  classname?: string;
  backgroundColor?: string;
  borderColor?: string;
}

const EventDashboardBoxPlaceholderVariants: Variants = {
  isNotSelectingExperience: {
    y: 0,
    opacity: 1,
  },
  isSelectingExperience: {
    y: "5%",
    opacity: 0,
  },
};

const EventDashboardBoxPlaceholder: React.FC<
  EventDashboardBoxPlaceholderProps
> = ({ children, classname, backgroundColor, borderColor }) => {
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
        " h-fit w-fit mx-auto",
        !backgroundColor && "bg-zinc-900",
        backgroundColor && `${backgroundColor} shadow-2xl`,
        borderColor && `border-2 ${borderColor}`,
        "px-5 py-5",
        "rounded-lg",
        classname
      )}
      variants={EventDashboardBoxPlaceholderVariants}
      transition={{ duration: 0.2, delay: Math.random() * 0.2 + 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default EventDashboardBoxPlaceholder;
