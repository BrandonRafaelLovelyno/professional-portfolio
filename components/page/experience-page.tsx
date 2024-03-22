"use client";

import { Experience } from "@/data/org-exp-section-data";
import React from "react";
import ExperiencePageBackground from "../sub-section/experience-page/experience-page-background";
import ExperienceCardDeck from "../sub-section/experience-page/experience-card-deck";

interface ExperiencePageProps {
  experiences: Experience[];
}

const ExperiencePage: React.FC<ExperiencePageProps> = ({ experiences }) => {
  return (
    <>
      <ExperiencePageBackground image={experiences[0].backgroundImage} />
      <div className="w-full h-full flex flex-col relative overflow-hidden">
        <div className="mt-auto">
          <ExperienceCardDeck experiences={experiences} />
        </div>
      </div>
    </>
  );
};

export default ExperiencePage;
