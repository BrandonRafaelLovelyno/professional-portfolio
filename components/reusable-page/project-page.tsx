"use client";

import { Project } from "@/data/coding-project-detail-data";
import React, { useEffect } from "react";
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
    <div
      className={twMerge(
        "flex w-full h-screen",
        "transition-all duration-500",
        isFading ? "opacity-0" : "opacity-100"
      )}
    >
      <div className="lg:w-[80%] w-full lg:px-5">
        <FeatureSection
          setIsRouting={setIsRouting}
          project={project}
          features={project.features}
        />
      </div>
      {width >= 1024 && (
        <ProjectDescription project={project} setIsRouting={setIsRouting} />
      )}
    </div>
  );
};

export default ProjectPage;
