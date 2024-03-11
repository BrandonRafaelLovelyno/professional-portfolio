"use client";

import { Experience } from "@/data/org-exp-section-data";
import React, { useState } from "react";
import Section from "../display/navigation-section";
import { Parallax } from "@react-spring/parallax";
import { twMerge } from "tailwind-merge";
import ExpCarouselLayer from "../animation/carousel/exp-carousel-layer";
import SectionButton from "../trigger/section-button";
import ExpDetail from "../display/non-coding-project-page/exp-detail";
import NavigationSection from "../display/navigation-section";
import TeamDetail from "../display/non-coding-project-page/team-detail";

interface ExperiencePageProps {
  isSection: boolean;
  setIsSection: (isSection: boolean) => void;
  setIsRouting: (isRouting: boolean) => void;
  isFading: boolean;
  isRouting: boolean;
  experiences: Experience[];
}

const ExperiencePage: React.FC<ExperiencePageProps> = ({
  isFading,
  experiences,
  isSection,
  isRouting,
  setIsRouting,
  setIsSection,
}) => {
  const [selectedEvent, setSelectedEvent] = useState(experiences[0].events[0]);
  const [isReadMore, setIsReadMore] = useState(false);
  const [isTeam, setIsTeam] = useState(false);

  return (
    <>
      {isSection && (
        <NavigationSection
          onClose={() => setIsSection(false)}
          setIsRouting={setIsRouting}
        />
      )}

      <Parallax
        pages={experiences.length}
        className={twMerge(
          "transition-all duration-500",
          isFading ? "opacity-0" : "opacity-100"
        )}
      >
        {experiences.map((o, index) => (
          <ExpCarouselLayer
            setIsTeam={setIsTeam}
            isReadMore={isReadMore || isTeam}
            setIsReadMore={setIsReadMore}
            setIsRouting={setIsRouting}
            experience={o}
            isRouting={isRouting}
            offset={index}
            speed={1}
            key={o.position}
            setSelectedEvent={setSelectedEvent}
          />
        ))}
      </Parallax>
      {isReadMore && !isTeam && (
        <ExpDetail event={selectedEvent} onClose={() => setIsReadMore(false)} />
      )}
      {isTeam && !isReadMore && selectedEvent.team && (
        <TeamDetail
          onClose={() => setIsTeam(false)}
          team={selectedEvent.team}
        />
      )}
      <SectionButton isRouting={isRouting} setIsSection={setIsSection} />
    </>
  );
};

export default ExperiencePage;
