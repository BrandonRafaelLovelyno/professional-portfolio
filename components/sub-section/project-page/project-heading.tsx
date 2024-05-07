import { ProjectContext } from "@/components/provider/project-provider";
import Image from "next/image";
import React, { useContext } from "react";
import { twMerge } from "tailwind-merge";
import { FaBookReader } from "react-icons/fa";
import KnowMoreButton from "@/components/trigger/all-page/know-more-button";

interface ProjectHeadingProps {
  title: string;
  images: {
    topRight: string;
    bottomLeft: string;
  };
}

const ProjectHeading: React.FC<ProjectHeadingProps> = ({ title, images }) => {
  const { setIsLearnFeature } = useContext(ProjectContext);
  return (
    <div
      className={twMerge(
        "w-fit h-fit",
        "flex flex-col gap-y-20 items-center",
        "relative",
        "mx-auto"
      )}
    >
      <div className={twMerge("relative")}>
        <h1 className={twMerge("text-7xl font-bold", "z-1")}>{title}</h1>
        <Image
          src={images.bottomLeft}
          className={twMerge(
            "absolute",
            "bottom-0 left-0",
            "-translate-x-[150px] translate-y-[120px]",
            "z-0"
          )}
          alt={images.bottomLeft}
          width={200}
          height={200}
        />
        <Image
          src={images.topRight}
          className={twMerge(
            "absolute",
            "top-0 right-0",
            "translate-x-[150px] -translate-y-[90px]",
            "z-0"
          )}
          alt={images.topRight}
          width={200}
          height={200}
        />
      </div>
      <div className={twMerge("w-1/2")}>
        <KnowMoreButton
          text="Learn Feature"
          onClick={() => setIsLearnFeature(true)}
        />
      </div>
    </div>
  );
};

export default ProjectHeading;
