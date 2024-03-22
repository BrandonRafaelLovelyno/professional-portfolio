"use client";

import { Experience } from "@/data/org-exp-section-data";
import React, { useState } from "react";
import ExperiencePageBackground from "../sub-section/experience-page/experience-page-background";
import ExperienceCardDeck from "../sub-section/experience-page/experience-card-deck";
import EventCardDeck from "../sub-section/experience-page/event-card-deck";

interface ExperiencePageProps {
  experiences: Experience[];
}

const ExperiencePage: React.FC<ExperiencePageProps> = ({ experiences }) => {
  const [experienceIndex, setExperienceIndex] = useState(0);
  return (
    <>
      <ExperiencePageBackground image={experiences[0].backgroundImage} />
      <div className="w-full h-full flex flex-col relative overflow-hidden">
        <div className="mx-auto w-1/2 my-auto px-auto">
          <EventCardDeck events={experiences[experienceIndex].events} />
        </div>
        <div className="mt-auto">
          <ExperienceCardDeck
            experienceIndex={experienceIndex}
            experiences={experiences}
            setExperienceIndex={setExperienceIndex}
          />
        </div>
      </div>
    </>
  );
};

export default ExperiencePage;
