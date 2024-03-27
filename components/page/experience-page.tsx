"use client";

import { Experience } from "@/data/org-exp-section-data";
import React, { useState } from "react";
import ExperiencePageBackground from "../sub-section/experience-page/experience-page-background";
import ExperienceCardDeck from "../sub-section/experience-page/experience-card-deck";
import EventCardDeck from "../sub-section/experience-page/event-card-deck";
import { twMerge } from "tailwind-merge";
import ExperienceSelectionSection from "../section/experience-page/experience-selection-section";

interface ExperiencePageProps {
  experiences: Experience[];
}

const ExperiencePage: React.FC<ExperiencePageProps> = ({ experiences }) => {
  const [experienceIndex, setExperienceIndex] = useState(0);
  return (
    <>
      <ExperiencePageBackground image={experiences[0].backgroundImage} />
      <div className={twMerge("w-full h-full")}>
        <ExperienceSelectionSection />
      </div>
    </>
  );
};

export default ExperiencePage;

// the event card deck
//  <div className="w-full h-full flex flex-col relative overflow-hidden">
//    <div
//      className={twMerge(
//        "mx-auto lg:w-1/2 my-auto px-auto",
//        "md:w-[70%] w-full"
//      )}
//    >
//      <EventCardDeck events={experiences[experienceIndex].events} />
//    </div>
//  </div>;
