import { Event } from "@/data/org-exp-section-data";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import EventCardBackground from "./event-card-background";
import EventCardDescription from "./event-card-description";
import EventCardTitle from "./event-card-title";

interface EventCardProps {
  isActive: boolean;
  setEventIndex: (index: number) => void;
  event: Event;
  thisEventIndex: number;
}

const EventCard: React.FC<EventCardProps> = ({
  isActive,
  setEventIndex,
  thisEventIndex,
  event,
}) => {
  const [isShowCardDescription, setIsShowCardDescription] = useState(false);

  useEffect(() => {
    setIsShowCardDescription(false);
  }, [event.eventName]);

  useEffect(() => {
    setIsShowCardDescription(isShowCardDescription && isActive);
  }, [isShowCardDescription, isActive]);

  return (
    <div
      // the event-card style handles transition
      className={twMerge(
        "h-[400px] w-16 rounded-lg event-card cursor-pointer relative overflow-hidden",
        isActive && "event-card-active"
      )}
      onClick={() => {
        if (isActive) {
          setIsShowCardDescription(!isShowCardDescription);
        } else {
          setEventIndex(thisEventIndex);
        }
      }}
    >
      <EventCardTitle
        number={thisEventIndex + 1}
        eventTitle={event.eventName}
      />
      <EventCardBackground img={event.img} video={event.video} />
      <EventCardDescription event={event} isActive={isShowCardDescription} />
    </div>
  );
};

export default EventCard;
