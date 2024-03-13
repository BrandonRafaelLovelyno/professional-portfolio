"use client";

import { Feature, Project } from "@/data/coding-project-detail-data";
import React, { useState } from "react";
import { twMerge } from "tailwind-merge";
import EllipsisLinkButton from "@/components/trigger/all-page/ellipsis-link-button";
import { FaBook, FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import ProjectDescription from "./project-description-section";
import FeatureIndexButton from "@/components/trigger/project-page/feature-index-button";
import SingleFeature from "./project-single-feature";

interface ProjectFeatureSectionProps {
  features: Feature[];
  project: Project;
}

const ProjectFeatureSection: React.FC<ProjectFeatureSectionProps> = ({
  features,
  project,
}) => {
  const [index, setIndex] = useState(1);
  return (
    <div
      className={twMerge(
        "flex h-full items-center w-full",
        "lg:flex-row flex-col",
        "py-10"
      )}
    >
      <div className="lg:w-[90%] w-full lg:h-full max-lg:flex-1  flex flex-col overflow-hidden relative">
        {features.map((feat, featIndex) => (
          <SingleFeature
            feature={feat}
            currentIndex={index}
            featureIndex={featIndex + 1}
            key={featIndex}
          />
        ))}
      </div>
      <div
        className={twMerge(
          "max-lg:h-fit flex-col flex justify-center max-lg:items-center lg:h-[450px] max-lg:gap-y-5"
        )}
      >
        <FeatureIndexButton features={features} setIndex={setIndex} />
        <div className={twMerge("flex flex-row w-full gap-x-5", "lg:hidden")}>
          <EllipsisLinkButton text="Repository" link={project.repository}>
            <FaGithub size={30} />
          </EllipsisLinkButton>
          <EllipsisLinkButton text=" Deployment" link={project.deployment}>
            <CgWebsite size={30} />
          </EllipsisLinkButton>
        </div>
        <Sheet>
          <SheetTrigger asChild className="lg:hidden">
            <button
              className={twMerge(
                "flex flex-row items-center w-fit",
                "rounded-full px-5 border-2 py-2 bg-background border-secondary gap-x-5",
                "hover:bg-primary hover:text-background hover:bg-opacity-80",
                "transition duration-300",
                "font-semibold"
              )}
            >
              <span>Read More</span>
              <FaBook size={30} />
            </button>
          </SheetTrigger>
          <SheetContent className="p-0">
            <ProjectDescription project={project} />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default ProjectFeatureSection;
