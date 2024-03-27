import React from "react";
import { twMerge } from "tailwind-merge";

interface EventCardTitleProps {
  eventTitle: string;
  number: number;
}

const EventCardTitle: React.FC<EventCardTitleProps> = ({
  eventTitle,
  number,
}) => {
  return (
    <div
      className={twMerge(
        "absolute left-5 bottom-5",
        "z-10",
        "flex flex-row gap-x-5 items-center"
      )}
    >
      <div
        className={twMerge(
          "p-5 flex justify-center items-center rounded-full relative bg-white"
        )}
      >
        <p className="absolute  text-black font-extrabold">{number}</p>
      </div>
      <p
        className={twMerge("font-bold tracking-widest text-lg truncate w-full")}
      >
        {eventTitle}
      </p>
    </div>
  );
};

export default EventCardTitle;
