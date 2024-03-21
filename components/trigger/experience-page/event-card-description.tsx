import { Event, Experience } from "@/data/org-exp-section-data";
import React from "react";
import { twMerge } from "tailwind-merge";

interface EventCardDescriptionProps {
  experience: Experience;
  event: Event;
}

const EventCardDescription: React.FC<EventCardDescriptionProps> = ({
  experience,
  event,
}) => {
  return (
    <>
      <div
        className={twMerge(
          "bottom-0 left-0 right-0",
          "card-description",
          "flex items-center justify-center"
        )}
      >
        <p className={twMerge("font-bold text-white text-2xl")}>
          {experience.position}
        </p>
      </div>
    </>
  );
};

export default EventCardDescription;
