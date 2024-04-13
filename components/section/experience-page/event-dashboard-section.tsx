import { ExperienceAndEventContext } from "@/components/provider/experience-and-event-provider";
import VideoActorDashboard from "@/components/sub-section/experience-page/event-dashboards/video-actor-dashboard";
import VideoEditorDashboard from "@/components/sub-section/experience-page/event-dashboards/video-editor-dashboard";
import EventDashboardBoxPlaceholder from "@/components/trigger/experience-page/event/box/event-dashboard-box-placeholder";
import EventDashboardBoxText from "@/components/trigger/experience-page/event/box/event-dashboard-box-text";
import EventDashboardNavigationDropdown from "@/components/trigger/experience-page/event/navigation/event-dashboard-navigation-dropdown";
import { Experience } from "@/data/experience/org-exp-data";
import Image from "next/image";
import React, { useContext, useEffect } from "react";
import Masonry from "react-masonry-css";
import { twMerge } from "tailwind-merge";

interface EventDashboardSectionProps {
  experience: Experience;
}

const geEventDashboard = (experience: Experience): React.ReactNode => {
  if (experience.position === "Video Actor") {
    return <VideoActorDashboard />;
  } else if (experience.position === "Video Editor") {
    return <VideoEditorDashboard />;
  }
};

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
};

const EventDashboardSection: React.FC<EventDashboardSectionProps> = ({
  experience,
}) => {
  const { isSelectingExperience, eventIndex } = useContext(
    ExperienceAndEventContext
  );

  return (
    <div
      className={twMerge(
        "w-full h-full",
        "overflow-y-auto",
        "absolute flex flex-col pt-8 px-5",
        isSelectingExperience ? "z-10" : "z-20"
      )}
    >
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid w-full h-full"
        columnClassName="my-masonry-grid_column"
      >
        <EventDashboardBoxPlaceholder
          backgroundColor="bg-white"
          classname="w-full"
        >
          <EventDashboardBoxText
            Icon={
              <Image
                src={"/image/work-exp/video-production/assets/video.png"}
                width={30}
                height={30}
                alt="video"
              />
            }
            color="black"
            title="Select Jobs"
          >
            <EventDashboardNavigationDropdown experience={experience} />
          </EventDashboardBoxText>
        </EventDashboardBoxPlaceholder>
        <VideoActorDashboard />
      </Masonry>
    </div>
  );
};

export default EventDashboardSection;
