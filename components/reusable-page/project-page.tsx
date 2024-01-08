"use client";

import { Project } from "@/data/coding-project-detail-data";
import React from "react";
import FeatureSection from "../display/coding-project-page/feature-section";

interface ProjectPageProps {
  project: Project;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ project }) => {
  return (
    <div className="flex">
      <FeatureSection features={project.features} />
    </div>
  );
};

export default ProjectPage;
