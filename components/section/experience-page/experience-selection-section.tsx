import ExperienceSelectionScrollPath from "@/components/trigger/experience-page/experience-selection-scroll-path";
import React from "react";
import { twMerge } from "tailwind-merge";

const ExperienceSelectionSection = () => {
  return (
    <div className={twMerge("w-full h-full", "flex flex-row justify-between ")}>
      <div className={twMerge("flex flex-row gap-x-5 h-full", "px-10 py-24")}>
        <ExperienceSelectionScrollPath />
      </div>
    </div>
  );
};

export default ExperienceSelectionSection;
