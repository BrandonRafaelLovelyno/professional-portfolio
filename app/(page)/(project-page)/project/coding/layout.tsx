"use client";

import { ProjectProvider } from "@/components/provider/project-provider";

interface ProjectLayoutProps {
  children: React.ReactNode;
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({ children }) => {
  return <ProjectProvider>{children}</ProjectProvider>;
};

export default ProjectLayout;
