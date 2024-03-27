import { Event } from "@/data/org-exp-section-data";
import React from "react";
import { twMerge } from "tailwind-merge";
import { Variants, motion } from "framer-motion";

interface EventCardDescriptionProps {
  event: Event;
  isActive: boolean;
}

const variants: Variants = {
  isActive: {
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  isNotAcitve: {
    y: "-100%",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const EventCardDescription: React.FC<EventCardDescriptionProps> = ({
  event,
  isActive,
}) => {
  return (
    <motion.div
      animate={isActive ? "isActive" : "isNotAcitve"}
      variants={variants}
      className={twMerge(
        "bg-gray-600 backdrop-blur-lg w-[] h-full bg-opacity-30 flex flex-col gap-y-5",
        "absolute right-0 top-0",
        "py-5 px-2"
      )}
    >
      <p className={twMerge("text-center font-bold italic")}>
        {event.eventName}
      </p>
      <p className={twMerge("text-center text-sm")}>{event.eventDesc}</p>
    </motion.div>
  );
};

export default EventCardDescription;
