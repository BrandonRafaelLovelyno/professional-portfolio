"use client";

import { Experience } from "@/data/org-exp-section-data";
import React from "react";

interface ExperiencePageProps {
  experiences: Experience[];
}

const masonryBreakpoint = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const ExperiencePage: React.FC<ExperiencePageProps> = ({ experiences }) => {
  return (
    <div className="w-screen h-full flex items-center justify-center"></div>
  );
};

export default ExperiencePage;
