"use client";

import React, { useContext } from "react";
import { twMerge } from "tailwind-merge";
import CODING_PRO, { Project } from "@/data/project/coding/coding-project-data";
import { ProjectContext } from "@/components/provider/project-provider";
import { PageTransitionContext } from "@/components/provider/page-transition-provider";
import ProjectDetail from "@/components/section/detail/project-detail";
import AnimatedBackground from "@/components/sub-section/animated-background";
import MasonryModal from "@/components/sub-section/masonry-modal";
import CardSelection from "@/components/section/selection/card-selection";
import SelectionSection from "@/components/section/wrapper/selection-section";
import DetailSection from "@/components/section/wrapper/detail-section";
import DoubleBackArrow from "@/components/trigger/button/double-back-arrow";

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
      <DoubleBackArrow
        detail={{
          caption: "Work",
          isShow: !isSelectingProject,
          onClick: () => setIsSelectingProject(true),
        }}
        selection={{
          caption: "Home",
          isShow: isSelectingProject,
          onClick: () => pushPage("/"),
        }}
      />
      <AnimatedBackground
        currentIndex={projectIndex}
        isSelecting={isSelectingProject}
        images={getAllProjectImage(projects)}
      />
      <SelectionSection isShow={isSelectingProject}>
        <CardSelection
          cardImages={getAllProjectCardImages(projects)}
          currentIndex={projectIndex}
          isSelecting={isSelectingProject}
          setIndex={setProjectIndex}
          setIsSelecting={setIsSelectingProject}
          titles={getAllProjectTitle(projects)}
        />
      </SelectionSection>
      <DetailSection isShow={!isSelectingProject}>
        <ProjectDetail project={projects[projectIndex]} />
        <MasonryModal projects={projects} />
      </DetailSection>
    </section>
  );
};

export default ProjectPage;
