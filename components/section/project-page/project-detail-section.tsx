"use client";

import { Variants, motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { ProjectContext } from "@/components/provider/project-provider";
import { Project } from "@/data/project/coding/coding-project-data";
import ProjectHeading from "@/components/sub-section/project-page/project-heading";
import BackArrow from "@/components/trigger/all-page/back-arrow";

interface ProjectDetailSectionProps {
  project: Project;
}

const DETAILSECTIONVARIANTS: Variants = {
  show: {
    y: 0,
    opacity: 1,
    zIndex: 20,
  },
  hide: {
    y: "10%",
    opacity: 0,
    zIndex: 10,
  },
};

const ProjectDetailSection: React.FC<ProjectDetailSectionProps> = ({
  project,
}) => {
  const { isSelectingProject, setIsSelectingProject } =
    useContext(ProjectContext);
  const ProjectInformation = project.Information;
  return (
    <motion.div
      className={twMerge(
        "w-full h-full",
        "overflow-y-auto",
        "absolute flex flex-col",
        "py-8 px-5",
        "transition-all duration-500 ease-in-out",
        "no-scrollbar"
      )}
      variants={DETAILSECTIONVARIANTS}
      initial="hide"
      animate={isSelectingProject ? "hide" : "show"}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <BackArrow
        caption={project.name}
        isShow={isSelectingProject}
        onClick={() => setIsSelectingProject(true)}
      />
      <div
        className={twMerge(
          "w-full h-fit",
          "flex flex-col justify-between gap-y-32",
          "pt-[30vh]"
        )}
      >
        <ProjectHeading
          title={project.name}
          images={project.heading.image}
          deployment={project.deployment}
        />
      </div>
      <div className={twMerge("lg:px-28 px-5 pt-20")}>
        <ProjectInformation />
      </div>
    </motion.div>
  );
};

export default ProjectDetailSection;
