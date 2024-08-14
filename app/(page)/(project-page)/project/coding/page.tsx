"use client";

import React, { useContext } from "react";
import { twMerge } from "tailwind-merge";
import CODING_PRO, { Project } from "@/data/project/coding/coding-project-data";
import { ProjectContext } from "@/components/provider/project-provider";
import { PageTransitionContext } from "@/components/provider/page-transition-provider";
import BackArrow from "@/components/trigger/button/back-arrow";
import AnimatedBackground from "@/components/sub-section/detail-page/detail-page-background";
import CardDeck from "@/components/section/wrapper/card-selection";
import MasonryModal from "@/components/sub-section/project-page/dashboard/project-dashboard";
import ProjectDetailSection from "@/components/section/detail/project-detail";

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

const ProjectPage: React.FC<ProjectPageProps> = () => {
  const {
    projectIndex,
    isSelectingProject,
    setIsSelectingProject,
    setProjectIndex,
  } = useContext(ProjectContext);
  const { pushPage } = useContext(PageTransitionContext);
  const projects = CODING_PRO;

  return (
    <section
      className={twMerge(
        "w-full h-full overflow-hidden relative bg-black bg-opacity-70"
      )}
    >
      <BackArrow
        caption="Home"
        isShow={isSelectingProject}
        onClick={() => pushPage("/")}
      />
      <AnimatedBackground
        currentIndex={projectIndex}
        isSelecting={isSelectingProject}
        images={getAllProjectImage(projects)}
      />
      <CardDeck
        cardImages={getAllProjectCardImages(projects)}
        currentIndex={projectIndex}
        isSelecting={isSelectingProject}
        setIndex={setProjectIndex}
        setIsSelecting={setIsSelectingProject}
        titles={getAllProjectTitle(projects)}
      />
      <MasonryModal projects={projects} />
      <ProjectDetailSection project={projects[projectIndex]} />
    </section>
  );
};

export default ProjectPage;
