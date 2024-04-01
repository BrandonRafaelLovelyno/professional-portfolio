import { ExperienceAndEventContext } from "@/components/provider/experience-and-event-provider";
import EventCard from "@/components/trigger/experience-page/event-card";
import { Event } from "@/data/org-exp-section-data";
import React, { useContext, useState } from "react";
import { twMerge } from "tailwind-merge";

interface EventCardDeckProps {
  events: Event[];
}

const EventCardDeck: React.FC<EventCardDeckProps> = ({ events }) => {
  const [eventIndex, setEventIndex] = useState(0);
  return (
    <div
      className={twMerge(
        "flex flex-row justify-center items-center w-fit h-fit"
      )}
    >
      {events.map((event, index) => (
        <EventCard
          isActive={eventIndex == index}
          setEventIndex={setEventIndex}
          thisEventIndex={index}
          event={event}
          key={index}
        />
      ))}
    </div>
  );
};

export default EventCardDeck;
