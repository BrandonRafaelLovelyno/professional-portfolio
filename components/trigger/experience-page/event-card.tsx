import { Event } from "@/data/org-exp-section-data";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import EventCardBackground from "./event-card-background";
import EventCardDescription from "./event-card-description";
import EventCardDescriptionButton from "./event-card-description-button";

interface EventCardProps {
  isActive: boolean;
  onClick: () => void;
  event: Event;
}

const EventCard: React.FC<EventCardProps> = ({ isActive, onClick, event }) => {
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
      onClick={onClick}
    >
      <EventCardBackground img={event.img} video={event.video} />
      <EventCardDescription
        event={event}
        isActive={isShowCardDescription && isActive}
      />
      <EventCardDescriptionButton
        setIsShowCardDescription={setIsShowCardDescription}
        isShowCardDescription={isShowCardDescription && isActive}
      />
    </div>
  );
};

export default EventCard;
