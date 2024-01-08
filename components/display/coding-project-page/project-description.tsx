import React from "react";
import { IoArrowBackOutline } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

interface ProjectDescriptionProps {
  setIsRouting: (isRouting: boolean) => void;
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({
  setIsRouting,
}) => {
  return (
    <div className="flex flex-col flex-1">
      <button
        className={twMerge(
          "border-2 border-primary text-primary",
          "hover:bg-primary hover:text-background",
          "p-2",
          "transition-all duration-300"
        )}
      >
        <IoArrowBackOutline size={30} />
      </button>
    </div>
  );
};

export default ProjectDescription;
