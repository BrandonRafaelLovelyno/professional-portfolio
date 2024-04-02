import React, { useContext } from "react";
import { Event } from "@/data/org-exp-section-data";
import { ExperienceAndEventContext } from "@/components/provider/experience-and-event-provider";

interface EventDashboadSidebarProps {
  events: Event[];
}

const EventDashboadSidebar: React.FC<EventDashboadSidebarProps> = ({
  events,
}) => {
  const { isSelectingExperience } = useContext(ExperienceAndEventContext);
  return (
    <div>
      {events.map((event, index) => (
        <div key={index}>{event.position}</div>
      ))}
    </div>
  );
};

export default EventDashboadSidebar;
