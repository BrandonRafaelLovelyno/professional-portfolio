import { Event } from "@/data/org-exp-section-data";
import React from "react";
import { twMerge } from "tailwind-merge";

interface EventCardDescriptionProps {
  event: Event;
  isActive: boolean;
}

const EventCardDescription: React.FC<EventCardDescriptionProps> = ({
  event,
  isActive,
}) => {
  return (
    <div
      className={twMerge(
        "bg-gray-600 backdrop-blur-lg w-[12rem] h-full bg-opacity-30 flex flex-col transition-all duration-300",
        "absolute right-0",
        "-translate-y-[100%]",
        isActive && "translate-y-0"
      )}
    ></div>
  );
};

export default EventCardDescription;
