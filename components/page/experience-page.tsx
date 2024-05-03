"use client";

import { Experience } from "@/data/experience/org-exp/org-exp-data";
import React, { useContext } from "react";
import ExperiencePageBackground from "../sub-section/experience-page/experience-page-background";
import { twMerge } from "tailwind-merge";
import ExperienceSelectionSection from "../section/experience-page/experience-selection-section";
import { ExperienceAndEventContext } from "../provider/experience-and-event-provider";
import EventDashboardSection from "../section/experience-page/event-dashboard-section";

interface ExperiencePageProps {
  experiences: Experience[];
}

const getAllExperienceImage = (experiences: Experience[]): string[] => {
  const images = experiences.map((experience) => experience.backgroundImage);
  return images;
};

const ExperiencePage: React.FC<ExperiencePageProps> = ({ experiences }) => {
  const { experienceIndex } = useContext(ExperienceAndEventContext);
  return (
    <>
      <ExperiencePageBackground images={getAllExperienceImage(experiences)} />
      <div
        className={twMerge(
          "w-full h-full overflow-hidden relative bg-slate-800 bg-opacity-70"
        )}
      >
        <ExperienceSelectionSection experiences={experiences} />
        <EventDashboardSection experience={experiences[experienceIndex]} />
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
