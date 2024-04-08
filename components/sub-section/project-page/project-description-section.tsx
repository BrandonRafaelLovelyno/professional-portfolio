"use client";

import { Project } from "@/data/project/coding-project-detail-data";
import { useRouter } from "next/navigation";
import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { twMerge } from "tailwind-merge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@radix-ui/react-scroll-area";
import Image from "next/image";

interface ProjectDescriptionProps {
  project: Project;
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({ project }) => {
  const router = useRouter();
  return (
    <div className="flex flex-col flex-1 pt-4 pl-4 pr-3 border-l-2 border-primary h-full">
      <button
        className={twMerge(
          "border-2 border-primary text-primary",
          "hover:bg-primary hover:text-background",
          "p-2 w-fit h-fit rounded-full",
          "transition-all duration-300",
          "max-lg:hidden"
        )}
        onClick={() => {
          setTimeout(() => router.push("/coding-pro"), 1000);
        }}
      >
        <IoArrowBackOutline size={20} />
      </button>
      <ScrollArea className="flex flex-col flex-1 overflow-auto mt-8 gap-y-8 pb-8">
        <p className="text-primary max-lg:text-center font-bold text-2xl ">
          {project.title}
        </p>
        <p className="text-secondary text-center font-thin text-xs leading-7">
          {project.description}
        </p>
        <div className="flex flex-row flex-wrap gap-x-5 gap-y-2 mt-10 justify-center">
          {project.techStack.map((ts) => (
            <TooltipProvider key={ts.name}>
              <Tooltip>
                <TooltipTrigger>
                  <Image width={40} height={40} src={ts.image} alt={ts.name} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>{ts.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default ProjectDescription;
