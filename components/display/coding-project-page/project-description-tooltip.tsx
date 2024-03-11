import { Project } from "@/data/coding-project-detail-data";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useRouter } from "next/navigation";
import React from "react";
import { CgWebsite } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

interface ProjectDescriptionTooltipProps {
  setIsRouting: (isRouting: boolean) => void;
  project: Project;
}

const ProjectDescriptionTooltip: React.FC<ProjectDescriptionTooltipProps> = ({
  setIsRouting,
  project,
}) => {
  const router = useRouter();
  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger
            className={twMerge(
              "py-2 px-4 rounded-full border-2 border-secondary hover:bg-primary hover:text-background transition-all duration-300 font-semibold",
              !project.deployment && "brightness-50"
            )}
            disabled={!project.deployment}
            onClick={() => {
              if (!project.deployment) {
                return;
              }
              setIsRouting(true);
              setTimeout(() => router.push(project.deployment!), 1000);
            }}
          >
            <CgWebsite size={30} />
          </TooltipTrigger>
          <TooltipContent>
            <p>
              {project.deployment
                ? "Visit deployed website"
                : "Deployment is still being prepared"}
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger
            className={twMerge(
              "py-2 px-4 rounded-full border-2 border-secondary hover:bg-primary hover:text-background transition-all duration-300 font-semibold"
            )}
            onClick={() => {
              setIsRouting(true);
              setTimeout(() => router.push(project.repository), 1000);
            }}
          >
            <FaGithub size={30} />
          </TooltipTrigger>
          <TooltipContent>
            <p>Visit Repository</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </>
  );
};

export default ProjectDescriptionTooltip;
