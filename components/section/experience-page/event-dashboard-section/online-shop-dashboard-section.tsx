import { ExperienceAndEventContext } from "@/components/provider/experience-and-event-provider";
import { Experience } from "@/data/org-exp-section-data";
import React, { useContext } from "react";
import { twMerge } from "tailwind-merge";
import { MdOutlineArrowBackIos } from "react-icons/md";
import EventDashboadSidebar from "@/components/trigger/experience-page/event/event-dashboard-sidebar";
import EventDashboardBox from "@/components/trigger/experience-page/event/event-dashboard-box";

interface EventShowcaseSectionProps {
  experience: Experience;
}

const EventShowcaseSection: React.FC<EventShowcaseSectionProps> = ({
  experience,
}) => {
  const { isSelectingExperience, setIsSelectingExperience } = useContext(
    ExperienceAndEventContext
  );
  return (
    <div
      className={twMerge(
        "w-full h-full",
        "absolute flex flex-row",
        "p-5",
        isSelectingExperience ? "z-10" : "z-20"
      )}
    >
      <EventDashboardBox>
        <EventDashboadSidebar events={experience.events} />
      </EventDashboardBox>
    </div>
  );
};

export default EventShowcaseSection;
