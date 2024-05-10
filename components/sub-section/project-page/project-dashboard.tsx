import React from "react";
import { motion } from "framer-motion";
import { Project } from "@/data/project/coding/coding-project-data";
import { twMerge } from "tailwind-merge";

interface ProjectDashboardProps {
  projects: Project[];
}

const ProjectDashboard = () => {
  return (
    <motion.div
      className={twMerge(
        "absolute",
        "w-screen h-screen",
        "bg-neutral-600 bg-opacity-50 backdrop-blur-xl"
      )}
    ></motion.div>
  );
};

export default ProjectDashboard;
