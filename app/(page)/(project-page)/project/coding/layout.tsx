"use client";

import ProjectPage from "@/components/page/project-page";
import { ProjectProvider } from "@/components/provider/project-provider";
import CODING_PRO from "@/data/project/coding/coding-project-data";

interface ProjectLayoutProps {
  children: React.ReactNode;
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({ children }) => {
  return <ProjectProvider>{children}</ProjectProvider>;
};

export default ProjectLayout;
