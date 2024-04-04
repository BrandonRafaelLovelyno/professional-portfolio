import React, { useContext } from "react";
import { Event } from "@/data/org-exp-section-data";
import { ExperienceAndEventContext } from "@/components/provider/experience-and-event-provider";
import { twMerge } from "tailwind-merge";
import { Poppins } from "next/font/google";

interface EventDashboardSidebarProps {
  events: Event[];
  icons: React.ReactNode[];
}

const poppins = Poppins({ weight: ["300", "400"], subsets: ["latin"] });

const EventDashboardSidebar: React.FC<EventDashboardSidebarProps> = ({
  events,
  icons,
}) => {
  const { eventIndex, setEventIndex } = useContext(ExperienceAndEventContext);
  return (
    <div className={twMerge("h-fit w-fit", poppins.className)}>
      <div className={twMerge("flex flex-col gap-y-3")}>
        {events.map((event, index) => (
          <div
            key={index}
            className={twMerge(
              "flex flex-row gap-x-2 px-5 bg-opacity-60 items-center py-2 rounded-xl",
              "transition-all duration-500",
              "text-sm",
              "cursor-pointer",
              eventIndex == index && "bg-stone-700 text-red-500 font-bold",
              eventIndex != index && "hover:bg-stone-700"
            )}
            onClick={() => {
              setEventIndex(index);
            }}
          >
            {icons[index]}
            <p>{event.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventDashboardSidebar;
