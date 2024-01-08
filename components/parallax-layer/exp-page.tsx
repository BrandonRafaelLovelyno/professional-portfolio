"use client";

import { Experience } from "@/data/org-exp-section-data";
import React from "react";
import Section from "../display/section";
import { Parallax } from "@react-spring/parallax";
import { twMerge } from "tailwind-merge";
import ExpCarouselLayer from "../animation/carousel/exp-carousel-layer";
import SectionButton from "../trigger/section-button";

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
  return (
    <>
      {isSection && (
        <Section
          onClose={() => setIsSection(false)}
          setIsRouting={setIsRouting}
        />
      )}
      <Parallax
        pages={experiences.length}
        className={twMerge(
          "transition-all duration-[700ms]",
          isFading ? "opacity-0" : "opacity-100"
        )}
      >
        {experiences.map((o, index) => (
          <ExpCarouselLayer
            setIsRouting={setIsRouting}
            experience={o}
            isRouting={isRouting}
            offset={index}
            speed={1}
            key={o.position}
          />
        ))}
      </Parallax>
      <SectionButton isRouting={isRouting} setIsSection={setIsSection} />
    </>
  );
};

export default ExperiencePage;
