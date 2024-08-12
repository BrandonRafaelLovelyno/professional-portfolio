import React, { useContext, useState } from "react";
import { Variants, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
import { ProjectContext } from "@/components/provider/project-provider";

interface ProjectDashboardCardProps {
  title: string;
  description: string;
  video: string;
  textColor?: string;
  bgColor?: string;
  image: React.ReactNode;
  projectName: string;
}

const PROJECT_DASHBOARD_CARD_VARIANTS: Variants = {
  hidden: {
    y: "10%",
    opacity: 0,
    transition: {
      delay: 0.5,
    },
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      delay: 0.4,
    },
  },
};

const ProjectDashboardCard: React.FC<ProjectDashboardCardProps> = ({
  description,
  title,
  video,
  textColor,
  bgColor,
  image,
  projectName,
}) => {
  const { isLearnFeature } = useContext(ProjectContext);
  return (
    <motion.div
      className={twMerge(
        "w-full h-fit",
        "flex flex-col gap-y-8",
        "pb-8",
        "rounded-lg overflow-hidden",
        bgColor
      )}
      variants={PROJECT_DASHBOARD_CARD_VARIANTS}
      initial="hidden"
      animate={isLearnFeature ? "show" : "hidden"}
    >
      <div className="flex flex-col gap-y-5 w-full">
        <video autoPlay muted loop className={twMerge("w-full")}>
          <source src={video} type="video/mp4" />
        </video>
        <div className={twMerge("flex flex-col gap-y-3", "px-8")}>
          <h2 className={twMerge("text-2xl font-bold", textColor)}>{title}</h2>
          <p className={twMerge("text-sm font-bold text-black")}>
            {description}
          </p>
        </div>
      </div>
      <div
        className={twMerge("flex flex-row items-center justify-center gap-x-3")}
      >
        <span className={twMerge("text-black text-xs font-extrabold")}>
          {projectName}
        </span>
        {image}
      </div>
    </motion.div>
  );
};

export default ProjectDashboardCard;
