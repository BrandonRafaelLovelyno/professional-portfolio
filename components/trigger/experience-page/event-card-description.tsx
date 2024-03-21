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
          "flex flex-col justify-center px-5 rounded-lg bg-opacity-50",
          "gap-y-3"
        )}
      >
        <div className="flex flex-col gap-y-1">
          <p
            className={twMerge(
              "font-extrabold font-Montserrat text-black text-md text-left whitespace-nowrap text-ellipsis overflow-hidden",
              "max-lg:text-md"
            )}
          >
            {experience.position}
          </p>
          <p
            className={twMerge(
              "font-bold text-stone-600 text-sm whitespace-nowrap text-ellipsis overflow-hidden",
              "max-lg:text-xs"
            )}
          >
            {event.data.eventName}
          </p>
        </div>
        <p
          className={twMerge(
            "ml-auto text-lime-500 text-sm cursor-pointer",
            "hover:underline hover:font-extrabold transition-all duration-300"
          )}
        >
          Read more
        </p>
      </div>
    </>
  );
};

export default EventCardDescription;
