import { ExperienceAndEventContext } from "@/components/provider/experience-and-event-provider";
import { Experience } from "@/data/experience/org-exp-data";
import React, { useContext } from "react";
import { twMerge } from "tailwind-merge";
import { BsPersonBoundingBox } from "react-icons/bs";
import { FaRegFileVideo } from "react-icons/fa";
import EventDashboardSidebar from "@/components/trigger/experience-page/event/event-dashboard-sidebar";
import EventDashboardBoxPlaceholder from "@/components/trigger/experience-page/event/box/event-dashboard-box-placeholder";
import Masonry from "react-masonry-css";
import { IoMdCloudUpload } from "react-icons/io";
import CountUp from "react-countup";
import PotraitMockup from "@/components/trigger/experience-page/event/work/video-production/potrait-mockup";
import EventDashboardBoxIcon from "@/components/trigger/experience-page/event/box/event-dashboard-box-icon";
import EventDashboardLineChart from "@/components/trigger/experience-page/event/chart/event-dashboard-line-chart";
import { VIDEOACTOR_DATA } from "@/data/experience/work-exp-data";
interface VideoEditorEventDashboardSectionProps {
  experience: Experience;
}

const breakpointColumnsObj = {
  default: 5,
  1100: 4,
  700: 3,
  500: 2,
};
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
        "overflow-y-auto",
        "absolute flex flex-col py-8 px-5",
        isSelectingExperience ? "z-10" : "z-20"
      )}
    >
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        <EventDashboardBoxPlaceholder>
          <EventDashboardSidebar
            textColor="text-workSecondary"
            bgColor="bg-workPrimary"
            events={experience.events}
            icons={VIDEO_EDITOR_DASHBOARD_ICONS}
          />
        </EventDashboardBoxPlaceholder>
        <EventDashboardBoxPlaceholder
          classname="w-full"
          backgroundColor="bg-workPrimary"
        >
          <EventDashboardBoxIcon
            icon={<IoMdCloudUpload size={50} className="text-workSecondary" />}
            title={"Published Videos"}
            value={
              <div className="flex flex-row gap-x-3 items-center">
                <span className="text-6xl text-workSecondary font-bold">
                  {!isSelectingExperience && (
                    <CountUp start={0} end={6} duration={2} delay={0.5} />
                  )}
                </span>
                <span className="text-3xl text-workSecondary font-semibold">
                  videos
                </span>
              </div>
            }
          />
        </EventDashboardBoxPlaceholder>
        <EventDashboardBoxPlaceholder classname="w-full">
          <EventDashboardBoxIcon
            icon={<IoMdCloudUpload size={50} className="text-workPrimary" />}
            title={"Published Videos"}
            value={
              <div className="w-[200px] relative h-[100px]">
                {!isSelectingExperience && (
                  <EventDashboardLineChart
                    width={200}
                    height={100}
                    data={VIDEOACTOR_DATA}
                    dataKey={["line1"]}
                    axisColor="#FF6C44"
                    lineColor="#FF6C44"
                    gridColor="#FF6C44"
                  />
                )}
              </div>
            }
          />
        </EventDashboardBoxPlaceholder>
        <EventDashboardBoxPlaceholder
          noBackground
          classname={twMerge("w-[225px] h-[400px]")}
        >
          <PotraitMockup source="/video/work-exp/video-actor/video-1.mp4" />
        </EventDashboardBoxPlaceholder>
        <EventDashboardBoxPlaceholder classname="w-full">
          <div className={twMerge("w-full h-fit", "flex flex-col gap-y-3")}>
            <h2>today revenue</h2>
            <p className="text-xl">p</p>
          </div>
        </EventDashboardBoxPlaceholder>

        <EventDashboardBoxPlaceholder
          noBackground
          classname={twMerge("w-[225px] h-[400px]")}
        >
          <PotraitMockup source="/video/work-exp/video-actor/video-2.mp4" />
        </EventDashboardBoxPlaceholder>
        <EventDashboardBoxPlaceholder classname="w-full">
          <div className={twMerge("w-full h-fit", "flex flex-col gap-y-3")}>
            <h2>today revenue</h2>
            <p className="text-xl">p</p>
          </div>
        </EventDashboardBoxPlaceholder>
      </Masonry>
    </div>
  );
};

export default VideoEditorEventDashboardSection;
