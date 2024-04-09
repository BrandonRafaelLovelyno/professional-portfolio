import React, { useContext } from "react";
import { Event } from "@/data/experience/org-exp-data";
import { ExperienceAndEventContext } from "@/components/provider/experience-and-event-provider";
import { twMerge } from "tailwind-merge";
import { Poppins } from "next/font/google";

interface EventDashboardSidebarProps {
  events: Event[];
  textColor: string;
  bgColor: string;
  icons: React.ReactNode[];
}

const poppins = Poppins({ weight: ["300", "400"], subsets: ["latin"] });

const EventDashboardSidebar: React.FC<EventDashboardSidebarProps> = ({
  events,
  icons,
  textColor,
  bgColor,
}) => {
  const { eventIndex, setEventIndex } = useContext(ExperienceAndEventContext);
  return (
    <div className={twMerge("h-fit w-fit", poppins.className)}>
      <div className={twMerge("flex flex-col gap-y-3")}>
        {events.map((event, index) => (
          <div
            key={index}
            className={twMerge(
              "flex flex-row gap-x-2 px-5 items-center py-2 rounded-xl",
              "transition-all duration-500",
              "text-sm",
              "cursor-pointer",
              eventIndex == index && `${bgColor} font-semibold ${textColor}`
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
