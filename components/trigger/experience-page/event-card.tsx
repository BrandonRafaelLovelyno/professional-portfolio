import { Event } from "@/data/org-exp-section-data";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import EventCardBackground from "./event-card-background";
import EventCardDescription from "./event-card-description";
import EventCardTitle from "./event-card-title";
import { Variants, motion } from "framer-motion";
import { ExperienceAndEventContext } from "@/components/provider/experience-and-event-provider";

interface EventCardProps {
  isActive: boolean;
  setEventIndex: (index: number) => void;
  event: Event;
  thisEventIndex: number;
}

const eventCardVariants: Variants = {
  onView: {
    y: 0,
  },
  onLower: {
    y: "200%",
  },
};

const EventCard: React.FC<EventCardProps> = ({
  isActive,
  setEventIndex,
  thisEventIndex,
  event,
}) => {
  const [isShowCardDescription, setIsShowCardDescription] = useState(false);
  const { isSelectingExperience } = useContext(ExperienceAndEventContext);

  useEffect(() => {
    setIsShowCardDescription(false);
  }, [event.eventName]);

  useEffect(() => {
    setIsShowCardDescription(isShowCardDescription && isActive);
  }, [isShowCardDescription, isActive]);

  return (
    <motion.div
      className={twMerge(
        "h-[400px] w-16 rounded-lg event-card cursor-pointer relative overflow-hidden",
        isActive && "event-card-active"
      )}
      variants={eventCardVariants}
      animate={isSelectingExperience ? "onLower" : "onView"}
      transition={{
        duration: 0.9,
        ease: [0.6, 0.05, -0.01, 0.9],
        delay: Math.random() * 0.5,
      }}
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
    </motion.div>
  );
};

export default EventCard;
