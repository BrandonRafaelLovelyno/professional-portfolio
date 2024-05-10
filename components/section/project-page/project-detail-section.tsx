"use client";

import { IoMdArrowRoundBack } from "react-icons/io";
import { Experience } from "@/data/experience/org-exp/org-exp-data";
import { Variants, motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { ProjectContext } from "@/components/provider/project-provider";
import { Project } from "@/data/project/coding/coding-project-data";
import ProjectHeading from "@/components/sub-section/project-page/project-heading";
import SpotifyProjectInformation from "@/components/sub-section/project-page/information/spotify-project-information";

interface ProjectDetailSectionProps {
  project: Project;
}

const BackButtonVariants: Variants = {
  showBackButton: {
    x: 0,
    opacity: 1,
  },
  hideBackButton: {
    x: "-10%",
    opacity: 0,
  },
};

const ProjectDetailSection: React.FC<ProjectDetailSectionProps> = ({
  project,
}) => {
  const { isSelectingProject, setIsSelectingProject } =
    useContext(ProjectContext);
  const Information = project.heading.Information;
  return (
    <div
      className={twMerge(
        "w-full h-full",
        "overflow-y-auto",
        "absolute flex flex-col",
        "py-8 px-5",
        isSelectingProject ? "z-0" : "z-20",
        "no-scrollbar"
      )}
    >
      <div
        className={twMerge(
          "w-full h-fit",
          "flex flex-col justify-between gap-y-32"
        )}
      >
        <motion.div
          variants={BackButtonVariants}
          initial="hideBackButton"
          animate={isSelectingProject ? "hideBackButton" : "showBackButton"}
          className={twMerge(
            "flex flex-row gap-x-3 items-center cursor-pointer"
          )}
          transition={{ duration: 0.2, delay: 0.5 }}
          onClick={() => {
            setIsSelectingProject(true);
          }}
        >
          <IoMdArrowRoundBack size={20} />
          <p className="text-xl">{project.name}</p>
        </motion.div>
        <ProjectHeading title={project.name} images={project.heading.image} />
      </div>
      <div className={twMerge("lg:px-28 px-5 pt-20")}>
        <SpotifyProjectInformation />
      </div>
    </div>
  );
};

export default ProjectDetailSection;
