import { ExperienceAndEventContext } from "@/components/provider/experience-and-event-provider";
import { Event, Experience } from "@/data/org-exp-section-data";
import React, { useContext } from "react";
import { twMerge } from "tailwind-merge";

interface EventShowcaseSectionProps {
  experience: Experience;
}

const EventShowcaseSection: React.FC<EventShowcaseSectionProps> = ({
  experience,
}) => {
  const { isSelectingExperience, setIsSelectingExperience } = useContext(
    ExperienceAndEventContext
  );
  return <div className={twMerge("w-full h-full")}></div>;
};

export default EventShowcaseSection;
