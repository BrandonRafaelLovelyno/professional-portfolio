import { ExperienceAndEventContext } from "@/components/provider/experience-and-event-provider";
import React, { useContext } from "react";
import { Variants, motion } from "framer-motion";

interface EventDashboardBoxProps {
  children: React.ReactNode;
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

const EventDashboardBox: React.FC<EventDashboardBoxProps> = ({ children }) => {
  const { isSelectingExperience } = useContext(ExperienceAndEventContext);
  return (
    <motion.div
      initial="isSelectingExperience"
      animate={
        isSelectingExperience
          ? "isSelectingExperience"
          : "isNotSelectingExperience"
      }
      variants={eventDashboardBoxVariants}
      transition={{ duration: 0.2, delay: Math.random() * 0.2 + 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default EventDashboardBox;
