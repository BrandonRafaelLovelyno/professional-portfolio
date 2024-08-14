import { ProjectContext } from "@/components/provider/project-provider";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import KnowMoreButton from "@/components/trigger/button/know-more-button";
import { PageTransitionContext } from "@/components/provider/page-transition-provider";

interface ProjectHeadingProps {
  title: string;
  images: {
    topRight: string;
    bottomLeft: string;
  };
  deployment: string;
}

const defineSize = (initial: number, width: number): number => {
  if (width >= 1024) return initial;
  if (width >= 768) return 0.75 * initial;
  return 0.5 * initial;
};

const ProjectHeading: React.FC<ProjectHeadingProps> = ({
  title,
  images,
  deployment,
}) => {
  const { setIsLearnFeature } = useContext(ProjectContext);
  const { width, pushPage } = useContext(PageTransitionContext);

  return (
    <div
      className={twMerge(
        "w-fit h-fit",
        "flex flex-col gap-y-10 items-center",
        "relative",
        "mx-auto"
      )}
    >
      <div className={twMerge("relative")}>
        <h1 className={twMerge("text-7xl font-bold text-center", "z-1")}>
          {title}
        </h1>
        <Image
          src={images.bottomLeft}
          className={twMerge(
            "absolute",
            "bottom-0",
            width > 535 ? "left-0" : "left-[20%]",
            `-translate-x-[80%] translate-y-[70%]`,
            "z-0"
          )}
          alt={images.bottomLeft}
          width={defineSize(200, width)}
          height={defineSize(200, width)}
        />
        <Image
          src={images.topRight}
          className={twMerge(
            "absolute",
            "top-0",
            width > 535 ? "right-0" : "right-[20%]",
            `translate-x-[80%] -translate-y-[70%]`,
            "z-0"
          )}
          alt={images.topRight}
          width={defineSize(200, width)}
          height={defineSize(200, width)}
        />
      </div>
      <div
        className={twMerge(
          "flex sm:flex-row justify-center items-center flex-col gap-x-3 gap-y-3"
        )}
      >
        <KnowMoreButton
          text="Learn Feature"
          onClick={() => setIsLearnFeature(true)}
        />
        <KnowMoreButton
          text="Visit Deployment"
          onClick={() => pushPage(deployment)}
        />
      </div>
    </div>
  );
};

export default ProjectHeading;
