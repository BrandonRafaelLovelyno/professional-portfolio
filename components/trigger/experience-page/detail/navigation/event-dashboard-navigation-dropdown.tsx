import React, { useContext, useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Event, Experience } from "@/data/experience/org-exp/org-exp-data";
import EventDropdownOption from "./event-dropdown-option";
import { ExperienceAndEventContext } from "@/components/provider/experience-and-event-provider";

interface EventDashboardNavigationDropdownProps {
  experience: Experience;
}

const EventDashboardNavigationDropdown: React.FC<
  EventDashboardNavigationDropdownProps
> = ({ experience }) => {
  const { eventIndex, setEventIndex, setIsChangingEvent } = useContext(
    ExperienceAndEventContext
  );
  const [isRotated, setIsRotated] = useState(false);
  return (
    <DropdownMenu onOpenChange={() => setIsRotated(!isRotated)}>
      <DropdownMenuTrigger className="w-full h-fit rounded-lg">
        <EventDropdownOption
          event={experience.events[eventIndex]}
          experience={experience}
          showArrow
          isRotated={isRotated}
          setIsRotated={setIsRotated}
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-full">
        {experience.events.map((event: Event, index: number) => (
          <DropdownMenuItem
            key={index}
            onSelect={() => {
              setIsChangingEvent(true);
              setTimeout(() => {
                setEventIndex(index);
                setIsChangingEvent(false);
              }, 1500);
            }}
          >
            <EventDropdownOption event={event} experience={experience} />
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default EventDashboardNavigationDropdown;
