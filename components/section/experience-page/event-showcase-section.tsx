import { ExperienceAndEventContext } from "@/components/provider/experience-and-event-provider";
import EventCardDeck from "@/components/sub-section/experience-page/event-card-deck";
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
  return (
    <div
      className={twMerge(
        "w-full h-full",
        "absolute flex justify-center items-center",
        isSelectingExperience ? "z-10" : "z-20"
      )}
    >
      <EventCardDeck events={experience.events} />
      <button onClick={() => setIsSelectingExperience(true)}>
        slect experience
      </button>
    </div>
  );
};

export default EventShowcaseSection;
