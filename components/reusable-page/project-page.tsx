"use client";

import { Project } from "@/data/coding-project-detail-data";
import React from "react";
import FeatureSection from "../display/coding-project-page/feature-section";
import ProjectDescription from "../display/coding-project-page/project-description";
import { twMerge } from "tailwind-merge";

interface ProjectPageProps {
  project: Project;
  setIsRouting: (isRouting: boolean) => void;
  isFading: boolean;
}

const ProjectPage: React.FC<ProjectPageProps> = ({
  project,
  setIsRouting,
  isFading,
}) => {
  return (
    <div
      className={twMerge(
        "flex w-full h-full",
        "transition-all duration-[700ms]",
        isFading ? "opacity-0" : "opacity-100"
      )}
    >
      <FeatureSection features={project.features} />
      <ProjectDescription project={project} setIsRouting={setIsRouting} />
    </div>
  );
};

export default ProjectPage;
