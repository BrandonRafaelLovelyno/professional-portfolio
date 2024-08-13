"use client";

import React, { useContext } from "react";
import { twMerge } from "tailwind-merge";
import CODING_PRO, { Project } from "@/data/project/coding/coding-project-data";
import { ProjectContext } from "@/components/provider/project-provider";
import ProjectFeatureSection from "@/components/sub-section/project-page/dashboard/project-dashboard";
import ProjectDetailSection from "@/components/section/project-page/project-detail-section";
import DetailPageBackground from "@/components/sub-section/detail-page/detail-page-background";
import CardDeckSelection from "@/components/section/detail-page/detail-selection-section";

interface ProjectPageProps {
  projects: Project[];
}

const getAllProjectImage = (): string[] => {
  const images = CODING_PRO.map((proj) => proj.backgroundImage);
  return images;
};

const getAllProjectTitle = (): string[] => {
  const titles = CODING_PRO.map((proj) => proj.name);
  return titles;
};

const getAllProjectCardImages = (): string[] => {
  const images = CODING_PRO.map((proj) => proj.cardImage);
  return images;
};

const ProjectPage: React.FC = () => {
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
        images={getAllProjectImage()}
      />
      <div
        className={twMerge(
          "w-full h-full overflow-hidden relative bg-black bg-opacity-70"
        )}
      >
        <CardDeckSelection
          cardImages={getAllProjectCardImages()}
          currentIndex={projectIndex}
          isSelecting={isSelectingProject}
          setIndex={setProjectIndex}
          setIsSelecting={setIsSelectingProject}
          titles={getAllProjectTitle()}
        />
        <ProjectFeatureSection projects={CODING_PRO} />
        <ProjectDetailSection project={CODING_PRO[projectIndex]} />
      </div>
    </>
  );
};

export default ProjectPage;
