import { ExperienceAndEventContext } from "@/components/provider/experience-and-event-provider";
import { Experience } from "@/data/experience/org-exp-data";
import React, { use, useContext, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { BsPersonBoundingBox } from "react-icons/bs";
import { FaRegFileVideo } from "react-icons/fa";
import EventDashboardSidebar from "@/components/trigger/experience-page/event/layout/event-dashboard-sidebar";
import EventDashboardBoxPlaceholder from "@/components/trigger/experience-page/event/box/event-dashboard-box-placeholder";
import Masonry from "react-masonry-css";
import { IoMdCloudUpload } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
import CountUp from "react-countup";
import PotraitMockup from "@/components/trigger/experience-page/event/other/potrait-mockup";
import EventDashboardBoxIcon from "@/components/trigger/experience-page/event/box/event-dashboard-box-icon";
import EventDashboardLineChart from "@/components/trigger/experience-page/event/chart/event-dashboard-line-chart";
import { VIDEOACTOR_DATA } from "@/data/experience/work-exp-data";
import EventDashboardBoxLogo from "@/components/trigger/experience-page/event/box/event-dashboard-box-logo";
import EventDashboardBarChart from "@/components/trigger/experience-page/event/chart/event-dashboard-bar-chart";
interface VideoEditorEventDashboardSectionProps {
  experience: Experience;
}

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
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
        "absolute flex flex-col pt-8 px-5",
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
            textColor="text-workTextPrimary"
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
            Icon={<IoMdCloudUpload size={50} className="text-white" />}
            title={"Published Videos"}
            titleColor="text-white"
            Value={
              <div className="flex flex-row gap-x-3 items-center">
                <span className="text-4xl text-white font-bold">
                  <CountUp start={0} end={6} duration={2} delay={0.5} />
                </span>
                <span className="text-3xl text-white font-thin">videos</span>
              </div>
            }
          />
        </EventDashboardBoxPlaceholder>
        <EventDashboardBoxPlaceholder
          classname="w-full"
          backgroundColor="bg-workSecondary"
        >
          <EventDashboardBoxIcon
            Icon={<FaEye size={50} className="text-black" />}
            title={"Youtube Views"}
            titleColor="text-black"
            Value={
              <div className="w-[200px] relative h-[100px]">
                <EventDashboardLineChart
                  width={200}
                  height={100}
                  data={VIDEOACTOR_DATA}
                  dataKey={["line1"]}
                  axisColor="#000000"
                  lineColor="#000000"
                />
              </div>
            }
          />
        </EventDashboardBoxPlaceholder>
        <EventDashboardBoxPlaceholder
          classname={twMerge("w-[225px] h-[400px]")}
        >
          <PotraitMockup source="/video/work-exp/video-actor/video-1.mp4" />
        </EventDashboardBoxPlaceholder>

        <EventDashboardBoxPlaceholder
          classname={twMerge("w-[225px] h-[400px]")}
        >
          <PotraitMockup source="/video/work-exp/video-actor/video-2.mp4" />
        </EventDashboardBoxPlaceholder>
        <EventDashboardBoxPlaceholder
          classname="w-full"
          backgroundColor="bg-workLogo"
        >
          <EventDashboardBoxLogo name="Inspiratips" />
        </EventDashboardBoxPlaceholder>
        <EventDashboardBoxPlaceholder
          classname="w-full"
          backgroundColor="bg-white"
        >
          <EventDashboardBoxIcon
            Icon={<RiTeamFill size={50} className="text-black" />}
            titleColor="text-black"
            Value={
              <div className="w-[200px] relative h-[100px]">
                <EventDashboardBarChart
                  axisColor="#000000"
                  data={VIDEOACTOR_DATA}
                  dataKey={["line1"]}
                  height={200}
                  barColor="#000000"
                  width={100}
                />
              </div>
            }
            title="Inspiratips Subscribers"
          />
        </EventDashboardBoxPlaceholder>
      </Masonry>
    </div>
  );
};

export default VideoEditorEventDashboardSection;
