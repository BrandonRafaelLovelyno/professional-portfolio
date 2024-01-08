"use client";

import { Project } from "@/data/coding-project-detail-data";
import { useRouter } from "next/navigation";
import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

interface ProjectDescriptionProps {
  setIsRouting: (isRouting: boolean) => void;
  project: Project;
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
  setIsRouting,
  project,
}) => {
  const router = useRouter();
  return (
    <div className="flex flex-col flex-1 pt-4 pl-4 pr-3 border-l-2 border-primary h-full">
      <button
        className={twMerge(
          "border-2 border-primary text-primary",
          "hover:bg-primary hover:text-background",
          "p-2 w-fit h-fit rounded-full",
          "transition-all duration-300"
        )}
        onClick={() => {
          setIsRouting(true);
          setTimeout(() => router.push("/coding-pro"), 1000);
        }}
      >
        <IoArrowBackOutline size={20} />
      </button>
      <div className="flex flex-col flex-1 overflow-auto mt-8 gap-y-8">
        <p className="text-primary font-bold text-2xl ">{project.title}</p>
        <p className="text-secondary font-thin text-xs">
          {project.description}
        </p>
      </div>
      <div className="h-fit py-5 border-primary border-t-2 flex justify-center items-center">
        <button
          className="py-2 px-4 rounded-full border-2 border-secondary hover:bg-primary hover:text-background transition-all duration-300 font-semibold"
          onClick={() => {
            setIsRouting(true);
            setTimeout(() => router.push(project.deployment), 1000);
          }}
        >
          Visit Website
        </button>
      </div>
    </div>
  );
};

export default ProjectDescription;
