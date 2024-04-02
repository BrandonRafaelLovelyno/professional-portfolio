"use client";

import { Experience } from "@/data/org-exp-section-data";
import React, { useContext, useState } from "react";
import ExperiencePageBackground from "../sub-section/experience-page/experience-page-background";
import { twMerge } from "tailwind-merge";
import ExperienceSelectionSection from "../section/experience-page/experience-selection-section";
import EventShowcaseSection from "../section/experience-page/event-dashboard-section/online-shop-dashboard-section";
import { ExperienceAndEventContext } from "../provider/experience-and-event-provider";
import { AnimatePresence, motion } from "framer-motion";

interface ExperiencePageProps {
  experiences: Experience[];
}

const getAllExperienceImage = (experiences: Experience[]): string[] => {
  const images = experiences.map((experience) => experience.backgroundImage);
  return images;
};

const ExperiencePage: React.FC<ExperiencePageProps> = ({ experiences }) => {
  const { experienceIndex, setExperienceIndex, eventIndex, setEventIndex } =
    useContext(ExperienceAndEventContext);
  return (
    <>
      <ExperiencePageBackground images={getAllExperienceImage(experiences)} />
      <div className={twMerge("w-full h-full overflow-hidden relative")}>
        <ExperienceSelectionSection experiences={experiences} />
        <EventShowcaseSection experience={experiences[experienceIndex]} />
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
