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
        "absolute left-3 bottom-5",
        "z-10",
        "flex flex-row gap-x-2 items-center"
      )}
    >
      <div
        className={twMerge(
          "p-5 flex justify-center items-center rounded-full bg-opacity-30 backdrop-blur-xl relative bg-black"
        )}
      >
        <p className="absolute text-2xl text-center text-white font-extrabold">
          {number}
        </p>
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
