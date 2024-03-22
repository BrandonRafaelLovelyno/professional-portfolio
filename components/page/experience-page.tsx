"use client";

import { Experience } from "@/data/org-exp-section-data";
import React from "react";

interface ExperiencePageProps {
  experiences: Experience[];
}

const ExperiencePage: React.FC<ExperiencePageProps> = ({ experiences }) => {
  return (
    <div className="w-screen h-full flex items-center justify-center"></div>
  );
};

export default ExperiencePage;
