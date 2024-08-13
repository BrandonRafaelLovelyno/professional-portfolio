"use client";

import React, { useContext } from "react";
import { twMerge } from "tailwind-merge";
import { Project } from "@/data/project/coding/coding-project-data";
import { ProjectContext } from "../provider/project-provider";
import DetailPageBackground from "../sub-section/detail-page/detail-page-background";
import CardDeckSelection from "../section/detail-page/detail-selection-section";
import ProjectDetailSection from "../section/project-page/project-detail-section";
import ProjectFeatureSection from "../sub-section/project-page/dashboard/project-dashboard";

interface ProjectPageProps {
  projects: Project[];
}

const getAllProjectImage = (projects: Project[]): string[] => {
  const images = projects.map((proj) => proj.backgroundImage);
  return images;
};

const getAllProjectTitle = (projects: Project[]): string[] => {
  const titles = projects.map((proj) => proj.name);
  return titles;
};

const getAllProjectCardImages = (projects: Project[]): string[] => {
  const images = projects.map((proj) => proj.cardImage);
  return images;
};

const ProjectPage: React.FC<ProjectPageProps> = ({ projects }) => {
  const {
    projectIndex,
    isSelectingProject,
    setIsSelectingProject,
    setProjectIndex,
  } = useContext(ProjectContext);
  return (
    <>
      <DetailPageBackground
        currentIndex={projectIndex}
        isSelecting={isSelectingProject}
        images={getAllProjectImage(projects)}
      />
      <div
        className={twMerge(
          "w-full h-full overflow-hidden relative bg-black bg-opacity-70"
        )}
      >
        <CardDeckSelection
          cardImages={getAllProjectCardImages(projects)}
          currentIndex={projectIndex}
          isSelecting={isSelectingProject}
          setIndex={setProjectIndex}
          setIsSelecting={setIsSelectingProject}
          titles={getAllProjectTitle(projects)}
        />
        <ProjectFeatureSection projects={projects} />
        <ProjectDetailSection project={projects[projectIndex]} />
      </div>
    </>
  );
};

export default ProjectPage;
