import { ExperienceAndEventContext } from "@/components/provider/experience-and-event-provider";
import React, { useContext } from "react";
import { Variants, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

interface DashboardPlaceholderBoxProps {
  children: React.ReactNode;
  classname?: string;
  backgroundColor?: string;
  showBackground?: boolean;
  borderColor?: string;
  noPadding?: boolean;
}

const DashboardPlaceholderBoxVariants: Variants = {
  showBox: {
    y: 0,
    opacity: 1,
  },
  hideBox: {
    y: "5%",
    opacity: 0,
  },
};

const DashboardPlaceholderBox: React.FC<DashboardPlaceholderBoxProps> = ({
  children,
  classname,
  backgroundColor,
  borderColor,
  showBackground,
  noPadding,
}) => {
  const { isSelectingExperience, isChangingEvent } = useContext(
    ExperienceAndEventContext
  );
  return (
    <motion.div
      initial="hideBox"
      animate={isSelectingExperience || isChangingEvent ? "hideBox" : "showBox"}
      className={twMerge(
        " h-fit w-fit mx-auto",
        showBackground &&
          !backgroundColor &&
          "bg-gray-700 shadow-4xl backdrop-blur-xl",
        backgroundColor && backgroundColor,
        borderColor && `border-[1px] ${borderColor}`,
        !noPadding && "px-5 py-5",
        "rounded-lg",
        classname
      )}
      variants={DashboardPlaceholderBoxVariants}
      transition={{ duration: 0.2, delay: Math.random() * 0.2 + 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default DashboardPlaceholderBox;
