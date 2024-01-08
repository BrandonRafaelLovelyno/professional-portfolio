"use client";

import { Project } from "@/data/coding-project-detail-data";
import React from "react";
import FeatureSection from "../display/coding-project-page/feature-section";
import ProjectDescription from "../display/coding-project-page/project-description";

interface ProjectPageProps {
  project: Project;
  setIsRouting: (isRouting: boolean) => void;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ project, setIsRouting }) => {
  return (
    <div className="flex">
      <FeatureSection features={project.features} />
      <ProjectDescription setIsRouting={setIsRouting} />
    </div>
  );
};

export default ProjectPage;
