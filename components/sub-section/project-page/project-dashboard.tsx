import React, { useContext } from "react";
import { Variants, motion } from "framer-motion";
import { Project } from "@/data/project/coding/coding-project-data";
import { twMerge } from "tailwind-merge";
import { ProjectContext } from "@/components/provider/project-provider";
import { RxCross2 } from "react-icons/rx";

interface ProjectDashboardProps {
  projects: Project[];
}

const PROJECT_DASHBOARD_VARIANTS: Variants = {
  hidden: {
    y: "100%",
  },
  show: {
    y: 0,
  },
};

const ProjectDashboard: React.FC<ProjectDashboardProps> = () => {
  const { isLearnFeature, isSelectingProject, setIsLearnFeature } =
    useContext(ProjectContext);
  return (
    <motion.div
      className={twMerge(
        "absolute z-[21]",
        "w-screen h-screen",
        "flex flex-col gap-y-0",
        "px-5 py-5",
        "bg-neutral-600 bg-opacity-50 backdrop-blur-lg"
      )}
      variants={PROJECT_DASHBOARD_VARIANTS}
      animate={!isSelectingProject && isLearnFeature ? "show" : "hidden"}
      initial="hidden"
      transition={{
        type: "easeInOut",
        stiffness: 500,
        damping: 30,
        delay: 0.2,
      }}
    >
      <button className="ml-auto" onClick={() => setIsLearnFeature(false)}>
        <RxCross2 size={40} className="text-white" />
      </button>
    </motion.div>
  );
};

export default ProjectDashboard;
