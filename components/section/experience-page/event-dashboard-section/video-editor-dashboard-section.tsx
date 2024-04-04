import { ExperienceAndEventContext } from "@/components/provider/experience-and-event-provider";
import { Experience } from "@/data/org-exp-section-data";
import React, { useContext } from "react";
import { twMerge } from "tailwind-merge";
import { BsPersonBoundingBox } from "react-icons/bs";
import { FaRegFileVideo } from "react-icons/fa";
import EventDashboardSidebar from "@/components/trigger/experience-page/event/event-dashboard-sidebar";
import EventDashboardBox from "@/components/trigger/experience-page/event/event-dashboard-box";

interface VideoEditorEventDashboardSectionProps {
  experience: Experience;
}

const VIDEO_EDITOR_DASHBOARD_ICONS: React.ReactNode[] = [
  <BsPersonBoundingBox size={17} key={"video actor"} />,
  <FaRegFileVideo size={17} key={"video editor"} />,
];

const VideoEditorEventDashboardSection: React.FC<
  VideoEditorEventDashboardSectionProps
> = ({ experience }) => {
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
      <EventDashboardBox classname="flex flex-col gap-y-3 items-center">
        <EventDashboardSidebar
          events={experience.events}
          icons={VIDEO_EDITOR_DASHBOARD_ICONS}
        />
      </EventDashboardBox>
    </div>
  );
};

export default VideoEditorEventDashboardSection;
