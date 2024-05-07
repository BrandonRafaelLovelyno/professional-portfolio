"use client";

import { ProjectProvider } from "@/components/provider/project-provider";
import { AnimatePresence, motion } from "framer-motion";

interface ProjectLayoutProps {
  children: React.ReactNode;
  params: { slug: string };
}

const ProjectLayout: React.FC<ProjectLayoutProps> = ({ children, params }) => {
  return <ProjectProvider>{children}</ProjectProvider>;
};

export default ProjectLayout;
