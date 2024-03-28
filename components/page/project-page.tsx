"use client";

import { Project } from "@/data/coding-project-detail-data";
import React, { useEffect } from "react";
import { twMerge } from "tailwind-merge";
import ProjectFeatureSection from "../sub-section/project-page/project-feature-section";
import ProjectDescription from "../sub-section/project-page/project-description-section";

interface ProjectPageProps {
  project: Project;
}

const ProjectPage: React.FC<ProjectPageProps> = ({ project }) => {
  const [width, setWidth] = React.useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  useEffect(() => {
    const handleResize = () => {
      setWidth(typeof window !== "undefined" ? window.innerWidth : 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={twMerge("flex w-full h-screen")}>
      <div className="lg:w-[80%] w-full lg:px-5">
        <ProjectFeatureSection project={project} features={project.features} />
      </div>
      {width >= 1024 && <ProjectDescription project={project} />}
    </div>
  );
};

export default ProjectPage;
