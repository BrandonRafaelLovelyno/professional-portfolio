"use client";

import { Experience } from "@/data/org-exp-section-data";
import { createEventCards } from "@/helper/experience-page-helper";
import React from "react";
import Masonry from "react-masonry-css";

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
  const eventCards: React.ReactNode[] = createEventCards(experiences);
  return (
    <div className="w-full h-full py-3 px-4">
      <Masonry
        breakpointCols={masonryBreakpoint}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {eventCards.map((evCard) => evCard)}
      </Masonry>
    </div>
  );
};

export default ExperiencePage;
