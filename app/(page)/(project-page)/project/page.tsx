"use client";

import { PageTransitionContext } from "@/components/provider/page-transition-provider";
import { ProjectContext } from "@/components/provider/project-provider";
import ProjectDetail from "@/components/section/page/project/project-detail";
import ProjectSelection from "@/components/section/page/project/project-selection";
import DoubleBackArrow from "@/components/trigger/button/double-back-arrow";
import { useContext } from "react";

const ProjectPage: React.FC = () => {
  return (
    <>
      <ProjectSelection />
      <ProjectDetail />
    </>
  );
};

export default ProjectPage;
